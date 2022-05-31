import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';


function Details() {
    const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div>
        {
            loading? 
            <div className="loader-wrapper">
            <div className="loader">
              <div className="ball" />
              <div className="ball" />
              <div className="ball" />
            </div>
            <div className="text">LOADING...</div>
          </div>
            : <section className='popup'>
            <div className="content">
                <h2  style={{display:'inline'}}>{user.name} 
                <div  style={{display:'inline'}}> ({ user.username })</div></h2>            
                <p className="rating">Web site : {user.website}</p>
                <div className="plot">
                    <img  src="https://i.pinimg.com/originals/76/94/84/769484dafbe89bf2b8a22379658956c4.jpg" alt="Person"  className="" />
                    <p>{user.email}<br></br>{user.phone}</p>
                    
                </div>
                <button className="back"  onClick={()=>navigate('/')}>Back</button>
            </div>
        </section>
        }
    </div>
  )
}

export default Details
