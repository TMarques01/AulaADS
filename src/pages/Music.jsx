import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Music.css";
import DecryptedText from "../components/DecryptedText";

export default function Music() {
  return (
    <>
      <Navbar color="#EBEBEB"/>
      <div className="music-page">
        <h1 className="music-title">Music</h1>
        <div>
      
          <span href="https://open.spotify.com/intl-pt/artist/6b8lysGnE0cBUaJTXfPkEg?si=tHkm3GYIRtuTQb6hkSjeDA" className="music-artist">
            <DecryptedText text="Lau Slater" animateOn="hover" sequential />
          </span>
          <span href="https://open.spotify.com/intl-pt/artist/3OUdYmUQWrvYgs3xnLRWTo?si=8kEVonl9S8GrVBog57dhOw" className="music-artist">
            <DecryptedText text="Personal" animateOn="hover" sequential />
          </span>
          <span href="https://open.spotify.com/intl-pt/artist/5JvPsNLlI2FJSma1R8Ih9X?si=v5ayW4ECSbuJTd2rK5O1uw" className="music-artist">
            <DecryptedText text="Other" animateOn="hover" sequential />
          </span>
        </div>
      </div>
      <Footer color="#EBEBEB" />
    </>
  );
}
