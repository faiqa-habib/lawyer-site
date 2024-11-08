 export const FooterCards = (props) => {
    return (
        <div className="practical-section w-[200px] font-serif flex-1 mb-[40px] pr-0 relative text-left ">
        <div className="practical-heading mb-7">
            <h3 className="text-[28px] font-medium  font-heading-font text-white ">{props.title}</h3>
        </div>
        <ul>
            <li className="relative mb-[8px] block"><a className=" text-white hover:text-[#c0b596] transition-all" href="#">{props.text1}</a></li>
            <li className="relative mb-[8px] block"><a className=" text-white hover:text-[#c0b596] transition-all" href="#">{props.text2} </a></li>
            <li className="relative mb-[8px] block"><a className=" text-white hover:text-[#c0b596] transition-all" href="#">{props.text3} </a></li>
            <li className="relative mb-[8px] block"><a className=" text-white hover:text-[#c0b596] transition-all" href="#">{props.text4} </a></li>
            <li className="relative mb-[8px] block"><a className=" text-white hover:text-[#c0b596] transition-all" href="#">{props.text5} </a></li>
            <li className="relative mb-[8px] block"><a className=" text-white hover:text-[#c0b596] transition-all" href="#">{props.text6} </a></li>
        </ul>
    </div>
    )
}
