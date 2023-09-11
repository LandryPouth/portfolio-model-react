import about from './ressource/about.png'
import aboutIconeOne from './ressource/aboutIconOne.png'
import aboutIconeTwo from './ressource/aboutIconTwo.png'
import CheckedList from './CheckedList'
import DefaultButton from '../@DEFAULT_COMPONENT/DefaultButton'
import LittleTitle from '../@DEFAULT_COMPONENT/TITLES/LittleTitle'
import BigTitle from '../@DEFAULT_COMPONENT/TITLES/BigTitle'

function About() {
    return (
        <section className='pt-24 pb-10 px-3 lg:px-0 lg:grid lg:grid-cols-12 md:mx-20 lg:mx-0'>
            <div></div>
            <div className='mb-10 lg:mb-0 lg:col-span-4 md:mx-10 lg:mx-0'>
                <img src={about} alt="about-image" className='hover:brightness-50 transition' />
            </div>
            <div className='md:mt-16 lg:col-span-6 lg:ml-16'>
                <div className='w-11/12'>
                    <LittleTitle>About Me</LittleTitle>
                    <BigTitle>I Can Design Anything You Want</BigTitle>
                </div>

                <p className='text-zinc-600 leading-5'>
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.
                </p>

                <div className='w-10/12 mt-6'>
                    <div className='md:flex justify-between mb-8'>
                        <h3 className='flex mb-4 md:mb-0'><img src={aboutIconeOne} alt="" /><div className='ml-3 font-bold text-lg'><span className='block text-orange-500'>0+</span>Complete Project</div></h3>
                        <h3 className='flex mb-4 md:mb-0'><img src={aboutIconeTwo} alt="" /><div className='ml-3 font-bold text-lg'><span className='block text-orange-500'>0+</span>Year of experience</div></h3> 
                    </div>
                    <div className='md:flex justify-between flex-wrap '>
                        <div>
                            <CheckedList>Work simple and cline design</CheckedList>
                            <CheckedList>Web Design Full stack</CheckedList>
                        </div>
                        <div>
                            <CheckedList>New idea and user friendly design</CheckedList>
                            <CheckedList>Unlimited Revisions</CheckedList>
                        </div>
                    </div>
                </div>
                <DefaultButton>Download My CV</DefaultButton >
            </div>
        </section>
    )
}

export default About