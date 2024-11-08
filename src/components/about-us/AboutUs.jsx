import AboutUsCards from "../common/AboutUsCards"
import AboutUsSec from "./AboutUsSec"
import {AboutUsCardsData} from "../projectData"

const AboutUs = () => {
    return (

        <div className="about-us-section">
            <div className="width-container flex item-center justify-between">
                {
                    AboutUsCardsData.map((card) => {
                        console.log("card: ", card);       
                        return(
                            < AboutUsCards key={card.id} text={card.text} title ={card.title} />
                        )
                    })
                }
                
                
                
               

            </div>
            <AboutUsSec /> 
        </div>

    )
} 
export default AboutUs



