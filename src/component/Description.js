import React from 'react'
import{Link, useParams} from  'react-router-dom'
import "./Description.css";
import movies from "./MovieList";


function Description() {
 const {id}=useParams();
 const moviee= movies.find((el)=> el.id>=id)
 console.log(moviee)
  return (
    <div>
        <Link to="/"> <button >go to home</button> </Link>
        
        <div className="description">
            <div className="desc-content">
                <h3>{moviee.title} Description</h3>
                <p>{moviee.description}</p>
            </div>
            </div>
    </div>
  )
}

export default Description