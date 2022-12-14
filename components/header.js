/*illustrations*/
import logotype from '../img/logo.png';

/*components*/
import Button from './button';

function Header() {
    return(
        <header className="cabinet-header">
            <div className="container">
                <div className="cabinet-headerMain">
                    <a href="#" className="cabinet-logo">
                        <img src='../img/logo.png' alt="logo"/>
                    </a>
                    <Button text="Connect wallet" />
                </div>
            </div>
      </header>
    )
}

export default Header;