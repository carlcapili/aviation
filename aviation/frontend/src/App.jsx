import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes/routes";
import { TimeProvider } from "./context/TimeContext";
const router = createBrowserRouter(routes);

const App = () => {
  return (
    <TimeProvider>
      <RouterProvider router={router} />
    </TimeProvider>
  );
};

export default App;
