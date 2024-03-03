import logo from "../assets/logo.png"
import '../style/Header.scss'

function Header() {
	return (
		<div className={"header"}>
			<img src={logo ?? ""} alt="logo"/>
			<ul>
				<li data-underline={true}>
                    <a href={"/"}>Accueil</a>
                </li>
				<li data-underline={false}>
                    <a href={"/"}>A Propos</a>
                </li>
			</ul>
		</div>
	);
}

export default Header;
