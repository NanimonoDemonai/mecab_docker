import MeCab, { MeCabTokens } from "mecab-async";

export function getMeCab() {
  const mecab = new MeCab();
  if (!mecab) return undefined;
  mecab.ENCODING = "UTF-8";

  return mecab;
}

export const parse = (str: string) =>
  new Promise<MeCabTokens[] | null>((resolve, reject) => {
    const mecab = getMeCab();
    if (!mecab) {
      resolve(null);
    } else {
      mecab.parse(str, (err: Error, result: MeCabTokens[]) => {
        if (err) reject(err);
        return resolve(result);
      });
    }
  });
