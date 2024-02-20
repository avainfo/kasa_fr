import logo from "../assets/logo.png"
import '../style/Header.scss'

function Header() {
    return (
        <div className={"header"}>
            <img src={logo} alt="logo"/>
            <ul>
                <li><u>Accueil</u></li>
                <li>A Propos</li>
            </ul>
        </div>
    );
}

export default Header;
