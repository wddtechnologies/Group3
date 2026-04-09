/* =========================================================
   COUNTRY SERVICE
   Handles exact country search and full country list requests
   ========================================================= */

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Country } from '../models/country.model';

interface CountryNameOnly {
  name: {
    common: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private readonly http = inject(HttpClient);

  /* Base API URL */
  private readonly baseUrl = 'https://restcountries.com/v3.1';

  /* Locked fields for this project */
  private readonly fields =
    'name,capital,region,subregion,population,flags,languages,currencies,timezones,maps';

  /* =======================================================
     Exact full-name country search
     Example: "canada" works, "can" does not
     ======================================================= */
  searchCountries(countryName: string): Observable<Country[]> {
    const cleanName = countryName.trim();

    return this.http.get<Country[]>(
      `${this.baseUrl}/name/${encodeURIComponent(cleanName)}?fullText=true&fields=${this.fields}`
    );
  }

  /* =======================================================
     Get all available country names for the dropdown
     Returns names sorted alphabetically
     ======================================================= */
  getAllCountryNames(): Observable<string[]> {
    return this.http
      .get<CountryNameOnly[]>(`${this.baseUrl}/all?fields=name`)
      .pipe(
        map((countries) =>
          countries
            .map((country) => country.name.common)
            .sort((a, b) => a.localeCompare(b))
        )
      );
  }
}