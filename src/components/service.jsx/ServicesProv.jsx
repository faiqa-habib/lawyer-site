
import { Heading } from "../common/Heading"
import {PracticeCard} from "../common/PracticeCard";
import { servicesCardsData } from "../servicesCards";

const ServicesProv = () => {
    return (
        <div className="service-container pt-[95px] pb-[70px]">
            <Heading text = "Area Of Practice" title = "How Can We Help You" />
            <div className="services-cards width-container flex flex-wrap justify-center items-center ">
            {
                    servicesCardsData.map((card) => {
                        console.log("card: ", card);       
                        return(
                            < PracticeCard key={card.id} text={card.text} title ={card.title} />
                        )
                    })
                }



              
                {/* <PracticeCard />
                <PracticeCard />
                <PracticeCard />
                <PracticeCard /> 
                <PracticeCard />
                <PracticeCard /> */}

            </div>
        </div>
    )
}

export default ServicesProv