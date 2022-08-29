import Link from 'next/link';
import ButtonLink from '../components/btnLink';


import Header from '../components/header';

import $ from 'jquery';


function Whitepaper() {
   
    return(
        <div>
            <Header />
            <nav>
                <ButtonLink text="BUY $ETOM" to="/"/>
                <ButtonLink text="White paper" to="whitepaper"/>
                <ButtonLink text="FAQ" to="faq"/>
            </nav>
        </div>
    )
}

export default Whitepaper;