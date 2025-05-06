
import { Outlet } from "react-router-dom";
import AppHeader from "./components/layout/app.header";
import { useCurrentApp } from "./components/context/app.context";
import { useEffect } from "react";
import { FetchAccountAPI } from "./services/api";
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
    <div>
      <AppHeader />
      <Outlet />

    </div>
  )
}

export default Layout;
