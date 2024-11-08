import React from 'react'

export const RatingCard = (props) => {
    return (
        <div className="rating-card w-[40%]  pt-[40px] pb-[40px] mr-[5px] bg-[#403E38] mb-[5px] text-center ">
            <div className="rating-heading">
                <h2 className=" text-[50px] text-[30px] font-bold text-white "><span>{props.title}</span></h2>
            </div>
            <p className=" text-[18px] fonts-normal pt-[10px] text-[#c0b596]">{props.text}</p>
        </div>
    )
}

