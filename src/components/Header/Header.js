import './header.css';

const Header = () => {
    return(
        <header>
            <ul className="nav--horizontal">
                <li className=" nav--logo__style">Daily Mentor</li>
                <li className=" nav--link__style">Features</li>
                <li className=" nav--link__style">Pricing</li>
            </ul>
        </header>
    );
}

export default Header;