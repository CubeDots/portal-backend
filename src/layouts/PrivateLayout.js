import { Outlet, Navigate, NavLink } from "react-router-dom";
import { useIsAuthenticated } from 'react-auth-kit'
/*
import AgentsDashPage from "../pages/dash/AgentsDashPage"
import DashboardPage from "../pages/dash/DashboardPage"
import InvitationsDashPage from "../pages/dash/InvitationsDashPage"
import ProjectsDashPage from "../pages/dash/ProjectsDashPage"
import SalesDashPage from "../pages/dash/SalesDashPage"
import ReservationLogPage from "../pages/dash/ReservationLogPage"
import MeetingsListPage from "../pages/dash/MeetingsListPage"
*/
// common
// import NavBar from '../common/NavBar';
import Header from "../common/Header";
import Footer from "../common/Footer";


function PrivateLayout() {
  const isAuthenticated = useIsAuthenticated()

  if (!isAuthenticated()) {
    // Redirect to login
    console.log("valid Redirect to login");
    return (
      <Navigate to="/" replace />
    );
  }

  return (
    <>
      {/* <div>
        <NavBar />

        <main>
          <Outlet />
        </main>
      </div> */}
      <div className="app_private">
        <Header />
        <main className="mt-70 min-vh-100">
          <div className="dashboardSection">
            <div className="container">

              <ul className="nav nav-pills justify-content-start" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <NavLink className="nav-link " to="/dash/dashboard">Dashboard</NavLink>
                </li>
                

                {/*<li className="nav-item" role="presentation">
                  <NavLink className="nav-link" to="/dash/reservationlogs">Reservation Log</NavLink>
                </li>*/}
                
                <li className="nav-item" role="presentation">
                  <NavLink className="nav-link" to="/dash/meetings">Meetings</NavLink>
                </li>

                {/*<li className="nav-item" role="presentation">
                  <NavLink className="nav-link" to="/dash/sales">Sales</NavLink>
                </li>*/}

                <li className="nav-item" role="presentation">
                  <NavLink className="nav-link " to="/dash/invitations">Payment Plans</NavLink>
                </li>
                <li className="nav-item" role="presentation">
                  <NavLink className="nav-link "to="/dash/profile">Profile</NavLink>
                </li>
              </ul>
              <div className="dash-container">
                <Outlet />
              </div>
            </div>
          </div>

        </main>
        <Footer />

      </div>

    </>
  );
}

export default PrivateLayout;