import { useEffect } from "react";

import Video from "./components/Video/Video";
import VideoState from "./context/VideoState";

import Options from "./components/options/Options";
import Footer from "./components/Footer/Footer";
import ParticleBackground from "./ParticleBackground";
import './home.css';
const Home = () => {
  useEffect(() => {
    if (!navigator.onLine) alert("Connect to internet!");
  }, [navigator]);
  return ( 
   
    <VideoState>
      {/* <ParticleBackground/> */}
      <div className="App " style={{ height: "100%", width: "100%" }}>
     
        <Video />
        <Options />
        {/* <Footer /> */}
     
      
      </div>
    </VideoState>
  );
};

export default Home;
