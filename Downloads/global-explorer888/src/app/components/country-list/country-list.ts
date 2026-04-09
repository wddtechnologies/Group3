/* =========================================================
   COUNTRY LIST COMPONENT
   Displays a list of country cards
   ========================================================= */

import { Component, Input } from '@angular/core';
import { Country } from '../../models/country.model';
import { CountryCardComponent } from '../country-card/country-card';

@Component({
  selector: 'app-country-list',
  imports: [CountryCardComponent],
  templateUrl: './country-list.html',
  styleUrl: './country-list.css',
})
export class CountryListComponent {
  @Input() countries: Country[] = [];
}