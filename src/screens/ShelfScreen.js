import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import Header from "../components/Header";

export default class ShelfScreen extends React.Component {
  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <Header name="本棚" />
        {/* <Layout
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        > */}
        {/* </Layout> */}
      </ApplicationProvider>
    );
  }
}
