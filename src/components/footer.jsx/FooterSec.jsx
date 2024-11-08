const FooterSec = () => {
    return (
        <div className="Footer-upper-part bg-[#272c3f] pt-[70px] pb-[80px]">
            <div className="text-center max-w-[443px] col:w-full mx-auto">
                <h3 className="text-[30px]  font-medium mb-[40px] mb-[30px] text-[#c0b596] font-serif">
                    Subscribe Newsletter
                </h3>
                <form className="relative">
                    <input className="w-full bg-transparent h-[50px] text-white py-[6px] 
 pr-[80px] pl-[30px] col:pl-[10px] border border-[#ddd] focus:outline-0  rounded-[5px]" type="text" placeholder="Enter Your Email Address..." />
                    <button type="submit" className="bg-[#c0b596] text-white border-0 outline-0 absolute right-0 top-0 w-[125px] col:w-[90px] h-[50px]">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>

       
    )
}
export default FooterSec