// Fix: Created a new standalone component for the Mission & Vision page.
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-mission-vision',
  template: `
    <div class="bg-gray-50 py-20 md:py-32">
        <div class="container mx-auto px-6 text-center">
            <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900">Mission & Vision</h1>
            <p class="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
                Our mission to empower developers and our vision for the future.
            </p>
        </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MissionVisionComponent {}
