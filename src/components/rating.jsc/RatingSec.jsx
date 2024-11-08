import { RatingCard } from "../common/RatingCard"
import { RatingCardsData } from "../projectData";

const RatingSec = () => {
    return (
        <div className="rating-section">
            <div className="width-container">
                <div className="rating-container">
                {
                    RatingCardsData.map((card) => {
                        console.log("card: ", card);       
                        return(
                            < RatingCard key={card.id} text={card.text} title ={card.title} />
                        )
                    })
                }
                    {/* <RatingCard /> */}
       
                </div>
            </div>
        </div>
    )
}
export default RatingSec