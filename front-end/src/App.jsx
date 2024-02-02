import { Outlet, useLocation } from "react-router-dom";
import MessaageBox from "./components/MessageBox";
import PrivatePage from "./pages/private/PrivatePage";
import privateRoutes from "./constants/privateRoutes";

function App() {

  const location = useLocation();

  return (
    <>
      {
        privateRoutes.includes(location.pathname) ? (
          <PrivatePage>
            <Outlet/>
          </PrivatePage>
        ) : (
          <Outlet/>
        )
      }
      <MessaageBox/>
    </>
  )
}

export default App;
