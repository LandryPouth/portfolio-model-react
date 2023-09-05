import littleTitleIcone from './bannerImg.png'

function LittleTitle ({ children }) {
    return (
        <h4>
            <img src={littleTitleIcone} alt="" className='inline mr-2' />
            <span>{children}</span>
        </h4>
    )
}

export default LittleTitle;