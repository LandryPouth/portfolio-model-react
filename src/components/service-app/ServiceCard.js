function ServiceCard({src, title, txt}) {
    return (
        <div className="md:max-w-xs mr-4 border border-orange-200 text-center px-5 py-12 mb-4 rounded hover:bg-orange-50 transition">
            <img src={src} alt="#" className="mx-auto mb-6" />
            <h4 className="font-medium text-2xl mb-4">
                {title}
            </h4>
            <span className="text-zinc-600 leading-7">
                {txt}
            </span>
        </div>
    )
}

export default ServiceCard