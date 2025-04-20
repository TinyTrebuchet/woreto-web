import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { 
  FaBalanceScale, 
  FaTshirt, 
  FaMagic, 
  FaTags, 
  FaCheck 
} from "react-icons/fa";
import { fadeInUp, staggerContainer } from "@/utils/animations";

const FeaturesSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  const features = [
    {
      icon: <FaBalanceScale className="text-2xl text-black" />,
      title: "Price Comparison",
      description: "Compare prices across all major fashion platforms in real-time to find the best deals on your favorite items."
    },
    {
      icon: <FaTshirt className="text-2xl text-black" />,
      title: "Wardrobe Management",
      description: "Organize your clothing collection digitally, track what you own, and plan outfits with our intelligent wardrobe tool."
    },
    {
      icon: <FaMagic className="text-2xl text-black" />,
      title: "Style Recommendations",
      description: "Receive personalized style suggestions based on your preferences, existing wardrobe, and current fashion trends."
    },
    {
      icon: <FaTags className="text-2xl text-black" />,
      title: "Coupon Discovery",
      description: "Automatically find and apply the best available coupon codes across platforms to maximize your savings."
    }
  ];
  
  const benefits = [
    "Instant price alerts when items go on sale",
    "Track price history to see the best time to buy",
    "Automatically find and apply coupon codes",
    "Compare shipping costs and delivery times"
  ];
  
  return (
    <section 
      id="features" 
      ref={ref}
      className="wt-home-section py-20 md:py-32 bg-white"
    >
      <div className="wt-home-container">
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
        >
          <h2 className="text-4xl md:text-5xl mb-4">Key Features</h2>
          <div className="w-20 h-1 bg-[#E8CFC2] mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Woreto combines powerful technology with elegant design to transform how you discover, compare, and purchase fashion.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="wt-home-feature-card"
              variants={fadeInUp}
            >
              <div className="bg-[#E8CFC2] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-700">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-20 bg-black rounded-3xl overflow-hidden"
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
              <h3 className="text-3xl text-[#E8CFC2] mb-6">Shop Smarter</h3>
              <p className="text-white text-lg mb-8">
                Woreto scans thousands of products across multiple platforms to ensure you always get the best price on your fashion favorites.
              </p>
              <ul className="space-y-4 text-white">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheck className="text-[#E8CFC2] mr-3" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="w-full lg:w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Fashion shopping comparison" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent lg:bg-gradient-to-l"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
