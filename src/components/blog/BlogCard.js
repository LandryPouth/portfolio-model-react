import { BiRightArrowAlt } from "react-icons/bi"

function BlogCard({ image, date, title, link, ...attribute }) {
    return (
        <div className="w-full md:max-w-md rounded-lg border border-orange-300 mb-7 md:mb-0">
            <img src={image} alt="#" className="w-full object-fill" />
            <div className="p-6">
                <h6 className="mb-5 text-md text-zinc-600">{date}</h6>
                <h4 className="font-bold text-xl mb-5 hover:text-orange-500 transition delay-100">{title}</h4>
                <a href={link} {...attribute} className="font-bold text-orange-500 relative pr-8" >
                    Read More 
                    <span className="absolute right-0 -top-0.5 text-2xl"><BiRightArrowAlt /></span>
                </a> 
            </div>
        </div>
    )
}

export default BlogCard