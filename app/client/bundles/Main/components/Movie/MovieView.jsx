import React from 'react';
import { connect } from 'react-redux';


class Movie extends React.Component {
    static propTypes = {};

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        //this.props.dispatch(fetchNewMovie(this.props.match.params.id));
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
                        <h3>Test</h3>

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

