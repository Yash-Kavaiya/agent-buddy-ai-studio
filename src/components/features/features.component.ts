// Fix: Converted to a standalone component, added an inline template, and used DomSanitizer for security.
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-features',
  template: `
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-extrabold text-gray-900">Why GenAI Tools?</h2>
          <p class="mt-4 text-lg text-gray-600">
            Everything you need to build and scale world-class conversational experiences.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          @for (feature of features; track feature.title) {
            <div class="bg-gray-50 p-6 rounded-lg shadow-md">
              <div [innerHTML]="safeIcon(feature.icon)"></div>
              <h3 class="text-xl font-bold mt-4 text-gray-900">{{ feature.title }}</h3>
              <p class="mt-2 text-gray-600">{{ feature.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesComponent {
  sanitizer = inject(DomSanitizer);

  safeIcon(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }

  features = [
    {
      icon: '<svg class="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>',
      title: 'Intent Generators',
      description: 'Automatically generate intents, training phrases, and entities from your documents or APIs.'
    },
    {
      icon: '<svg class="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 16v-2m8-8h-2M4 12H2m15.364-6.364l-1.414 1.414M6.05 19.95l-1.414-1.414M19.95 19.95l-1.414-1.414M6.05 6.05l-1.414-1.414M12 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>',
      title: 'Powerful Tools',
      description: 'A suite of tools for debugging, regression testing, and analyzing agent performance.'
    },
    {
      icon: '<svg class="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>',
      title: 'Learning Center',
      description: 'Access tutorials, best practices, and expert-led courses to master conversational AI.'
    },
    {
      icon: '<svg class="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>',
      title: 'Pre-built Templates',
      description: 'Jumpstart your projects with a library of industry-specific agent templates and flows.'
    }
  ];
}
