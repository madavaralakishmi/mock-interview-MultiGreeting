import './index.css'

const Greetings = props => {
  const {details, onButton, isActiveIdentify} = props
  const {id, imageAltText, imageUrl, buttonText} = details

  const onClickButton = () => {
    onButton(imageUrl, imageAltText, id)
  }
  const Result = isActiveIdentify ? 'change-color' : ''

  return (
    <li>
      <button className={Result} type="button" onClick={onClickButton}>
        {buttonText}
      </button>
    </li>
  )
}

export default Greetings
