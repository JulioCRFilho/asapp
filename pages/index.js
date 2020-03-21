import React from "react";
import Main from "../layout/main";
import Head from "next/head";

const Index = props => (
  <div style={{ flex: 1 }}>
    <Head>
      <title>Começando a web</title>
    </Head>
    <Main />
    <h1 style={{ textAlign: "center", marginTop: 100, marginLeft: 240 }}>
      Página em construção
    </h1>
  </div>
);

export default Index;
