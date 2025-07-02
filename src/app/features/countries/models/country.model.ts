export interface Country {
  name: {
    common: string;
    official: string;
    nativeName?: Record<string, { official: string; common: string }>;
  };
  capital?: string[];
  population: number;
  region: string;
  subregion?: string;
  flags: {
    svg: string;
    png: string;
    alt?: string;
  };
  cca3: string; // 3-letter country code (used for borders)
  borders?: string[]; // alpha3Codes of neighboring countries
  currencies?: Record<string, { name: string; symbol: string }>;
  languages?: Record<string, string>;
  tld?: string[];
}
