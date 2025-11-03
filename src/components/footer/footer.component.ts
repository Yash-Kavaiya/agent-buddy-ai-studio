// Fix: Converted to a standalone component with an inline template.
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer class="bg-gray-800 text-white">
      <div class="container mx-auto px-6 py-8">
        <div class="flex flex-col items-center text-center">
          <a routerLink="/" class="text-xl font-bold">GenAI Tools</a>
          <p class="text-sm text-gray-400 mt-2">
            Supercharge your conversational AI development.
          </p>
          <div class="flex space-x-4 mt-4">
             <a routerLink="/about" class="hover:text-gray-300">About</a>
             <a routerLink="/careers" class="hover:text-gray-300">Careers</a>
             <a routerLink="/contact" class="hover:text-gray-300">Contact</a>
             <a routerLink="/pricing" class="hover:text-gray-300">Pricing</a>
          </div>
        </div>
        <hr class="my-6 border-gray-700" />
        <div class="flex flex-col items-center sm:flex-row sm:justify-between">
          <p class="text-sm text-gray-400">&copy; {{ currentYear }} GenAI Tools. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
    currentYear = new Date().getFullYear();
}
