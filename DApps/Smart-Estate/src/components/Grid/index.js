import React from 'react'
import Icon1 from '../images/Disributed.svg'
import Icon2 from '../images/Transparency.png'
import Icon3 from '../images/immutabilty.png'

import { ServiceContainer,
ServicesH1,
ServicesWrapper,
ServicesCard,
ServicesIcon,
ServicesH2,
ServiceP
} from "./GridElements";
const Grid = () => {
    return (
        <ServiceContainer id='services'>
            <ServicesH1> Pillars of Blockchain </ServicesH1>
            <ServicesWrapper>
                
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2></ServicesH2>
                <ServiceP> Decentralization </ServiceP>
                </ServicesCard>
                
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2></ServicesH2>
                <ServiceP> Transparency </ServiceP>
                </ServicesCard>
                
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2></ServicesH2>
                <ServiceP> Immutability </ServiceP>
                </ServicesCard>

            </ServicesWrapper>
        </ServiceContainer>
            
        
    )
}

export default Grid
