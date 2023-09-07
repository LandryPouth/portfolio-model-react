function PortfolioLink({ value, ...attributes }) {
    return (
        <button 
            type="button"
            className="mx-3 text-sm text-zinc-600 hover:text-orange-500 transition hover:after:block hover:after:w-1/2 hover:after:h-0.5 hover:after:bg-orange-500 hover:after:mt-2 hover:after:mx-auto"
            {...attributes}
        >
            {value}
        </button>
    )
}

export default PortfolioLink