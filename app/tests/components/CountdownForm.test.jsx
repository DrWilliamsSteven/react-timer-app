var $ = require("jquery")
var React = require("react")
var ReactDOM = require("react-dom")
var expect = require("expect")
var TestUtils = require("react-addons-test-utils")
import { shallow, mount } from 'enzyme';
//import sinon from 'sinon';

import { Button, FormGroup, FormControl } from 'react-bootstrap';
var CountdownForm = require("CountdownForm");

describe('CountdownForm', () => {
    it('should exist', () => {
        expect('CountdownForm').toExist();
    });
    /*
            it('should call onSetCountdown if valid seconds entered', () => {
                var spy = expect.createSpy();
                var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
                var $el = $(ReactDOM.findDOMNode(countdownForm));

                countdownForm.refs.seconds.value = '109'; //ReactDOM.findDOMNode(this._input).value

                // TestUtils.Simulate.submit($el.find('form'));
                TestUtils.Simulate.click($el.find('Button[type="submit"]'));

                expect(spy).toHaveBeenCalledWith(109)

            })
        


    it('should call onSetCountdown if valid seconds entered', () => {
        const spy = expect.createSpy();
        //const item = mockItem();
        const wrapper = mount(<CountdownForm onSetCountdown={spy}/>);

        //TestUtils.findRenderedComponentWithType(wrapper, FormGroup, FormControl).refs.seconds.value = '109';


        //ReactDOM.findDOMNode(wrapper.refs.seconds).value = '109';

        expect(TestUtils.findRenderedComponentWithType(wrapper, FormGroup, FormControl).refs.seconds.value).toBe('109');
        //wrapper.refs.seconds.value = '109';
        const form = wrapper.find('form')

        form.simulate('submit');
        //expect(spy).toHaveBeenCalled();
        //expect(spy).toHaveBeenCalledWith(109)
        //expect(spy).toHaveBeenCalledWith(109)
    });
    /*
         it('calls onCompleteChange handler with the right arguments when clicked', () => {
             const spy = sinon.spy();
             const item = mockItem();
             const wrapper = shallow(<ToDoItem item={item} onCompleteChange={spy} />);
             wrapper.find('.item-button').simulate('click');
             expect(spy.calledOnce).to.be.true;
             expect(spy.calledWith(item, false)).to.be.true;
         });
     */
});
