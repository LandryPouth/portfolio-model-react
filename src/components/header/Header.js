import './Header.css';
import logo from './ressource/Logo.png'
import menu from './ressource/burger-menu-svgrepo-com.png'

function Header() {
    
    
    function nav() {
        const navbar = document.querySelector('nav')
        navbar.classList.toggle('mobile')
    }

    return (
        <header className='bg-yellow-100 md:bg-white relative md:grid md:grid-cols-12'>
            <div></div>
            <div className='px-5 md:px-0 h-16 md:h-28 lg:h-32 flex justify-between items-center md:col-span-10'>
                <img src={logo} alt="Logo" />
                <button onClick={nav} className='text-lg font-bold md:hidden'>
                    <img src={menu} alt="menu burger" width={50}/>
                </button>
                <a href="#contact" className='text-lg font-bold hidden md:block bg-orange-500 rounded px-6 py-3 text-white'>Contact Us</a>
            </div>
            <nav className='hidden md:inline flex-col h-full border-collapse md:absolute md:h-fit md:top-1/2 md:-translate-y-1/2  md:left-1/2 md:-translate-x-1/2'>
                <a className='mobile-menu desk-menu' href="#">Home</a>
                <a className='mobile-menu desk-menu' href="#about">About</a>
                <a className='mobile-menu desk-menu' href="#service">Service</a>
                <a className='mobile-menu desk-menu' href="#resume">Resume</a>
                <a className='mobile-menu desk-menu' href="#portfolio">Portfolio</a>
                <a className='mobile-menu desk-menu' href="#testimonial">Testimonial</a>
                <a className='mobile-menu desk-menu' href="#blog">Blog</a>
                <a className='mobile-menu desk-menu md:hidden' href="#contact">Contact</a>
            </nav>
        </header>
    )
}

export default Header;