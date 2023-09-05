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
    return (
        <section className="pb-16 md:pb-24 px-3 lg:px-32">
            <div className="text-center pb-6">
                <LittleTitle>My Service</LittleTitle>
                <BigTitle>SERVICES I OFFER</BigTitle>
            </div>

            <div className="w-full flex flex-col md:flex-row flex-wrap">
                
                <ServiceCard
                    src={serviceOne} 
                    title = {'UI/UX Design'}
                    txt = {'Hen our power of choice is untrammelled and when nothing prevents our being able'}
                />
                <ServiceCard
                    src={serviceTwo} 
                    title = {'Mobile App'}
                    txt = {'Hen our power of choice is untrammelled and when nothing prevents our being able'}
                />
                <ServiceCard
                    src={serviceThree} 
                    title = {'Graphic Design'}
                    txt = {'Hen our power of choice is untrammelled and when nothing prevents our being able'}
                />
                <ServiceCard
                    src={serviceFour} 
                    title = {'Web Developer'}
                    txt = {'Hen our power of choice is untrammelled and when nothing prevents our being able'}
                />
                <ServiceCard
                    src={serviceFive} 
                    title = {'SEO Optimisation'}
                    txt = {'Hen our power of choice is untrammelled and when nothing prevents our being able'}
                />
                <ServiceCard
                    src={serviceSix} 
                    title = {'WordPress Developer'}
                    txt = {'Hen our power of choice is untrammelled and when nothing prevents our being able'}
                />
                <ServiceCard
                    src={serviceSeven} 
                    title = {'App Development'}
                    txt = {'Hen our power of choice is untrammelled and when nothing prevents our being able'}
                />
                <ServiceCard
                    src={serviceEight}
                    title = {'Business Strategy'}
                    txt = {'Hen our power of choice is untrammelled and when nothing prevents our being able'}
                />

            </div>
        </section>
    )
}

export default Service;