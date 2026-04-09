/* =========================================================
   COUNTRY MODEL
   Defines the shape of the country data returned by the API
   ========================================================= */

export interface CountryName {
  common: string;
  official: string;
}

export interface CountryFlags {
  png: string;
  svg: string;
  alt?: string;
}

export interface CountryMaps {
  googleMaps: string;
  openStreetMaps?: string;
}

export interface CountryCurrency {
  name: string;
  symbol?: string;
}

export interface Country {
  name: CountryName;
  capital?: string[];
  region: string;
  subregion?: string;
  population: number;
  flags: CountryFlags;
  languages?: Record<string, string>;
  currencies?: Record<string, CountryCurrency>;
  timezones?: string[];
  maps: CountryMaps;
}