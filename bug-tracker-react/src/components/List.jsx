import React from 'react'
import Card from './Card.jsx'

class List extends React.Component {
  render () {
    return (
      <div className='columns'>
        <div className='column is-medium' id='listBugs'>
          <Card />
        </div>
      </div>
    )
  }
}

export default List
