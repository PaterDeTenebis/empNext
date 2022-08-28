function Phase(props) {
    return(
        <div className={props.classes}>
            <div className="heading">
                <span>{props.heading}</span>
            </div>
            <div className="divider"></div>
            <span className="textCommon"><strong>TGE</strong> {props.tgeValue}</span>
            <div className="dividerSmall"></div>
            <span className="textCommon">
                <strong>2d Month</strong> {props.secMValue}</span>
            <div className="dividerSmall"></div>
            <span className="textCommon"><strong>3d Month</strong> {props.trdMValue}</span>
        </div>
    )
}

export default Phase;