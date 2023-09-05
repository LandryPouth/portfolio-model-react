import check from './ressource/check.svg'

function CheckedList({ children }) {
    return (
        <span className='block mt-4 md:w-max'>
            <img src={check} alt="" className='w-4 inline mr-2' />
            {children}
        </span>
    )
}

export default CheckedList;