import LittleTitle from "../@DEFAULT_COMPONENT/TITLES/LittleTitle";
import BigTitle from "../@DEFAULT_COMPONENT/TITLES/BigTitle";
import portfolioOne from './ressource/portfolioOne.png'
import portfolioTwo from './ressource/portfolioTwo.png'
import portfolioThree from './ressource/portfolioThree.png'
import portfolioFour from './ressource/portfolioFour.png'
import portfolioFive from './ressource/portfolioFive.png'
import portfolioSix from './ressource/portfolioSix.png'
import portfolioSeven from './ressource/portfolioSeven.png'
import portfolioEigth from './ressource/portfolioEight.png'
import PortfolioLink from "./PortfolioLink";
import PortfolioCard from "./portfolioCard/PortfolioCard";

function Portfolio() {
    const title = 'Graphic Design'
    const desc = 'The best way to impress your web'

    return (
        <section id='portfolio' className="py-10 lg:py-24 px-3 md:px-12 lg:px-32">
            <div className="text-center pb-6 px-7 leading-7">
                <LittleTitle>My Portfolio</LittleTitle>
                <BigTitle>VISIT MY PORTFOLIO</BigTitle>
            </div>

            <nav className="text-center leading-10 mb-10">
                <PortfolioLink value={'All'} />
                <PortfolioLink value={'UI/Ux Design'} />
                <PortfolioLink value={'Branding Design'} />
                <PortfolioLink value={'Graphic Design'} />
                <PortfolioLink value={'App Development'} />
                <PortfolioLink value={'Web Design'} />
            </nav>

            <div className="md:flex flex-wrap justify-between">
                <PortfolioCard image={portfolioOne} title={title} content={desc} />
                <PortfolioCard image={portfolioTwo} title={title} content={desc} /> 
                <PortfolioCard image={portfolioThree} title={title} content={desc} />
                <PortfolioCard image={portfolioFour} title={title} content={desc} />
                <PortfolioCard image={portfolioFive} title={title} content={desc} /> 
                <PortfolioCard image={portfolioSix} title={title} content={desc} />
                <PortfolioCard image={portfolioSeven} title={title} content={desc} />
                <PortfolioCard image={portfolioEigth} title={title} content={desc} />
            </div>
        </section>
    )
}

export default Portfolio