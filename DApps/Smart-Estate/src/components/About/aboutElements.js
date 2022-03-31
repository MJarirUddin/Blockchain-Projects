import styled from 'styled-components'

export const InfoContainer = styled.div`
color: #fff;
background-image: linear-gradient(205deg, #78dc8f, transparent);
// background: ${({lightBg}) => (lightBg ? '#78dc8f' : '#010606')};
@media screen and ( max-width: 960px){
    padding: 100px 0px;
}
`

export const InfoWrapper = styled.div`
display: grid;
 z-index: 1;
 height: 650px;
 width: 100%;
 max-width: 1100px;
 margin-right: auto;
 margin-left: auto;
 padding: 0 4px;
 justify-content: center;
`

export const InfoRow = styled.div`
// margin-bottom: -380px;
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
@media screen and ( max-width: 768px){
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
}
`

export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`

export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
`

export const TopLine = styled.p`
color: #010606;
font-size: 26px;
line-height: 16px;
font-weight: 750;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`

export const Heading = styled.h1`
margin-bottom: 14px;
font-size: 18px;
line-height: 1.1;
font-weight: 600;
color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};
@media screen and ( max-width: 480px){
font-size: 32px;
`

export const Subtitle = styled.p`
font-size: 15px !important;
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({darkText}) => (darkText ? '#010606' : '#fff' )};
`

export const BtnWrap = styled.div`
display: flex;
justfy-content: flex-start;
`

export const ImgWrap = styled.div`
max-width: 555px;
height: 100%;
`

export const Img = styled.img`
width: 70%;
margin: 0 0 10px 70px;
padding-right: 0;
`
