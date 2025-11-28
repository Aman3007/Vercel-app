import TestimonialCard from './review-card';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO",
    company: "TechVision Inc",
    content: "NexusAI completely revolutionized our operations. We've automated 80% of our repetitive tasks and our team is now focused on strategic initiatives. The ROI was evident within the first month.",
    rating: 5,
    avatar: "SC"
  },
  {
    name: "Michael Rodriguez",
    role: "CTO",
    company: "DataFlow Systems",
    content: "The AI automation capabilities are mind-blowing. What previously took our team days now happens in minutes. The accuracy and reliability have exceeded all our expectations. Game-changing platform!",
    rating: 5,
    avatar: "MR"
  },
  {
    name: "Emily Watson",
    role: "Product Lead",
    company: "InnovateCorp",
    content: "Best investment we've made this year. The intuitive interface combined with powerful automation has transformed how we work. Our productivity has increased by 300% and our team couldn't be happier.",
    rating: 5,
    avatar: "EW"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Loved by Teams
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join thousands of companies transforming their workflow By Joining Us
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}