import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import PageTitle from "../components/common/PageTitle";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <PageTitle />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;