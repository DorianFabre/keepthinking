import React from 'react';
import Text from '../Text/Text.json';

const { 
    text: [{
        newsletter,
        contact,
        pressRooms,
        copyright,
        privacy,
        terms,
        cookie
    }]} = Text;

const footer = () => {
    return (
        <footer>
            <nav id="footerTopNav">
                <ul>
                    <li className="dummyLink">{newsletter}</li>
                    <li className="dummyLink">{contact}</li>
                    <li className="dummyLink">{pressRooms}</li>
                    <li className="floatRight">
                        <img className="dummyLink2" src={process.env.PUBLIC_URL + './Images/facebook.png'} alt="FaceBook" width="24" height="26" />
                        <img className="dummyLink2" src={process.env.PUBLIC_URL + './Images/twitter.png'} alt="Twitter" width="24" height="26" />
                        <img className="dummyLink2" src={process.env.PUBLIC_URL + './Images/youtube.png'} alt="youTube" width="24" height="26" />
                    </li>
                </ul>
            </nav>
            <p dangerouslySetInnerHTML={{__html: Text.footer[0]}}></p>
            <nav id="footerBottomNav">
                <ul>
                    <li>{copyright}</li>
                    <li className="floatRight dummyLink">{privacy}</li>
                    <li className="floatRight dummyLink">{terms}</li>
                    <li className="floatRight dummyLink">{cookie}</li>
                </ul>
            </nav>
        </footer>
    );
}

export default footer;