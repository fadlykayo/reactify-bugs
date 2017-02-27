import React from 'react'
import { render } from 'react-dom'
import Title from './components/Title.jsx'
import Form from './components/Form.jsx'
import List from './components/List.jsx'
import Footer from './components/Footer.jsx'

class App extends React.Component {
  render () {
    return (
      <div>
        <div className='container'>
          <Title />
          <Form />
          <hr />
          <List />
        </div>
        <Footer />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'))
