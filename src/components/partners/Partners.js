import LittleTitle from "../@DEFAULT_COMPONENT/TITLES/LittleTitle";
import BigTitle from "../@DEFAULT_COMPONENT/TITLES/BigTitle";
import PartnersCard from "./PartnersCard";
import partnerOne from './ressource/partnerOne.png'
import partnerTwo from './ressource/partnerTwo.png'
import partnerThree from './ressource/partnerThree.png'
import partnerFour from './ressource/partnerFour.png'
import partnerFive from './ressource/partnerFive.png'
import PartnersPointer from "./PartnersPointer";

function Partners() {
    return (
        <section className="pb-20 px-3 lg:px-32">
            <div className="text-center pb-6 px-7 leading-7">
                <LittleTitle>Partners</LittleTitle>
                <BigTitle>REPUTED PARTNER</BigTitle>
            </div>

            <div className="flex overflow-hidden gap-x-4">
                <PartnersCard image={partnerOne} />
                <PartnersCard image={partnerTwo} />
                <PartnersCard image={partnerThree} />
                <PartnersCard image={partnerFour} />
                <PartnersCard image={partnerFive} />
                <PartnersCard image={partnerFour} />
                <PartnersCard image={partnerFive} />
            </div>

            <div className="flex justify-center mt-10">
                <PartnersPointer />
                <PartnersPointer />
                <PartnersPointer />
                <PartnersPointer />
                <PartnersPointer />
                <PartnersPointer />
                <PartnersPointer />
            </div>
        </section>
    )
}

export default Partners