import $ from 'jquery';
import Link from 'next/link';

import InputNum from '../components/inputNum';
import Phase from '../components/phase';
import Button from '../components/button';
import THead from '../components/tHead';
import Nav from '../components/nav';
import About from '../components/about';

function Private1() {
  const phaseModalActivator = () => {
    $('.phaseModal').addClass('active');
  };
  const phaseModalDeactivator = () => {
    $('.phaseModal').removeClass('active');
  };
  const seedText = () => {
    $('.phaseText').text('phase:seed');
  };
  const private1Text = () => {
    $('.phaseText').text('phase:private 1');
  };
  const private2Text = () => {
    $('.phaseText').text('phase:private2');
  };
  const private3Text = () => {
    $('.phaseText').text('phase:private3');
  };
  const idoText = () => {
    $('.phaseText').text('phase:ido');
  };
  return (
    <div>
      <Nav from="50 busd" to="100.000 busd" width="50%" phaseText="private 1" />
      <div className="about">
        <div className="container">
          <div className="aboutMain">
            <About />
            <div className="aboutMain_swap">
              <div className="aboutMain_swap_balanceItem">
                <div className="heading">
                  <span>Balance:</span>
                </div>
                <div className="num">943,000 $ETOM</div>
              </div>
              <div className="aboutMain_swap_balanceItem">
                <div className="heading">
                  <span>Exchange rate:</span>
                </div>
                <div className="num">0,001 BUSD</div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="aboutMain_swap_balanceItem">
                  <div className="heading">
                    <span>Min exchange value</span>
                  </div>
                  <div className="num" id="small">
                    0,001 BUSD
                  </div>
                </div>
                <div className="aboutMain_swap_balanceItem">
                  <div className="heading">
                    <span>MAX exchange value</span>
                  </div>
                  <div className="num" id="small">
                    0,001 BUSD
                  </div>
                </div>
              </div>
              <div className="divider"></div>
              <div className="aboutMain_swap_balanceItem">
                <div className="heading">
                  <span>BUY ETOM FOR BUSD</span>
                </div>
                <InputNum placeholder="Enter BUSD Value" />
                <InputNum placeholder="Enter $ETOM Value" />
              </div>
              <Button text="BUY $ETOM" />
            </div>
          </div>
        </div>
      </div>
      <div className="history">
        <div className="container">
          <div className="historyMain">
            <div className="heading">
              <span>TRAnsaction history</span>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <THead text="Transaction type" />
                  <THead text="Phase" />
                  <THead text="Transaction ID" />
                  <THead text="Value ($ETOM)" />
                  <THead text="Value (BUSD)" />
                  <THead text="Date" />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <THead text="Buy" />
                  <THead text="IDO" />
                  <THead text="#1212" />
                  <THead text="+636,000" specSpan="textGreen" />
                  <THead text="100" />
                  <THead text="2022-06-03 04:14PM" />
                </tr>
                <tr>
                  <THead text="Sell" />
                  <THead text="IDO" />
                  <THead text="#1212" />
                  <THead text="-10,060" specSpan="textRed" />
                  <THead text="100" />
                  <THead text="2022-06-03 04:14PM" />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="phases">
        <div className="container">
          <div className="phasesMain">
            <Phase
              classes="phasesMain_item private"
              heading="Seed"
              tgeValue="10,000 $ETOM"
              secMValue="10,000 $ETOM"
              trdMValue="10,000 $ETOM"
            />
            <Phase
              classes="phasesMain_item"
              heading="Private 1"
              tgeValue="10,000 $ETOM"
              secMValue="10,000 $ETOM"
              trdMValue="10,000 $ETOM"
            />
            <Phase
              classes="phasesMain_item"
              heading="Private 2"
              tgeValue="10,000 $ETOM"
              secMValue="10,000 $ETOM"
              trdMValue="10,000 $ETOM"
            />
            <Phase
              classes="phasesMain_item"
              heading="Private 3"
              tgeValue="10,000 $ETOM"
              secMValue="10,000 $ETOM"
              trdMValue="10,000 $ETOM"
            />
            <Phase
              classes="phasesMain_item"
              heading="Ido"
              tgeValue="10,000 $ETOM"
              secMValue="10,000 $ETOM"
              trdMValue="10,000 $ETOM"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Private1;
