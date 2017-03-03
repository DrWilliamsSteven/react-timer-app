var React = require("react");
var ReactDOM = require("react-dom");
import { Button, FormGroup, FormControl } from 'react-bootstrap';

var CountdownForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        var strSeconds = ReactDOM.findDOMNode(this.refs.seconds).value;
        if (strSeconds.match(/^[0-9]*$/) && strSeconds.length > 0) {
            ReactDOM.findDOMNode(this.refs.seconds).value = '';
            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }
    },

    render: function() {
        return (

            <form ref='form' onSubmit={this.onFormSubmit}>
                <FormGroup controlId="formBasicText" >
                    <FormControl type="text" placeholder="Enter time in seconds" ref="seconds" />
                </FormGroup>
                <Button type='submit' bsStyle="primary" bsSize="large" block>Start!</Button>
            </form>

        );
    }
});

module.exports = CountdownForm;
