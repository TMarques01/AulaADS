import "../styles/Home.css";
import DecryptedText from "../components/DecryptedText";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      <section className="hero" >
        <Navbar color="#ebebeb" page="home" />
        <div className="intro-header">
          <p className="name">Tiago Marques</p>
          <p className="title">
            <span className="title-strong">software</span>
            <span className="title-normal">engineer</span>
          </p>
        </div>

        <Footer />

      </section>
    </>
  );
}
