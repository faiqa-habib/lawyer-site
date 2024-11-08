import React from "react";
const Hero = () => {
    return (

        <div className="hero-img">
              {/* <button class="left-icon">
                <i class="fa-solid fa-arrow-left"></i>
            </button> */}
            <div className="width-container">
                <div className="w-[61%] flex flex-col justify-center h-full ">
                    <p className="text-white text-xl font-light mt-5">The Most Talented law Frim</p>
                    <h2 className="text-white text-6xl font-normal font-serif my-8 leading-normal">We Fight For Your Justice  <br />
                        As Like A Friend</h2>
                    <div className="hero-btn">
                        <a href="#" className="text-white text-base font-semibold">Contact Us Now</a>
                        <div className="btn-line">

                        </div>
                    </div>
                </div>
            </div>
            {/* <button class="right-icon">
                <i class="fa-solid fa-arrow-right"></i>
            </button> */}

        </div>
    )
}
export default Hero