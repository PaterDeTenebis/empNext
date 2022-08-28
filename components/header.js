/*illustrations*/
import logotype from '../img/logo.png';
/*components*/
import Button from './button';

function Header() {
    return(
        <header>
            <div className="container">
                <div className="headerMain">
                    <a href="#" className="logo">
                        <img src='../img/logo.png' alt="logo"/>
                    </a>
                    <Button text="Connect wallet" />
                </div>
            </div>
      </header>
    )
}

export default Header;