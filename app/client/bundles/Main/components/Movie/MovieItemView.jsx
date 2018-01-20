import React from 'react';
import { Link } from 'react-router-dom';

class MovieItemView extends React.Component {
    shouldComponentUpdate(nextProps) {
        return this.props.value !== nextProps.value
    }
    render() {
        let item = this.props.value;
        return (<div className="col-md-4 col-sm-6 col-xs-12">
            <div className="thumbnail border-radius-none">
                <img src={item.image} alt="" />
                <div className="caption">
                    <h4><b>{item.name}</b></h4>
                    <p className="block-ellipsis">{item.description}</p>
                    <div className="row" style={{marginTop: '15px'}}>
                        <div className="col-xs-12 text-align-center">
                            <Link id="btn-start-now" className="btn btn-success" to={"/home/movie/"+ item.id}>Start now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default MovieItemView;
