 
 import { HiUsers } from "react-icons/hi";
 
 
  export const PracticeCard = (props) => {
    return (
        <div className="card flex w-[350px] mb-5">
            <div className="service-icon h-[75px] w-[177px]  border border-[rgba(192, 181, 150, .5)] rounded-full flex items-center justify-center">
                <HiUsers className="text-[50px] text-[#c0b596] " />
            </div>
            <div className="service-content ml-5 ">
                <h3><a href="#" className="text-[#373737] text-[24px] col:text-[20px] font-medium pb-[10px]">{props.title}</a></h3>
                <div className="content-line w-[30px] h-[2px] bg-[#c0b596] mt-2.5">
                </div>
                <p className="text-[#777] text-[16px] font-normal leading-7 mt-2.5">It is a long established fact that a reader will be distracted by the readable content of</p>
            </div>

        </div>
    )
}
