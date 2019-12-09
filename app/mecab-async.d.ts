declare module "mecab-async" {
  type MeCabCallBack<T> = (err: Error, result: T) => void;
  export type MeCabTokens = string[8] | string[9] | string[10];

  class MeCab {
    public ENCODING: string;
    public wakachi: (str: string, callback: MeCabCallBack<string[]>) => void;
    public parse: (str: string, callback: MeCabCallBack<MeCabTokens[]>) => void;
  }

  export default MeCab;
}
