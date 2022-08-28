import Link from 'next/link';

function ButtonLink(props) {
    return(
        <button className="btnMain">
            <Link className="btnMain" href={props.to}>{props.text}</Link>
        </button>
    )
}

export default ButtonLink;