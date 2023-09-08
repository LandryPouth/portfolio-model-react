import LittleTitle from "../@DEFAULT_COMPONENT/TITLES/LittleTitle";
import BigTitle from "../@DEFAULT_COMPONENT/TITLES/BigTitle";
import DefaultButton from '../@DEFAULT_COMPONENT/DefaultButton'
import { ContactInput, ContactAside } from "./ContactInput";
import { FaLocationDot, FaPhoneVolume, FaEnvelope } from "react-icons/fa6"

function Contact() {
    return (
        <section className="pb-20 px-3 md:px-24 lg:px-32">
            <div className="text-center py-6 px-7 leading-7">
                <LittleTitle>My Contact</LittleTitle>
                <BigTitle>I WANT TO HEAR FROM YOU</BigTitle>
            </div>

            <div className="lg:flex justify-between">
                <form className="md:basis-2/3">
                    <div className="md:flex justify-between">
                        <ContactInput placeholder="Your Name" />
                        <ContactInput  placeholder="Your Email" />
                    </div>
                    <div className="md:flex justify-between">
                        <ContactInput  placeholder="Your phone" type="tel" />
                        <ContactInput  placeholder="Subject" />
                    </div>
                    <textarea className="border border-orange-200 w-full mb-5 p-5 outline-0 rounded placeholder:text-zinc-500" placeholder="Message"></textarea>
                    <DefaultButton>Send Me Message</DefaultButton >
                </form>
                <aside className="md:basis-1/4">
                    <ContactAside icone={<FaLocationDot/>} title={'Address'} desc={'202 Dog Hill Lane Beloit, KS 67420'} link={'#'} />
                    <ContactAside icone={<FaPhoneVolume/>} title={'Phone'} desc={'+01589634755'} link={'#'} />
                    <ContactAside icone={<FaEnvelope/>} title={'Email'} desc={'credesign@gmail.com'} link={'#'} />
                </aside>
            </div>
        </section>
    )
}

export default Contact