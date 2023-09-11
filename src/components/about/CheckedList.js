import { FaRegSquareCheck } from 'react-icons/fa6'

function CheckedList({ children }) {
    return (
        <span className='flex items-center mt-4 md:w-max'>
            <FaRegSquareCheck className='text-orange-500 mr-3' />
            {children}
        </span>
    )
}

export default CheckedList;