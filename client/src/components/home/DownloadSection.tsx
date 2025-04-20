import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { FaLock, FaSync, FaShieldAlt } from "react-icons/fa";
import { fadeInUp } from "@/utils/animations";
import DownloadButton from "./DownloadButton";

const DownloadSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  const securityFeatures = [
    { icon: <FaLock className="text-2xl mr-2" />, label: "Secure Transactions" },
    { icon: <FaSync className="text-2xl mr-2" />, label: "Regular Updates" },
    { icon: <FaShieldAlt className="text-2xl mr-2" />, label: "Privacy Protected" }
  ];
  
  return (
    <section 
      id="download" 
      ref={ref}
      className="wt-home-section py-20 md:py-32 bg-black text-white"
    >
      <div className="wt-home-container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl text-[#E8CFC2] mb-6"
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
          >
            Download Woreto Today
          </motion.h2>
          
          <motion.p 
            className="text-lg mb-10 text-gray-100"
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.1 }}
          >
            Join thousands of smart shoppers who are already saving time and money with Woreto. Download our app now and transform your fashion shopping experience.
          </motion.p>
          
          <motion.div 
            className="flex flex-col md:flex-row justify-center gap-6 mb-12"
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.2 }}
          >
            <DownloadButton platform="ios" large />
            <DownloadButton platform="android" style="secondary" large />
          </motion.div>
          
          <motion.div 
            className="flex justify-center mb-10"
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.3 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80" 
              alt="Woreto app on mobile devices" 
              className="rounded-3xl shadow-2xl max-w-full h-auto"
            />
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6 text-[#E8CFC2]"
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.4 }}
          >
            {securityFeatures.map((feature, index) => (
              <div key={index} className="flex items-center">
                {feature.icon}
                <span>{feature.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
