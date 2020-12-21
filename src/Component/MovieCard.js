import React from 'react' 
  import Rate from './Rate'
import './MovieCardStyle.css';
const MovieCard =({movie:{name,date,rating,image},})=>{
    return( 
<div className='card'>
<img src ={image} alt='img'/>
<div className='cardDescription'>
    <h1>{name}</h1>
    <h2>Date: {date}</h2>
    <Rate rating={rating}/>
    </div>

</div>

    );
} ;
export default MovieCard  


