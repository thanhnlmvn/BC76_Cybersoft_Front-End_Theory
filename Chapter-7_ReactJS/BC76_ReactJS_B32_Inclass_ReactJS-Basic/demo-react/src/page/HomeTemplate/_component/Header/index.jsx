// NavLink cách sử dụng giống Link của react router
import { NavLink } from "react-router";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">
            Logo
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                {/* NavLink có thể truyên data binding isActive */}
                {/* isActive là tham số biến cờ cho biết NavLink có đang đứng ở trang đó hay không */}
                {/* isActive này lấy path của trang web để check xem đang đứng ở đâu */}
                {/* Nếu đang đứng isActive sẽ là true và ngược lại */}
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `my-active nav-link` : `nav-link`
                  }
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `my-active nav-link` : `nav-link`
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `my-active nav-link` : `nav-link`
                  }
                  to="/list-movie"
                >
                  List Movie
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `my-active nav-link` : `nav-link`
                  }
                  to="/demo-redux"
                >
                  Demo redux
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
