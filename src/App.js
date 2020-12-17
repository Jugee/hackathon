import Layout from "antd/lib/layout/layout";
import "./App.css";
import Header from "./component/Header";
import Content from "./component/Content";
import Footer from "./component/Footer";
import ChartBar from "./component/ChartBar";

function App() {
  return (
    <div>
      <div id="overlayer" />
      <div className="loader">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <div className="site-wrap" id="home-section">
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle" />
            </div>
          </div>
          <div className="site-mobile-menu-body" />
        </div>
        <Header />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
