// Fix: Created a new standalone component for the Pricing page, which reuses the PricingComponent.
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PricingComponent } from '../pricing/pricing.component';

@Component({
  selector: 'app-pricing-page',
  template: `
    <app-pricing></app-pricing>
  `,
  imports: [PricingComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingPageComponent {}
