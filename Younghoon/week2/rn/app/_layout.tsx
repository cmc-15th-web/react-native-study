import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { WebviewWrapper } from "components/webview-wrapper";
import { WebviewTest } from "components/webivew-test";

const App = () => {
  return (
    <WebviewWrapper>
      <WebviewTest />
    </WebviewWrapper>
  );
};

export default App;

const styles = StyleSheet.create({});
