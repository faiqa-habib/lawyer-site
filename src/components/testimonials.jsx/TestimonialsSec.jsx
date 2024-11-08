const TestimonialsSec = () => {
    return (
        <div className="testimonials-container width-container flex">

            <div className="left-testimonial w-1/2 ">
                <img src="https://barristar-tailwind.wpocean.com/static/media/1.863de48b2c1f0d8813a5.png" className="w-[64%]" alt="" />
            </div>
            <div className="right-testimonial w-1/2 mt-16">
                <div className="testimonials-heading">
                    <span className="text-[16px] text-[#ada282]">What People Say</span>
                    <h2 className="text-[36px] font-medium text-[#333] pb-[20px] font-serif">Client Testimonial</h2>
                    <div className="testimonials-line">

                    </div>
                </div>
                <div className="testmonials-content">
                    <p className=" pt-[30px]  z-10  pl-[3px] pb-[30px] pr-[50px] mb-[20px] text-[#ada282]">There are many variations of passages of lorem ipsum avaliable, but the majiority have suffered alteration in some form, by injected humour</p>

                </div>
                <div className="client flex">
                    <div className="client-img pr-[20px] ">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZjJmZWUyNi0zZDcxLTdjNDYtYTVkZi1lMDU3OWNlMGI3N2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjU5MzZFNURDRTRBMTFFODk3NTZCOEQzMTQ5N0EzMTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjU5MzZFNUNDRTRBMTFFODk3NTZCOEQzMTQ5N0EzMTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Mzk5OWZiNWMtM2YyYS0wMjQ2LTkzZDktNTUzYTI2ZTMwNDRiIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6OTdjODMwY2EtYjNmMi0xMWU4LWIwODQt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" alt="" />
                    </div>
                    <div className="client-info flex flex-col justify-center">
                        <h4 className="text-[18px] font-semibold font-base-font">Aliza Anney</h4>
                        <span className="text-[16px] text-[#666]">Models Belarus</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TestimonialsSec