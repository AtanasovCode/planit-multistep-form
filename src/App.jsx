import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

//routes
import MultiStep from "./routes/MultiStep";
import StepContainer from "./components/StepContainer";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MultiStep />,
      children: [
        {
          path: "/multi-step",
          element: <StepContainer />,
        },
        {
          index: true, // Add this to trigger a default action at the root
          element: <Navigate to="/multi-step" replace />,  // Redirect to /multi-step
        },
      ]
    },
  ])

  return (
    <div className="w-full h-[100vh] bg-custom-black font-sans">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;