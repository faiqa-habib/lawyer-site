export const BlogCards = (props) => {
    return (
        <div className="blog-card group">
            <div className="blog-img transition ease-in-out duration-300">
                <img className="w-full transition ease-in-out duration-300 group-hover:grayscale" src={props.imageUrl} alt="" />
            </div>
            <div className="blog-content bg-white pt-[20px] px-[20px] pb-[30px]">
                <h3 className="text-[24px] leading-[36px] font-heading-font font-medium mb-[20px]">
                    <a href="#" className="text-[#000] transition ease-in-out duration-300 hover:text-[#c0b596] font-serif">{props.title}</a>
                </h3>
                <ul className="flex items-center">
                    <li className="text-[#c0b596]">
                        <img className="w-[40px] h-[40px] rounded-[50%]" src={props.image2Url} alt="" />
                    </li>
                    <li className="text-[#c0b596] px-[10px]">
                        <a className="text-[#666]" href="#">{props.text}</a>
                    </li>
                    <li className="text-[#c0b596] relative px-[10px] before:absolute before:content-[''] before:left-0 before:top-1/2 before:w-[2px] before:h-[15px] before:bg-[#ccc] before:transform before:-translate-y-1/2">{props.date}</li>
                </ul>
            </div>
        </div>
    )
} 