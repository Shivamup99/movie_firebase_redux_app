import React from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import Details from './pages/Details';
import Login from './pages/Login';
import StarWars from './components/StarWars'
import MovieRoute from './pages/MovieRoute';
import MovieInfo from './components/MovieInfo';
import Avenger from './components/Avenger';
import WatchList from './pages/WatchList';
function App() {
  return (
    <Router>
       <Header/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/details/:id' element={<Details/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/star-wars' element={<StarWars/>}/>
         <Route path='/movies' element={<MovieRoute/>}/>
         <Route path='/movie/information/:id' element={<MovieInfo/>}/>
         <Route path='/marvel/studio' element={<Avenger/>}/>
         <Route path='/watch/list' element={<WatchList/>}/>
       </Routes>
    </Router>
     
  );
}

export default App;
