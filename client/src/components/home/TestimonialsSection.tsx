import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { fadeInUp, staggerContainer } from "@/utils/animations";

const TestimonialsSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  const testimonials = [
    {
      rating: 5,
      content: "Woreto has completely changed how I shop for clothes. I saved over $200 last month by comparing prices across stores. The style recommendations are spot on too!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      name: "Sophia Chen",
      title: "Fashion Blogger"
    },
    {
      rating: 5,
      content: "The digital wardrobe feature is a game-changer. Now I know exactly what I own and what I need to complete my looks. The price comparison tool has saved me a ton of money.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      name: "James Wilson",
      title: "Marketing Executive"
    },
    {
      rating: 4.5,
      content: "I was skeptical at first, but Woreto has exceeded my expectations. The coupon finder alone has paid for itself many times over. Great UX and really intuitive to use.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      name: "Priya Sharma",
      title: "College Student"
    }
  ];
  
  return (
    <section 
      id="testimonials" 
      ref={ref}
      className="wt-home-section py-20 md:py-32 bg-[#E8CFC2] bg-opacity-20"
    >
      <div className="wt-home-container">
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
        >
          <h2 className="text-4xl md:text-5xl mb-4">What Our Users Say</h2>
          <div className="w-20 h-1 bg-[#E8CFC2] mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Join thousands of fashion enthusiasts who are already transforming how they shop with Woreto.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="wt-home-testimonial-card"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-6">
                <div className="text-[#E8CFC2] flex">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  {testimonial.rating % 1 !== 0 && <FaStarHalfAlt />}
                </div>
              </div>
              
              <p className="text-gray-700 italic mb-6">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={`${testimonial.name} profile`}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
