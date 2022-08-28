function Progress(props) {
    const fillWidth = {
        width: props.width
    }
    return(
        <div className="phaseProgress">
            <div className="phaseProgress_indicator">
                <div className="phaseProgress_indicatorSumm">
                    {props.from} / {props.to}
                </div>
                <div className="phaseProgress_indicatorPercent">
                    {props.width} / 100%
                </div>
                <div className="phaseProgress_indicator_fill" style={fillWidth}></div>
            </div>
        </div>
    )
}

export default Progress;