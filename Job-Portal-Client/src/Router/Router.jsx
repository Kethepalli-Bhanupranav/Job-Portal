import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import UpdateJobs from "../Pages/UpdateJobs";
import Login from "../components/Login";
import JobDetails from "../Pages/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/post-job", element: <CreateJob /> },
      { path: "/myjob", element: <MyJobs /> },
      { path: "/salary", element: <SalaryPage /> },
      { path: "/login", element: <Login /> },
      { path: "/job/:id", element: <JobDetails /> },
      {
        path: "/edit-job/:id",
        element: <UpdateJobs />,
        loader: ({ params }) => fetch(`http://localhost:3000/all-jobs/${params.id}`),
      },
    ],
  },
]);
export default router;
