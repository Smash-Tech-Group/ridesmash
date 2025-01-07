import Footer from "../../components/Footer"
import Title from "../../components/HirePurchaseTitle"
import Navbar from "../../components/Navbar"




const HirePurchasePage = () => {


  return (
    <>
   <div style={{
    background: "linear-gradient(to top, rgba(0, 92, 186, 0.8), rgba(2, 0, 102, 1))",
  }}>
            <Navbar/>
        <Title/>
    </div>

        <Footer/>
    </>
  )
}

export default HirePurchasePage