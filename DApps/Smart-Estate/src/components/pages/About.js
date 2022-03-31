import React from 'react';
// import OfferStatus from '../OfferStatus';
import DeveloperSection from '../About/DeveloperSection'
import {AboutSmartEstate} from "../About/Data"

import Ebout from '../About'

const about = () => {
    return (
      <>
      <Ebout {...AboutSmartEstate}/>
      <DeveloperSection/>
      </>
    );
  }
  
  export default about;