import {React} from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

const Layout = () => {
    return (
        <>
            <div id='layout_container'>
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    )
}
export default Layout;