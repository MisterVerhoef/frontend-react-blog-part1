import './ErrorPage.css'
import {Link, NavLink} from "react-router-dom";
function ErrorPage() {

    return(
<>
        <h1>Woops something went wrong!</h1>

         <NavLink to="/">return to homepage</NavLink>
    </>
    );


}

export default ErrorPage;