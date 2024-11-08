import { Heading } from "../common/Heading"
import { BlogCardsData } from "../projectData";
import { BlogCards } from "../common/BlogCards";



const BlogSec = () => {
    return (
        <div className="blog-section pt-[50px] pb-[50px] bg-[#f5f5f5]">
            <div className="width-container">
                <Heading text = "From Our Blog" title = "Latest News" />

                <div className="blog-cards-container gap-5 flex mt-[50px]">
                {BlogCardsData.map((card) => {
                        return (
                            <BlogCards 
                                key={card.id}
                                imageUrl={card.imageUrl}  
                                text={card.text}
                                title={card.title}
                                image2Url={card.image2Url}
                    
                            />
                        );
                    })} 
                </div>
            </div>
        </div>
    )
}
export default BlogSec























































//                     <div className="blog-card group"> 
//                         <div className="blog-img transition ease-in-out duration-300">
//                             <img className="w-full transition ease-in-out duration-300 group-hover:grayscale" src="https://barristar-tailwind.wpocean.com/static/media/2.5d2d14681c20eac2d59c.jpg" alt="" />
//                         </div>
//                         <div className="blog-content bg-white pt-[20px] px-[20px] pb-[30px]">
//                             <h3 className="text-[24px] leading-[36px] font-heading-font font-medium mb-[20px]">
//                                 <a href="#" className="text-[#000] transition ease-in-out duration-300 hover:text-[#c0b596] font-serif">Car Accidents Caused by Defective Vehicles</a>
//                             </h3>
//                             <ul className="flex items-center">
//                                 <li className="text-[#c0b596]">
//                                     <img className="w-[40px] h-[40px] rounded-[50%]" src="data:image/jpeg;base64,..." alt="" />
//                                 </li>
//                                 <li className="text-[#c0b596] px-[10px]">
//                                     <a className="text-[#666]" href="#">John Doe</a>
//                                 </li>
//                                 <li className="text-[#c0b596] relative px-[10px] before:absolute before:content-[''] before:left-0 before:top-1/2 before:w-[2px] before:h-[15px] before:bg-[#ccc] before:transform before:-translate-y-1/2">20 AUG,23</li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="blog-card group">
//                         <div className="blog-img transition ease-in-out duration-300">
//                             <img className="w-full transition ease-in-out duration-300 group-hover:grayscale" src="https://barristar-tailwind.wpocean.com/static/media/3.2c1d18b49065f51dd3bf.jpg" alt="" />
//                         </div>
//                         <div className="blog-content bg-white pt-[20px] px-[20px] pb-[30px]">
//                             <h3 className="text-[24px] leading-[36px] font-heading-font font-medium mb-[20px]"> <a href="#" className="text-[#000] transition ease-in-out duration-300 hover:text-[#c0b596] font-serif">Justice May For You If You Are Innocent</a></h3>
//                             <ul className="flex items-center">
//                                 <li className="text-[#c0b596]">
//                                     <img className="w-[40px] h-[40px] rounded-[50%]" src="https://barristar-tailwind.wpocean.com/static/media/author-3.209558186974175e450f.jpg" alt="" />
//                                 </li>
//                                 <li className="text-[#c0b596] px-[10px]">
//                                     <a className="text-[#666]" href="#">Jenefer Willy</a>
//                                 </li>
//                                 <li className="text-[#c0b596] relative px-[10px] before:absolute before:content-[''] before:left-0 before:top-1/2
//  before:w-[2px] before:h-[15px] before:bg-[#ccc] before:transform before:-translate-y-1/2">18 AUG,23</li>
//                             </ul>
//                         </div>
//                     </div> */}