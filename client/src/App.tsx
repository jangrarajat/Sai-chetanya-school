import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import DirectorMessage from "./pages/DirectorMessage";
import ApexBranch from "./pages/ApexBranch";
import ShivBhartiBranch from "./pages/ShivBhartiBranch";
import CourseNavodaya from "./pages/CourseNavodaya";
import CourseSainik from "./pages/CourseSainik";
import CourseMilitary from "./pages/CourseMilitary";
import CourseSports from "./pages/CourseSports";
import CourseRegular from "./pages/CourseRegular";
import Results from "./pages/Results";
import ResultNavodaya from "./pages/ResultNavodaya";
import ResultMilitary from "./pages/ResultMilitary";
import ResultSainik from "./pages/ResultSainik";
import ResultClass5 from "./pages/ResultClass5";
import ResultClass8 from "./pages/ResultClass8";
import ResultClass10 from "./pages/ResultClass10";
import Scholarship from "./pages/Scholarship";
import Gallery from "./pages/Gallery";
import Faculty from "./pages/Faculty";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import { AdminAdmissions, AdminEnquiries, AdminContacts, AdminScholarships, AdminGallery, AdminCourses, AdminBranches } from "./pages/AdminPages";
import PercentageScholarship from "./pages/PercentageScholarship";
import CampusTour360 from "./pages/CampusTour360";
import Admission from "./pages/Admission";
import TopNavBar from "./components/TopNavBar";
import MainNavBar from "./components/MainNavBar";
import FloatingButtons from "./components/FloatingButtons";
import Footer from "./components/Footer";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/director-message" component={DirectorMessage} />
      <Route path="/branches/apex" component={ApexBranch} />
      <Route path="/branches/shiv-bharti" component={ShivBhartiBranch} />
      <Route path="/courses/navodaya" component={CourseNavodaya} />
      <Route path="/courses/sainik" component={CourseSainik} />
      <Route path="/courses/military" component={CourseMilitary} />
      <Route path="/courses/sports" component={CourseSports} />
      <Route path="/courses/regular" component={CourseRegular} />
      <Route path="/results" component={Results} />
      <Route path="/results/navodaya" component={ResultNavodaya} />
      <Route path="/results/military" component={ResultMilitary} />
      <Route path="/results/sainik" component={ResultSainik} />
      <Route path="/results/class-5" component={ResultClass5} />
      <Route path="/results/class-8" component={ResultClass8} />
      <Route path="/results/class-10" component={ResultClass10} />
      <Route path="/scholarship" component={Scholarship} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/faculty" component={Faculty} />
      <Route path="/contact" component={Contact} />
      <Route path="/admin" component={Admin} />
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route path="/admin/admissions" component={AdminAdmissions} />
      <Route path="/admin/enquiries" component={AdminEnquiries} />
      <Route path="/admin/contacts" component={AdminContacts} />
      <Route path="/admin/scholarship" component={AdminScholarships} />
      <Route path="/admin/gallery" component={AdminGallery} />
      <Route path="/admin/courses" component={AdminCourses} />
      <Route path="/admin/branches" component={AdminBranches} />
      <Route path="/scholarship/percentage-based" component={PercentageScholarship} />
      <Route path="/campus-tour" component={CampusTour360} />
      <Route path="/admission" component={Admission} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();
  const isAdminPanel = location.startsWith('/admin');

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable={true}>
        <TooltipProvider>
          <Toaster />
          {!isAdminPanel && <TopNavBar />}
          {!isAdminPanel && <MainNavBar />}
          <main>
            <Router />
          </main>
          {!isAdminPanel && <Footer />}
          {!isAdminPanel && <FloatingButtons />}
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
