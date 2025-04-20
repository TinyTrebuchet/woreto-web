import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { FaSearch, FaTshirt, FaTag } from "react-icons/fa";
import { fadeInUp, staggerContainer } from "@/utils/animations";

const AboutSection = () => {
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
      icon: <FaSearch className="text-sm" />,
      title: "All-in-One Fashion Search",
      description: "Search across major platforms like Myntra, AJIO, Amazon and many more simultaneously."
    },
    {
      icon: <FaTshirt className="text-sm" />,
      title: "Digital Wardrobe",
      description: "Organize your style with a virtual closet that helps you track and plan your outfits."
    },
    {
      icon: <FaTag className="text-sm" />,
      title: "Never Miss a Deal",
      description: "Get real-time price alerts and coupon notifications for items on your wishlist."
    }
  ];
  
  return (
    <section 
      id="about" 
      ref={ref}
      className="wt-home-section py-20 md:py-32 bg-gray-50"
    >
      <div className="wt-home-container">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
          >
            <h2 className="text-4xl md:text-5xl mb-4">About Woreto</h2>
            <div className="w-20 h-1 bg-[#E8CFC2] mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Woreto was born from a simple idea: make fashion shopping smarter. We've created an elegant, intuitive app that brings together thousands of fashion items from across the web, allowing you to compare prices, manage your style, and save on your favorite pieces.
            </p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-6">
            <motion.div 
              className="w-full md:w-1/2 order-2 md:order-1"
              variants={staggerContainer}
              initial="hidden"
              animate={controls}
            >
              <ul className="space-y-6">
                {features.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    variants={fadeInUp}
                  >
                    <div className="bg-black text-[#E8CFC2] rounded-full p-2 mr-4 mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                      <p className="text-gray-700">{feature.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2 order-1 md:order-2 flex justify-center"
              variants={fadeInUp}
              initial="hidden"
              animate={controls}
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1571648059602-3dce9f0b31fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=900&q=80" 
                  alt="Woreto app screenshot" 
                  className="wt-home-app-screen h-[500px] rounded-3xl shadow-lg z-10 relative"
                />
                <img 
                  src="https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=900&q=80" 
                  alt="Woreto app screenshot" 
                  className="wt-home-app-screen h-[500px] rounded-3xl shadow-lg absolute -left-20 -bottom-10 -rotate-6 z-0 hidden md:block"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
