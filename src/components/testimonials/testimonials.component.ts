// Fix: Converted to a standalone component with an inline template and sample data.
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  imports: [NgOptimizedImage],
  template: `
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-extrabold text-gray-900">What Our Customers Say</h2>
          <p class="mt-4 text-lg text-gray-600">
            Hear from developers and teams who have transformed their workflows with GenAI Tools.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (testimonial of testimonials; track testimonial.name) {
            <div class="bg-white p-6 rounded-lg shadow-md">
              <p class="text-gray-600 italic">"{{ testimonial.quote }}"</p>
              <div class="flex items-center mt-4">
                <img [ngSrc]="testimonial.avatar" [alt]="testimonial.name" width="48" height="48" class="w-12 h-12 rounded-full mr-4">
                <div>
                  <p class="font-bold text-gray-900">{{ testimonial.name }}</p>
                  <p class="text-sm text-gray-500">{{ testimonial.title }}</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {
  testimonials = [
    {
      quote: "GenAI Tools has been a game-changer for our team. The intent generator saved us weeks of manual work.",
      name: "Jane Doe",
      title: "Lead Conversation Designer, TechCorp",
      avatar: "https://picsum.photos/id/1027/100/100"
    },
    {
      quote: "The regression testing tools are incredibly powerful. We can now deploy changes with confidence.",
      name: "John Smith",
      title: "Senior AI Engineer, Innovate LLC",
      avatar: "https://picsum.photos/id/1011/100/100"
    },
    {
      quote: "As a solo developer, the pre-built templates allowed me to launch my chatbot in record time. Highly recommended!",
      name: "Emily White",
      title: "Founder, Chatify",
      avatar: "https://picsum.photos/id/1025/100/100"
    }
  ];
}
