import React from 'react';
import Grid from '../Grid'; 
import HeroSection from '../HeroSection';
import InfoSection from '../InfoSection';
import { homeObjOne,homeObjTwo, homeObjThree } from '../InfoSection/Data';
import { OwnershipTransferList } from '../OwnershipTransferList';


const Home = () => {
    return (
        <>
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Grid />
            <InfoSection {...homeObjThree} />
            <OwnershipTransferList />
        </>
    );
};

export default Home;
