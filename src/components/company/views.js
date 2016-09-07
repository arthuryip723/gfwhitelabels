module.exports = {
    createOrUpdate: Backbone.View.extend({
        template: require('templates/companyCreateOrUpdate.pug'),
        events: {
            'submit form': 'submit',
        },
        initialize: function(options) {
            this.fields = options.fields;
            this.campaign = options.campaign;
        },

        render: function() {
            console.log('asdf', this, this.campaign);
            this.usaStates = require("helpers/usa-states");
            this.$el.html(
                this.template({
                    serverUrl: serverUrl,
                    Urls: Urls,
                    fields: this.fields,
                    values: this.model.toJSON(),
                    user: app.user.toJSON(),
                    campaign: this.campaign,
                    states: this.usaStates,
                })
            );
            return this;
        },

        getSuccessUrl: function(data) {            return '/campaign/general_information/?company_id=' + data.id;
        },

        submit: app.defaultSaveActions.submit,

    }),
};