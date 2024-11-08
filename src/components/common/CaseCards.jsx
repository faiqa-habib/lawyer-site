import React from "react";

export const CaseCards = (props) => {
    return (
        <div className="general-service group relative w-[593px] h-[300px]">
            <img
                src={props.imageUrl}  
                className="w-[100%] h-[100%]"
                alt={props.title}  
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <span className="text-[16px] text-[#c0b596]">{props.title}</span>
                <h3 className="text-[24px] font-medium mt-2 font-serif transition ease-in-out duration-300 hover:text-[#c0b596]">{props.text}</h3>
                <div className="w-[60px] h-[2px] bg-[#c0b596] mt-4"></div>
            </div>
        </div>
    );
};
