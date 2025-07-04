# REST Countries Angular App 🌍

A simple and modern Angular application that displays information about countries using the REST Countries API.

## Features

- View all independent countries with flag, name, population, region, and capital
- Filter countries by region and search by name
- View detailed information about a selected country
- See bordering countries with full names and navigate to their details
- Dark/Light theme toggle with localStorage persistence
- Signal-based state management (no traditional NgRx)
- Responsive and accessible UI using SCSS variables and Tailwind CSS principles

## Tech Stack

- Angular 17+ with standalone components
- TypeScript with Signals
- REST Countries API v3.1
- SCSS (with CSS variables for theming)
- Git & GitHub (with pull requests and feature branching)

## Getting Started

1. Clone the repository:
   ```bash
   mkdir rest-countries-app
   cd rest-countries-app
   ```

2. Install dependencies:
   ```bash
   npm new rest-countries-app
   ```

3. Start the development server:
   ```bash
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200`

## Project Structure/Architecture
Monolithic Angular application with a single component that displays a list of countries. The component uses a service to fetch country data from the REST Countries API and a pipe to format the data for display. The component also uses a theme service to manage the application's theme and a router to handle navigation between different views of the application.

## API Integration

This app uses the [REST Countries API](https://restcountries.com/) to fetch country data:

- **All Countries**: `https://restcountries.com/v3.1/all`
- **Country Details**: `https://restcountries.com/v3.1/alpha/{code}`
- **Filter by Region**: `https://restcountries.com/v3.1/region/{region}`

## Key Features Implementation

### Signal-Based State Management
- Uses Angular Signals for reactive state management
- No external state management libraries required
- Efficient change detection and updates

### Theme System
- CSS custom properties for dynamic theming
- Light/Dark mode toggle
- Theme preference persisted in localStorage
- Smooth transitions between themes

### Responsive Design
- Mobile-first approach
- Flexbox and CSS Grid layouts
- Responsive typography and spacing
- Touch-friendly interface

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly

## Available Scripts

- `ng serve` - Start development server
- `ng build` - Build for production
- `ng test` - Run unit tests
- `ng lint` - Run linting
- `ng e2e` - Run end-to-end tests

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [REST Countries API](https://restcountries.com/) for providing the country data
- [Angular Team](https://angular.io/) for the amazing framework



---

## Development Notes

### Signal Usage Examples

```typescript
// Country Service
export class CountriesService {
  private countries = signal<Country[]>([]);
  private loading = signal<boolean>(false);
  private selectedCountry = signal<Country | null>(null);

  // Computed signals
  filteredCountries = computed(() => {
    const countries = this.countries();
    const searchTerm = this.searchTerm();
    const selectedRegion = this.selectedRegion();
    
    return countries.filter(country => {
      const matchesSearch = country.name.common
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesRegion = !selectedRegion || 
        country.region === selectedRegion;
      
      return matchesSearch && matchesRegion;
    });
  });
}
```

### Theme Implementation

```scss
// variables.scss
:root {
  --color-primary: #2563eb;
  --color-background: #ffffff;
  --color-text: #1f2937;
  --color-card: #f9fafb;
}

[data-theme="dark"] {
  --color-primary: #3b82f6;
  --color-background: #1f2937;
  --color-text: #f9fafb;
  --color-card: #374151;
}

// Usage in components
.card {
  background-color: var(--color-card);
  color: var(--color-text);
  transition: all 0.3s ease;
}
```

### Performance Optimizations

- OnPush change detection strategy
- Lazy loading for country details
- Image lazy loading for flags
- Debounced search input
- Efficient filtering with computed signals

## Future Enhancements

- [ ] Add country comparison feature
- [ ] Implement favorites/bookmarks
- [ ] Add country statistics charts
- [ ] Implement offline support with service worker
- [ ] Add country news integration
- [ ] Implement advanced search filters
- [ ] Add country map integration