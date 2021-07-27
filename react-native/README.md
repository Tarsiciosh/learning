# To update npm:
$ sudo npm install npm@latest -g
(current version 6.14.5 - 17/06/20)

# To install devtools:
$ sudo npm install -g react-devtools --unsafe-perm=true

# To change the version of devtools:
$ npm install -d react-devtools@^3

# React Navigation getting started:
(in the project folder)
$ yarn add @react-navigation/native
$ yarn add @react-navigation/stack

$ expo install
@react-navigation/native
@react-navigation/stack
@react-native-community/masked-view

react-native-gesture-handler
react-native-reanimated
react-native-screens
react-native-safe-area-context
@react-native-community/masked-view

- to make it work I did also:
(in the project folder)
$ npm install -g expo-cli
$ expo update

$ yarn add @react-navigation/tabs
$ yarn add @react-navigation/bottom-tabs

# React Native Docs: React Navigation
$ npm install @react-navigation/native @react-navigation/stack

$ expo install
react-native-reanimated
react-native-gesture-handler
react-native-screens
react-native-safe-area-context 

# DATA API
fetch ('https://randomuser.me/api/?results=3&nat=us').then(response => response.json()).then(result => console.log(result))

async function fetchUsers() {
  try{
    const response = await fetch ('https://randomuser.me/api/?results=3&nat=us')
    const result = await response.json()
    console.log(result)
  } catch (err) {
    console.error (erro)
  }
}

# Using the auth server:
> console.clear() - to clear the console screen
> fetch('http://localhost:8000')

# Testing the navigators:
(in the project folder)
$ expo install
@react-navigation/native
@react-navigation/stack
@react-navigation/bottom-tabs
@react-native-community/masked-view

# git commands:
$ git diff App.js

# redux:
$ yarn add redux
$ yarn add react-redux

# python declarator:
@connect (getPropsFromState)
class contactListScreen extends React.Component

# to use fetch in node:
$ expo install isomorphic-fetch

# to use import and export syntax in Node:
$ expo install @std/esm

# 10AsyncReduxTools:
$ expo install
@react-navigation/native
@react-navigation/stack
@react-navigation/bottom-tabs
@react-native-community/masked-view
redux
react-redux
redux-thunk
redux-persist
@react-native-community/async-storage

# redux devtools
// Java - Spring - Oracle

# Using ESlint
$ expo install eslint
$ ./node_modules/.bin/eslint --init
$ ./node_modules/.bin/eslint api.js
$ expo install eslint-config-kensho
(.eslintrc.yml)
extends: kensho


env:
  browser: true
  es2020: true
extends:
  - 'eslint:recommended'
  - 'plugin:react/recommended'
parserOptions:
  ecmaFeatures:
    jsx: true
  ecmaVersion: 11
  sourceType: module
plugins:
  - react
rules:
  indent:
    - error
    - tab
  linebreak-style:
    - error
    - unix
  quotes:
    - error
    - double
  semi:
    - error
    - never


    48611-

# 11Performance:
$ expo install
@react-navigation/native
@react-navigation/stack
@react-navigation/bottom-tabs
@react-native-community/masked-view
redux
react-redux
redux-thunk
redux-persist
@react-native-community/async-storage

- change to ScrollView instead of SectionList

- add action type: 'CHANGE_FIRST_CONTACT'
- add action creator: 
export const changeFirstContact = () => ({type: CHANGE_FIRST_CONTACT})
- add in the reducer:
...
  if (action.type === CHANGE_FIRST_CONTACT) {
    const [firstContact, ...rest] = state
    const newContact = {...firstContact, name: 'Jordan'}
  }
...

- change Row to be a react pure component -> refresh much faster

- Animation example : runs in the native side
- there is a bloquing function to test that it can run independently


# 12DeployingTesting
$ same as 11Performance
$ expo install jest
$ npm t
$ npm t -- --watch 

(package.json)
"test": "jest --verbose",
"test:watch": "jest --watch --verbose"

$ npm run test:watch

- to update the snapshot:
$ npm t -- -u

## integration
(package.json)
  // "preset": "react-native" -> "jest-expo"
