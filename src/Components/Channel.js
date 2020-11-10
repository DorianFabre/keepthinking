import React from 'react';
import Text from '../Text/Text.json';

const { 
    text: [{
        channelTitle,
        viewAll
    }]} = Text;

const channelText = Text.channel[0];

const channel = () => {
    return (
        <article id="channel">
            <h3><strong>{channelTitle}</strong></h3>
            <h3 className="floatRight dummyLink">{viewAll}</h3>
            <div className='embed-container'>
                <iframe src='https://www.youtube.com/embed/nW-SzBf1Z1k' frameBorder='0' allowFullScreen title="video"></iframe>
            </div>
            <p className="leftSide"><strong className="dummyLink">{channelText.title}</strong><br />{channelText.subtitle}</p>
            <p className="rightSide floatRight">{channelText.content}</p>
            <hr />
        </article>
    );
}

export default channel;