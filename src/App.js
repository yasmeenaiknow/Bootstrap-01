import React from "react";
import Mainpage from "./components/mainPage";
import Navigation from "./components/Nav";
import Maintwo from "./components/mainTwo";
import Lastcontainer from "./components/lastContainer";
import Footer from "./components/footer";

function App() {
    return (
        <div>
            <Navigation />
            <Mainpage />
            <Maintwo />
            <Lastcontainer />
            <Footer />
        </div>
    );
}

export default App;
