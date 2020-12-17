import React from "react";

export default function Header() {
  return (
    <>
      <header
        className="site-navbar js-sticky-header site-navbar-target"
        role="banner"
      >
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="site-logo">
              <a href="index-2.html" className="text-black">
                <span className="text-primary">THE MAKERS TEAM</span>
              </a>
            </div>
            <div className="col-12">
              <nav
                className="site-navigation text-right ml-auto "
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                  <li>
                    <a href="#home-section" className="nav-link">
                      НҮҮР
                    </a>
                  </li>
                  <li>
                    <a href="#services-section" className="nav-link">
                      ЮУГ ОЙЛГОХ ВЭ?
                    </a>
                  </li>
                  <li>
                    <a href="#dashboard" className="nav-link">
                      ТАНЫ СОНОРТ
                    </a>
                  </li>
                  <li className="has-children">
                    <a href="#team-section" className="nav-link">
                      БИДНИЙ ТУХАЙ
                    </a>
                    <ul className="dropdown arrow-top">
                      <li>
                        <a href="#team-section" className="nav-link">
                          МАНАЙ БАГ
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#faq-section" className="nav-link">
                      АСУУЛТ ХАРИУЛТ
                    </a>
                  </li>
                  <li>
                    <a href="#contact-section" className="nav-link">
                      ХОЛБОО БАРИХ
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="toggle-button d-inline-block d-lg-none">
              <a
                href="#"
                className="site-menu-toggle py-5 js-menu-toggle text-white"
              >
                <span className="icon-menu h3" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
