
import {useAuthHeader} from 'react-auth-kit';


function SettingsPage() {
    const authHeader = useAuthHeader();
    
    console.log("page name == SettingsPage");
    //console.log("authHeader == ",authHeader());

    return (
        <>
            <div>SettingsPage</div>

            <br />
            {authHeader()}
            
        </>
    );
}

export default SettingsPage;