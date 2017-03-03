var $ = require("jquery")
var React = require("react")
var ReactDOM = require("react-dom")
var expect = require("expect")
var TestUtils = require("react-addons-test-utils")
import { shallow, mount } from 'enzyme';

var Countdown = require("Countdown");

describe('Countdown', () => {
    it('should exist', () => {
        expect('Countdown').toExist();
    });

    describe('handleSetCountdown', () => {
        it('should set state to started and countdown', (done) => {
            const wrapper = TestUtils.renderIntoDocument(<Countdown/>);
            wrapper.handleSetCountdown(10);

            expect(wrapper.state.count).toBe(10);
            expect(wrapper.state.countdownStatus).toBe('started');

            setTimeout(() => {
                expect(wrapper.state.count).toBe(9);
                done();
            }, 1001)
        });

        it('should pause countdown on pause status', (done) => {
            const wrapper = TestUtils.renderIntoDocument(<Countdown/>);
            wrapper.handleSetCountdown(3);
            wrapper.handleStatusChange('paused');

            setTimeout(() => {
                expect(wrapper.state.count).toBe(3);
                expect(wrapper.state.countdownStatus).toBe('paused');
                done();
            }, 1001)
        });

        it('should reset countdown on stopped status', (done) => {
            const wrapper = TestUtils.renderIntoDocument(<Countdown/>);
            wrapper.handleSetCountdown(3);
            wrapper.handleStatusChange('stopped');

            setTimeout(() => {
                expect(wrapper.state.count).toBe(0);
                expect(wrapper.state.countdownStatus).toBe('stopped');
                done();
            }, 1001)
        });


    });

    describe('setTimer', () => {
        it('should not set count to negative value', (done) => {
            const wrapper = TestUtils.renderIntoDocument(<Countdown/>);
            wrapper.handleSetCountdown(1);

            setTimeout(() => {
                expect(wrapper.state.count).toBe(0);
                done();
            }, 3001)

        });
    });




});
