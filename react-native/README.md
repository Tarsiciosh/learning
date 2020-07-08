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

# using the auth server:
> console.clear() - to clear the console screen
> fetch('http://localhost:8000')


