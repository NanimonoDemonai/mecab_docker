import { MeCabTokens } from "mecab-async";
import { Token } from "../types/token";

const mecabTokenToToken: (token: MeCabTokens) => Token = token => ({
  kanji: token[0],
  lexical: token[1],
  compound: token[2],
  compound2: token[3],
  compound3: token[4],
  conjugation: token[5],
  inflection: token[6],
  original: token[7],
  reading: token[8] || "",
  pronunciation: token[9] || ""
});

export const mecabTokensToTokens: (tokens: MeCabTokens[]) => Token[] = tokens =>
  tokens.map(mecabTokenToToken);
