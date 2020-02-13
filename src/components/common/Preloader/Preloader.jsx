import React from 'react'
import preloader from '../../../assets/preloader.svg'


const Preloader = (props) =>{
    return(
        <img src={preloader} alt="" style={{width:'100px',height:'100px'}} /> 
    )
}

export default Preloader