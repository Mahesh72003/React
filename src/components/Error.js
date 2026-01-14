import { Link, useRouteError } from "react-router"; 
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Something went wrong</h1>
            <h6>{err.status + " : " + err.statusText}</h6>
            <h6>{err.data}</h6>
            <Link to="/">Go Back</Link>
        </div>
    
    );
};

export default Error;