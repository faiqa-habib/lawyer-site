const FormSec = () => {
    return (
        <div className="form-img">
            <div className="form-container">
                <div className="width-container">
                    <div className="form-section flex pt-[100px] ">
                        <div className="form-left-side w-2/4 px-[30px]">
                            <div className="form-heading">
                                <span className="text-[16px] text-[#ada282]">For Our Honorabe Clients</span>
                                <h2 className="text-[36px] text-[26px] font-medium text-white pb-[20px] pb-[10px] font-serif">Free Consulting</h2>
                            </div>
                            <span className="text-[18px] text-[#c0b596]">Call us 24/7 at (888)123-4567 or fill out the form.</span>
                            <p className="mt-[30px] text-[#ddd] leading-[30px] text-[16px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less able English.</p>
                        </div>
                        <div className="form-right-side w-2/4">
                            <form action="#">
                                <div className="same-inputs flex justify-between">
                                    <div className="form-input mb-[25px]">
                                        <input className="w-[250px] font-normal bg-[rgba(192,181,150,.2)] h-[45px] border border-[rgba(192,181,150,.5)]  text-[#c0b596]  pl-[15px] placeholder-[#c0b596]" type="text" placeholder="Your Name" />
                                    </div>
                                    <div className="form-input  mb-[25px]">
                                        <input className="w-[250px] font-normal bg-[rgba(192,181,150,.2)] h-[45px] border border-[rgba(192,181,150,.5)]    pl-[15px] placeholder-[#c0b596]" type="text" placeholder="Your Email" />
                                    </div>
                                </div>
                                <div className="select-inputs flex justify-between">
                                    <div className="form-input  mb-[25px]">
                                        <input className="w-[250px] font-normal bg-[rgba(192,181,150,.2)] h-[45px] border border-[rgba(192,181,150,.5)]    pl-[15px] placeholder-[#c0b596]" type="text" placeholder="Your Phone" />
                                    </div>
                                    <div className="form-issues mb-[25px]">
                                        <select className="w-[250px] font-normal bg-[rgba(192,181,150,.2)] h-[45px] border border-[rgba(192,181,150,.5)] text-[#c0b596]  pl-[15px]" name="cars" id="cars">
                                            <option >Family Law</option>
                                            <option >Criminal Law</option>
                                            <option >Business Law</option>
                                            <option >Personal Injury</option>
                                            <option >Education Law</option>
                                            <option >Drugs Crime </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="msg-form mb-[25px] ">
                                    <textarea className=" w-full bg-[rgba(192,181,150,.2)] h-[150px] border border-[rgba(192,181,150,.5)]    pt-[15px] pl-[15px]  pl-[15px] placeholder-[#c0b596]" id="w3review" name="w3review" rows="4" cols="50" placeholder="Message"></textarea>
                                </div>
                                <div className="form-btn mb-[30px]">
                                    <a href="#" className="bg-[#c0b596] text-[16px] font-semibold text-white px-[38px] py-[10px] mt-[6px] transition ease-in-out duration-300 hover:bg-[#d4c291]">Appointment</a>
                                </div>
                            </form>

                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}
export default FormSec