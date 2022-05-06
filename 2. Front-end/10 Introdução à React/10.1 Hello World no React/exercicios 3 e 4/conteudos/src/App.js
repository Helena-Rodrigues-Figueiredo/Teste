import Header from "./Header";
import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import './App.css';

class App extends React.Component {
    render() {
        return(<div>
            <Header />
            <Content />
            <Footer />
        </div>);
    }
}

export default App;
