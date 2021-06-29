import Link from "next/link";
import { useRouter } from "next/router";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import sidebar from "../styles/Sidebar.module.css";

const Sidebar = ({ heading, routes }) => {
  const router = useRouter();
  return (
    <aside className={sidebar.aside}>
      <Paper className={sidebar.Menu} style={{ backgroundColor: "#f3E9E97c" }}>
        <Typography
          variant="h5"
          style={{
            marginBottom: "5px",
            padding: "8px 1px",
            paddingLeft: "1rem",
          }}
          color="secondary"
        >
          {heading}
        </Typography>
        <MenuList>
          {routes &&
            Object.entries(routes).map((entry) => {
              return (
                <MenuItem
                  key={entry[0]}
                  style={{
                    marginBottom: "0",
                    transition: "all 0.3s linear",
                    backgroundColor: router.route == entry[1] ? "#262471" : "",
                  }}
                >
                  <Link href={entry[1]}>
                    <a
                      style={{
                        color: router.route == entry[1] ? "#f2f2f2" : "",
                        padding: "8px 1px",
                        width: "100%",
                      }}
                    >
                      {entry[0]}
                    </a>
                  </Link>
                </MenuItem>
              );
            })}
        </MenuList>
      </Paper>
    </aside>
  );
};

export default Sidebar;
