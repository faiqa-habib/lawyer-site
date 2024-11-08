import { Header } from "./components/header/Header"
import Hero from "./components/hero-section/Hero"
import AboutUs from "./components/about-us/AboutUs"
import ServiceSec from "./components/service.jsx/ServiceSec"
import CaseSec from "./components/case.jsx/CaseSec"
import TestimonialsSec from "./components/testimonials.jsx/TestimonialsSec"
import FormSec from "./components/form.jsx/FormSec"
import ExpertSec from "./components/expert.jsx/ExpertSec"
import RatingSec from "./components/rating.jsc/RatingSec"
import BlogSec from "./components/blog.jsx/BlogSec"

import Footer from "./components/footer.jsx/Footer"

const App = () => {

  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
    <ServiceSec />
    <CaseSec />
    <TestimonialsSec />
    <FormSec />
    <ExpertSec />
    <RatingSec />
    <BlogSec />
    <Footer />
    </div>

  )
}

export default App





