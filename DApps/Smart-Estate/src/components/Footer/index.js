import React from 'react'
import icon1 from '../images/IU.png'
import{FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import { FooterContainer,
FooterWrap,
FooterLinksContainer,
FooterLinksWrapper,
FooterLinksItems,
FooterLinkTitle,
FooterLinkTitle1,
FooterLink,
SocialMedia,
SocialMediaWrap,
SocialLogo,
WebsiteRights,
SocialIcon,
SocialIconLink 
} from "./FooterElements";

const Footer = () => {
    return (
        <>
           <FooterContainer>
               <FooterWrap>
                   <FooterLinksContainer>
                       <FooterLinksWrapper>
                           <FooterLinksItems>
                               <FooterLinkTitle> <img width="130px" src={icon1}/> </FooterLinkTitle>
                               </FooterLinksItems>

                           <FooterLinksItems>
                           <FooterLinkTitle> Quick Links </FooterLinkTitle>
                                  <FooterLink to=""> Home </FooterLink>
                                   <FooterLink to="/about"> About </FooterLink>
                                   <FooterLink to="/RegisterProperty"> Register Property </FooterLink>
                                   <FooterLink to="/commercial"> Commercial </FooterLink>
                                   <FooterLink to="/residential"> Residential </FooterLink>
                           </FooterLinksItems>

                       </FooterLinksWrapper>
                       
                       <FooterLinksWrapper>
                       <FooterLinksItems>
                           <FooterLinkTitle> About Us </FooterLinkTitle>
                                   <FooterLinkTitle1 to="/signin"> We are student of <b>Iqra University</b>. Our project name is Smart Estate which is based on blockchain. </FooterLinkTitle1>
                           </FooterLinksItems>

                           <FooterLinksItems>
                           <FooterLinkTitle> Github  </FooterLinkTitle>
                                 <a className="GHLink" href="https://github.com/syedasimrazanaqvi"> Asim Raza </a> 
                                  <a className="GHLink" href="https://github.com/kumailnaqvi354"> Kumail Naqvi </a>
                                  <a className="GHLink" href="https://github.com/Haseeb96Ahmed"> Haseeb Ahmed </a>
                                  <a className="GHLink" href="https://github.com/sherryjee">Syed Muhammad Shaheryar</a>
                           </FooterLinksItems>
                           </FooterLinksWrapper>

                   </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            {/* <SocialLogo to='/'>
                                Smart Estate
                            </SocialLogo> */}
                            <WebsiteRights> Smart Estate © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                            <SocialIcon>
                                <SocialIconLink className='link' href='https://www.facebook.com' target="_blank" aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink className='link' href='https://www.instagram.com' target="_blank" aria-label="Instagram">
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink className='link' href='https://www.youtube.com' target="_blank" aria-label="Youtube">
                                    <FaYoutube />
                                </SocialIconLink>
                                <SocialIconLink className='link' href='https://twitter.com' target="_blank" aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink className='link' href='https://www.linkedin.com' target="_blank" aria-label="LinkedIn">
                                    <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcon>
                        </SocialMediaWrap>
                    </SocialMedia>
               </FooterWrap>
               </FooterContainer> 
        </>
    )
}

export default Footer
