import { FooterTitle, FooterLink, FooterIcone } from "./FooterComponets"
import { FaFacebookF, FaTwitter, FaDribbble, FaBehance, FaLocationDot, FaPhoneVolume } from "react-icons/fa6"

function Footer() {
    return (
        <section className="pt-20 pb-5 px-3 md:px-10 lg:px-32 text-white bg-black">
            <div className="flex flex-wrap justify-between">
                <div className="md:w-1/3 lg:w-1/4">
                    <p className="mb-10 md:mb-16 md:relative md:top-7">
                        At vero eos et accusamus et iusto odio dign ducimus qui blanditiis praesentium volup deleniti atque corrupti quos dolores et molestias excepturi sint occaecati
                    </p>
                    <FooterTitle title={'credesign@gmail.com'} />
                </div>

                <div className="w-1/2 md:w-1/6 flex flex-col">
                    <FooterTitle title={'Explore Link'} />

                    <FooterLink link={'#'} content={'About'} />
                    <FooterLink link={'#'} content={'Resume'} />
                    <FooterLink link={'#'} content={'Portfolio'} />
                    <FooterLink link={'#'} content={'Blog'} />
                </div>
                <div className="w-1/2 md:w-1/6 flex flex-col">
                    <FooterTitle title={'My Services'} />

                    <FooterLink link={'#'} content={'UI/UX Design'} />
                    <FooterLink link={'#'} content={'Mobile App'} />
                    <FooterLink link={'#'} content={'Graphics Design'} />
                    <FooterLink link={'#'} content={'Web Developer'} />
                </div>

                <div className="md:w-1/3 lg:w-1/4">
                    <FooterTitle title={'Follow me'} />

                    <div className="flex gap-x-5 mb-7">
                        <FooterIcone link={'#'} content={<FaFacebookF />} />
                        <FooterIcone link={'#'} content={<FaTwitter />} />
                        <FooterIcone link={'#'} content={<FaDribbble />} />
                        <FooterIcone link={'#'} content={<FaBehance />} />
                    </div>

                    <p className="flex items-center mb-5">
                        <span className="mr-2 text-lg text-orange-500"><FaLocationDot /></span>
                        202 Dog Hill Lane Beloit,KS 67420
                    </p>
                    <p className="flex items-center">
                        <span className="mr-2 text-lg text-orange-500"><FaPhoneVolume /></span>
                        1-800-915-6270
                    </p>
                </div>
            </div>

            <div className="md:flex justify-between mt-10">
                <p className="my-3">All rights reserved © 2023 Credesign</p>
                <div className="md:basis-1/3 flex justify-between items-center">
                    <FooterLink link={'#'} content={'Terms & Condition'} />
                    <FooterLink link={'#'} content={'Privacy policy'} />
                </div>
            </div>
        </section>
    )
}

export default Footer