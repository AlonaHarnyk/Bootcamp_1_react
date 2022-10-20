import { Navigation } from "components/Navigation/Navigation";
import { Outlet, useLocation } from "react-router-dom";

export const Layout = () => {
const location = useLocation()
  return (
    <>
      <header>
        {!location.pathname.includes('details') && <Navigation />}
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};
