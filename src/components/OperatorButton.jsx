export default function OperatorButton(props) {
    return (
    <button onClick={()=>props.handleClick(props.operator)} className={"button" + props.operator}>{props.operator}</button>

    )
    }