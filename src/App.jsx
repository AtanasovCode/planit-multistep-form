import {
  createBrowserRouter,
  RouterProvider,
  Navigate, useNavigate,
} from "react-router-dom";
import { useStore } from "../useStore";

//routes
import MultiStep from "./routes/MultiStep";
import StepContainer from "./components/StepContainer";

//steps
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";
import { useEffect } from "react";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MultiStep />,
      children: [
        {
          path: "/multi-step",
          element: <StepContainer />,
          children: [
            {
              path: "/multi-step/step-one",
              element: <StepOne />,
            },
            {
              path: "step-two",
              element: <StepTwo />,
            },
            {
              path: "step-three",
              element: <StepThree />,
            },
            {
              path: "step-four",
              element: <StepFour />,
            },
          ],
        },
        {
          index: true, // Add this to trigger a default action at the root
          element: <Navigate to="/multi-step/step-one" replace />,  // Redirect to /multi-step
        },
      ],
    },
  ])

  return (
    <div className="w-full min-h-[100dvh] bg-background font-sans">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;