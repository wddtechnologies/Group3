/* =========================================================
   COUNTRY CARD COMPONENT
   Displays a single country using the fixed 10-box layout
   ========================================================= */

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-country-card',
  imports: [CommonModule],
  templateUrl: './country-card.html',
  styleUrl: './country-card.css',
})
export class CountryCardComponent {
  @Input({ required: true }) country!: Country;

  /* Return the first capital if available */
  getCapital(): string {
    return this.country.capital?.[0] ?? 'N/A';
  }

  /* Convert languages object into readable text */
  getLanguages(): string {
    if (!this.country.languages) {
      return 'N/A';
    }

    return Object.values(this.country.languages).join(', ');
  }

  /* Convert currencies object into readable text */
  getCurrencies(): string {
    if (!this.country.currencies) {
      return 'N/A';
    }

    return Object.values(this.country.currencies)
      .map((currency) =>
        currency.symbol ? `${currency.name} (${currency.symbol})` : currency.name
      )
      .join(', ');
  }

  /* Convert timezone array into readable text */
  getTimezones(): string {
    if (!this.country.timezones?.length) {
      return 'N/A';
    }

    return this.country.timezones.join(', ');
  }
}