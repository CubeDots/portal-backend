//import React from 'react'
import store from './store'
import { Provider } from 'react-redux'
import Counter from './components/Counter'

const App = () => {
  return (
    <Provider store={store}>
       <>
    hello
    </>
    <Counter />
   
  </Provider>
  )
}

export default App;