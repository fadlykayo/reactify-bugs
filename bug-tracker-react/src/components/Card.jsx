import React from 'react'

class Card extends React.Component {
  render () {
    const cards = [
      {
        id: '37a5b737-7ce8-5756-b168-8cc57af44378',
        desc: 'Component bug',
        severity: 'Low',
        assignedTo: 'Gana',
        status: 'Open'
      },
      {
        id: 'f567e60a-43ea-5540-a4e9-e1934487d3a9',
        desc: 'System bug',
        severity: 'High',
        assignedTo: 'Syanmil',
        status: 'Closed'
      }
    ]
    return (
      <div>
        {cards.map((card) => {
           return (
             <div key={card.id}>
               <div className='card'>
                 <header className='card-header'>
                   <p className='card-header-title'>
                     BugId:
                     {card.id}
                   </p>
                 </header>
                 <div className='card-content'>
                   <div className='content'>
                     {card.desc}
                     <span className='tag is-info'>{card.severity}</span>
                     <p>
                       Assigned To:
                       {card.assignedTo}
                     </p>
                   </div>
                   <br/>
                   <small className='tag is-primary'>{card.status}</small>
                 </div>
                 <footer className='card-footer'>
                   <a onClick='' className='is-warning card-footer-item'>Close</a>
                   <a className='card-footer-item' onClick=''>Delete</a>
                 </footer>
               </div>
               <br />
             </div>
           )
         })}
      </div>
    )
  }
}

export default Card
