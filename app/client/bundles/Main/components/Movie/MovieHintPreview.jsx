import React from 'react';
import { Player, BigPlayButton, ControlBar, VolumeMenuButton } from 'video-react';

class MovieHintPreview extends React.Component {
    shouldComponentUpdate(nextProps) {
        return this.props.value !== nextProps.value
    }
    render() {
        let item = this.props.value;

        let hitPreview = null;
        if (item.type_of === 1) {
            hitPreview = <div className='col-md-12' id="video-react">
                <Player src={item.hint} autoPlay>
                    <BigPlayButton position="center" />
                    <ControlBar>
                        <VolumeMenuButton disabled />
                    </ControlBar>
                </Player>
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
