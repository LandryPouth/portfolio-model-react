function FooterTitle({title}) {
    return (
        <h5 className="text-lg font-semibold mb-7 md:mb-10">
            {title}
        </h5>
    )
}

function FooterLink({content, link}) {
    return (
        <a href={link} className="mb-5 w-fit hover:text-orange-500 transition delay-100">{content}</a>
    )
}

function FooterIcone({content, link}) {
    return (
        <div className="bg-orange-500 p-3 rounded text-lg hover:bg-white hover:text-orange-500 transition delay-100">
            <a href={link} className="mb-5">{content}</a>
        </div>
    )
}

export { FooterTitle, FooterLink, FooterIcone }