import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
    fetchNewMovie, onChangeTextAnswerInput, onClickCheckAnswer
} from '../../actions/Movie/movieAction';

import MovieAlertView from './MovieAlertView';
import MovieHintPreview from './MovieHintPreview';

class Movie extends React.Component {
    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.props.dispatch(fetchNewMovie(this.props.match.params.id));
    };

    shouldComponentUpdate(nextProps) {
        return this.props.movieReducer !== nextProps.movieReducer;
    }

    render() {
        let movieProps = this.props.movieReducer;

        return (
            <div className="container" >
                <div className="row">
                    <div className="col-md-12">
                        <h3>{movieProps.name}</h3>
                    </div>
                </div>
                <div className="row" style={{ marginBottom: '10px' }}>
                    <div className="col-md-2 col-xs-0"></div>
                    <MovieHintPreview value={{ type_of: movieProps.type_of, hint: movieProps.hint }} />
                    <div className="col-md-2 col-xs-0"></div>
                </div>

                <div style={{ marginBottom: '10px' }} className={!movieProps.is_complete? 'row' : 'hidden'}>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="answer"> Input Answer:</label>
                            <input type="text" className="form-control" id="answer_input" maxLength="200"
                                value={movieProps.answer_input}
                                onChange={(e) => this.props.dispatch(onChangeTextAnswerInput(e.target.value))}
                            />
                        </div>
                    </div>
                    <div className='col-md-12 text-align-center'>
                        <button id="btn-check-answer" onClick={() => this.props.dispatch(onClickCheckAnswer())} type="button" className="btn btn-success">
                            <i className="fa fa-check"></i> Check Answer
                        </button>
                    </div>
                </div>
                <div style={{ marginBottom: '10px' }} className={movieProps.is_complete? 'row' : 'hidden'}>
                    <div className='col-md-12'>
                        <div  className="alert alert-info alert-dismissable">
                            <strong>Result:</strong> {movieProps.answer}
                        </div>
                    </div>
                </div>

                <div style={{ marginBottom: '10px' }} className={movieProps.is_complete? 'row' : 'hidden'}>
                    <div className='col-md-12 text-align-center'>
                        <button id="btn-next-sentence" onClick={() => this.props.dispatch(fetchNewMovie(this.props.match.params.id))} type="button"
                            className="btn btn-primary">
                            Next  <i className="fa fa-arrow-circle-right"></i>
                        </button>
                    </div>
                </div>
                <div className="row text-align-center">
                    <MovieAlertView value={{ type: movieProps.alert_msg_type }} />
                </div>
                <div className="row">
                    <div className='col-md-12 text-align-center' >
                        <hr/>
                        <Link id="btn-go-to-your-movie" className="btn btn-info" to="/">Go to your movie <i className="fa fa-arrow-circle-right"></i></Link>
                    </div>
                </div>
            </div>
        );
    }
}

const MovieView = connect((state) => {
    return state;
})(Movie);

export default MovieView;

