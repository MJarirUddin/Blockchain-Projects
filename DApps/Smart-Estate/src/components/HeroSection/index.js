import React, { useState } from 'react';
import Video from '../video/video.mp4';
import { Button } from "../ButtonElement";
import { Link } from 'react-router-dom';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from "./HeroElements";
import { NavBtn } from '../Navbar/NavbarElemets';

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer >
            <HeroBg>

                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />

            </HeroBg>
            <HeroContent>

                <HeroH1>Where You Own and Control Your Leads
 </HeroH1>

                <HeroP>
                    Make Your Property to Digital Asset
        </HeroP>


            
                <HeroBtnWrapper>

                <Link className="Btn" to='/RegisterProperty' onMouseEnter={onHover} onMouseLeave={onHover}
                        primary='true'
                        dark='true'>  Let's Get it started {hover ? <ArrowForward /> : <ArrowRight />}</Link>

                </HeroBtnWrapper>

            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
