import * as React from "react";
import App from "next/app";
import "rsuite/lib/styles/index.less";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <div id={"contents"}>
          <Component {...pageProps} />
        </div>
        <style jsx>{`
          #contents {
            width: 100%;
            max-width: 1080px;
            margin: 0 auto;
            padding: 0 10px;
            box-sizing: border-box;
          }
        `}</style>
      </>
    );
  }
}
