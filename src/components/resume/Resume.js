import LittleTitle from "../@DEFAULT_COMPONENT/TITLES/LittleTitle"
import BigTitle from "../@DEFAULT_COMPONENT/TITLES/BigTitle"
import { ResumeCard, ResumeNumber } from "./ResumeCard"
import ResumeAside from "./ResumeAside"

function Resume() {
    const card = [
        {cardTitle: 'BSc in Computer Science', cardDesc: 'University of ULAV (2018 - 2022)'},
        {cardTitle: 'AS - Science & Information', cardDesc: 'University of ULAV (2016 - 2018)'},
        {cardTitle: 'Secondary School Education', cardDesc: 'Kindergarten (2006 - 2016)'},
        {cardTitle: 'UI/UX Design',},
        {cardTitle: 'Web Developer',},
        {cardTitle: 'App Development',},
        {cardTitle: 'Web Developer & Trainer', cardDesc: 'Brac Developer Team - (2012 - 2016)'},
        {cardTitle: 'Front-end Developer', cardDesc: 'Brane - (2020 - 2011)'},
        {cardTitle: 'UI/UX Designer', cardDesc: 'Google Out Tech - (2017 - Present)'},
    ]

    const text = 'Pomnis voluptas assumenda est, omnis dolor repellendus.'

    return (
        <section id='resume' className="bg-yellow-100 py-20 px-3 lg:px-32">
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

                <main className="md:px-20 lg:px-0">
                    <div className="bg-white rounded px-6 py-8 mb-6 lg:flex justify-between">
                        <ResumeCard title ={card[0].cardTitle} description={card[0].cardDesc} text={text} />
                        <ResumeCard title ={card[1].cardTitle} description={card[1].cardDesc} text={text} />
                        <ResumeCard title ={card[2].cardTitle} description={card[2].cardDesc} text={text} />
                    </div>

                    <div className="bg-white rounded px-6 py-4 mb-6 lg:flex justify-between">
                        <ResumeNumber title ={card[3].cardTitle}
                            text1={'Figma'} value1={'90%'}
                            text2={'Adobe XD'} value2={'85%'}
                            text3={'Photoshop'} value3={'80%'}
                        />
                        <ResumeNumber title ={card[4].cardTitle}
                            text1={'WordPress'} value1={'90%'}
                            text2={'Mockplus'} value2={'85%'}
                            text3={'Weebly'} value3={'80%'}
                        />                    
                        <ResumeNumber title ={card[5].cardTitle}
                            text1={'Quixy'} value1={'92%'}
                            text2={'AppyPie'} value2={'87%'}
                            text3={'iBuildApp'} value3={'82%'}
                        />
                    </div>

                    <div className="bg-white rounded px-6 py-8 mb-6 lg:flex justify-between">
                        <ResumeCard title ={card[6].cardTitle} description={card[6].cardDesc} text={text} />
                        <ResumeCard title ={card[7].cardTitle} description={card[7].cardDesc} text={text} />
                        <ResumeCard title ={card[8].cardTitle} description={card[8].cardDesc} text={text} />
                    </div>
                </main>
            </div>
        </section>
    )
}

export default Resume