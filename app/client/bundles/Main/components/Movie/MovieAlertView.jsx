import React from 'react';

class MovieAlertView extends React.Component {
    shouldComponentUpdate(nextProps) {
        return this.props.value !== nextProps.value
    }
    render() {
        let item = this.props.value;
        let alert_msg = null;

        if (item.type === 1) {
            alert_msg = <div  className="alert alert-danger alert-dismissable">
                <strong>Error:</strong> Please input answer.
            </div>
        }
        else if (item.type === 2) {
            alert_msg = <div  className="alert alert-danger alert-dismissable">
                <strong>Error:</strong> Answer is incorrect. You can answer late.
            </div>
        }
        else if (item.type === 3) {
            alert_msg = <div  className="alert alert-success alert-dismissable">
                <strong>Success:</strong> Answer is correct.
            </div>
        }

        return (
            <div className="col-md-12" id="movie-alert">
                {alert_msg}
            </div>);
    }
}

export default MovieAlertView;
