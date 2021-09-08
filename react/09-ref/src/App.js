import { useRef } from 'react'

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

function App() {
  return (
    <TextInputWithFocusButton/>
  )
}

export default App;
