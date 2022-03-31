import React from 'react'
import { InfoContainer,
InfoWrapper,
InfoRow,
Column1,
Column2,
TextWrapper,
TopLine,
Heading,
Subtitle,
BtnWrap,
ImgWrap,
Img,
Img1 } from "./aboutElements"

const Ebout = ({lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description4, 
    description5,
    img, 
    img1, 
    alt,
    alt1,
    primary,
    dark,
    dark2}
    ) => {
    return (
        <>
            
          <InfoContainer lightBg={lightBg} id={id}>
              <InfoWrapper>
                  <InfoRow imgStart={imgStart}>
                      <Column1>
                      <TextWrapper>
                          <TopLine>  {topLine}  </TopLine>
                          <Heading lightText={lightText}>{headline}</Heading>
                          <Subtitle darkText={darkText}> {description4}</Subtitle>
                          <Subtitle darkText={darkText}> {description5}</Subtitle>
                          </TextWrapper>
                      </Column1>

                      <Column2>
                      <ImgWrap>
                        <Img src={img} alt={alt} />
                      </ImgWrap>
                      </Column2>
                      
                  </InfoRow>
              </InfoWrapper>
              </InfoContainer>  
        </>
    )
}

export default Ebout
