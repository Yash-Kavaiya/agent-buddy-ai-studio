// Fix: Converted to a standalone component.
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-playbook-generator',
  template: `
    <div class="bg-gray-900 py-20 md:py-32">
        <div class="container mx-auto px-6 text-center">
            <h1 class="text-4xl md:text-5xl font-extrabold text-white">Playbook Generator</h1>
            <p class="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
                Create instruction playbooks
            </p>
        </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaybookGeneratorComponent {}