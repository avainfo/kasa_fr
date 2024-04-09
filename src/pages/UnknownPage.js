import {Component} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ErrorContent from "../components/ErrorContent";

class UnknownPage extends Component {

    render() {
        return (
            <>
                <Header/>
                <ErrorContent/>
                <Footer/>
            </>
        );
    }

}

export default UnknownPage;