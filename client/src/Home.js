import { useEffect } from "react";

import Video from "./components/Video/Video";
import VideoState from "./context/VideoState";

import Options from "./components/options/Options";


import './home.css';
const Home = () => {
  useEffect(() => {
    if (!navigator.onLine) alert("Connect to internet!");
  }, [navigator]);
  return ( 
   
    <VideoState>
   
      <div className="App" >
     
        <Video />
        <Options />
       
     
      
      </div>
    </VideoState>
  );
};

export default Home;
