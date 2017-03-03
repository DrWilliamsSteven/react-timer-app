var React = require("react");
import { Button, FormGroup, FormControl } from 'react-bootstrap';

var Controls = React.createClass({
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },
    onStatusChange: function(newStatus) {
        return () => { this.props.onStatusChange(newStatus); }

    },

    render: function() {
        var { countdownStatus } = this.props;
        var renderStartStopButton = () => {
            if (countdownStatus === 'started') {
                return <Button bsStyle="default" bsSize="large" onClick={this.onStatusChange('paused')}>Pause</Button>
            } else if (countdownStatus === 'paused') {
                return <Button bsStyle="primary" bsSize="large" onClick={this.onStatusChange('started')}>Start</Button>
            }
        }

        return (
            <div className='controls'> 
                {renderStartStopButton()}
                <Button bsStyle="warning" bsSize="large" onClick={this.onStatusChange('stopped')}>Clear</Button>
            </div>

        )
    }
});

module.exports = Controls;
