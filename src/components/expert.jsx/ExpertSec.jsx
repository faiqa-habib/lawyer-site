import { Heading } from "../common/Heading"
import { CardsData } from "../projectData";
import ExpertCards from "../common/ExpertCards";



const ExpertSec = () => {
    return (
        <div className="expert-section pt-[50px] pb-[50px]">
            <div className="width-container">
                <Heading text = "Meet Our Experts" title = "Qualified Attorneys" />

                <div className="img-container flex mt-[50px] ">
                {CardsData.map((card) => {
                        return (
                            <ExpertCards 
                                key={card.id}
                                imageUrl={card.imageUrl}  
                                text={card.text}
                                title={card.title}
                               
                    
                            />
                        );
                    })}
                </div>
            </div>

        </div>
    )
}
export default ExpertSec