/* =========================================================
   HOME PAGE
   Handles exact country search and displays one result
   ========================================================= */

import { Component, inject } from '@angular/core';
import { SearchBarComponent } from '../../components/search-bar/search-bar';
import { CountryCardComponent } from '../../components/country-card/country-card';
import { CountryService } from '../../services/country.service';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-home',
  imports: [SearchBarComponent, CountryCardComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  private readonly countryService = inject(CountryService);

  /* Dark mode */
  isDark = false;

  constructor() {
    this.isDark = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark', this.isDark);
  }

  toggleDarkMode(): void {
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark', this.isDark);
    localStorage.setItem('darkMode', String(this.isDark));
  }

  /* One selected country to display */
  selectedCountry: Country | null = null;

  /* UI state */
  isLoading = false;
  errorMessage = '';
  hasSearched = false;
  lastSearch = '';

  /* Handle searches coming from the search bar */
  handleSearch(searchTerm: string): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.hasSearched = true;
    this.lastSearch = searchTerm.trim();
    this.selectedCountry = null;

    this.countryService.searchCountries(searchTerm).subscribe({
      next: (response) => {
        this.selectedCountry = response[0] ?? null;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = `No country was found for "${this.lastSearch}". Please enter a full country name or choose one from the dropdown.`;
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}