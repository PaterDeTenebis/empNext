
function Progress(props) {
    const fillWidth = {
        width: props.width
    }
    return(
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
    )
}

export default Progress;