import React from 'react';

class MovieInputAnswerView extends React.Component {
    shouldComponentUpdate(nextProps) {
        return this.props.value !== nextProps.value
    }
    render() {
        return (
            <div >
                <div className={movieProps.alert_msg_type === 0 ||
                    movieProps.alert_msg_type === 1 ||
                    movieProps.alert_msg_type === 2 ? 'col-md-12' : 'hidden'}>
                    <button onClick={() => this.props.dispatch(onClickCheckAnswer())} type="button" className="btn btn-success">
                        <i className="fa fa-check"></i> Check Answer
                </button>
                    &nbsp;
                <button onClick={() => this.props.dispatch(onClickViewResult())} type="button" className="btn btn-info">
                        <i className="fa fa-eye"></i> View Result
                </button>
                </div>
                <div className={movieProps.alert_msg_type === 3 ||
                    movieProps.alert_msg_type === 4 ? 'col-md-12' : 'hidden'}>
                    <button onClick={() => this.props.dispatch(fetchNewMovie())} type="button" className="btn btn-default">
                        Next <i className="fa fa-forward"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default MovieInputAnswerView;