import image from './ressource/bannerImg.png'
import fontImg from './ressource/homeNannerShape.png'
import firstCircle from './ressource/particleOne.png'
import secondCircle from './ressource/particleTwo.png'
import DefaultButton from '../@DEFAULT_COMPONENT/DefaultButton'
import LittleTitle from '../@DEFAULT_COMPONENT/TITLES/LittleTitle'

function Hero() {
    return (
        <section className='bg-yellow-100 relative lg:grid lg:grid-cols-12'>
            <div></div>
            <div className='lg:order-last lg:col-span-10 lg:flex lg:flex-row-reverse mx-auto'>
                <div className='pb-8 lg:pb-0 relative lg:-right-16 flex justify-center lg:px-0 shrink-0'>
                    <img src={fontImg} alt="font banner_image" className='absolute top-14 right-7 w-11/12 md:w-9/12 md:top-10 md:left-20 md:right-0' />
                    <img src={image} alt="banner_image" width={600} className='relative z-50 ' />
                </div>
                <div className='px-5 lg:px-0 lg:my-auto'>
                    <img src={firstCircle} alt="" width={80} className='hidden lg:block lg:absolute lg:top-10 lg:left-12' />
                    <LittleTitle>I AM A DESIGNER</LittleTitle>
                    <h1 className='text-5xl lg:text-7xl font-bold pt-3 pb-7 lg:leading-tight '>Creative Design and Web 
                    <span className='text-orange-500'> Design</span></h1>
                    <p className='text-zinc-700 leading-7'>
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et.
                    </p>

                    <DefaultButton>Download My CV</DefaultButton >
                    <img src={secondCircle} alt="" width={80} className='absolute bottom-2 lg:bottom-12 left-60 lg:left-1/4' />
                </div>
            </div>
        </section> 
    )
}

export default Hero;