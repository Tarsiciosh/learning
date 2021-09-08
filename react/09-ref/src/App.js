import { useRef } from 'react'
import './styles.css'

function TextInputWithFocusButton(){
  
  const inputEl = useRef(null)
  
  const onButtonClick = () => {
    inputEl.current.focus()
  }

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  )
}

//fancy button example
function FancyButton(props) {
  return (
    <button>
      {props.children}
    </button>
  )
}

function App() {
  return (
    <>
      <p>esto es un paragraph</p>
      <TextInputWithFocusButton/>
      <FancyButton> Button </FancyButton>
      <button> hello </button>
    </>
  )
}

export default App