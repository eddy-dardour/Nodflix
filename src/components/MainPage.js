
import "./styles/MainPage.scss"
import NodflixLogo from "./assets/images/Netflix-logo.png";
function MainPage () {
    return <><Header/><MainPageTop/><MainPageMiddle/></>
}

export default MainPage;

function Header () {
    return (
    <header id="classic-header">
        <img src={NodflixLogo} alt="Nodflix" id="NodflixLogo"></img>
        <div id="btn-container">
        <button className="header-btn" id="Language">Language</button>
        <button className="header-btn" id="Signup">Sign up</button></div>
    </header>
    )
}




function MainPageTop() {
    return (<div className="mpt-container">
        <div className="text-block">
            <h1>
            Movies, TV series and much much more.
            </h1>
            <h2>
            From everywhere. Cancel at every moment.
            </h2>
            <p>
            Ready for Nodflix ? Subscribe or re-enable your subscription.
            </p>
            <div className="email-input">
            <input type="email" placeholder="E-mail adress" id="email"></input>
            <button type="submit" id="submit">Start</button>
            </div>        
            </div>
    </div>)
}

function MainPageMiddle () {
    return (<div className="mpm-container">
        <div className="mpm-grid-item">EL 1</div>
        <div className="mpm-grid-item">EL 2</div>
        <div className="mpm-grid-item">EL 3</div>
        <div className="mpm-grid-item">EL 4</div>
        <div className="mpm-grid-item">EL 5</div>
    </div>)
}