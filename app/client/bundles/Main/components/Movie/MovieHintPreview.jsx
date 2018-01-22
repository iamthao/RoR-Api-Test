import React from 'react';

class MovieHintPreview extends React.Component {
    shouldComponentUpdate(nextProps) {
        return this.props.value !== nextProps.value
    }
    render() {
        let item = this.props.value;

        let hitPreview = null;
        if (item.type_of === 1) {
            hitPreview = <div className='col-md-8 col-xs-12' id="video-react">

                <hr />
            </div>
        }
        else if (item.type_of === 2) {
            hitPreview = <div className='col-md-12' id="view-vocabulary-hint">
                <b>Mean of vocabulary:</b> <br /> <i>{item.hint}</i> <br />
                <hr />
            </div>
        }


        return (<div>{hitPreview}</div>);
    }
}

export default MovieHintPreview;
