import $ from 'jquery';
import Link from 'next/link';


import About from '../components/about';
import InputNum from '../components/inputNum';
import Phase from '../components/phase';
import Button from '../components/button';
import THead from '../components/tHead';
import Nav from '../components/nav';

function Seed() {
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
      <Nav from="10 busd" to="100.000 busd" width="10%" phaseText="seed" />
      <div className="cabinet-about">
        <div className="container">
          <div className="cabinet-aboutMain">
            <About />
            <div className="cabinet-aboutMain_swap">
              <div className="cabinet-aboutMain_swap_balanceItem">
                <div className="cabinet-heading">
                  <span>Balance:</span>
                </div>
                <div className="cabinet-num">189,000 $ETOM</div>
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
                  <THead text="+6,000" specSpan="textGreen" />
                  <THead text="100" />
                  <THead text="2022-06-03 04:14PM" />
                </tr>
                <tr>
                  <THead text="Sell" />
                  <THead text="IDO" />
                  <THead text="#1212" />
                  <THead text="-60" specSpan="textRed" />
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

export default Seed;
