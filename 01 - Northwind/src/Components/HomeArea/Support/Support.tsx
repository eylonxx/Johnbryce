import config from "../../../Utils/Config";
import "./Support.css";

function Support(): JSX.Element {
    return (
        <div className="Support Box">
            <p>
                Support Email: {config.supportEmail}
                &nbsp; | &nbsp;
                Phone: {config.supportPhone}
                &nbsp; | &nbsp;
                Page: {config.supportPage}
            </p>
        </div>
    );
}

export default Support;
