// Fix: Added an inline template to compose the landing page.
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { FeaturesComponent } from '../features/features.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { PricingComponent } from '../pricing/pricing.component';

@Component({
  selector: 'app-landing',
  template: `
    <app-hero></app-hero>
    <app-features></app-features>
    <app-testimonials></app-testimonials>
    <app-pricing></app-pricing>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeroComponent,
    FeaturesComponent,
    TestimonialsComponent,
    PricingComponent,
  ],
})
export class LandingComponent {}