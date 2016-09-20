var routes       = require('./route.js');

var chai     = require('chai');
var sinon    = require('sinon');
var should   = chai.should();
var expect   = chai.expect;
var fs       = require('fs');
var request  = require('request');


describe('Campaign Component', function() {
    it('Campaign List' , function() {
        // Check that $.ajax.get was called
        // Check that we have a show right data For both security types
        const data = require('./fixtures/list.json');
        const ajaxStub = sinon.stub(Backbone, "sync").yieldsTo(
          'success',
          data,
          null
        );
        const r = new routes();
        r.list();
        // expect($('#campaignList .one_block .bottom_pr:eq(6)').html()).to.equal('<p>Price per share: $2.00</p><p>Number of shares: 125,000</p>');
        // expect($('#campaignList .one_block .bottom_pr:eq(6)').html()).to.equal('<p>Price per share: $0.00</p><p>Number of shares: ∞</p>');
        // expect($('#campaignList .one_block .place').html()).to.equal('<i class="fa fa-map-marker"></i>New York NY');
        // expect($('#campaignList .one_block .description').html()).to.equal('<p>about us for BSX</p>');
        // expect($('#campaignList .one_block .progress_bar_container .left_text').html()).to.equal('0 % Funded');
        // expect($('#campaignList .one_block .progress_bar_container .right_text').html()).to.contain('<b>$0 </b>of $250,000');
        // expect($('#campaignList .one_block .more_inform .small_text').html()).to.equal('<p>tagline for BSX</p>');
        // expect($('#campaignList .one_block .more_inform .title').html()).to.equal('<h3>Valuation: $2,000,000</h3>');
        // expect($('#campaignList .one_block > .title h3').html()).to.equal('BSX LVL Hydration Band / this is a test for company name');
        // expect($('#campaignList .one_block .bottom_text .left_desc').html()).to.equal('<b>Security:</b>Common Equity');
        // expect($('#campaignList .one_block .bottom_text .right_desc').html()).to.equal('<b>Industry: </b>Lorem ipsum');

        // tests about campaign list
        // get the common equity from data
        // console.log($('#campaignList').html());
        let data1 = data[0];
        // console.log(data1);

        // expect($('#campaignList .one_block .bottom_pr:eq(0)').html()).to.equal('$' + data1.price_per_share);
        expect($('#campaignList .one_block .bottom_pr:eq(0)').html()).to.contain('$' + data1.price_per_share);
        expect($('#campaignList .one_block .bottom_pr:eq(0)').html()).to.contain('125,000');
        expect($('#campaignList .one_block .place').html()).to.contain('New York NY');
        expect($('#campaignList .one_block .description').html()).to.contain(data[0].company.description);
        // expect($('#campaignList .one_block .bottom_pr:eq(0)').html()).to.equal('$');

        expect(ajaxStub.called).eq.true;
        ajaxStub.restore();
    }),
    it('Campaign Detail', function() {
        // Check that $.ajax.get was called
        // Check that we have a show right data For both security types
        const stub = $.ajax;
        new routes.detail();
        stub.called.eq.true;
        // expect($('top-info-wrap-item').html()).to.contain('Common Equity');
        // expect($('top-info-wrap-item').html()).to.contain('$0');
        // expect($('top-info-wrap-item').html()).to.contain('120');

        // expect($('.campaigndetail .container').html()).to.contain('fsafdsa');
        // expect($('.campaigndetail .sity-detail').html()).to.contain('Atlantic City, PR');
        // expect($('.campaigndetail .date-detail').html()).to.contain('Founded in Nov 1983');

        // expect($('.campaigndetail .progress_bar_container').html()).to.contain('Less than 20% ');

        // expect($('.campaigndetail .right-block-investors').html()).to.contain('$80,000 - $60,000');
        // expect($('.campaigndetail .right-block-investors').html()).to.contain('$250');

        // expect($('#about').html()).to.contain('$250');

        // // Test about company
        // expect($('.about-detail').html()).to.contain('ABOUT WHATEVER COMPANY');
        // expect($('.about-detail').html()).to.contain('asdfas');
        // // Test why you should invest
        // expect($('.about-detail').html()).to.contain('We started Hawaiian Ola back in 2010 and have launched 16 different natural energy drinks made with local ingredients. Since then, we’ve grown Hawaiian Ola into a staple on the grocery store shelves, with 100% year-over-year growth for five years. aaa');
        // // Test how we intend to make money
        // expect($('.about-detail').html()).to.contain(`“More than half of the tropical fruit grown in Hawai'i falls to the ground and never makes it to market. Meanwhile, the US demand for cider has tripled in the last 4 years and 100% of the cider consumed in Hawai'i is imported. Our conclusion: its time Hawai'i had its own cidery to turn the state's abundance of fruit into more dollars in the pockets of local farmers—and who better to do it than the motivated team of experienced beverage entrepreneurs, who started Hawaiian Ola. bbb`);
        // // Test why we are raising capital, and what we'll do with it.
        // expect($('.about-detail').html()).to.contain(`Hawaiian Ola sits on the shelves of Whole Foods, Safeway, and 7-Eleven in Hawaii and many other retailers throughout the state and mainland US - these are the 422 partners we can use to get Hawaii Cider on the shelves. The craft beer industry is 10x the size of the energy drink market. So, we’re building a hard cider company of our own: Hawaii’s first locally produced cider, made from organic, tropical fruits grown by Hawaiʻi farmers. ccc`);

        // // Test additional information
        // for (let key in data.additional_info) {
        //     expect($('.about-detail').html()).to.contain(data.additional_info[key].title);
        //     expect($('.about-detail').html()).to.contain(data.additional_info[key].body);
        // }

        // let members = data.members;
        // for (let i = 0; i < members.length; i++) {
        //     let member = members[i];
        //     expect($('#members').html()).to.contain(member.first_name);
        //     expect($('#members').html()).to.contain(member.last_name);
        //     expect($('#members').html()).to.contain(member.title);
        //     expect($('#members').html()).to.contain('href="' + member.facebook + '"');
        //     expect($('#members').html()).to.contain('href="' + member.linkedin + '"');
        //     expect($('#members').html()).to.contain(member.bio);
        //     expect($('#members').html()).to.contain(member.college);
        //     expect($('#members').html()).to.contain(member.growup);
        //     expect($('#members').html()).to.contain(member.state);
        // }

        // for (let key in data.press) {
        //     expect($('#members').html()).to.contain(data.press[key].headline);
        //     // also check the link
        //     expect($('#members').html()).to.contain(data.press[key].link);
        // }

        // expect($('.overview').html()).to.contain('$100');
        // expect($('.overview').html()).to.contain('500');
        // expect($('.overview').html()).to.contain('$10,000,000');
        // expect($('.overview').html()).to.contain('$100.00');
        // expect($('.overview').html()).to.contain('10,000');


    })
})
