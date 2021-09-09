import React from 'react'
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

//fancy button example (Forwarding refs to DOM components)
/*
function FancyButton(props) {
  return (
    <button className="FancyButton">
      {props.children}
    </button>
  )
}
*/
const FancyButton = React.forwardRef((props,ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
))
// you can now get a ref directly to the DOM button:
const ref = React.createRef()

function App() {
  return (
    <>
      <p>esto es un paragraph</p>
      <TextInputWithFocusButton/>
      <FancyButton ref={ref}> Fancy Button </FancyButton>
      <button> hello </button>
    </>
  )
}

export default App