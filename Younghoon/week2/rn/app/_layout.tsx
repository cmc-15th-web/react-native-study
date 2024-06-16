import React from "react";
import { WebviewWrapper } from "@/components/webview-wrapper";
import { MapWebview } from "@/components/map-webview";

const App = () => {
  return (
    <WebviewWrapper>
      <MapWebview />
    </WebviewWrapper>
  );
};

export default App;
