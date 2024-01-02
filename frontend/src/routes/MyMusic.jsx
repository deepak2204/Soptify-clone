import React from 'react';
import { useEffect, useState } from 'react'
import {makeAuthenticatedGETRequest, makeAuthenticatedPOSTRequest} from '../utils/serverHelpers'
import SingleSongCard from '../Components/shared/SingleSongCard'
import LoggedInContainer from '../containers/LoggedInContainer';

const MyMusic =()=>{
  const [songData ,setSongData] = useState([]);

      useEffect(() => {
      const getData = async () =>{
      const response = await makeAuthenticatedGETRequest("/song/get/mysongs");
      
      setSongData(response.data)
      };
      
      getData();
    },[]);
  return(
    <LoggedInContainer cutActiveScreen="mymusic">
         <div className='text-white text-xl font-semibold pb-2 pl-2 pt-8'>My Songs</div>
                <div className='space-y-3 overflow-auto'>
                  {songData.map((item)=>{
                   return <SingleSongCard info={item} playSound={() => {}}/>;
                  })}
                </div>

    </LoggedInContainer>
  )
}


export default MyMusic
