import spotify_logo from '../assets/images/spotify_logo_white.svg'
import IconText from '../Components/shared/IconText'
import { Icon } from '@iconify/react'
import {Howl, Howler} from 'howler';
import TextWithHover from '../Components/shared/TextWithHover'
import PlaylistView from '../Components/shared/PlaylistView'
import { Children, useContext, useState,useLayoutEffect, useRef } from 'react';
import songContext from '../contexts/SongContext';
import CreatePlaylistModal from '../modals/CreatePlaylistModal';
import AddToPlaylistModal from '../modals/AddToPlaylistModal';
import {makeAuthenticatedPOSTRequest} from '../utils/serverHelpers'
import { Link } from 'react-router-dom';



const LoggedInContainer = ({children, cutActiveScreen}) => {
  const [createPlaylistModalOpen, setCreatePlaylistModalOpen] = useState(false);
  const [addToPlaylistModalOpen, setAddToPlaylistModalOpen] = useState(false);
  const {currentSong,setCurrentSong,soundPlayed, setSoundPLayed,isPaused, setIsPaused} = useContext(songContext);

  const firstUpdate = useRef(true);

  useLayoutEffect(()=>{
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (!currentSong) {
      return
    }
    console.log("here");
    changeSong(currentSong.track);
  },[currentSong && currentSong.track]);

  const addSongToPlaylist = async (playlistId) => {
    const songId = currentSong._id;

    const payload = {playlistId, songId};
    const response = await makeAuthenticatedPOSTRequest(
        "/playlist/add/song",
        payload
    );
    if(response._id){
        setAddToPlaylistModalOpen(false)
    }
};
  
  const playSound = () => {
    if (!soundPlayed) {
        return;
    }
    soundPlayed.play();
};

  const changeSong = (songSrc) =>{
    if (soundPlayed) {
      soundPlayed.stop();
    }
    let sound = new Howl({
      src: [songSrc],
      html5: true,
    })
    setSoundPLayed(sound);
    sound.play();
    setIsPaused(false)
  }

  const pausedSound = ()=>{
        soundPlayed.pause();
      }
    
      const togglePlayPause = ()=>{
        if (isPaused) {
          playSound();
          setIsPaused(false)
        }
        else{
          pausedSound();
          setIsPaused(true)
        }
      };



  return (
    <div className='h-full w-full  bg-app-black'>
      {createPlaylistModalOpen && <CreatePlaylistModal closeModal={()=>{setCreatePlaylistModalOpen(false)}} />}
      {addToPlaylistModalOpen && (
                <AddToPlaylistModal
                    closeModal={() => {
                        setAddToPlaylistModalOpen(false);
                    }}
                    addSongToPlaylist={addSongToPlaylist}
                />
            )}
        <div className={`${currentSong?"h-9/10":"h-full"} w-full flex`}>
          {/* left side */}
        <div className='h-full w-1/5 bg-black flex flex-col justify-between pb-10 '>
            <div>
            <div className='logoDiv p-6'>
                <img src={spotify_logo} alt="" width={125} />
            </div>
            <div className='py-5'>
            <IconText 
               iconName={"material-symbols:home-outline"} displayText={"Home"} active={cutActiveScreen == "home"} targetLink={"/home"}
             />
            <IconText 
               iconName={"material-symbols:search"} displayText={"Search"} active={cutActiveScreen == "search"} targetLink={"/search"}
             />
            <IconText 
               iconName={"icomoon-free:books"} displayText={"Your Library"} active={cutActiveScreen == "library"} targetLink={"/library"} 
             />
             <IconText 
               iconName={"material-symbols:library-music-sharp"} displayText={"My Music"} targetLink={"/mymusic"} active={cutActiveScreen == "mymusic"}
             />
            </div>
            <div className='pt-5'>
            <IconText  
               iconName={"icon-park-outline:add"} displayText={"Create Playlist"} onClick={()=>{setCreatePlaylistModalOpen(true);}}
             />
             <IconText 
               iconName={"fluent:heart-28-filled"} displayText={"Liked Songs"}
             />
            </div>
            </div>
            <div className='px-5'>
            <div className='border border-gray-100 text-white w-1/3 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer'>
              <Icon icon={"mingcute:earth-line"}/>
              <div className='ml-2 text-sm font-semibold'> English</div>
            </div>
            </div>
        </div>

        {/* Right side */}
        <div className='h-full w-4/5 bg-app-black overflow-auto'>
            <div className='navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end'>
                <div className='w-1/2 h-full flex'>
                  <div className='w-3/5 flex justify-around items-center '>
                    <TextWithHover displayText={"Premium"} />
                    <TextWithHover displayText={"Support"}/>
                    <TextWithHover displayText={"Download"}/> 
                    <div className='h-1/2 border-r border-white '></div>
                  </div>
                  <div className='w-2/5 flex justify-around h-full items-center'>
                     <Link to="/uploadsong"><TextWithHover displayText={"Upload Song"} /> </Link>
                  <div className='bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer'>
                    dd
                  </div>

                  </div>
                </div>
            </div>
            <div className='content p-5 pt-0 overflow-auto'>
               {children}
            </div>
        </div>
        </div>
        {/* current Playing song */}
        {
          currentSong &&
          <div className='w-full h-1/10 bg-black bg-opacity-30 text-white flex items-center px-4'>
          <div className='w-1/4 flex items-center'>
            <img src={currentSong.thumbnail} 
            alt="currentSongThumbnail" className='h-14 w-14 rounded' />
            <div className='pl-4' >
              <div className='text-sm hover:underline cursor-pointer'> {currentSong.name}</div>
              <div className='text-xs text-gray-500 hover:underline cursor-pointer '>
              {currentSong.artist.firstName +
                                    " " +
                                    currentSong.artist.lastName}
              </div>
            </div>
          </div>
          <div className='w-1/2 h-full flex justify-center flex-col items-center'>
              <div className=' w-1/3 flex justify-between items-center'>
                  <Icon icon="ri:shuffle-line" fontSize={30} className=' cursor-pointer text-gray-500 hover:text-white'/>
                  <Icon icon="ic:baseline-skip-previous" fontSize={30} className=' cursor-pointer text-gray-500 hover:text-white'/>
                  <Icon icon={isPaused? "gridicons:play":"zondicons:pause-solid"} fontSize={40} className=' cursor-pointer text-gray-500 hover:text-white'
                  onClick={togglePlayPause} />
                  <Icon icon="ic:baseline-skip-next"fontSize={30} className=' cursor-pointer text-gray-500 hover:text-white' />
                  <Icon icon="ic:baseline-repeat" fontSize={30} className=' cursor-pointer text-gray-500 hover:text-white'/>
                  
              </div>
              {/* <div>Progess Bar </div> */}
          </div>
          <div className='w-1/4 flex justify-end pr-4 space-x-4 items-center'>
             <Icon icon="ic:round-playlist-add"  fontSize={30} className=' cursor-pointer text-gray-500 hover:text-white' onClick={()=>{setAddToPlaylistModalOpen(true)}} />
             <Icon icon="ph:heart-bold" fontSize={25} className=' cursor-pointer text-gray-500 hover:text-white' />
          </div>
        
      </div>
        }
       
    </div>
  )
}





export default LoggedInContainer
