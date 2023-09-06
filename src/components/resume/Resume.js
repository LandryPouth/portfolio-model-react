import LittleTitle from "../@DEFAULT_COMPONENT/TITLES/LittleTitle"
import BigTitle from "../@DEFAULT_COMPONENT/TITLES/BigTitle"
import { ResumeCard, ResumeNumber } from "./ResumeCard"
import ResumeAside from "./ResumeAside"

function Resume() {
    const card = [
        {card1Title: 'BSc in Computer Science', card1Desc: 'University of ULAV (2018 - 2022)'},
        {card2Title: 'AS - Science & Information', card2Desc: 'University of ULAV (2016 - 2018)'},
        {card3Title: 'Secondary School Education', card3Desc: 'Kindergarten (2006 - 2016)'},
        {card4Title: 'UI/UX Design',},
        {card5Title: 'Web Developer',},
        {card6Title: 'App Development',},
        {card7Title: 'Web Developer & Trainer', card7Desc: 'Brac Developer Team - (2012 - 2016)'},
        {card8Title: 'Front-end Developer', card8Desc: 'Brane - (2020 - 2011)'},
        {card9Title: 'UI/UX Designer', card9Desc: 'Google Out Tech - (2017 - Present)'},
    ]

    const text = 'Pomnis voluptas assumenda est, omnis dolor repellendus.'

    return (
        <section className="bg-yellow-100 py-20 px-3 lg:px-32">
            <div className="text-center pb-6 px-7 leading-7">
                <LittleTitle>My Resume</LittleTitle>
                <BigTitle>10+ YEARS OF EXPERIENCE</BigTitle>
            </div>

            <div className="lg:flex">
                <div className="hidden h-10/12 lg:flex lg:flex-col lg:basis-1/5 lg:justify-between border-l-2 border-zinc-500">
                    <ResumeAside text={'Education'}/>
                    <ResumeAside text={'Software Skills'}/>
                    <ResumeAside text={'Experience'}/>
                </div>

                <main>
                    <div className="bg-white rounded px-6 py-8 mb-6 lg:flex justify-between">
                        <ResumeCard title ={card[0].card1Title} description={card[0].card1Desc} text={text} />
                        <ResumeCard title ={card[1].card2Title} description={card[1].card2Desc} text={text} />
                        <ResumeCard title ={card[2].card3Title} description={card[2].card3Desc} text={text} />
                    </div>

                    <div className="bg-white rounded px-6 py-4 mb-6 lg:flex justify-between">
                        <ResumeNumber title ={card[3].card4Title}
                            text1={'Figma'} value1={'90%'}
                            text2={'Adobe XD'} value2={'85%'}
                            text3={'Photoshop'} value3={'80%'}
                        />
                        <ResumeNumber title ={card[4].card5Title}
                            text1={'WordPress'} value1={'90%'}
                            text2={'Mockplus'} value2={'85%'}
                            text3={'Weebly'} value3={'80%'}
                        />                    
                        <ResumeNumber title ={card[5].card6Title}
                            text1={'Quixy'} value1={'92%'}
                            text2={'AppyPie'} value2={'87%'}
                            text3={'iBuildApp'} value3={'82%'}
                        />
                    </div>

                    <div className="bg-white rounded px-6 py-8 mb-6 lg:flex justify-between">
                        <ResumeCard title ={card[6].card7Title} description={card[6].card7Desc} text={text} />
                        <ResumeCard title ={card[7].card8Title} description={card[7].card8Desc} text={text} />
                        <ResumeCard title ={card[8].card9Title} description={card[8].card9Desc} text={text} />
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Resume