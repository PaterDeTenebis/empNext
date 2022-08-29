import Link from 'next/link';


function ButtonLink(props) {
    return(
        <button className="cabinet-btnMain">
            <Link className="cabinet-btnMain" href={props.to}>{props.text}</Link>
        </button>
    )
}

export default ButtonLink;