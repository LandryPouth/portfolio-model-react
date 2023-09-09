import './Header.css';
import logo from './ressource/Logo.png'
import menu from './ressource/burger-menu-svgrepo-com.png'

function Header() {
    return (
        <header className='bg-yellow-100 md:bg-white relative md:grid md:grid-cols-12'>
            <div></div>
            <div className='px-5 md:px-0 h-16 md:h-28 lg:h-32 flex justify-between items-center md:col-span-10'>
                <img src={logo} alt="Logo" />
                <button className='text-lg font-bold md:hidden'>
                    <img src={menu} alt="menu burger" width={50}/>
                </button>
                <button className='text-lg font-bold hidden md:block bg-orange-500 rounded px-6 py-3 text-white'>Contact Us</button>
            </div>
            <nav className='hidden md:inline flex-col h-full border-collapse md:absolute md:h-fit md:top-1/2 md:-translate-y-1/2  md:left-1/2 md:-translate-x-1/2'>
                <a className='mobile-menu desk-menu' href="#">Home</a>
                <a className='mobile-menu desk-menu' href="#">About</a>
                <a className='mobile-menu desk-menu' href="#">Service</a>
                <a className='mobile-menu desk-menu' href="#">Resume</a>
                <a className='mobile-menu desk-menu' href="#">Portfolio</a>
                <a className='mobile-menu desk-menu' href="#">Testimonial</a>
                <a className='mobile-menu desk-menu' href="#">Blog</a>
                <a className='mobile-menu desk-menu md:hidden' href="#">Contact</a>
            </nav>
        </header>
    )
}

export default Header;