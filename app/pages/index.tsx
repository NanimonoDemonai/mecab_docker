import * as React from "react";
import { NextPage } from "next";
import { DefaultProps, getInitialProps } from "../controller/Index";
import { Divider, FlexboxGrid } from "rsuite";
import { mecabTokensToTokens } from "../util/mecabTokensToTokens";
import { TokenTable } from "../components/TokenTable";

const Index: NextPage<DefaultProps> = ({ result, query }: DefaultProps) => {
  const data = result && mecabTokensToTokens(result);
  return (
    <div>
      <FlexboxGrid justify="center">
        <FlexboxGrid.Item colspan={23}>
          <h1>形態素解析ツール</h1>
          <h4>{query}</h4>
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <Divider>形態素解析結果</Divider>
      {data && (
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={23}>
            <TokenTable data={data} />
          </FlexboxGrid.Item>
        </FlexboxGrid>
      )}
    </div>
  );
};

Index.getInitialProps = getInitialProps;

export default Index;
