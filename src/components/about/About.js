import about from './ressource/about.png'
import aboutIconeOne from './ressource/aboutIconOne.png'
import aboutIconeTwo from './ressource/aboutIconTwo.png'
import CheckedList from './CheckedList'
import DefaultButton from '../@DEFAULT_COMPONENT/DefaultButton'
import LittleTitle from '../@DEFAULT_COMPONENT/TITLES/LittleTitle'
import BigTitle from '../@DEFAULT_COMPONENT/TITLES/BigTitle'

function About() {
    return (
        <section className='py-28 px-3 md:flex md:px-2 lg:p-32'>
            <div className='mb-10 lg:mb-0 md:basis-1/2'>
                <img src={about} alt="about-image" className='hover:opacity-90 transition' />
            </div>
            <div className='md:basis-1/2 md:mt-16'>
                <LittleTitle>About Me</LittleTitle>
                <BigTitle>I Can Design Anything You Want</BigTitle>

                <p className='text-zinc-600 leading-6'>
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.
                </p>

                <div className='w-10/12 mt-10'>
                    <div className='md:flex justify-between mb-8'>
                        <h3 className='flex mb-4 md:mb-0'><img src={aboutIconeOne} alt="" /><div className='ml-3 font-bold text-lg'><span className='block text-orange-500'>0+</span>Complete Project</div></h3>
                        <h3 className='flex mb-4 md:mb-0'><img src={aboutIconeTwo} alt="" /><div className='ml-3 font-bold text-lg'><span className='block text-orange-500'>0+</span>Year of experience</div></h3> 
                    </div>
                    <div className='md:flex justify-between flex-wrap '>
                        <CheckedList>Work simple and cline design</CheckedList>
                        <CheckedList>Web Design Full stack</CheckedList>
                        <CheckedList>New idea and user friendly design</CheckedList>
                        <CheckedList>Unlimited Revisions</CheckedList>
                    </div>
                </div>
                <DefaultButton>Download My CV</DefaultButton >
            </div>
        </section>
    )
}

export default About