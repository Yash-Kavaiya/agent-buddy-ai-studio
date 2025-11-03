// Fix: Created a new standalone component for the Docs Helper page.
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-docs-helper',
  template: `
    <div class="bg-gray-50 py-20 md:py-32">
        <div class="container mx-auto px-6 text-center">
            <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900">Docs Helper</h1>
            <p class="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
                Get help with documentation.
            </p>
        </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsHelperComponent {}
