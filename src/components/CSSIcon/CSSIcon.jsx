import './CSSIcon.css'

const CSSIcon = (props) => {
  return (
    <div className='cssicon-container'>
        <h2 className='css-name'>{props.name}</h2>
        <img src={props.icon} alt="" className='css-icon' />
    </div>
  )
}

export default CSSIcon