
import {useAuthHeader} from 'react-auth-kit';


function ProjectsPage() {
    const authHeader = useAuthHeader();

    console.log("page name == ProjectsPage");
    //console.log("authHeader == ",authHeader());

    return (
        <>
            <div>ProjectsPage</div>

            
        </>
    );
}

export default ProjectsPage;