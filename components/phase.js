
function Phase(props) {
    return(
        <div className={props.classes}>
            <div className="cabinet-heading">
                <span>{props.heading}</span>
            </div>
            <div className="cabinet-divider"></div>
            <span className="cabinet-textCommon"><strong>TGE</strong> {props.tgeValue}</span>
            <div className="cabinet-dividerSmall"></div>
            <span className="cabinet-textCommon">
                <strong>2d Month</strong> {props.secMValue}</span>
            <div className="cabinet-dividerSmall"></div>
            <span className="cabinet-textCommon"><strong>3d Month</strong> {props.trdMValue}</span>
        </div>
    )
}

export default Phase;