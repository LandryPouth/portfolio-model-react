import LittleTitle from "../@DEFAULT_COMPONENT/TITLES/LittleTitle";
import BigTitle from "../@DEFAULT_COMPONENT/TITLES/BigTitle";
import serviceOne from './ressource/serviceOne.png'
import serviceTwo from './ressource/serviceTwo.png'
import serviceThree from './ressource/serviceThree.png'
import serviceFour from './ressource/serviceFour.png'
import serviceFive from './ressource/serviceFive.png'
import serviceSix from './ressource/serviceSix.png'
import serviceSeven from './ressource/serviceSeven.png'
import serviceEight from './ressource/serviceEight.png'
import ServiceCard from "./ServiceCard";

function Service() {
    const title = [
        'UI/UX Design',
        'Mobile App',
        'Graphic Design',
        'Web Developer',
        'SEO Optimisation',
        'WordPress Developer',
        'App Development',
        'Business Strategy',
    ]

    const text = 'Hen our power of choice is untrammelled and when nothing prevents our being able'

    return (
        <section className="pb-16 md:pb-24 px-3 lg:px-32">
            <div className="text-center pb-6">
                <LittleTitle>My Service</LittleTitle>
                <BigTitle>SERVICES I OFFER</BigTitle>
            </div>

            <div className="w-full flex flex-col md:flex-row flex-wrap">
                
                <ServiceCard
                    src={serviceOne} 
                    title = {title[0]}
                    txt = {text}
                />
                <ServiceCard
                    src={serviceTwo} 
                    title = {title[1]}
                    txt = {text}
                />
                <ServiceCard
                    src={serviceThree} 
                    title = {title[2]}
                    txt = {text}
                />
                <ServiceCard
                    src={serviceFour} 
                    title = {title[3]}
                    txt = {text}
                />
                <ServiceCard
                    src={serviceFive} 
                    title = {title[4]}
                    txt = {text}
                />
                <ServiceCard
                    src={serviceSix} 
                    title = {title[5]}
                    txt = {text}
                />
                <ServiceCard
                    src={serviceSeven} 
                    title = {title[6]}
                    txt = {text}
                />
                <ServiceCard
                    src={serviceEight}
                    title = {title[7]}
                    txt = {text}
                />

            </div>
        </section>
    )
}

export default Service;