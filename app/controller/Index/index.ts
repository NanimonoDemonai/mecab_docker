import { add, get } from "../../mongodb";
import { parse } from "../../mecab";
import { NextPageContext } from "next";
import { MeCabTokens } from "mecab-async";

export interface DefaultProps {
  result: MeCabTokens[] | null;
  query: string;
  id: string;
}

export const defaultStr =
  "このページはMeCabでおおよそ形態素解析をするためのページです。";

export const getInitialProps = async ({
  query
}: NextPageContext): Promise<DefaultProps> => {
  let str = defaultStr;
  if (query.str) {
    if (query.str instanceof Array) {
      str = query.str.join();
    } else {
      str = query.str;
    }
  }
  const data = await get(str);

  if (data) {
    return { result: data.tokens, query: str, id: data._id.toHexString() };
  }

  const result = await parse(str);
  const inserted = await add({ query: str, tokens: result });
  return { result, query: str, id: inserted.insertedId.toHexString() };
};
