import React from 'react';
import Text from '../Text/Text.json';

const { 
    text: [{
        newsTitle,
        viewAll
    }]} = Text;

const newsEventsText = Text.newsEvents;

const newsEvents = props => {
    return (
        <article id="newsEvents">
            <h3><strong>{newsTitle}</strong></h3>
            <h3 className="floatRight dummyLink">{viewAll}</h3>
            <div className="newsGrid">
                <div className="newsItem">
                    <img src={process.env.PUBLIC_URL + './Images/newsEvents1.png'} alt={newsTitle} width="100%" />
                    <p><strong className="dummyLink">{newsEventsText[0].title}</strong><br />{newsEventsText[0].date}</p>
                    <p>{newsEventsText[0].content}</p>
                </div>
                <div className="newsItem">
                    <img src={process.env.PUBLIC_URL + './Images/newsEvents2.png'} alt={newsTitle} width="100%" />
                    <p><strong className="dummyLink">{newsEventsText[1].title}</strong><br />{newsEventsText[1].date}</p>
                    <p>{newsEventsText[1].content}</p>
                </div>
                <div className="newsItem">
                    <img src={process.env.PUBLIC_URL + './Images/newsEvents3.png'} alt={newsTitle} width="100%" />
                    <p><strong className="dummyLink">{newsEventsText[2].title}</strong><br />{newsEventsText[2].date}</p>
                    <p>{newsEventsText[2].content}</p>
                </div>
            </div>
            <hr/>
        </article>
    );
}

export default newsEvents;