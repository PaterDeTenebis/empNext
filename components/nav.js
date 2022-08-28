import $ from 'jquery';
import Link from 'next/link';

import ButtonLink from './btnLink';
import Header from './header';

function Nav(props) {
    const fillWidth = {
        width: props.width
    }
    const phaseModalActivator = () => {
        $('.phaseModal').addClass('active');
    }
    const phaseModalDeactivator = () => {
        $('.phaseModal').removeClass('active');
    }
    const seedText = () => {
        $('.phaseText').text('phase:seed');
    }
    const private1Text = () => {
        $('.phaseText').text('phase:private 1');
    }
    const private2Text = () => {
        $('.phaseText').text('phase:private2');
    }
    const private3Text = () => {
        $('.phaseText').text('phase:private3');
    }
    const idoText = () => {
        $('.phaseText').text('phase:ido');
    }
    return(
        
        <div>
            <Header />
            <div className="phase">
                <div className="container">
                    <div className="phaseMain">
                        <span className="phaseText" onClick={phaseModalActivator}>
                            phase:{props.phaseText}
                        </span>
                    </div>
                    <div className="phaseProgress">
                        <div className="phaseProgress_indicator">
                            <div className="phaseProgress_indicatorSumm">
                                {props.from} / {props.to}
                            </div>
                            <div className="phaseProgress_indicatorPercent">
                                {props.width} / 100%
                            </div>
                            <div className="phaseProgress_indicator_fill" style={fillWidth}></div>
                        </div>
                    </div>
                </div>
            </div>
            <nav>
                <ButtonLink text="BUY $ETOM" to="/"/>
                <ButtonLink text="White paper" to="whitepaper"/>
                <ButtonLink text="FAQ" to="faq"/>
            </nav>
            <div className="phaseModal" onClick={phaseModalDeactivator}>
                <div className="phaseModal_main">
                    <Link href={'/'} onClick={seedText}>seed</Link>
                    <div className="phaseModal_main_divider"></div>
                    <Link href={'/private1'} onClick={private1Text}>private 1</Link>
                    <div className="phaseModal_main_divider"></div>
                    <Link href={'/private2'} onClick={private2Text}>private 2</Link>
                    <div className="phaseModal_main_divider"></div>
                    <Link href={'/private3'} onClick={private3Text}>private 3</Link>
                    <div className="phaseModal_main_divider"></div>
                    <Link href={'/ido'} onClick={idoText}>ido</Link>
                </div>
            </div>
        </div>
    )
}

export default Nav;