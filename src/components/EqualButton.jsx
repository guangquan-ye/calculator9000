export default function EqualButton(props) {

  return (
    <button onClick={()=>props.handleClick(props.equal)}>{props.equal}</button>

  )
  
}