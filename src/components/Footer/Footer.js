import './footer.css';

const Footer = () => {
    return(
        <main className="footer--section">
            <h1 className="footer--title"><span className="test">How it works</span></h1>
            <ul className="footer--ui">
                <li className="ui--bullet ui--bullet__shiftRight"><span className="bullet--title__style">1.</span> Drink Coffee</li>
                <li className="ui--bullet"><span className="bullet--title__style">2.</span> Listen to Lofi Music</li>
                <li className="ui--bullet ui--bullet__shiftLeft"><span className="bullet--title__style">3.</span> Code</li>
            </ul>
        </main>
    );
}

export default Footer;



