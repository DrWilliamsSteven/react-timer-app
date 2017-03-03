var React = require("react");
import { Button, FormGroup, FormControl } from 'react-bootstrap';

var Controls = React.createClass({
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired
    },
    render: function() {
        var { countdownStatus } = this.props;
        var renderStartStopButton = () => {
            if (countdownStatus === 'started') {
                return <Button bsStyle="default" bsSize="large">Pause</Button>
            } else if (countdownStatus === 'paused') {
                return <Button bsStyle="primary" bsSize="large">Start</Button>
            }
        }

        return (
            <div className='controls'> 
                {renderStartStopButton()}
                <Button bsStyle="warning" bsSize="large">Clear</Button>
            </div>

        )
    }
});

module.exports = Controls;
