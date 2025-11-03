// Fix: Converted to a standalone component with an inline template.
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-pricing',
  template: `
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-extrabold text-gray-900">Pricing Plans</h2>
          <p class="mt-4 text-lg text-gray-600">
            Choose a plan that's right for you.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          @for (plan of plans; track plan.name) {
            <div class="border rounded-lg p-6 flex flex-col" [class.border-indigo-600]="plan.isPopular" [class.relative]="plan.isPopular">
              @if(plan.isPopular) {
                <span class="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase absolute -top-3 right-4">Most Popular</span>
              }
              <h3 class="text-2xl font-bold text-gray-900">{{ plan.name }}</h3>
              <p class="mt-2 text-gray-600">{{ plan.description }}</p>
              <div class="my-6">
                <span class="text-4xl font-extrabold text-gray-900">{{ plan.price }}</span>
                <span class="text-gray-500">{{ plan.period }}</span>
              </div>
              <ul class="space-y-2 text-gray-600">
                @for (feature of plan.features; track feature) {
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    {{ feature }}
                  </li>
                }
              </ul>
              <div class="mt-auto pt-6">
                <a href="#" class="w-full block text-center font-bold py-3 px-6 rounded-lg transition-colors"
                   [class.bg-indigo-600]="plan.isPopular" 
                   [class.text-white]="plan.isPopular"
                   [class.hover:bg-indigo-700]="plan.isPopular"
                   [class.bg-gray-200]="!plan.isPopular"
                   [class.text-gray-800]="!plan.isPopular"
                   [class.hover:bg-gray-300]="!plan.isPopular">
                  {{ plan.price === 'Contact Us' ? 'Contact Sales' : 'Get Started' }}
                </a>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingComponent {
  plans = [
    {
      name: 'Hobby',
      price: '$0',
      period: '/ month',
      description: 'For personal projects and learning.',
      features: ['1 Agent', 'Basic Intent Generator', 'Community Support'],
      isPopular: false
    },
    {
      name: 'Pro',
      price: '$49',
      period: '/ month',
      description: 'For professionals and small teams.',
      features: ['5 Agents', 'Advanced Generators', 'Regression Testing', 'Email Support'],
      isPopular: true
    },
    {
      name: 'Enterprise',
      price: 'Contact Us',
      period: '',
      description: 'For large organizations with custom needs.',
      features: ['Unlimited Agents', 'SSO & Audit Logs', 'Dedicated Support', 'On-premise option'],
      isPopular: false
    }
  ];
}