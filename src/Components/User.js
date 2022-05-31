import React from 'react'
import {Link} from 'react-router-dom'

function User({user}) {

  return (
    <div>
      
  <div className="card">
    <img src="https://i.pinimg.com/originals/76/94/84/769484dafbe89bf2b8a22379658956c4.jpg" alt="Person" className="card__image" />
    <p className="card__name">{user.name}</p>
    <div className="grid-container">

     </div>
    <Link to={`/details/${user.id}`}>
    <button className="btn draw-border">Details</button>
    </Link>
    
    

  </div>
  
  
  </div>


    
  )
}

export default User