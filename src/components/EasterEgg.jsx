import gif from '../assets/img/easteregg.gif'
export default function EasterEgg(props) {

    return (
        <div className="modalContent">
            
            <h2>ITS OVER 9000 !!</h2>
            <img src={gif} alt="Its over 9000 !" />
            <button onClick={() => props.setShowModal(false)}>Klaus</button>

        </div>
    )
}