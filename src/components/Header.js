import logo from "../assets/logo.png"
import '../style/Header.scss'

function Header({id}) {
	return (
		<div className={"header"}>
			<img src={logo ?? ""} alt="logo"/>
			<ul>
				<li data-underline={id === 0}>
                    <a href={"/"}>Accueil</a>
                </li>
				<li data-underline={id === 1}>
                    <a href={"/about"}>A Propos</a>
                </li>
			</ul>
		</div>
	);
}

export default Header;
