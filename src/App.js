import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from 'react-auth-kit';
import * as Bootstrap from 'bootstrap';
import "animate.css/animate.min.css";
//import logo from './logo.svg';
import './scss/App.scss';
// import StarterLogo from "./components/StarterLogo";
import Loader from "./components/Loader";

// frontend
import HomePage from "./pages/HomePage";
// import LoginPage from "./pages/LoginPage";
// import AboutUsPage from "./pages/AboutUsPage";
// import ProjectsPage from "./pages/ProjectsPage";
// import WhyUsPage from "./pages/WhyUsPage";
// import ContactUsPage from "./pages/ContactUsPage";

// backend
// import DashboardPage from "./pages/dash/DashboardPage";
// import SettingsPage from './pages//dash/SettingsPage';



// layout
import PublicLayout from './layouts/PublicLayout';
import PrivateLayout from './layouts/PrivateLayout';

// error
import NotFoundPage from "./errors/NotFound";

import DemoPdfPage from "./components/pdf/DemoPdfPage";


const FindAgentsPage = React.lazy(() => import("./pages/FindAgentsPage"));
const AboutUsPage = React.lazy(() => import("./pages/AboutUsPage"));
const ProjectsPage = React.lazy(() => import("./pages/ProjectsPage"));
const UnitsPage = React.lazy(() => import("./pages/UnitsPage"));
const ProjectDetail = React.lazy(() => import("./pages/ProjectDetail"));
const UnitList = React.lazy(() => import("./components/UnitList"));
const WhyUsPage = React.lazy(() => import("./pages/WhyUsPage"));
const ContactUsPage = React.lazy(() => import("./pages/ContactUsPage"));
const OfferPage = React.lazy(() => import("./pages/OfferPage"));
const ThreeDSystemPage = React.lazy(() => import("./pages/ThreeDSystemPage"));
const TwoDSystemPage = React.lazy(() => import("./pages/TwoDSystemPage"));
const HelpSupport = React.lazy(() => import("./pages/HelpSupport"))
const RestPasswordPage = React.lazy(() => import("./pages/RestPasswordPage"));


const PrivacyPolicyPage = React.lazy(() => import("./pages/PrivacyPolicyPage"));
const TermsOfUsePage = React.lazy(() => import("./pages/TermsOfUsePage"));
const FaqsPage = React.lazy(() => import("./pages/FaqsPage"));
// const Updates = React.lazy(() => import("./pages/Updates"));
const CuSocialDetailPage = React.lazy(() => import("./pages/CuSocialDetailPage"));
//const CuSocialByCategoryPage = React.lazy(() => import("./pages/CuSocialByCategoryPage"));
const CuSocialBlogPage = React.lazy(() => import("./pages/CuSocialBlogPage"));
const CuSocialOffersPage = React.lazy(() => import("./pages/CuSocialOffersPage"));

const CuSocialPage = React.lazy(() => import("./pages/CuSocialPage"));
const PlateFormTours = React.lazy(() => import("./pages/PlateFormTours"));
const CuLibraryPage = React.lazy(() => import("./pages/CuLibraryPage"));
const DownloadsPage = React.lazy(() => import("./pages/DownloadsPage"));
const SiteMapPage = React.lazy(() => import("./pages/SiteMapPage"));
const HelpNSupportPage = React.lazy(() => import("./pages/HelpNSupportPage"));


const DashboardPage = React.lazy(() => import("./pages/dash/DashboardPage"));
const SettingsDashPage = React.lazy(() => import("./pages/dash/SettingsDashPage"));
const AgentsDashPage = React.lazy(() => import("./pages/dash/AgentsDashPage"));
const ProjectsDashPage = React.lazy(() => import("./pages/dash/ProjectsDashPage"));
const SalesDashPage = React.lazy(() => import("./pages/dash/SalesDashPage"));
const InvitationsDashPage = React.lazy(() => import("./pages/dash/InvitationsDashPage"));
const MeetingsListPage = React.lazy(() => import("./pages/dash/MeetingsListPage"));
const ReservationLogPage = React.lazy(() => import("./pages/dash/ReservationLogPage"));
const ProfileDashPage = React.lazy(() => import("./pages/dash/ProfileDashPage"));
const TutorialPage = React.lazy(() => import("./pages/TutorialPage"));
const PdfPage = React.lazy(() => import("./pages/PdfPage"));
const DriveLinkPage = React.lazy(() => import("./pages/DriveLinkPage"));
const ProjectOfferPage = React.lazy(() => import("./pages/ProjectOfferPage"));
const CuVerseProjectPage = React.lazy(() => import("./pages/CuVerseProjectPage"));
const PoliciesPage = React.lazy(() => import("./pages/PoliciesPage"));
const CookiePolicyPage = React.lazy(() => import("./pages/CookiePolicyPage"));
const AboutTurkeyPage = React.lazy(() => import("./pages/AboutTurkeyPage"));
const CitizenshipPage = React.lazy(() => import("./pages/CitizenshipPage"));
const UnitInventoryData = React.lazy(() => import("./pages/UnitInventoryData"));



// loading component for suspense fallback
// const Loader = () => (
//   <>
//     <div>Loading...</div>
//   </>
// );

function App() {

  return (
    <>
      <div className="app">
      {/* <StarterLogo /> */}
        <Suspense fallback={<Loader />}>

          <Router basename="/cuengine-portal-theme/">

            <AuthProvider authType={'cookie'}
              authName={'_cuauth'}
              cookieDomain={window.location.hostname}
              cookieSecure={window.location.protocol === "https:"}>


              <Routes>
                <Route path="/" element={<PublicLayout />}>
                  <Route index element={<HomePage />} />
                  <Route path="/home" element={<HomePage />} />
                 
                
                  <Route path="/findagents" element={<React.Suspense fallback={<Loader />}> <FindAgentsPage /> </React.Suspense>} />
                  <Route path="/whyus" element={<React.Suspense fallback={<Loader />}> <WhyUsPage /> </React.Suspense>} />
                  <Route path="/about" element={<React.Suspense fallback={<Loader />}> <AboutUsPage /> </React.Suspense>} />
                  <Route path="/helpSupport" element={<React.Suspense fallback={<Loader />}> <HelpSupport /> </React.Suspense>} />
                  <Route path="/projects" element={<React.Suspense fallback={<Loader />}> <ProjectsPage /> </React.Suspense>} />
                  <Route path="/projects/:id/unit/:apartment_id" element={<React.Suspense fallback={<Loader />}> <UnitInventoryData /> </React.Suspense>} />
                  <Route path="/projects/:id/units" element={<React.Suspense fallback={<Loader />}> <UnitsPage /> </React.Suspense>} />
                  <Route path="/projects/:id" element={<React.Suspense fallback={<Loader />}> <ProjectDetail /> </React.Suspense>} />
                  <Route path="/units" element={<React.Suspense fallback={<Loader />}> <UnitList /> </React.Suspense>} />
                  <Route path="/contact" element={<React.Suspense fallback={<Loader />}> <ContactUsPage /> </React.Suspense>} />
                  <Route path="/privacy-policy" element={<React.Suspense fallback={<Loader />}> <PrivacyPolicyPage /> </React.Suspense>} />
                  <Route path="/PlateFormTours" element={<React.Suspense fallback={<Loader />}> <PlateFormTours /> </React.Suspense>} />
                  <Route path="/terms" element={<React.Suspense fallback={<Loader />}> <TermsOfUsePage /> </React.Suspense>} />
                  <Route path="/faqs" element={<React.Suspense fallback={<Loader />}> <FaqsPage /> </React.Suspense>} />
                  
                  <Route path="/cusocials/:category/:id" element={<React.Suspense fallback={<Loader />}> <CuSocialDetailPage /> </React.Suspense>} />
                  <Route path="/cusocials/offers" element={<React.Suspense fallback={<Loader />}> <CuSocialOffersPage /> </React.Suspense>} />
                  <Route path="/cusocials/blog" element={<React.Suspense fallback={<Loader />}> <CuSocialBlogPage /> </React.Suspense>} />
                  <Route path="/cusocials" element={<React.Suspense fallback={<Loader />}> <CuSocialPage /> </React.Suspense>} />
                  
                  
                  
                  <Route path="/downloads" element={<React.Suspense fallback={<Loader />}> <DownloadsPage /> </React.Suspense>} />
                  <Route path="/site-map" element={<React.Suspense fallback={<Loader />}> <SiteMapPage /> </React.Suspense>} />
                  <Route path="/help-and-support" element={<React.Suspense fallback={<Loader />}> <HelpNSupportPage /> </React.Suspense>} />
                  <Route path="/offer" element={<React.Suspense fallback={<Loader />}> <OfferPage /> </React.Suspense>} />
                  <Route path="/restPassword/:token/:email" element={<React.Suspense fallback={<Loader />}> <RestPasswordPage /> </React.Suspense>} />
                  <Route path="/cuverse/tutorials" element={<React.Suspense fallback={<Loader />}> <TutorialPage /> </React.Suspense>} />
                  <Route path="/pdfs" element={<React.Suspense fallback={<Loader />}> <PdfPage /> </React.Suspense>} />
                  <Route path="/drivelinks" element={<React.Suspense fallback={<Loader />}> <DriveLinkPage /> </React.Suspense>} />
                  <Route path="/projectoffer" element={<React.Suspense fallback={<Loader />}> <ProjectOfferPage/> </React.Suspense>} />
                  <Route path="/cuverse" element={<React.Suspense fallback={<Loader />}> <CuVerseProjectPage/> </React.Suspense>} />
                  <Route path="/culibrary/:id" element={<React.Suspense fallback={<Loader />}> <CuLibraryPage /> </React.Suspense>} />
                  <Route path="/policies" element={<React.Suspense fallback={<Loader />}> <PoliciesPage /> </React.Suspense>} />
                  <Route path="/cookie-policy" element={<React.Suspense fallback={<Loader />}> <CookiePolicyPage /> </React.Suspense>} />
                  <Route path="/cuverse/about-turkey" element={<React.Suspense fallback={<Loader />}> <AboutTurkeyPage/> </React.Suspense>} />
                  <Route path="/cuverse/citizenship" element={<React.Suspense fallback={<Loader />}> <CitizenshipPage/> </React.Suspense>} />
                  
                  {/* <Route path="findagents" element={<FindAgentsPage />} /> */}

                  {/* <Route path="about" element={<AboutUsPage />} /> */}
                  {/* <Route path="whyus" element={<WhyUsPage />} /> */}
                  {/* <Route path="projects" element={<ProjectsPage />} />
                  <Route path="contact" element={<ContactUsPage />} /> */}

                  {/* <Route path="privacy" element={<PrivacyPolicyPage />} />
                  <Route path="terms" element={<TermsOfUsePage />} />
                  <Route path="faqs" element={<FaqsPage />} /> */}

                  {/* <Route path="login" element={<React.Suspense fallback={<Loader />}> <LoginPage /> </React.Suspense>} /> */}
                </Route>

                <Route path="dash" element={<PrivateLayout />}>
                  <Route index element={<Navigate replace to="/dash/dashboard" />} />
                  <Route path="dashboard" element={<React.Suspense fallback={<Loader />}> <DashboardPage /> </React.Suspense>} />
                  <Route path="profile" element={<React.Suspense fallback={<Loader />}> <ProfileDashPage /> </React.Suspense>} />
                  <Route path="settings" element={<React.Suspense fallback={<Loader />}> <SettingsDashPage /> </React.Suspense>} />
                  <Route path="agents" element={<React.Suspense fallback={<Loader />}> <AgentsDashPage /> </React.Suspense>} />
                  <Route path="sales" element={<React.Suspense fallback={<Loader />}> <SalesDashPage /> </React.Suspense>} />
                  <Route path="projects" element={<React.Suspense fallback={<Loader />}> <ProjectsDashPage /> </React.Suspense>} />
                  <Route path="invitations" element={<React.Suspense fallback={<Loader />}> <InvitationsDashPage /> </React.Suspense>} />
                  <Route path="meetings" element={<React.Suspense fallback={<Loader />}> <MeetingsListPage /> </React.Suspense>} />                  
                  <Route path="reservationlogs" element={<React.Suspense fallback={<Loader />}> <ReservationLogPage /> </React.Suspense>} />



                </Route>
                <Route path="/projects/3dSystem/:id" element={<React.Suspense fallback={<Loader />}> <ThreeDSystemPage /> </React.Suspense>} />
                <Route path="/projects/2dSystem/:id" element={<React.Suspense fallback={<Loader />}> <TwoDSystemPage /> </React.Suspense>} />
                <Route path="/demopdf" element={<DemoPdfPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>

            </AuthProvider>

          </Router>

        </Suspense>
      </div>
    </>
  );
}

export default App;
