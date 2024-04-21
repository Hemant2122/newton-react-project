import { NavLink, Outlet } from "react-router-dom";
import styles from "../../RouterApp.module.css";

function MenPage() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          background: "yellow",
        }}
      >
        <nav>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "10px",
              padding: "10px",
            }}
          >
            <li>
              <NavLink
                className={(navLinkProps) => {
                  const { isActive } = navLinkProps;
                  return isActive ? `${styles.activeLink}` : "";
                }}
                to="/men/pant"
              >
                Pants
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navLinkProps) => {
                  const { isActive } = navLinkProps;
                  return isActive ? `${styles.activeLink}` : "";
                }}
                to="/men/hats"
              >
                Hats
              </NavLink>
            </li>
          </ul>
        </nav>

        <h1>Man Page</h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
            background: "black",
            color: "#fff",
          }}
        >
          <Outlet></Outlet>

          {/* 
                    THIS OUTLET WILL BE USED TO DISPLAY
                    <Route path="hats" element={<Hats />}></Route>
                    <Route path="Pants" element={<Paints />}></Route>
                */}
        </div>
      </div>
    </>
  );
}

export default MenPage;
