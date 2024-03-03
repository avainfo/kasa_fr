import "../style/Footer.scss"
import logo from "../assets/logo.png"

function Footer() {
	return (
		<div className={"footer"}>
			<img src={logo ?? ""} alt={"Logo"}/>
			<div>© 2020 Kasa. All rights reserved</div>
		</div>
	)
}

export default Footer;
