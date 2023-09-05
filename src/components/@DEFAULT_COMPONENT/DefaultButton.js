function DefaultButton({ children, ...attributes }) {
    return (
        <button
            className='text-lg font-bold bg-orange-500 rounded px-6 py-3 my-10 text-white'
            type="button"
            {...attributes}
        >
            {children}
        </button>
    )
}

export default DefaultButton;