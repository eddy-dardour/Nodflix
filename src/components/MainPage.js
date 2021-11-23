import tv from "./assets/images/tv.png"
import {useState} from 'react';
import child from "./assets/images/Child.png"
import "./styles/MainPage.scss"
import NodflixLogo from "./assets/images/Netflix-logo.png";
function MainPage () {
    return <><Header/><MainPageTop/><MainPageMiddle/><Footer/></>
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

function MainPageTextBlock () {
    return ( <div className="text-block">
    <h1>
    Movies, TV series and much much more.
    </h1>
    <h2>
    From everywhere. Cancel at every moment.
    </h2>
    <MainPageEmailButton/>
    </div>)
}

function MainPageEmailButton () {
    return (<><p>
        Ready for Nodflix ? Subscribe or re-enable your subscription.
        </p>
        <div className="email-input">
        <input type="email" placeholder="E-mail adress" id="email"></input>
        <button type="submit" id="submit">Start</button>
        </div></>)
}


function MainPageTop() {
    return (<div className="mpt-container">
       <MainPageTextBlock/>
    </div>)
}

function MainPageMiddle () {
    const [li1IsOpen, setLi1open] = useState(false);
    const [li2IsOpen, setLi2open] = useState(false);
    const [li3IsOpen, setLi3open] = useState(false);
    const [li4IsOpen, setLi4open] = useState(false);
    const [li5IsOpen, setLi5open] = useState(false);
    return (<div className="mpm-container">
        <div className="mpm-grid-item">
        <div className="mpm-grid-textbox">
        <div className="mpm-grid-bigtext">Watch NodFlix on your TV.</div>
        <div className="mpm-grid-smalltext"> Watch NodFlix on your Apple TV, Chromecast, XBOX, Playstation, and more...</div>
        </div>   
            <img src={tv} alt="element1" className="mpm-image1"></img>
        </div>

        <div className="mpm-grid-item">
        <div className="mpm-grid-textbox">
        <div className="mpm-grid-bigtext">Download your favorite series and watch them without connexion.</div>
        <div className="mpm-grid-smalltext">Save your favorite shows and always have something to watch</div>
        </div>   
        <img src={tv} alt="element1" className="mpm-image2"></img>
        </div>

         <div className="mpm-grid-item">
        <div className="mpm-grid-textbox">
        <div className="mpm-grid-bigtext">From anywhere.</div>
        <div className="mpm-grid-smalltext"> Watch movies and series from your smartphone, tablet, Ipad, TV, and more...</div>
        </div>   
        <img src={tv} alt="element1" className="mpm-image3"></img>
        </div>

         <div className="mpm-grid-item">
        <div className="mpm-grid-textbox">
        <div className="mpm-grid-bigtext">Create children profile.</div>
        <div className="mpm-grid-smalltext">Children discover new adventures with a space dedicated to them, already included</div>
        </div>   
        <img src={child} alt="element1" className="mpm-image4"></img>
        </div>

         <div className="mpm-grid-item-list">  
            <ul className="mpm-grid-ul">
                <p className="mpm-grid-ul-p">Questions & Answers</p>
                <li className="mpm-grid-li" onClick={() => 
                {
                    if (li1IsOpen === true) {
                        setLi1open(false);
                    } else { setLi1open(true)}
                }
                }>What is Nodflix ? {li1IsOpen ? (<p>Nodflix is a streaming platform to watch TV series and movies</p>): null}</li>
                 <li className="mpm-grid-li" onClick={() => 
                {
                    if (li2IsOpen === true) {
                        setLi2open(false);
                    } else { setLi2open(true)}
                }
                }>How much does it cost ? {li2IsOpen ? (<p>Watch Nodflix on your smartphone, tablet, smart TV, computer or streaming device, all for a fixed monthly fee. Plans range from US $ 7.99 to US $ 11.99 per month. No contract or additional costs.</p>): null}</li>
                 <li className="mpm-grid-li" onClick={() => 
                {
                    if (li3IsOpen === true) {
                        setLi3open(false);
                    } else { setLi3open(true)}
                }
                }>How can I unsubscribe ? {li3IsOpen ? (<p>Netflix offers great flexibility. No complicated contract. Without engagement. Two clicks are all it takes to cancel your account online. No cancellation fees: open or close your account at any time.</p>): null}</li>
                 <li className="mpm-grid-li" onClick={() => 
                {
                    if (li4IsOpen === true) {
                        setLi4open(false);
                    } else { setLi4open(true)}
                }
                }>Where can I watch NodFlix {li4IsOpen ? (<p>Netflix offers an extensive catalog including award-winning feature films, documentaries, TV series, anime and original Netflix shows. Watch Netflix whenever you want, whenever you want.</p>): null}</li>
                 <li className="mpm-grid-li" onClick={() => 
                {
                    if (li5IsOpen === true) {
                        setLi5open(false);
                    } else { setLi5open(true)}
                }
                }>Is Nodflix adapted to children ? {li5IsOpen ? (<p>Netflix Kids is included with your subscription and offers better control for parents, as well as a dedicated area for kids, with movies and series for the whole family.

                    Kids profiles include parental controls with PIN code to change the age category of content your kids can watch and block specific titles.</p>): null}</li>

            </ul>
            </div>
    </div>)
}

function Footer () {
    return (<footer className="footer">
        <div className="f-div">This is the footer</div>
    </footer>)
}