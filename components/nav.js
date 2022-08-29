import $ from 'jquery';
import Link from 'next/link';

import ButtonLink from './btnLink';
import Header from './header';

function Nav(props) {
    const fillWidth = {
        width: props.width
    }
    const phaseModalActivator = () => {
        $('.cabinet-phaseModal').addClass('cabinet-active');
    }
    const phaseModalDeactivator = () => {
        $('.cabinet-phaseModal').removeClass('cabinet-active');
    }
    const seedText = () => {
        $('.cabinet-phaseText').text('phase:seed');
    }
    const private1Text = () => {
        $('.cabinet-phaseText').text('phase:private 1');
    }
    const private2Text = () => {
        $('.cabinet-phaseText').text('phase:private2');
    }
    const private3Text = () => {
        $('.cabinet-phaseText').text('phase:private3');
    }
    const idoText = () => {
        $('.cabinet-phaseText').text('phase:ido');
    }
    return(
        
        <div>
            <Header />
            <div className="cabinet-phase">
                <div className="container">
                    <div className="cabinet-phaseMain">
                        <span className="cabinet-phaseText" onClick={phaseModalActivator}>
                            phase:{props.phaseText}
                        </span>
                    </div>
                    <div className="cabinet-phaseProgress">
                        <div className="cabinet-phaseProgress_indicator">
                            <div className="cabinet-phaseProgress_indicatorSumm">
                                {props.from} / {props.to}
                            </div>
                            <div className="cabinet-phaseProgress_indicatorPercent">
                                {props.width} / 100%
                            </div>
                            <div className="cabinet-phaseProgress_indicator_fill" style={fillWidth}></div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="cabinet-nav">
                <ButtonLink text="BUY $ETOM" to="/"/>
                <ButtonLink text="White paper" to="whitepaper"/>
                <ButtonLink text="FAQ" to="faq"/>
            </nav>
            <div className="cabinet-phaseModal" onClick={phaseModalDeactivator}>
                <div className="cabinet-phaseModal_main">
                    <Link href={'/'} onClick={seedText}>seed</Link>
                    <div className="cabinet-phaseModal_main_divider"></div>
                    <Link href={'/private1'} onClick={private1Text}>private 1</Link>
                    <div className="cabinet-phaseModal_main_divider"></div>
                    <Link href={'/private2'} onClick={private2Text}>private 2</Link>
                    <div className="cabinet-phaseModal_main_divider"></div>
                    <Link href={'/private3'} onClick={private3Text}>private 3</Link>
                    <div className="cabinet-phaseModal_main_divider"></div>
                    <Link href={'/ido'} onClick={idoText}>ido</Link>
                </div>
            </div>
        </div>
    )
}

export default Nav;