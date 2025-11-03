// Fix: Defined application routes with lazy loading for all components.
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/landing/landing.component').then(m => m.LandingComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./components/pages/about-us.component').then(m => m.AboutUsComponent)
  },
  {
    path: 'careers',
    loadComponent: () => import('./components/pages/career.component').then(m => m.CareerComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./components/pages/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./components/pages/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'tools/dialogflow-debugger',
    loadComponent: () => import('./components/pages/dialogflow-debugger.component').then(m => m.DialogflowDebuggerComponent)
  },
  {
    path: 'tools/docs-helper',
    loadComponent: () => import('./components/pages/docs-helper.component').then(m => m.DocsHelperComponent)
  },
  {
    path: 'learning/agents',
    loadComponent: () => import('./components/pages/learning-agents.component').then(m => m.LearningAgentsComponent)
  },
  {
    path: 'support/live',
    loadComponent: () => import('./components/pages/live-support.component').then(m => m.LiveSupportComponent)
  },
  {
    path: 'company/mission-vision',
    loadComponent: () => import('./components/pages/mission-vision.component').then(m => m.MissionVisionComponent)
  },
  {
    path: 'pricing',
    loadComponent: () => import('./components/pages/pricing-page.component').then(m => m.PricingPageComponent)
  },
  {
    path: 'company/team',
    loadComponent: () => import('./components/pages/teams.component').then(m => m.TeamsComponent)
  },
  {
    path: 'templates',
    loadComponent: () => import('./components/pages/templates-page.component').then(m => m.TemplatesPageComponent)
  },
  {
    path: 'tools/testing',
    loadComponent: () => import('./components/pages/testing-tools.component').then(m => m.TestingToolsComponent)
  },
  {
    path: 'generators/entity-detection',
    loadComponent: () => import('./components/generators/entity-detection.component').then(m => m.EntityDetectionComponent)
  },
  {
    path: 'generators/flow-generator',
    loadComponent: () => import('./components/generators/flow-generator.component').then(m => m.FlowGeneratorComponent)
  },
  {
    path: 'generators/intent-generator',
    loadComponent: () => import('./components/generators/intent-generator.component').then(m => m.IntentGeneratorComponent)
  },
  {
    path: 'generators/openapi-generator',
    loadComponent: () => import('./components/generators/openapi-generator.component').then(m => m.OpenApiGeneratorComponent)
  },
  {
    path: 'generators/playbook-generator',
    loadComponent: () => import('./components/generators/playbook-generator.component').then(m => m.PlaybookGeneratorComponent)
  },
  {
    path: 'generators/route-generator',
    loadComponent: () => import('./components/generators/route-generator.component').then(m => m.RouteGeneratorComponent)
  },
  {
    path: 'generators/webhook-generator',
    loadComponent: () => import('./components/generators/webhook-generator.component').then(m => m.WebhookGeneratorComponent)
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
