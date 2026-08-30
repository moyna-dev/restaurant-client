import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
export default MainLayout;
