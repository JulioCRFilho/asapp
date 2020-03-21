import React from "react";
import Link from "next/link";
import colors from "../constants/colors";
import { Drawer, Divider } from "@material-ui/core";

const Menu = props => (
  <Drawer anchor="left" variant="permanent">
    <div
      style={{
        backgroundColor: colors.drawer,
        width: 240
      }}
    >
      <h1 style={{ color: "white", textAlign: "center" }}>ASAPP</h1>
    </div>
    <MenuBtn title="Início" href="/" />
    <Divider />
    <MenuBtn title="Contato" href="/" />
    <Divider />
    <MenuBtn title="Sobre" href="/" />
    <div style={{ backgroundColor: colors.drawer, flex: 1 }} />
  </Drawer>
);

const MenuBtn = props => (
  <Link href={props.href}>
    <li color="black" style={{ backgroundColor: colors.primary, padding: 20 }}>
      <a style={{ color: colors.secondary, textAlign: "center", margin: 20 }}>
        {props.title}
      </a>
    </li>
  </Link>
);

export default Menu;
