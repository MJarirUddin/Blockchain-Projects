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
Img1 } from "./InfoElements";

const InfoSection = ({lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description, 
    description1, 
    description2, 
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
                          <Subtitle darkText={darkText}> {description}</Subtitle>
                          <Subtitle darkText={darkText}> {description1}</Subtitle>
                          <Subtitle darkText={darkText}> {description2}</Subtitle>
                          <BtnWrap>
                            
                          </BtnWrap>
                      </TextWrapper>
                      </Column1>

                      <Column2>
                      <ImgWrap>
                        <Img src={img} alt={alt} />
                        <Img1 src={img1} alt={alt1} />
                      </ImgWrap>
                      </Column2>
                  </InfoRow>
              </InfoWrapper>
              </InfoContainer>  
        </>
    )
}

export default InfoSection
