// Fix: Implemented HeaderComponent as a standalone component with an inline template.
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="bg-gray-800 shadow-md sticky top-0 z-50 text-white">
      <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
        <a routerLink="/" class="text-2xl font-bold text-white">
          GenAI Tools
        </a>
        <div class="hidden md:flex items-center space-x-6">
          <a routerLink="/" class="hover:text-gray-300 transition-colors">Home</a>
          
          <div class="relative group">
            <button class="hover:text-gray-300 transition-colors flex items-center">
              Generators
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 hidden group-hover:block">
              @for (link of generatorLinks; track link.path) {
                <a [routerLink]="link.path" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{{ link.label }}</a>
              }
            </div>
          </div>
          
          <a routerLink="/pricing" class="hover:text-gray-300 transition-colors">Pricing</a>
          <a routerLink="/about" class="hover:text-gray-300 transition-colors">About Us</a>
          <a routerLink="/contact" class="hover:text-gray-300 transition-colors">Contact</a>
        </div>
        <div class="md:hidden flex items-center">
          <button (click)="toggleMenu()" class="text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </nav>
      <!-- Mobile menu -->
      @if (isMenuOpen()) {
        <div class="md:hidden">
          <a routerLink="/" class="block py-2 px-4 text-sm hover:bg-gray-700">Home</a>
          <a routerLink="/pricing" class="block py-2 px-4 text-sm hover:bg-gray-700">Pricing</a>
          <a routerLink="/about" class="block py-2 px-4 text-sm hover:bg-gray-700">About Us</a>
          <a routerLink="/contact" class="block py-2 px-4 text-sm hover:bg-gray-700">Contact</a>
          <h3 class="px-4 pt-2 text-xs text-gray-400 uppercase">Generators</h3>
          @for (link of generatorLinks; track link.path) {
            <a [routerLink]="link.path" class="block py-2 px-4 text-sm hover:bg-gray-700">{{ link.label }}</a>
          }
        </div>
      }
    </header>
  `,
})
export class HeaderComponent {
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }

  generatorLinks = [
      { path: '/generators/intent-generator', label: 'Intent Generator' },
      { path: '/generators/entity-detection', label: 'Entity Detection' },
      { path: '/generators/flow-generator', label: 'Flow Generator' },
      { path: '/generators/openapi-generator', label: 'OpenAPI Generator' },
      { path: '/generators/playbook-generator', label: 'Playbook Generator' },
      { path: '/generators/route-generator', label: 'Route Generator' },
      { path: '/generators/webhook-generator', label: 'Webhook Generator' },
  ];
}
