import React from 'react'

class Card extends React.Component {
  render () {
    return (
      <div className='card'>
        <header className='card-header'>
          <p className='card-header-title'>
            BugId:
          </p>
        </header>
        <div className='card-content'>
          <div className='content'>
            <span className='tag is-info'></span>
            <p>
              Assigned To:
            </p>
          </div>
          <br/>
          <small className='tag is-primary'></small>
        </div>
        <footer className='card-footer'>
          <a onClick='' className='is-warning card-footer-item'>Close</a>
          <a className='card-footer-item' onClick=''>Delete</a>
        </footer>
      </div>
    )
  }
}

export default Card
