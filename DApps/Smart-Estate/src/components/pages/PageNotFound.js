import React from 'react'
import {page} from "../NotFound/Data"
import PageNotFound from '../NotFound/index'

const pageNotFound = () => {
    return (
        <>
           <PageNotFound {...page} />
        </>
    )
}

export default pageNotFound
