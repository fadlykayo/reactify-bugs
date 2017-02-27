import React from 'react'
import { render } from 'react-dom'
import Title from './components/Title'

class App extends React.Component {
  render () {
    return <div>
             <Title/>
           </div>
  }
}

render(<App/>, document.getElementById('app'))
