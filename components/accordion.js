function Accordion(props) {
    const someClickHandler = () => {
        var acc = document.getElementsByClassName("heading");

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
        
        <div className="faqMain_item" onClick={someClickHandler}>
            <div className="trigger">+</div>
            <div className="heading" >
                <span>
                    {props.question}
                </span>
            </div>
            <div className="answer">
                <span>
                    {props.answer}
                </span>
            </div>
        </div>
        
    )
    
}

export default Accordion;