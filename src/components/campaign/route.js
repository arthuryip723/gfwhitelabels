// Polyfill webpack require.ensure.
if (typeof require.ensure !== `function`) require.ensure = (d, c) => c(require);    

module.exports = Backbone.Router.extend({
  routes: {
    ':id/invest_thanks': 'investmentThankYou',
    'companies': 'list',
    ':id': 'detail',
    ':id/invest': 'investment',
  },

  investmentThankYou(id) {
    require.ensure([], () => {
      const View = require('./views.js');
      let i = new View.investmentThankYou({
        el: '#content',
        model: {
          id: 19,
          amount: 10000,
          transaction_id: '1234567',
          amount_of_shares: 123,
          perk: 'Perk Content',
          security: 'Investment Terms Content'
        },
        company: {
          id: 78,
          name: 'Company Name',
        },
      });
      i.render();
      app.hideLoading();
      // const a1 = api.makeCacheRequest(investmentServer + '/' + id).then((data) => {

      // });
    });
  },

  list() {
    require.ensure([], () => {
      const View = require('./views.js');

      api.makeCacheRequest(raiseCapitalServer).then((data) => {
        let i = new View.list({
          el: '#content',
          collection: data.data,
        });
        $('body').scrollTo();
        i.render();
        app.hideLoading();
      });

    });
  },

  detail(id) {
    require.ensure([], () => {
      const View = require('./views.js');

      api.makeCacheRequest(raiseCapitalServer + "/" + id).
        then((modelData) => {
          let i = new View.detail({
            el: '#content',
            model: modelData,
          });
          i.render();
          if(location.hash && $(location.hash).length) {
              setTimeout(function(){$(location.hash).scrollTo(65);}, 100);
          } else {
              $('#content').scrollTo();
          }
          app.hideLoading();
      });
    })
  },

  investment(id) {
    require.ensure([], () => {
      if (!app.user.is_anonymous()) {
        const View = require('./views.js');
        let investmentR = api.makeCacheRequest(investmentServer + '/', 'OPTIONS');
        let companyR = api.makeCacheRequest(raiseCapitalServer + '/' + id);
        let userR = api.makeCacheRequest(authServer + '/rest-auth/data');

        $.when(investmentR, companyR, userR).then((investmentMeta, companyData, userData) => {
            const i = new View.investment({
              model: companyData[0],
              user: userData[0],
              fields: investmentMeta[0].fields,
            });
            i.render();
            $('#content').scrollTo();
            app.hideLoading();
          })
        } else {
          app.routers.navigate(
            '/account/login', {trigger: true, replace: true}
          );
        }

        // if (!window.pdfMake) {
        //   ['/js/pdfmake.js', '/js/vfs_fonts.js'].forEach( (uri) => {
        //     let script = document.createElement('script');
        //     script.type = 'text/javascript';
        //     script.src = uri;
        //     $('head').append(script);
        //   });
        // }
    });
  },
});
