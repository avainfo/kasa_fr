import "../style/TopSection.scss"

function TopSection({background, text}) {
	let className = text === undefined ? "text" : "text active";
	console.log(text)
    return (
        <div className={"background"}>
            <img src={background} alt="background"/>
            <div className={className}><p>{text}</p></div>
        </div>
    );

}

export default TopSection;
