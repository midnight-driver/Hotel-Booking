import './home.css';
import Navbar from '../../componenets/navbar/Navbar';
import Header from "../../componenets/header/Header";
import Featured from "../../componenets/featured/Featured"
import PropertyList from "../../componenets/propertyList/PropertyList";
import FeaturedProp from "../../componenets/featuredProp/FeaturedProp";
import MailList from "../../componenets/mailList/MailList";
import Footer from "../../componenets/Footer/Footer";


// import List from '../list/List'
function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <Featured />

        <h1 className="homeTitle">Home guests love</h1>
        <FeaturedProp />
        <MailList />
        <Footer/>
      </div>
    </>
  );
}

export default Home
