import React, { useState } from 'react'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import './output.css';
import LoginComponent from './routes/Login';
import SignupComponent from './routes/Signup';
import HomeComponent from './routes/Home';
import LoggedInHome from './routes/LoggedInHome'
import { useCookies } from 'react-cookie';
import UploadSong from './routes/UploadSong';
import MyMusic from './routes/MyMusic';
import SinglePlaylistView from './routes/SinglePlaylistView'
import songContext from './contexts/SongContext';
import SearchPage from './routes/SearchPage';
import Library from './routes/Library';


const App = () => {
  const [currentSong, setCurrentSong] = useState(null)
  const [soundPlayed, setSoundPLayed]= useState(null);
  const [isPaused, setIsPaused] = useState(true);
  const [cookie, setCookie] = useCookies(["token"]);
  return (
    <div className='w-screen h-screen font-poppins'>
      <BrowserRouter>
      {cookie.token ? (
        <songContext.Provider value={{currentSong, setCurrentSong ,soundPlayed, setSoundPLayed,isPaused, setIsPaused}}>    
          <Routes>
            <Route path='/home' element={<LoggedInHome />} />
            <Route path='/uploadsong' element={<UploadSong />} />
            <Route path='/mymusic' element={<MyMusic />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/library' element={<Library />} />
            <Route path="/playlist/:playlistId" element={<SinglePlaylistView />}  />
            <Route path='*' element={<Navigate to={"/home"} />}/>
                
          </Routes>
        </songContext.Provider>   
       ) : (
          <Routes>
            <Route path='/login' element={<LoginComponent />}  />
            <Route path='/signup' element={<SignupComponent />}  />
            <Route path='/home' element={<HomeComponent/>} />
            <Route path='*' element={<Navigate to={"/login"} />}/>
          </Routes>
       )
      }
      </BrowserRouter>
    </div>
  )
}

export default App
