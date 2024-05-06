import React from "react";
import airbnb from '../assets/used/airbnb.svg';
import facebook from '../assets/used/facebook.svg';
import google from '../assets/used/google.svg';
import grab from '../assets/used/grab-logo.svg';
import netflix from '../assets/used/netflix.svg';
import amazon from '../assets/used/amazon.svg';

function SecondBlock(){
    return(
    <>
        <div className="flex flex-col items-center m-16 md:mt-60 ">
        <h3 className="font-semibold text-dusty text-4xl">Наши партнеры</h3>
      </div>
        
      <div className="flex flex-wrap justify-center m-20 p-8 gap-24">
        <img src={google} alt="google" className="partner-img"></img>
        <img src={airbnb} alt="airbnb" className="partner-img"></img>
        <img src={facebook} alt="facebook" className="partner-img"></img>
        <img src={grab} alt="grab" className="partner-img"></img>
        <img src={netflix} alt="netflix" className="partner-img"></img>
        <img src={amazon} alt="amazon" className="partner-img"></img>
      </div>
    </>
    )
    
}

export default SecondBlock;
