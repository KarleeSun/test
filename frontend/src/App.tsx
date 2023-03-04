import Landing from "./components/pages/landing/Landing";
import GeneralLogin from "./components/pages/logins/generalLogin/GeneralLogin";
import StudentRegistration from "./components/pages/studentRegistration/RegistrationForm";
import RegistrationDashboard from "./components/pages/registrationDashboard/RegistrationDashboard";
import PlacementManagementPage from "./components/pages/placementManagement/placementManagement";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "./theme/theme";
import LoginBase from "./components/pages/logins/loginBase/LoginBase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    children: [],
  },
  {
    path: "/login",
    element: <GeneralLogin />,
    children: [
      {
        path: "students",
        element: <LoginBase type="Student" loginEndpoint="nil" />,
      },
      {
        path: "providers",
        element: <LoginBase type="Provider" loginEndpoint="nil" />,
      },
      {
        path: "admin",
        element: <LoginBase type="Admin" loginEndpoint="nil" />,
      },
    ],
  },
  {
    path: "/registration-dashboard",
    element: <RegistrationDashboard />,
    children: [],
  },
  {

  },
  {
    path: "/register",
    element: <StudentRegistration />,
    children: [],
  },

  {
    path: "/placement-management",
    element: <PlacementManagementPage />,
    children: [],
  }
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
