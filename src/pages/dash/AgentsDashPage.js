
import {useAuthHeader} from 'react-auth-kit';


function AgentsPage() {
    const authHeader = useAuthHeader();
    
    console.log("page name == AgentsPage");
    //console.log("authHeader == ",authHeader());

    return (
        <>
            <div>AgentsPage</div>
        </>
    );
}

export default AgentsPage;