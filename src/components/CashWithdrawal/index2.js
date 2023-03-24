import './index.css'

const GetItem = props => {
  const {item, onDecrement} = props
  const {value, id} = item
  const onButton = () => {
    onDecrement(id)
  }
  return (
    <li>
      <button type="button" className="button" onClick={onButton}>
        {value}
      </button>
    </li>
  )
}
export default GetItem
