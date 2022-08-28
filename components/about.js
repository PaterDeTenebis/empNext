/*Illustrations*/ 
import vector from '../img/Vector.png';
import vectorCoin from '../img/Vector_coin.png';
import vectorPerson from '../img/Vector_person.png';
import vectorList from '../img/Vector_list.png';
import vectorShip from '../img/Vector_ship.png';
import vectorFist from '../img/Vector_fist.png';
function About() {
    return(
        <div className="aboutMain_text">
            <div className="heading">
                <span>
                    About Empireum
                </span>
            </div>
            <span className="textCommon">
                Empireum is a play-to-earn military and economic strategy game designed specifically for those who are used to making money with their wits as well as for strategy enthusiasts:
            </span>
            <div className="divider"></div>
            <div className="aboutMain_text_list">
                <div className="aboutMain_text_list_item">
                    <img src='../img/Vector.png' alt="" /> Build and Develop
                </div>
                <div className="aboutMain_text_list_item">
                    <img src='../img/Vector_coin.png' alt="" /> Sell the accumulated resources
                </div>
                <div className="aboutMain_text_list_item">
                    <img src='../img/Vector_list.png' alt=""/> Seek out like-minded individuals
                </div>
                <div className="aboutMain_text_list_item">
                    <img src='../img/Vector_list.png' alt=""/> Learn technology
                </div>
                <div className="aboutMain_text_list_item">
                    <img src='../img/Vector_ship.png' alt=""/> Conquer new lands
                </div>
                <div className="aboutMain_text_list_item">
                    <img src='../img/Vector_fist.png' alt=""/> And build a Great Empire!
                </div>
            </div>
            <div className="divider"></div>
            <span className="textCommon">
                The essence of the game is to create your own civilization in the time of antiquity. 
                <br/>
                <br/>
                Thanks to the detailed game mechanics, players will be able to think through the most <br/>
                profitable city-building strategy on their own.
                <br/>
                <br/>
                For sale: $300,000,000,000 $ETOM <br/>
                Unlock: 5% at TGE, linear vesting until the 20th months.
            </span>
        </div>
    )
}

export default About;