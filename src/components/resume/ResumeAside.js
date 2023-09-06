function ResumeAside({text}) {
    return (
        <section className="h-1/2 flex items-center relative -left-3">
            <div className="w-5 h-5 mr-3 bg-orange-500 rounded-full"></div>
            <p className="font-semibold text-xl">{text}</p>
        </section>
    )
}

export default ResumeAside