function sample() {
    return (
        <div>
            "Just started learning React!" 🚀
        </div>
    );
}

export default sample;

function GettingProps(props) {
    return (
        <div className="sample-text">
            {props.sampleText}
        </div>
    )
}

export { GettingProps };

function GetImageUrl({imageUrl}) {
    return <img className="react-img" src={imageUrl} alt="image url" />
}

function Profile({name,desc}){
    return (
        <div className="card">
             <div className="profile-section">
            <GetImageUrl imageUrl = "https://blog.logrocket.com/wp-content/uploads/2023/07/building-splash-screens-react-native.png"/>
            <div className="profile-data">
            <h4>{name}</h4>
            <p>{desc}</p>
            </div>
        </div>
        </div>
       
    )
}
export { Profile };