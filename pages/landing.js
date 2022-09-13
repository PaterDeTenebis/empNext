import $ from 'jquery';
import Rellax from 'rellax';
import React, { useRef, useEffect } from 'react';
import Phase1 from '../components/landingRmPhase1';
import Phase2 from '../components/landingRmPhase2';
import Phase3 from '../components/landingRmPhase3';
import Phase4 from '../components/landingRmPhase4';
import Phase5 from '../components/landingRmPhase5';
import Phase6 from '../components/landingRmPhase6';

function Landing() {
  const rellaxRef = useRef();
  useEffect(() => {
    new Rellax('.rellax', {
      // <---- Via class name
      speed: -2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }, []);
  return (
    <div className="landing_mainWrapper">
      <section className="landing_promo">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src="img/logoLand.png" alt="logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link landing_ttu" aria-current="page" href="#">
                      roadmap
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link landing_ttu" aria-current="page" href="#">
                      Tokenomics
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link landing_ttu" aria-current="page" href="#">
                      WhitePaper
                    </a>
                  </li>
                  <div className="landing_contractAddr">
                    Contract adress: <br />
                    0x0000000000000000000000000000000000000000
                  </div>
                  <button className="btn landing_btnLight" type="submit">
                    Buy $ETOM
                  </button>
                </ul>
              </div>
            </div>
          </nav>
          <div className="landing_promo_main">
            <div className="landing_textLogo">
              <img src="img/logoText.png" className="textLogo_img" alt="textLogo" />
            </div>
            <div className="landing_promo_list">
              <div className="landing_promo_list_item">
                <img src="img/fist.png" className="fistSm" alt="fist" />
                <span className="landing_textDark landing_ttu landing_textLg">
                  Create your own meta-civilization
                </span>
              </div>
              <div className="landing_promo_list_divider"></div>
              <div className="landing_promo_list_item">
                <img src="img/fist.png" className="fistSm" alt="fist" />
                <span className="landing_textDark landing_ttu landing_textLg">
                  Become a great General
                </span>
              </div>
              <div className="landing_promo_list_divider"></div>
              <div className="landing_promo_list_item">
                <img src="img/fist.png" className="fistSm" alt="fist" />
                <span className="landing_textDark landing_ttu landing_textLg">
                  Earn income like a true Emperor
                </span>
              </div>
            </div>
            <div className="landing_promo_socials">
              <div className="landing_promo_socialsItem">
                <img src="img/ds.png" className="landing_socialIcon" alt="discord" />
              </div>
              <div className="landing_promo_socialsItem">
                <img src="img/tg.png" className="landing_socialIcon" alt="telegram" />
              </div>
              <div className="landing_promo_socialsItem">
                <img src="img/tt.png" className="landing_socialIcon" alt="twitter" />
              </div>
            </div>
            <div className="landing_promo_nav">
              <button className="landing_btnDark1">Buy $ETOM</button>
              <button className="landing_btnDark2">Play</button>
            </div>
          </div>
          <div className="landing_promo_front rellax" data-rellax-speed="1">
            <img src="img/front.png" alt="" />
          </div>
          <div className="landing_promo_back1 rellax" data-rellax-speed="2">
            <img src="img/back1.png" alt="" />
          </div>
          <div className="landing_promo_back2 rellax" data-rellax-speed="-2">
            <img src="img/back2.png" alt="" />
          </div>
          <div className="landing_promo_cloud3 rellax" data-rellax-speed="-3">
            <img src="img/cloud3.png" alt="" />
          </div>
          <div className="landing_promo_cloud rellax">
            <img src="img/cloud.png" alt="" />
          </div>
        </div>
      </section>
      <section className="landing_features">
        <div className="landing_features_cloud">
          <img src="img/cloudbar.png" className="cloudBar" alt="cloudbar" />
        </div>
        <div className="container">
          <div className="landing_pageHeader">
            <span className="landing_textDark landing_textXl">
              {' '}
              Features of the Empireum metaverse{' '}
            </span>
            <span className="landing_textDark landing_textMd">
              Browser-based military and economic strategy in your pocket
            </span>
          </div>
          <div className="landing_features_main">
            <div className="landing_features_item">
              <div className="landing_features_icon">
                <img src="img/features1.png" alt="features1" />
              </div>
              <span className="landing_textDark landing_textLg">Genre Strategy</span>
              <span className="landing_textSm landing_textDark">
                Non-linear <br />
                and immersive gameplay <br />
                mechanics
              </span>
            </div>
            <div className="landing_features_item">
              <div className="landing_features_icon">
                <img src="img/features2.png" alt="features2" />
              </div>
              <span className="landing_textDark landing_textLg">Play-to-Earn</span>
              <span className="landing_textSm landing_textDark">
                Plan a strategy <br />
                to develop your own <br />
                civilization for maximum <br />
                profit
              </span>
            </div>
            <div className="landing_features_item">
              <div className="landing_features_icon">
                <img src="img/features3.png" alt="features3" />
              </div>
              <span className="landing_textDark landing_textLg">World Wars</span>
              <span className="landing_textSm landing_textDark">
                Attack other players, steal <br />
                their resources, but don't <br />
                forget to fortify your walls
              </span>
            </div>
            <div className="landing_features_item">
              <div className="landing_features_icon">
                <img src="img/features4.png" alt="features4" />
              </div>
              <span className="landing_textDark landing_textLg">ECOM</span>
              <span className="landing_textSm landing_textDark">
                A universal in-game stable <br />
                coin which serves as <br />
                internal payment
              </span>
            </div>
            <div className="landing_features_item">
              <div className="landing_features_icon">
                <img src="img/features5.png" alt="features5" />
              </div>
              <span className="landing_textDark landing_textLg"> $ETOM</span>
              <span className="landing_textSm landing_textDark">
                A liquid token on the BSC- <br />
                network that serves as a <br />
                means to buy and sell <br />
                ECOM's internal currency
              </span>
            </div>
          </div>
        </div>
        <div className="landing_sectionDivider">
          <div className="landing_sectionDivider_left"></div>
          <div className="landing_sectionDivider_center">
            <img src="img/horseman.png" alt="horseman" />
          </div>
          <div className="landing_sectionDivider_right"></div>
        </div>
      </section>
      <section className="landing_roadmap">
        <div className="container">
          <div className="landing_pageHeader">
            <span className="landing_textDark landing_textXl"> Roadmap </span>
          </div>
          <div className="landing_roadmap_main">
            <div className="landing_tabsWrapper">
              <div className="landing_roadmap_tabs">
                <button
                  className="landing_tabsItem landing_tabActive"
                  id="phase1"
                  onClick={(e) => {
                    e.preventDefault();
                    $('.landing_tabsItem').removeClass('landing_tabActive');
                    $('#landing_rmWrapper6').removeClass('landing_showToggler');
                    $('#landing_rmWrapper2').removeClass('landing_showToggler');
                    $('#landing_rmWrapper3').removeClass('landing_showToggler');
                    $('#landing_rmWrapper4').removeClass('landing_showToggler');
                    $('#landing_rmWrapper5').removeClass('landing_showToggler');

                    $('#landing_rmWrapper1').addClass('landing_showToggler');
                    $(e.currentTarget).addClass('landing_tabActive');
                  }}>
                  phase 1
                </button>
                <button
                  className="landing_tabsItem"
                  id="phase2"
                  onClick={(e) => {
                    e.preventDefault();
                    $('.landing_tabsItem').removeClass('landing_tabActive');
                    $('#landing_rmWrapper1').removeClass('landing_showToggler');
                    $('#landing_rmWrapper6').removeClass('landing_showToggler');
                    $('#landing_rmWrapper3').removeClass('landing_showToggler');
                    $('#landing_rmWrapper4').removeClass('landing_showToggler');
                    $('#landing_rmWrapper5').removeClass('landing_showToggler');

                    $('#landing_rmWrapper2').addClass('landing_showToggler');
                    $(e.currentTarget).addClass('landing_tabActive');
                  }}>
                  phase 2
                </button>
                <button
                  className="landing_tabsItem"
                  id="phase3"
                  onClick={(e) => {
                    e.preventDefault();
                    $('.landing_tabsItem').removeClass('landing_tabActive');
                    $('#landing_rmWrapper1').removeClass('landing_showToggler');
                    $('#landing_rmWrapper2').removeClass('landing_showToggler');
                    $('#landing_rmWrapper6').removeClass('landing_showToggler');
                    $('#landing_rmWrapper4').removeClass('landing_showToggler');
                    $('#landing_rmWrapper5').removeClass('landing_showToggler');

                    $('#landing_rmWrapper3').addClass('landing_showToggler');
                    $(e.currentTarget).addClass('landing_tabActive');
                  }}>
                  phase 3
                </button>
                <button
                  className="landing_tabsItem"
                  id="phase4"
                  onClick={(e) => {
                    e.preventDefault();
                    $('.landing_tabsItem').removeClass('landing_tabActive');
                    $('#landing_rmWrapper1').removeClass('landing_showToggler');
                    $('#landing_rmWrapper2').removeClass('landing_showToggler');
                    $('#landing_rmWrapper3').removeClass('landing_showToggler');
                    $('#landing_rmWrapper6').removeClass('landing_showToggler');
                    $('#landing_rmWrapper5').removeClass('landing_showToggler');

                    $('#landing_rmWrapper4').addClass('landing_showToggler');
                    $(e.currentTarget).addClass('landing_tabActive');
                  }}>
                  phase 4
                </button>
                <button
                  className="landing_tabsItem"
                  id="phase5"
                  onClick={(e) => {
                    e.preventDefault();
                    $('.landing_tabsItem').removeClass('landing_tabActive');
                    $('#landing_rmWrapper1').removeClass('landing_showToggler');
                    $('#landing_rmWrapper2').removeClass('landing_showToggler');
                    $('#landing_rmWrapper3').removeClass('landing_showToggler');
                    $('#landing_rmWrapper4').removeClass('landing_showToggler');
                    $('#landing_rmWrapper6').removeClass('landing_showToggler');

                    $('#landing_rmWrapper5').addClass('landing_showToggler');
                    $(e.currentTarget).addClass('landing_tabActive');
                  }}>
                  phase 5
                </button>
                <button
                  className="landing_tabsItem"
                  id="phase6"
                  onClick={(e) => {
                    e.preventDefault();
                    $('.landing_tabsItem').removeClass('landing_tabActive');
                    $('#landing_rmWrapper1').removeClass('landing_showToggler');
                    $('#landing_rmWrapper2').removeClass('landing_showToggler');
                    $('#landing_rmWrapper3').removeClass('landing_showToggler');
                    $('#landing_rmWrapper4').removeClass('landing_showToggler');
                    $('#landing_rmWrapper5').removeClass('landing_showToggler');

                    $('#landing_rmWrapper6').addClass('landing_showToggler');
                    $(e.currentTarget).addClass('landing_tabActive');
                  }}>
                  phase 6
                </button>
              </div>
            </div>
            <Phase1 />
            <Phase2 />
            <Phase3 />
            <Phase4 />
            <Phase5 />
            <Phase6 />
          </div>
        </div>
        <div className="landing_sectionDivider">
          <div className="landing_sectionDivider_left"></div>
          <div className="landing_sectionDivider_center">
            <img src="img/tokenDivider.png" alt="tokenDivider" />
          </div>
          <div className="landing_sectionDivider_right"></div>
        </div>
      </section>
      <section className="landing_tokenomics">
        <div className="container">
          <div className="landing_pageHeader">
            <span className="landing_textDark landing_textXl"> Tokenomics </span>
          </div>
          <div className="landing_tokenomics_main">
            <div className="landing_tokenomics_bar landing_textDark landing_textXl">
              Total supply - <br />
              20 000 000 000 <br />
              $ETOM
            </div>
            <div className="landing_tokenomics_legend">
              <div className="landing_tokenomics_legendItem landing_itemBrown">
                <span className="landing_textDark landing_textLg">1,5%</span>
                <span className="landing_textDark landing_textSm">
                  1st Private Round <br />
                  $300,000,000 $ETOM
                </span>
                <span className="landing_textDark landing_textXs">
                  5% at TGE, 6% starting from the <br />
                  2nd month, 6.5% from the 7th <br />
                  month
                </span>
              </div>
              <div className="landing_tokenomics_legendItem landing_itemBlue">
                <span className="landing_textDark landing_textLg">15%</span>
                <span className="landing_textDark landing_textSm">
                  Farming/staking - <br />
                  $3,000,000,000 $ETOM
                </span>
                <span className="landing_textDark landing_textXs">Not blocked</span>
              </div>
              <div className="landing_tokenomics_legendItem landing_itemGolden">
                <span className="landing_textDark landing_textLg">1,5%</span>
                <span className="landing_textDark landing_textSm">
                  Seed Round <br />
                  $300,000,000,000 $ETOM
                </span>
                <span className="landing_textDark landing_textXs">
                  5% at TGE, linear vesting in 20 <br />
                  months
                </span>
              </div>
              <div className="landing_tokenomics_legendItem landing_itemGray">
                <span className="landing_textDark landing_textLg">8%</span>
                <span className="landing_textDark landing_textSm">
                  Advisor <br />
                  $1,600,000,000 $ETOM
                </span>
                <span className="landing_textDark landing_textXs">4% every month </span>
              </div>
              <div className="landing_tokenomics_legendItem landing_itemYellow">
                <span className="landing_textDark landing_textLg">19,625%</span>
                <span className="landing_textDark landing_textSm">
                  Reserve - <br />
                  $3,825,000,000 $ETOM
                </span>
                <span className="landing_textDark landing_textXs">
                  Every month blocked, once a month unblocked
                </span>
              </div>
              <div className="landing_tokenomics_legendItem landing_itemOtange">
                <span className="landing_textDark landing_textLg">22%</span>
                <span className="landing_textDark landing_textSm">
                  Team <br />
                  $4,400,000,000 $ETOM
                </span>
                <span className="landing_textDark landing_textXs">
                  Cliff 6 months, linear vesting in 30 <br />
                  months
                </span>
              </div>
              <div className="landing_tokenomics_legendItem landing_itemSky">
                <span className="landing_textDark landing_textLg">0,875%</span>
                <span className="landing_textDark landing_textSm">
                  Liquidity - <br />
                  $175 000 000 $ETOM
                </span>
                <span className="landing_textDark landing_textXs">
                  (1 225 000 BUSD) <br />
                  Blocked for 24 months
                </span>
              </div>
              <div className="landing_tokenomics_legendItem landing_itemBrown">
                <span className="landing_textDark landing_textLg">4%</span>
                <span className="landing_textDark landing_textSm">
                  Marketing <br />
                  $800,000,000 $ETOM
                </span>
                <span className="landing_textDark landing_textXs">10% every month </span>
              </div>
              <div className="landing_tokenomics_legendItem landing_itemBezh">
                <span className="landing_textDark landing_textLg">5%</span>
                <span className="landing_textDark landing_textSm">
                  Airdrop - <br />
                  $1,000,000 $ETOM
                </span>
                <span className="landing_textDark landing_textXs">20% every 12 months </span>
              </div>
              <div className="landing_tokenomics_legendItem landing_itemGround">
                <span className="landing_textDark landing_textLg">1,25%</span>
                <span className="landing_textDark landing_textSm">
                  IDO <br />
                  $350,000,000 $ETOM
                </span>
                <span className="landing_textDark landing_textXs">
                  15% at TGE, 8,5% from the 2nd month
                </span>
              </div>
              <div className="landing_tokenomics_legendItem landing_itemSilver">
                <span className="landing_textDark landing_textLg">20%</span>
                <span className="landing_textDark landing_textSm">
                  Listing Centralization spot <br />
                  20% $4,000,000,000 $ETOM
                </span>
                <span className="landing_textDark landing_textXs">
                  Unlocking once a month the <br />
                  whole amount. Takes the <br />
                  necessary amount of tokens for <br />
                  the listing and blocks it again
                </span>
              </div>
              <div className="landing_tokenomics_legendItem landing_itemDarkBrown">
                <span className="landing_textDark landing_textLg">0,75%</span>
                <span className="landing_textDark landing_textSm">
                  2nd Private Round <br />
                  $150,000,000 $ETOM
                </span>
                <span className="landing_textDark landing_textXs">
                  5% at TGE, 6% starting from the <br />
                  2nd month, 6.5% from the 7th <br />
                  month
                </span>
              </div>
              <div className="landing_tokenomics_legendItem landing_itemLighterBrown">
                <span className="landing_textDark landing_textLg">0,5%</span>
                <span className="landing_textDark landing_textSm">
                  3d Private Round - <br />
                  100 000 000 $ETOM
                </span>
                <span className="landing_textDark landing_textXs">
                  5% at TGE, 6% starting from the <br />
                  2nd month, 6.5% from the 7th <br />
                  month
                </span>
              </div>
            </div>
          </div>
          <div className="landing_tokenomics_table">
            <div className="landing_tokenomics_table_side">
              <div className="landing_tokenomics_table_side_heading landing_textDark landing_textLg">
                Token price:
              </div>
              <div className="landing_tokenomics_table_sideLine">
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd">
                  Seed -
                </div>
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd">
                  0.001 BUSD
                </div>
              </div>
              <div className="landing_tokenomics_table_sideLine">
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd">
                  Private 1 -
                </div>
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd">
                  0,0012 BUSD
                </div>
              </div>
              <div className="landing_tokenomics_table_sideLine">
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd">
                  Private 2 -
                </div>
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd">
                  0,0014 BUSD
                </div>
              </div>
              <div className="landing_tokenomics_table_sideLine">
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd">
                  Private 3 -
                </div>
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd">
                  0,0016 BUSD
                </div>
              </div>
              <div className="landing_tokenomics_table_sideLine">
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd">
                  PRIVATE -
                </div>
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd">
                  0.005 BUSD
                </div>
              </div>
              <div className="landing_tokenomics_table_sideLine">
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd">
                  Public -
                </div>
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd">
                  0,007 BUSD
                </div>
              </div>
            </div>
            <div className="landing_tokenomics_table_side">
              <div className="landing_tokenomics_table_side_heading landing_textDark landing_textLg">
                Buying limits:
              </div>
              <div className="landing_tokenomics_table_sideLine">
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd">
                  Seed Min
                </div>
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd">
                  5000 BUSD <br />
                  Max
                </div>
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd">
                  20 000 BUSD
                </div>
              </div>
              <div className="landing_tokenomics_table_sideLine">
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd">
                  Private 1 Min
                </div>
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd">
                  1000 BUSD <br />
                  Max
                </div>
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd">
                  5000 BUSD
                </div>
              </div>
              <div className="landing_tokenomics_table_sideLine">
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd">
                  Private 2 Min
                </div>
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd">
                  800 BUSD <br />
                  Max
                </div>
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd">
                  4000 BUSD
                </div>
              </div>
              <div className="landing_tokenomics_table_sideLine">
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd">
                  Private 3 Min
                </div>
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd">
                  500 BUSD <br />
                  Max
                </div>
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd">
                  2500 BUSD
                </div>
              </div>
              <div className="landing_tokenomics_table_sideLine">
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd">
                  IDO Min
                </div>
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd">
                  100 BUSD <br />
                  Max
                </div>
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd">
                  2500 BUSD
                </div>
              </div>
            </div>
            <div className="landing_tokenomics_table_side landing_comission">
              <div className="landing_tokenomics_table_side_heading landing_textDark landing_textLg">
                Commission:
              </div>
              <div className="landing_tokenomics_table_sideLine">
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd">
                  Buy
                </div>
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd">
                  2%
                </div>
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd landing_tableWide">
                  goes to redeem coins <br />
                  from liquidity and are <br />
                  burned
                </div>
              </div>
              <div className="landing_tokenomics_table_sideLine">
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd">
                  Buy
                </div>
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd">
                  2%
                </div>
                <div className="landing_tokenomics_table_sideLine_item landing_textDark landing_textMd landing_tableWide">
                  goes on burning
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="landing_sectionDivider">
          <div className="landing_sectionDivider_left"></div>
          <div className="landing_sectionDivider_center">
            <img src="img/helmetDivider.png" alt="helmetDivider" />
          </div>
          <div className="landing_sectionDivider_right"></div>
        </div>
      </section>
      <section className="landing_team">
        <div className="container">
          <div className="landing_pageHeader">
            <span className="landing_textDark landing_textXl"> Developer Team </span>
          </div>
          <div className="landing_team_main">
            <div className="landing_team_item">
              <img src="img/theron.png" className="landing_team_itemImg" />
              <span className="landing_textDark">cto, founder</span>
            </div>
            <div className="landing_team_item">
              <img src="img/lykos.png" className="landing_team_itemImg" />
              <span className="landing_textDark">cmo, founder</span>
            </div>
            <div className="landing_team_item">
              <img src="img/alexios.png" className="landing_team_itemImg" />
              <span className="landing_textDark">coo, founder</span>
            </div>
            <div className="landing_team_item">
              <img src="img/kserkes.png" className="landing_team_itemImg" />
              <span className="landing_textDark">advisor, marketing expert</span>
            </div>
            <div className="landing_team_item">
              <img src="img/ikaros.png" className="landing_team_itemImg" />
              <span className="landing_textDark">ceo, founder</span>
            </div>
          </div>
        </div>
      </section>
      <footer className="landing_footer">
        <div className="landing_footer_banner">
          <img src="img/footerBanner.png" alt="" className="landing_footer_bannerImg" />
        </div>
        <div className="landing_footer_sosials">
          <button className="landing_footer_sosialsItem">
            <img src="img/fb.png" alt="" />
          </button>
          <button className="landing_footer_sosialsItem">
            <img src="img/inst.png" alt="" />
          </button>
          <button className="landing_footer_sosialsItem">
            <img src="img/twit.png" alt="" />
          </button>
          <button className="landing_footer_sosialsItem">
            <img src="img/yt.png" alt="" />
          </button>
        </div>
        <div className="landing_footer_bottom"></div>
      </footer>
    </div>
  );
}

export default Landing;
