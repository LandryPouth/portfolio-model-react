function TestimonialCard({img, title, desc, text}) {
    return (
        <div className="w-full md:w-1/3 bg-yellow-50 hover:bg-yellow-100 px-7 py-10 shrink-0 rounded-xl">
            <div className="flex items-center">
                <img src={img} alt="img" />
                <div className="ml-5 leading-8">
                    <h4 className="font-semibold text-xl">{title}</h4>
                    <span className="text-zinc-600">{desc}</span>
                </div>
            </div>
            <p className="text-zinc-600 mt-7 leading-7">{text}</p>
        </div>
    )
}

export default TestimonialCard