import $ from 'jquery';
import Link from 'next/link';

import InputNum from '../components/inputNum';
import Nav from '../components/nav';
import About from '../components/about';
import Phase from '../components/phase';
import Button from '../components/button';
import THead from '../components/tHead';

function Private3() {
  const phaseModalActivator = () => {
    $('.cabinet-phaseModal').addClass('cabinet-active');
  };
  const phaseModalDeactivator = () => {
    $('.cabinet-phaseModal').removeClass('cabinet-active');
  };
  const seedText = () => {
    $('.cabinet-phaseText').text('phase:seed');
  };
  const private1Text = () => {
    $('.cabinet-phaseText').text('phase:private 1');
  };
  const private2Text = () => {
    $('.cabinet-phaseText').text('phase:private2');
  };
  const private3Text = () => {
    $('.cabinet-phaseText').text('phase:private3');
  };
  const idoText = () => {
    $('.cabinet-phaseText').text('phase:ido');
  };
  return (
    <div className="cabinet-mainWrapper">
      <Nav from="40 busd" to="100.000 busd" width="40%" phaseText="private 3" />
      <div className="cabinet-about">
        <div className="container">
          <div className="cabinet-aboutMain">
            <About />
            <div className="cabinet-aboutMain_swap">
              <div className="cabinet-aboutMain_swap_balanceItem">
                <div className="cabinet-heading">
                  <span>Balance:</span>
                </div>
                <div className="cabinet-num">70,000 $ETOM</div>
              </div>
              <div className="cabinet-aboutMain_swap_balanceItem">
                <div className="cabinet-heading">
                  <span>Exchange rate:</span>
                </div>
                <div className="cabinet-num">0,001 BUSD</div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="cabinet-aboutMain_swap_balanceItem">
                  <div className="cabinet-heading">
                    <span>Min exchange value</span>
                  </div>
                  <div className="cabinet-num" id="small">
                    0,001 BUSD
                  </div>
                </div>
                <div className="cabinet-aboutMain_swap_balanceItem">
                  <div className="cabinet-heading">
                    <span>MAX exchange value</span>
                  </div>
                  <div className="cabinet-num" id="small">
                    0,001 BUSD
                  </div>
                </div>
              </div>
              <div className="cabinet-divider"></div>
              <div className="cabinet-aboutMain_swap_balanceItem">
                <div className="cabinet-heading">
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
      <div className="cabinet-history">
        <div className="container">
          <div className="cabinet-historyMain">
            <div className="cabinet-heading">
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
                  <THead text="+98,000" specSpan="cabinet-textGreen" />
                  <THead text="100" />
                  <THead text="2022-06-03 04:14PM" />
                </tr>
                <tr>
                  <THead text="Sell" />
                  <THead text="IDO" />
                  <THead text="#1212" />
                  <THead text="-9,060" specSpan="cabinet-textRed" />
                  <THead text="100" />
                  <THead text="2022-06-03 04:14PM" />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="cabinet-phases">
        <div className="container">
          <div className="cabinet-phasesMain">
            <Phase
              classes="cabinet-phasesMain_item cabinet-private"
              heading="Seed"
              tgeValue="10,000 $ETOM"
              secMValue="10,000 $ETOM"
              trdMValue="10,000 $ETOM"
            />
            <Phase
              classes="cabinet-phasesMain_item"
              heading="Private 1"
              tgeValue="10,000 $ETOM"
              secMValue="10,000 $ETOM"
              trdMValue="10,000 $ETOM"
            />
            <Phase
              classes="cabinet-phasesMain_item"
              heading="Private 2"
              tgeValue="10,000 $ETOM"
              secMValue="10,000 $ETOM"
              trdMValue="10,000 $ETOM"
            />
            <Phase
              classes="cabinet-phasesMain_item"
              heading="Private 3"
              tgeValue="10,000 $ETOM"
              secMValue="10,000 $ETOM"
              trdMValue="10,000 $ETOM"
            />
            <Phase
              classes="cabinet-phasesMain_item"
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

export default Private3;
