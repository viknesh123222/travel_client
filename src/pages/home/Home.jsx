import Featured from "../../components/featured/Featured";
import Featured2 from "../../components/featured2/Featured";
import Featured3 from "../../components/featured3/Featured";


import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <Featured2/>
        <Featured3/>

        {/* <h1 className="homeTitle">Browse by property type</h1> */}
        {/* <PropertyList/> */}
        {/* <h1 className="homeTitle">Homes guests love</h1> */}
        {/* <FeaturedProperties/> */}
        {/* <MailList/> */}
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
