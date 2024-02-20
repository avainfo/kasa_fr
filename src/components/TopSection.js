import "../style/TopSection.scss"

function TopSection({background, text}) {
    return (
        <div className={"background"}>
            <img src={background} alt="background"/>
            <div className={"text"}><p>{text}</p></div>
        </div>
    );

}

export default TopSection;
