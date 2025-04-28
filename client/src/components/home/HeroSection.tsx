import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { scrollTo } from "@/utils/scrollTo";
import { fadeIn, fadeInUp } from "@/utils/animations";
import DownloadButton from "./DownloadButton";
import homescreenPath from "@assets/1-homepage-Photoroom.png-Photoroom.png";

const HeroSection = () => {
  return (
    <section id="hero" className="wt-home-section relative min-h-screen pt-28 md:pt-0 flex items-center bg-black text-white overflow-hidden"> 
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Fashion background" 
          className="w-full h-full object-cover opacity-30" 
        />
        <div className="wt-home-hero-gradient"></div>
      </div>
      
      <div className="wt-home-container z-10 py-10 md:py-0">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
          <div className="text-center md:text-left max-w-2xl mb-10 md:mb-0">
            <motion.h1 
              className="wt-home-tagline text-4xl md:text-5xl lg:text-6xl font-light text-[#E8CFC2] mb-6"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              Compare, Style, Save – Your Fashion, Your Price!
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-100 max-w-lg mb-10"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
            >
              Discover the smartest way to shop fashion across multiple platforms, manage your wardrobe, and never miss a deal again.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <DownloadButton platform="ios" />
              <DownloadButton platform="android" style="secondary" />
            </motion.div>
          </div>
          
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <img 
              src={homescreenPath} 
              alt="Woreto App Screenshot" 
              className="w-auto h-[400px] md:h-[700px] max-w-full rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
      
      <motion.button
        onClick={() => scrollTo("about")}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[#E8CFC2] hover:text-white transition-colors"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
        whileHover={{ y: [0, 5, 0], transition: { duration: 1, repeat: Infinity } }}
      >
        <FaChevronDown className="text-2xl" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
