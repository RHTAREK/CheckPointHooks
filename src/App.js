import './App.css';
import React ,{useState}from 'react'
import {moviesData} from './MoviesData'
import MovieList from './Component/MovieList';
import AddMovie from './Component/AddMovie'
import Search from './Component/Search'

function App() {
  const [movieList,setMoviesList]=useState(moviesData);
  const [searchMovieName,setSearchMovieName]=useState('');
  const [searchByRate,setSearchByRate] =useState(1)
const addMovie=(x)=>{
  setMoviesList([...movieList, x])}

  return (<div>
<Search setSearchMovieName={setSearchMovieName} searchByRate={searchByRate} setSearchByRate={setSearchByRate}/>
<MovieList searchMovieName={searchMovieName} movieList={movieList} searchByRate={searchByRate} setSearchByRate={setSearchByRate}  />
<AddMovie addMovie={addMovie} />

  </div> 
  )
}

export default App;
