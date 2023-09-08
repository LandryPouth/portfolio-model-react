function ContactInput({...attributes}) {
    return (
        <input {...attributes} className="border border-orange-200 w-full md:w-1/2 md:first:mr-4 mb-5 p-5 outline-0 rounded-lg placeholder:text-zinc-500" type="text" />
    )
}

function ContactAside({icone, title, desc, link}) {
    return (
        <div className="flex">
            <div className="border border-orange-100 text-2xl mb-10 mr-3 text-orange-500 p-3 rounded bg-orange-100">
                {icone}
            </div>
            <div>
                <h5 className="font-bold text-lg">{title}</h5>
                <a href={link} className="hover:text-orange-500 transition delay-100">{desc}</a>
            </div>
        </div>
    )
}

export { ContactInput, ContactAside }