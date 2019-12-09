import { Panel, Table } from "rsuite";
import * as React from "react";
import { Token } from "../types/token";
const { Column, HeaderCell, Cell } = Table;
interface Props {
  data: Token[];
  loading?: boolean;
}
export const TokenTable: React.FC<Props> = ({ data, loading }: Props) => {
  const tableRef = React.useRef(null);

  return (
    <Panel bordered bodyFill>
      <Table data={data} autoHeight loading={loading} >
        <Column align="center" resizable>
          <HeaderCell>表層形</HeaderCell>
          <Cell dataKey="kanji" />
        </Column>
        <Column align="center" resizable>
          <HeaderCell>品詞</HeaderCell>
          <Cell dataKey="lexical" />
        </Column>
        <Column align="center" resizable>
          <HeaderCell>品詞細分類1</HeaderCell>
          <Cell dataKey="compound" />
        </Column>
        <Column align="center" resizable>
          <HeaderCell>品詞細分類2</HeaderCell>
          <Cell dataKey="compound2" />
        </Column>
        <Column align="center" resizable>
          <HeaderCell>品詞細分類3</HeaderCell>
          <Cell dataKey="compound3" />
        </Column>
        <Column align="center" resizable>
          <HeaderCell>活用形</HeaderCell>
          <Cell dataKey="conjugation" />
        </Column>
        <Column align="center" resizable>
          <HeaderCell>活用型</HeaderCell>
          <Cell dataKey="inflection" />
        </Column>
        <Column align="center" resizable>
          <HeaderCell>原型</HeaderCell>
          <Cell dataKey="original" />
        </Column>
        <Column align="center" resizable>
          <HeaderCell>読み</HeaderCell>
          <Cell dataKey="reading" />
        </Column>
        <Column align="center" resizable>
          <HeaderCell>発音</HeaderCell>
          <Cell dataKey="pronunciation" />
        </Column>
      </Table>
    </Panel>
  );
};

TokenTable.defaultProps = { loading: false };
