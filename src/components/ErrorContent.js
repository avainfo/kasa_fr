import "../style/ErrorContent.scss"

function ErrorContent() {
	return (
		<>
			<h1>404</h1>
			<h2>Oups! La page que vous demandez n'existe pas.</h2>
			<a href="/" className={"link"}>Retourner sur la page d’accueil</a>
		</>
	)
}

export default ErrorContent;