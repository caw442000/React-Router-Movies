import React from 'react';
import { Route, Link, useHistory } from "react-router-dom";
import MovieList from "./MovieList";
import Movie from "./Movie"




const SavedList = props => {
  const history = useHistory();

  const routeToHome = () => {
    history.push("/");
  }
  

  return (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <Link to={`/Movies/${movie.id}`}>
        <span className="saved-movie">{movie.title}</span>
        
      </Link>
    ))}
    <div onClick={routeToHome} className="home-button">Home</div>

  </div>
  )
  
  };

export default SavedList;
