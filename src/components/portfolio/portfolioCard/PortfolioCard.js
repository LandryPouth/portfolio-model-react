import './PortfolioCard.css'

function PortfolioCard({ image, title, content }) {
    return (
        <div className="container h-72 rounded-lg relative mb-7">
            <img src={image} alt="#" className="object-fill w-full h-full rounded-lg" />
            <div className="content rounded-lg bg-orange-500 w-3/4 absolute opacity-0 left-1/2 -translate-x-1/2 px-5 py-5 text-white">
                <h1>{title}</h1>
                <span className="font-bold text-xl">{content}</span>
            </div>
        </div>
    )
}

export default PortfolioCard