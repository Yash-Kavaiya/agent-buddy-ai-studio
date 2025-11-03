// Fix: Converted to a standalone component with an inline template.
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <section class="bg-gray-900 text-white">
      <div class="container mx-auto px-6 text-center py-20 md:py-32">
        <h1 class="text-4xl md:text-6xl font-extrabold leading-tight">
          Build Advanced Conversational AI, Faster
        </h1>
        <p class="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          A suite of powerful tools and generators to accelerate the design, development, and testing of your Dialogflow agents.
        </p>
        <div class="mt-8">
          <a href="#" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
            Get Started for Free
          </a>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}