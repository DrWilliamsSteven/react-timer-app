var $ = require("jquery")
var React = require("react")
var ReactDOM = require("react-dom")
var expect = require("expect")
var TestUtils = require("react-addons-test-utils")

var Controls = require("Controls");

describe('Controls', () => {
    it('should exist', () => {
        expect('Controls').toExist();
    });

    describe('render', () => {
        it('should render pause when started', () => {
            const wrapper = TestUtils.renderIntoDocument(<Controls countdownStatus='started'/>);
            var $el = $(ReactDOM.findDOMNode(wrapper));
            var $pauseButton = $el.find('Button:contains(Pause)');

            expect($pauseButton.length).toBe(1);
        });

        it('should render start when paused', () => {
            const wrapper = TestUtils.renderIntoDocument(<Controls countdownStatus='paused'/>);
            var $el = $(ReactDOM.findDOMNode(wrapper));
            var $startButton = $el.find('Button:contains(Start)');

            expect($startButton.length).toBe(1);
        });

    });

});
