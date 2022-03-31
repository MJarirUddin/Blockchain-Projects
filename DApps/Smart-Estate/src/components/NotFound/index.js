import React from 'react'
import {Button} from '../ButtonElements'
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
Img, } from "./PageNotFound";
import { Link } from "react-router-dom"

const PageNotFound = ({lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description8, 
    buttonLabel, 
    img,  
    alt,
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
                          <Subtitle darkText={darkText}> {description8}</Subtitle>
                          <BtnWrap>
                          <Button 
                              smooth= {true}
                              duration= {500}
                              spy= {true}
                              exact= "true"
                              offset= {-80}
                              primary= {primary ? 1 : 0}
                              dark = {dark ? 1 : 0}
                              dark2= {dark2 ? 1 : 0}> <Link className="link" to="/"> {buttonLabel} </Link> </Button>
                              
                          </BtnWrap>
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

export default PageNotFound
