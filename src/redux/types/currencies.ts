export type TResults = {
  [key: string]: number;
};

export type TCurrencies = {
  base: string;
  results: TResults;
  updated: string;
  ms: number;
};
