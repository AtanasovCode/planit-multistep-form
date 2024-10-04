import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//routes
import MultiStep from "./routes/MultiStep";

//route children

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MultiStep />,
      // children: [
      //   {
      //     path: "",
      //     element: < />,
      //   },
      // ]
    },
  ])

  return (
    <div className="w-full h-[100vh] bg-custom-black font-sans">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;