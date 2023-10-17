export default function EqualButton(props) {

  return (
    <button className="equal-button" onClick={()=>props.handleClick(props.equal)}>{props.equal}</button>

  )
  
}