import "../style/CustomOptions.scss";

function CustomOption({content}) {
    document.getElementsByClassName("wrapper")
    return (
        <div className={"customOptions"}>
            {content}
            {/*Climatisation<br/>*/}
            {/*Wi-Fi<br/>*/}
            {/*Cuisine<br/>*/}
            {/*Espace de travail<br/>*/}
            {/*Fer à repasser<br/>*/}
            {/*Sèche-cheveux<br/>*/}
            {/*Cintres*/}
        </div>
    )
}

export default CustomOption;
