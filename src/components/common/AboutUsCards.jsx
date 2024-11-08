import { GrUserManager } from "react-icons/gr";


const AboutUsCards = (props) =>{
    console.log("props: ", props);
    
    return(

    <div className=" w-[350px] flex bg-[white]">

        <div className="card-left-side bg-[#C0B596] p-[20px]">
            <GrUserManager className="text-5xl text-white " />
        </div>
        <div className="card-right-side p-[20px]">
            <span className="text-[#C0B596] text-lg font-normal">{props.text}</span>
            <h5 className="text-[black] font-medium text-3xl font-serif">{props.title}</h5>
        </div>
    </div> 
)}
export default AboutUsCards

