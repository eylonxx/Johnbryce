import "./Slogan.css";

interface SloganProps {
    slogan: string;
    color: string;
    background: string;
}

function Slogan(props: SloganProps): JSX.Element {

    const style = {
        color: props.color,
        backgroundColor: props.background
    };

    return (
        <div className="Slogan Box" style={style}>
			<p>{props.slogan}</p>
        </div>
    );
}

export default Slogan;
