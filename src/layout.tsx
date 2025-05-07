
import { Outlet } from "react-router-dom";
import AppHeader from "./components/layout/app.header";
import { useCurrentApp } from "./components/context/app.context";
import { useEffect } from "react";
import { FetchAccountAPI } from "./services/api";
import RingLoader from "react-spinners/RingLoader";
function Layout() {

  const { setIsAuthenticated, setUser, isAppLoading, setIsAppLoading } = useCurrentApp();

  useEffect(() => {
    const fetchData = async () => {
      const res = await FetchAccountAPI();
      console.log(">>>>>>>>>check res:", res);
      if (res.data) {
        setUser(res.data.user);
        setIsAuthenticated(true);
      }
      setIsAppLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {
        isAppLoading === false ?
          <div>
            <AppHeader />
            <Outlet />
          </div>
          :
          <div style={{
            position: "fixed", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)"
          }}>
            <RingLoader
              size="100"
              color="#36d6b4"
            />
          </div>
      }
    </>
  )
}

export default Layout;
