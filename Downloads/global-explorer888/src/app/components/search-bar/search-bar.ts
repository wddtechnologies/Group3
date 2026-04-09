/* =========================================================
   SEARCH BAR COMPONENT
   Supports exact text search or selecting a country
   from a full alphabetical dropdown list
   ========================================================= */

import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBarComponent implements OnInit {
  @Output() search = new EventEmitter<string>();

  private readonly countryService = inject(CountryService);

  searchTerm = '';
  countryOptions: string[] = [];
  selectedCountry = '';

  ngOnInit(): void {
    this.countryService.getAllCountryNames().subscribe({
      next: (countries) => {
        this.countryOptions = countries;
      },
      error: (error) => {
        console.error('Failed to load country list:', error);
      },
    });
  }

  submitSearch(): void {
    const trimmedValue = this.searchTerm.trim();

    if (!trimmedValue) {
      return;
    }

    this.search.emit(trimmedValue);
  }

  selectFromDropdown(): void {
    if (!this.selectedCountry) {
      return;
    }

    this.searchTerm = this.selectedCountry;
    this.search.emit(this.selectedCountry);
  }
}