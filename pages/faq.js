import Link from 'next/link';
import ButtonLink from '../components/btnLink';


import Accordion from '../components/accordion';
import Header from '../components/header';

function Faq() {
    return(
        <div className="cabinet-mainWrapper">
            <Header />
            <nav>
                <ButtonLink text="BUY $ETOM" to="/"/>
                <ButtonLink text="White paper" to="whitepaper"/>
                <ButtonLink text="FAQ" to="faq"/>
            </nav>
            
            <div className="cabinet-faq">
                <div className="container">
                    <div className="cabinet-faqMain">
                        <Accordion 
                            question="What are $ETOM and ECOM?"  
                            answer="ECOM (Empire Coin) is a universal in-game currency that serves as an internal means of payment. $ETOM (Empire Token) is a liquid token on the BSC network that serves as the means of buying and selling ECOM internal currency."
                        />
                        <Accordion 
                            question="Why is the game unavailable?"  
                            answer="The game is still in the finalization stage and is in closed beta testing"
                        />
                        <Accordion 
                            question="What is Empireum?"  
                            answer="Play-to-earn browser-based military-economic strategy"
                        />
                        <Accordion 
                            question="Will there be $ETOM presale rounds?"  
                            answer="Yes, before the start of the game and the public sale"
                        />
                        <Accordion 
                            question="How many presale rounds will there be?"  
                            answer="Five: Seed, Private 1, Private 2, Private 3, IDO"
                        />
                        <Accordion 
                            question="When will it be possible to play Empireum? "  
                            answer="The game will be launched along with the launch of public sale of $ETOM coin, the game will be launched "
                        />
                        <Accordion 
                            question="Why 5 rounds of $ETOM token presale? "  
                            answer="In order to gather the maximum number of interested users before the launch of the game"
                        />
                        <Accordion 
                            question="Why are there limits on buying tokens on presale rounds?"  
                            answer="To reduce the load on the system "
                        />
                        <Accordion 
                            question="How do I buy a $ETOM token on one of the presale rounds?"  
                            answer="Click the button 'Connec't, connecting your wallet to your personal cabinet where you have the necessary sum in BUSD to participate in the presale roundThen click on 'Buy $ETOM', type the amount in BUSD or $ETOM, within the specified limit and click on 'Buy' "
                        />
                        <Accordion 
                            question="When will the $ETOM tokens be unlocked? "  
                            answer="In the personal cabinet in the 'Buy $ETOM' tab, after the purchase of tokens at the presale round, the unlocks will be displayed, or see in the White Paper in the 'Tokenomics' section "
                        />
                        <Accordion 
                            question="How is Empireum different from other strategies in the GameFi industry?"  
                            answer="Empireum is the only strategy with non-linear and extremely interesting mechanics. The level of your civilization development depends on your studying and deepening in the game"
                        />
                        <Accordion 
                            question="Will there be NFT-cards added to the game?"  
                            answer="Yes, after the game's release an internal NFT-marketplace will be introduced as one of the updates, where it will be possible to buy NFT-cards."
                        />
                        <Accordion 
                            question="What is the RPG component of the game?"  
                            answer="The player interacts with the game (buys/upgrades buildings, collects resources, etc.) in return receives experience through which may improve the civilization"
                        />
                        <Accordion 
                            question="How much can I earn with Empireum?"  
                            answer="This is a strategy game, so the profitability is unique for each player. Each user, with the right approach to the use of resources and construction of buildings, will be able to create a civilization which will bring him 20% profit every month. But do not forget about the system of wars which with proper development of the army will give an opportunity to earn much more"
                        />
                        <Accordion 
                            question="Does the team have experience in crypto-directions?"  
                            answer="Yes, of course. Our team has many years of experience in creating, launching and promoting Defi and GameFi projects."
                        />
                        <Accordion 
                            question="Can we know what projects the team has launched?"  
                            answer="We can't share this information for security reasons. Because in our team there are developers from different countries where the legality of cryptocurrencies is regulated differently. "
                        />
                        <Accordion 
                            question="Will there be a referral program?"  
                            answer="Yes. The game will have a referral program on 9 levels deep for players. You can read about it in more detail in a white paper "
                        />
                        <Accordion 
                            question="In what currency can I buy $ETOM token?"  
                            answer="The liquid $ETOM token will be available for purchase in BUSD in the presale rounds. The main trading pair will be $ETOM-BUSD."
                        />
                        <Accordion 
                            question="Where will your token be listed?"  
                            answer="The initial listing of the liquid token $ETOM will be on the BSC-Network, followed by the listing interval on the centralized exchanges as laid out in the roadmap "
                        />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Faq;