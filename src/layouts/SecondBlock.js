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
        <div className="flex flex-col items-center m-48">
        <h3 className="font-semibold text-dusty text-4xl">Наши партнеры</h3>
      </div>
        
      <div className="flex flex-col items-center justify-center m-28 p-8 gap-24 lg:flex-row">
        <img src={google} alt="google" className=""></img>
        <img src={airbnb} alt="airbnb" className=""></img>
        <img src={facebook} alt="facebook" className=""></img>
        <img src={grab} alt="grab" className=""></img>
        <img src={netflix} alt="netflix" className=""></img>
        <img src={amazon} alt="amazon" className=""></img>
      </div>
    </>
    )
    
}
export default SecondBlock