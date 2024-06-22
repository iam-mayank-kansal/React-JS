import contact_bg from "../assets/contact-bg.png"
import Navbar from "./Navbar"

const ContactHeader = () => {

    const bgStyle = {
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,1)), url(${contact_bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition:"top"
    }

    return(
        <>
        <Navbar/>
        <header style={bgStyle} className="h-screen">
        </header>
        </>
    )
}

export default ContactHeader;
