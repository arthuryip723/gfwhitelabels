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
        expect($('#campaignList .one_block .bottom_pr:eq(6)').html()).to.equal('<p>Price per share: $2.00</p><p>Number of shares: 125,000</p>');
        expect($('#campaignList .one_block .place').html()).to.equal('<i class="fa fa-map-marker"></i>New York NY');
        expect($('#campaignList .one_block .description').html()).to.equal('<p>about us for BSX</p>');
        expect($('#campaignList .one_block .progress_bar_container .left_text').html()).to.equal('0 % Funded');
        expect($('#campaignList .one_block .progress_bar_container .right_text').html()).to.equal('<b>$0 </b>of $250,000');
        expect($('#campaignList .one_block .more_inform .small_text').html()).to.equal('<p>tagline for BSX</p>');
        expect($('#campaignList .one_block .more_inform .title').html()).to.equal('<h3>Valuation: $2,000,000</h3>');
        expect($('#campaignList .one_block > .title h3').html()).to.equal('BSX LVL Hydration Band / this is a test for company name');
        expect($('#campaignList .one_block .bottom_text .left_desc').html()).to.equal('<b>Security:</b>Common Equity');
        expect($('#campaignList .one_block .bottom_text .right_desc').html()).to.equal('<b>Industry: </b>Lorem ipsum');
        expect(ajaxStub.called).eq.true;
        ajaxStub.restore();
    }),
    it('Campaign Detail', function() {
        // Check that $.ajax.get was called
        // Check that we have a show right data For both security types
        const stub = $.ajax;
        new routes.detail();
        stub.called.eq.true;
    })
})
