import image from './ressource/bannerImg.png'
import fontImg from './ressource/homeNannerShape.png'
import firstCircle from './ressource/particleOne.png'
import secondCircle from './ressource/particleTwo.png'
import titleIcone from '../@TITLE__IMG/bannerImg.png'

function Hero() {
    return (
        <section className='bg-yellow-100 md:flex md:flex-row-reverse md:px-2 lg:px-32 relative'>
            <div className='pt-4 lg:pt-2 pb-8 lg:pb-0 relative lg:-right-16 lg:basis-2/5'>
                <img src={fontImg} alt="font banner_image" className='absolute top-14' />
                <img src={image} alt="banner_image" className='relative z-50' />
            </div>
            <div className='px-3 lg:px-0 lg:basis-3/5 lg:my-auto'>
                <img src={firstCircle} alt="" width={80} className='hidden lg:block lg:absolute lg:top-10 lg:left-12' />
                <h4>
                    <img src={titleIcone} alt="" className='inline mr-2' />
                    <span>I AM A DESIGNER</span>
                </h4>
                <h1 className='text-5xl lg:text-7xl font-bold pt-3 pb-7 lg:leading-tight md:w-4/5'>Creative Design and Web 
                <span className='text-orange-500'> Design</span></h1>
                <p className='text-zinc-700 leading-7'>
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et.
                </p>

                <button className='text-lg my-9 font-bold lg:block bg-orange-500 rounded px-6 py-3 text-white'>Download My CV</button>
                <img src={secondCircle} alt="" width={80} className='absolute bottom-2 lg:bottom-12 left-60 lg:left-1/4' />
            </div>
        </section> 
    )
}

export default Hero;