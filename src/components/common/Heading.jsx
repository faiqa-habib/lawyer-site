export const Heading = (props) => {
    return (
        <>
            <div className="heading flex justify-center items-center flex-col">
                <span className="text-[16px] text-[#ada282]">{props.text}</span>
                <h3 class=" text-[36px]  font-normal  font-serif text-[#333] pb-[20px]">{props.title}</h3>
                <div className="heading-line w-[60px] h-[3px] bg-[#c0b596]">
                </div>
            </div>
        </>
    )
}