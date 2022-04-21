import { Outlet } from "react-router-dom";

// common

import Header from "../common/Header";
import Footer from "../common/Footer";
import StarterLogo from "../components/StarterLogo";

function PublicLayout() {
    // const isAuthenticated = useIsAuthenticated()

    // if (isAuthenticated()) {
    //     // Redirect to dashboard
    //     console.log("valid Redirect to dashboard");
    //     return (
    //         <Navigate to="/dash" replace />
    //     );
    // }

    return (
        <>
            <StarterLogo />
            <div className="app_public">
                
                <Header />
                
                <main style={{minHeight:200}}>
                    <Outlet />
                </main>
                <Footer />

            </div>

        </>
    );
}

export default PublicLayout;