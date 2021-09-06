import React from 'react'
import { useState } from 'react';
import { ThemeContext, themes } from './theme-context'
import ThemedButton from './themed-button';

const Toolbar = (props) => {
  return (
    <ThemedButton onClick = {props.changeTheme}>
      Change theme
    </ThemedButton>
  )
}

const App = () => {

  const [theme, setTheme] = useState(themes.light)  
    
  function toggleTheme () {
    setTheme(prevTheme => (
        prevTheme === themes.dark 
          ? themes.light
          : themes.dark
      )         
    )
  }

  return (     
    <ThemeContext.Provider value={theme}>
      <Toolbar changeTheme={toggleTheme} />
    </ThemeContext.Provider> 
  )
}

export default App;
