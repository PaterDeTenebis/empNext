
function Accordion(props) {
    const someClickHandler = () => {
        var acc = document.getElementsByClassName("cabinet-heading");

        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                /* Toggle between hiding and showing the active panel */
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                panel.style.display = "none";
                } else {
                panel.style.display = "block";
                };
    
                /* Toggle between indicator content */
                var plus = this.previousElementSibling;
                if (panel.style.display === "block") {
                    plus.innerHTML = "-"
                } else {
                    plus.innerHTML = "+"
                }
            });
        }
    }
    

    return(
        
        <div className="cabinet-faqMain_item" onClick={someClickHandler}>
            <div className="cabinet-trigger">+</div>
            <div className="cabinet-heading" >
                <span>
                    {props.question}
                </span>
            </div>
            <div className="cabinet-answer">
                <span>
                    {props.answer}
                </span>
            </div>
        </div>
        
    )
    
}

export default Accordion;