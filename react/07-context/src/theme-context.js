import React from 'react'

export const themes = {
  light: {
    color: 'grey',
    background: 'white',
  },
  dark : {
    color: 'white',
    background: 'black'
  }
}

export const ThemeContext = React.createContext(
  themes.dark //default value
)