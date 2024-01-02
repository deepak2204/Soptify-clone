 import spotify_logo from '../assets/images/spotify_logo_white.svg'
import IconText from '../Components/shared/IconText'
import { Icon } from '@iconify/react'
import TextWithHover from '../Components/shared/TextWithHover'
import PlaylistView from '../Components/shared/PlaylistView'

const focusCardsData =[
  {
      title:"Peaceful Piano", 
      description:"Relax and indulge with beautiful piano pieces",
      imgUrl:"https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg"
        
  },
  {
    title: "Deep Focus",
    description: "Keep calm and focus with this music",
      imgUrl: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80",
  },
  {
      title: "Instrumental Study",
      description: "Focus with soft study music in the background.",
      imgUrl: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
      title: "Focus Flow",
      description: "Up tempo instrumental hip hop beats",
      imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
      title: "Beats to think to",
      description: "Focus with deep techno and tech house",
      imgUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  ]

  const spotifyPlaylistsCardData = [
    {
        title: "This is one",
        description: "Relax and indulge with beautiful piano pieces",
        imgUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80",
    },
    {
        title: "Deep Focus",
        description: "Keep calm and focus with this music",
        imgUrl: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80",
    },
    {
        title: "Instrumental Study",
        description: "Focus with soft study music in the background.",
        imgUrl: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
        title: "Focus Flow",
        description: "Up tempo instrumental hip hop beats",
        imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
        title: "Beats to think to",
        description: "Focus with deep techno and tech house",
        imgUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
];

const HomeComponent = () => {
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
                  <TextWithHover displayText={"Sign Up"}/>
                  <div className='bg-white h-2/3 px-8 flex items-center justify-center rounded-full font-semibold cursor-pointer'>
                    Log in
                  </div>
                  </div>
                </div>
            </div>
            <div className='content p-5 pt-0 overflow-auto'>
              <PlaylistView titleText={"Focus"} cardsData={focusCardsData} />
              <PlaylistView titleText={"Spotify Playlist"} cardsData={spotifyPlaylistsCardData} />
              <PlaylistView titleText={"Sound of India"} cardsData={focusCardsData}/>
            </div>
        </div>
      
    </div>
  )
}





export default HomeComponent
