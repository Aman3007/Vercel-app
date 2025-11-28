import { Star, Quote } from 'lucide-react';

export default function TestimonialCard({ name, role, company, content, rating, avatar }) {
  return (
    <div className="relative group">
      
      <div className="relative bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300 h-full">
       
        <Quote className="absolute top-6 right-6 w-12 h-12 text-purple-500/20" />
        
       
        <div className="flex mb-6 relative z-10">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>
        
       
        <p className="text-gray-300 mb-8 leading-relaxed italic relative z-10">
          "{content}"
        </p>
        
      
        <div className="flex items-center relative z-10">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center font-bold text-white text-lg">
            {avatar}
          </div>
          <div className="ml-4">
            <p className="text-white font-semibold text-lg">{name}</p>
            <p className="text-gray-400 text-sm">{role} at {company}</p>
          </div>
        </div>
      </div>
      
  
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
    </div>
  );
}
