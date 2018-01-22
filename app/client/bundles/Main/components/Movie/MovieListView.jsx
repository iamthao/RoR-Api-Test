import React from 'react';
import { connect } from 'react-redux';

import {
    fetchNewListMovie, fetchListMovieLazyLoad
} from '../../actions/Movie/listMovieAction';

import MovieItemView from './MovieItemView';

class MovieList extends React.Component {
    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleOnScroll);
        this.props.dispatch(fetchNewListMovie());
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleOnScroll);
    };

    shouldComponentUpdate(nextProps) {
        return this.props.listMovieReducer !== nextProps.listMovieReducer;
    }

    handleOnScroll = () => {
        var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        var scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
        var clientHeight = document.documentElement.clientHeight || window.innerHeight;
        var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

        if (scrolledToBottom) {
            if (this.props.listMovieReducer.current_page < this.props.listMovieReducer.total_page) {
                this.props.dispatch(fetchListMovieLazyLoad())
            }
        }
    }

    render() {
        let loading = null;
        if (this.props.listMovieReducer.is_loading) {
            loading = <div className="row" style={{ margin: '15px 0' }}>
                <div className="col-xs-12 text-align-center">
                    <img height="30px" src="/images/loading.gif" />
                </div>
            </div>
        }

        return (
            <div className="container">
                <div className="row" style={{ marginBottom: '10px' }}>
                    <div className="col-xs-12">
                        <div className="list-movie-title">
                            <strong>Your Movie</strong>
                        </div>
                    </div>
                </div>
                <div id="movies" className="row">
                    {this.props.listMovieReducer.data.map((value, index) =>
                        <MovieItemView value={value} key={index} />
                    )}
                </div>
                {loading}
            </div>
        );
    }
}

const MovieListView = connect((state) => {
    return state;
})(MovieList);

export default MovieListView;
