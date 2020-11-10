import React from 'react';
import Text from '../Text/Text.json';

const { 
    text: [{
        artistsTitle,
        viewAll
    }]} = Text;

const artistsText = Text.artists;

const artists = () => {
    return (
        <article id="artists">
            <h3><strong>{artistsTitle}</strong></h3>
            <h3 className="floatRight dummyLink">{viewAll}</h3>
            <ul>
                {artistsText.map((artist, index) => (
                    <li key={index} className="dummyLink">{artist}</li>
                ))}
            </ul>
            <img 
                src={process.env.PUBLIC_URL + './Images/artists1.png'} 
                alt={artistsTitle} 
                width="270" 
                height="270"
                className="" />
            <hr />
        </article>
    );
}

/* // Divide 
const n = 3;
const result = [[], [], []] ;
const numRows = Math.ceil(artistsText.length / 3);
for (let line = 0; line < n; line++) {
  for (let i = 0; i < numRows; i++) {
    const value = artistsText[i + line * numRows]
    if (!value) continue
    result[line].push(value)
  }
}

const artists = () => {
    return (
        <article id="artists">
            <h3><strong>{artistsTitle}</strong></h3>
            <h3 className="floatRight dummyLink">{viewAll}</h3>
            {result.map((artistList, index1) => (
                <ul key={index1}>
                    {artistList.map((artist, index2) => (
                        <li key={index2} className="dummyLink">{artist}</li>
                    ))}
                </ul>
            ))}
            <img 
                src={process.env.PUBLIC_URL + './Images/artists1.png'} 
                alt={artistsTitle} 
                width="270" 
                height="270"
                className="" />
            <hr />
        </article>
    );
} */

export default artists;