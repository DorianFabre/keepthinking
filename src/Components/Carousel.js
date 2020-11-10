import React from 'react';
import Text from '../Text/Text.json';

const carouselText = Text.carousel

const carousel = props => {
    
    const whichImage = props.whichImage;

    let carouselImages = process.env.PUBLIC_URL + './Images/Carousel1-lg.png, ' + 
        process.env.PUBLIC_URL + './Images/Carousel1-med.png, ' + 
        process.env.PUBLIC_URL + './Images/Carousel1-sml.png';
    let defaultCarouselImage = process.env.PUBLIC_URL + './Images/Carousel1-sml.png';
    let selectedButton0 = '';
    let selectedButton1 = '';
    let selectedButton2 = '';
    let selectedButton3 = '';

    switch (whichImage) {
        case 1:
            carouselImages = process.env.PUBLIC_URL + './Images/Carousel2-lg.png, ' + 
                process.env.PUBLIC_URL + './Images/Carousel2-med.png, ' + 
                process.env.PUBLIC_URL + './Images/Carousel2-sml.png';
            defaultCarouselImage = process.env.PUBLIC_URL + './Images/Carousel2-sml.png';
            selectedButton1 = "selectedButton"; break;
        case 2: 
        carouselImages = process.env.PUBLIC_URL + './Images/Carousel3-lg.png, ' + 
            process.env.PUBLIC_URL + './Images/Carousel3-med.png, ' + 
            process.env.PUBLIC_URL + './Images/Carousel3-sml.png';
        defaultCarouselImage = process.env.PUBLIC_URL + './Images/Carousel3-sml.png';
        selectedButton2 = "selectedButton"; break;
        case 3: 
        carouselImages = process.env.PUBLIC_URL + './Images/Carousel4-lg.png, ' + 
            process.env.PUBLIC_URL + './Images/Carousel4-med.png, ' + 
            process.env.PUBLIC_URL + './Images/Carousel4-sml.png';
        defaultCarouselImage = process.env.PUBLIC_URL + './Images/Carousel4-sml.png';
        selectedButton3 = "selectedButton"; break
        default: 
            carouselImages = process.env.PUBLIC_URL + './Images/Carousel1-lg.png, ' + 
                process.env.PUBLIC_URL + './Images/Carousel1-med.png, ' + 
                process.env.PUBLIC_URL + './Images/Carousel1-sml.png';
            defaultCarouselImage = process.env.PUBLIC_URL + './Images/Carousel1-sml.png';
            selectedButton0 = "selectedButton";
    }

    return (
        <article id="carousel">
            <figure>
                <img srcSet={carouselImages}
                    sizes="100%"
                    src={defaultCarouselImage}
                    alt={carouselText[whichImage].title}
                />
            </figure>
            <nav className="floatRight">
                <button onClick={() => props.changeCarouselImage(0)} id={selectedButton0} />
                <button onClick={() => props.changeCarouselImage(1)} id={selectedButton1} />
                <button onClick={() => props.changeCarouselImage(2)} id={selectedButton2} />
                <button onClick={() => props.changeCarouselImage(3)} id={selectedButton3} />
            </nav>
            <h2><strong className="dummyLink">{carouselText[whichImage].title}</strong><br />{carouselText[whichImage].subtitle}</h2>
            <hr/>
        </article>
    );
}

export default carousel;