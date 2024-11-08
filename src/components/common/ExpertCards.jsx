
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";



 const ExpertCards = (props) => {
    return (
        <div className="expert-card">
            <div className="exprt-img ">
                <img className="w-[100%]" src = {props.imageUrl}  alt="" />
            </div>
            <div className=" relative text-center pb-1.5 mt-[-40px] bg-[#f5f5f5]  translate-y-[40px] transition ease-in-out duration-300  group-hover:bg-[#fff]">
                <h3 className="text-[24px] text-[20px] font-medium pt-[30px] pb-[8px]  font-heading-font"> <a href="#" className="text-[#282e3f] hover:text-[#ada282] transition-all">{props.title}</a></h3>
                <span className="text-[#ada282] text-[16px] font-normal">{props.text}</span>
                <ul className="flex justify-center my-[20px] transition ease-in-out">
                    <li className="px-[10px] "><a href="#" className="text-[#c0b596] transition-all hover:text-[#999]"><TiSocialFacebook /></a></li>
                    <li className="px-[10px] "><a href="#" className="text-[#c0b596] transition-all hover:text-[#999]" ><FaTwitter /></a></li>
                    <li className="px-[10px] "><a href="#" className="text-[#c0b596] transition-all hover:text-[#999]"><FaLinkedinIn /></a></li>
                </ul>
            </div>
        </div>

    )
}
export default ExpertCards
