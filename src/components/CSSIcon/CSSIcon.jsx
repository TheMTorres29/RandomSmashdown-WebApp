import './CSSIcon.css'

const CSSIcon = (props) => {
  // NOTE: Dragging carries the fighter id so a player slot can look the fighter up on drop.
  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', String(props.id))
    e.dataTransfer.effectAllowed = 'move'
  }

  return (
    <div className='cssicon-container' draggable onDragStart={handleDragStart}>
        <h2 className='css-name'>{props.name}</h2>
        <img src={props.icon} alt="" className='css-icon' />
    </div>
  )
}

export default CSSIcon