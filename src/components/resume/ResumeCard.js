function ResumeCard({title, description, text}) {
    return (
        <section className="lg:w-1/4">
            <h4 className="text-xl font-semibold mb-3">{title}</h4>
            <h6 className="mb-3 text-zinc-600">{description}</h6>
            <p className="mb-7 text-zinc-600">{text}</p>
        </section>
    );
}

function ResumeNumber({title, text1, text2, text3, value1, value2, value3}) {
    return (
        <section className="lg:w-1/4">
            <h4 className="text-xl font-semibold my-5">{title}</h4>
            <p className="mb-3 text-zinc-600 flex justify-between">
                <span>{text1}</span>
                <span>{value1}</span>
            </p>
            <p className="mb-3 text-zinc-600 flex justify-between">
                <span>{text2}</span>
                <span>{value2}</span>
            </p>
            <p className="mb-3 text-zinc-600 flex justify-between">
                <span>{text3}</span>
                <span>{value3}</span>
            </p>
        </section>
    )
}

export { ResumeCard, ResumeNumber };