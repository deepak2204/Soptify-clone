import spotify_logo from '../assets/images/spotify_logo_white.svg'
import IconText from '../Components/shared/IconText'
import { Icon } from '@iconify/react'
import TextWithHover from '../Components/shared/TextWithHover'
import PlaylistView from '../Components/shared/PlaylistView'
import TextInput from '../Components/shared/TextInput'
import CloudinaryUpload from '../Components/shared/CloudinaryUpload'
import { useState } from 'react'
import {makeAuthenticatedPOSTRequest} from '../utils/serverHelpers'
import {useNavigate} from 'react-router-dom'

const UploadSong = () => {
  const [name, setName]= useState("");
  const [thumbnail, setThumbnail]= useState("");
  const [playlistUrl, setPlaylistUrl]= useState("");
  const [uploadedSongFileName, setUploadedSongFileName] = useState("");
  const navigate = useNavigate();

  const submitSong =async ()=>{
    const data = {name, thumbnail, track: playlistUrl};
    const response = await makeAuthenticatedPOSTRequest(
        "/song/create",
        data
    );
    if (response.err) {
      alert("Could not create song");
      return ;
    }
    alert("Success")
    navigate("/home");
  }
    
  return (
    <div className='h-full w-full flex'>
        {/* left side */}
        <div className='h-full w-1/5 bg-black flex flex-col justify-between pb-10 '>
            <div>
            <div className='logoDiv p-6'>
                <img src={spotify_logo} alt="" width={125} />
            </div>
            <div className='py-5'>
            <IconText 
               iconName={"material-symbols:home-outline"} displayText={"Home"} active
             />
            <IconText 
               iconName={"material-symbols:search"} displayText={"Search"}
             />
            <IconText 
               iconName={"icomoon-free:books"} displayText={"Your Library"}
             />
             <IconText 
               iconName={"material-symbols:library-music-sharp"} displayText={"My Music"}
             />
            </div>
            <div className='pt-5'>
            <IconText 
               iconName={"icon-park-outline:add"} displayText={"Create Playlist"}
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
                  <TextWithHover displayText={"Upload Song"}/>
                  <div className='bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer'>
                    dd
                  </div>
                  </div>
                </div>
            </div>
            <div className='content p-5 pt-0 overflow-auto'>
              <div className='text-2xl font-semibold mb-5 text-white mt-8'>
                Upload Your Music
              </div>
             <div  className="flex w-2/3 space-x-3 ">
                <div className={'w-1/2'}>
                <TextInput  label="Name" labelClassName={"text-white"} placeholder={"Name"} 
                value={name} 
                setValue={setName}/>
                </div>
                <div className={'w-1/2'}>
                <TextInput label="Thumbnail"  labelClassName={"text-white"}  placeholder={"Thumbnail"}
                value={thumbnail} 
                setValue={setThumbnail}/>
                </div>
                
             </div>
             <div className='py-5'>
                    {
                      uploadedSongFileName? (<div className='bg-white rounded-full p-3 w-1/3'>
                        {uploadedSongFileName.substring(0,20)}...

                      </div>):
                      (<CloudinaryUpload  setUrl={setPlaylistUrl} setName={setUploadedSongFileName}/>)
                    }
                </div>
                <div className='bg-white w-40 p-4 flex items-center justify-center rounded-full cursor-pointer font-semibold' onClick={()=>{submitSong()}}>
              Submit Song
            </div>
            </div>
            
        </div>
      
    </div>
  )
}





export default UploadSong
