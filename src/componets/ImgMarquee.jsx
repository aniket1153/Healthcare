import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../assets/ImgLogo1.png"
import img2 from "../assets/ImgLogo2.png"
import img3 from "../assets/ImgLogo3.png"
import img4 from "../assets/ImgLogo4.png"
import img5 from "../assets/ImgLogo5.png"

const ImgMarquee = () => {
  return (
    <div className="">
<div className="py-4">

      <Marquee speed={120} gradient={false}>
        <div className="mx-20 text-lg font-semibold">

            <img className="h-15" src={img1} alt="" />
        </div>
        <div className="mx-20 text-lg font-semibold">
            <img src={img2} alt="" className="h-15"/>
        </div>
        <div className="mx-20 text-lg font-semibold">
            <img src={img3} alt="" className="h-15"/>
        </div>
        <div className="mx-20 text-lg font-semibold">
            <img src={img4} alt="" className="h-15"/>
        </div>
        <div className="mx-20 text-lg font-semibold">
            <img src={img5} alt="" className="h-15"/>
        </div>
      <div className="mx-20 text-lg font-semibold">

            <img className="h-15" src={img1} alt="" />
        </div>
        <div className="mx-20 text-lg font-semibold">
            <img src={img2} alt="" className="h-15"/>
        </div>
        <div className="mx-20 text-lg font-semibold">
            <img src={img3} alt="" className="h-15"/>
        </div>
        <div className="mx-20 text-lg font-semibold">
            <img src={img4} alt="" className="h-15"/>
        </div>
        <div className="mx-20 text-lg font-semibold">
            <img src={img5} alt="" className="h-15"/>
        </div>
      
      </Marquee>
    </div>
    </div>
  );
};

export default ImgMarquee;
