import React, { useContext } from "react";
import { ThemeContext } from "./theme-context"

const ThemedButton = (props) => {

  const theme = useContext(ThemeContext)
  
  return (
    <button 
      {...props}
      style={{color:theme.color, background:theme.background}}
    />
  )
}

/*
// the old class way:
class ThemedButton extends React.Component {
  render() {
    let props = this.props
    let theme = this.context
    return (
      <button 
       {...props}
       style={{backgroundColor: theme.background}}
      />
    )
  }
}

ThemedButton.contextType = ThemeContext
*/

export default ThemedButton