
import {useAuthHeader} from 'react-auth-kit';


function SalesPage() {
    const authHeader = useAuthHeader();

    console.log("page name == SalesPage");
    //console.log("authHeader == ",authHeader());

    return (
        <>
            <div>SalesPage</div>
        </>
    );
}

export default SalesPage;