import LittleTitle from "../@DEFAULT_COMPONENT/TITLES/LittleTitle";
import BigTitle from "../@DEFAULT_COMPONENT/TITLES/BigTitle";
import TestimonialCard from "./TestimonialCard";
import TestimonialPointer from "./TestimonialPointer";
import testimonialOne from './ressource/testimonialOne.png'
import testimonialTwo from './ressource/testimonialTwo.png'
import testimonialThree from './ressource/testimonialThree.png'

function Testimonial() {
    const testimonial = [
        {title: 'John K. Meraz', desc: 'CTO, Xyz Group'},
        {title: 'Johan Smith', desc: 'CEO, Abc Agency'},
        {title: 'Robert E. Wolf', desc: 'Director, Xyz Techso'},
    ]

    const text = ` “Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old.`

    return (
        <section className="pt-20 pb-16 px-3 lg:px-32">
            <div className="text-center pb-6 px-7 leading-7">
                <LittleTitle>Testimonial</LittleTitle>
                <BigTitle>CLIENT FEEDBACK</BigTitle>
            </div>

            <div className="flex gap-x-4 overflow-hidden">
                <TestimonialCard  
                    img={testimonialOne} 
                    title={testimonial[0].title} desc={testimonial[0].desc} 
                    text={text}
                />

                <TestimonialCard  
                    img={testimonialTwo} 
                    title={testimonial[1].title} desc={testimonial[1].desc} 
                    text={text}
                />

                <TestimonialCard  
                    img={testimonialThree}
                    title={testimonial[2].title} desc={testimonial[2].desc} 
                    text={text}
                />

                <TestimonialCard  
                    img={testimonialThree}
                    title={testimonial[2].title} desc={testimonial[2].desc} 
                    text={text}
                />
                
            </div>
            <div className="flex justify-center">
                <TestimonialPointer />
                <TestimonialPointer />
                <TestimonialPointer />
                <TestimonialPointer />
            </div>
        </section>
    )
}

export default Testimonial;