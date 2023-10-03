import React from "react";
import { ProfilePage } from "./Profile_Page";
import { useState } from 'react';
import movieList from '../data/test.json'; // Import the JSON data 


export function HomePage() {
  const [homeData, setHomeData] = useState('ecommerce product information');
  const [movieData, setmovieData] = useState(movieList);  

  return (
    <div>
      <h1>Home Page!</h1>

      <ProfilePage data={homeData}/>

      <h2>List of Movies:</h2>
      <ul>
        {movieData.map((movie) => (
          <li key={movie._id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}