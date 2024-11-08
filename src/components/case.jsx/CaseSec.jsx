import { Heading } from "../common/Heading";
import { CaseCards } from "../common/CaseCards";
import { CaseCardsData } from "../projectData";

const CaseSec = () => {
    return (
        <div className="case-container">
            <Heading text = "Here Our Best Work" title = "Our Resent Case Studies" />
            <div className="gallery pb-[95px]">
                <div className="gallery-filters">
                    <ul className="justify-center flex mt-7">
                        <li><span className="text-[#c0b596] font-normal  cursor-pointer text-base">All</span></li>
                        <li><span className="ml-5 font-normal  cursor-pointer text-base">Family Matters</span></li>
                        <li><span className="ml-5 font-normal  cursor-pointer text-base">Real Estate</span></li>
                        <li><span className="ml-5 font-normal  cursor-pointer text-base">Business</span></li>
                        <li><span className="ml-5 font-normal  cursor-pointer text-base">Criminal</span></li>
                        <li><span className="ml-5 font-normal  cursor-pointer text-base">Injury</span></li>
                    </ul>
                </div>

                <div className="gallery-container flex mt-[50px]">
                    {CaseCardsData.map((card) => {
                        return (
                            <CaseCards
                                key={card.id}
                                imageUrl={card.imageUrl}  // Corrected prop
                                text={card.text}
                                title={card.title}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CaseSec;
