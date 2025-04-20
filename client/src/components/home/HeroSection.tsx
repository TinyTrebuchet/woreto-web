import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { scrollTo } from "@/utils/scrollTo";
import { fadeIn, fadeInUp } from "@/utils/animations";
import DownloadButton from "./DownloadButton";
import logoPath from "@assets/logo.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="wt-home-section relative h-screen flex items-center bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Fashion background" 
          className="w-full h-full object-cover opacity-30" 
        />
        <div className="wt-home-hero-gradient"></div>
      </div>
      
      <div className="wt-home-container z-10">
        <div className="flex flex-col items-center text-center md:text-left md:items-start max-w-4xl mx-auto">
          <motion.img 
            src={logoPath} 
            alt="Woreto Logo" 
            className="h-32 md:h-40 mb-8"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          />
          
          <motion.h1 
            className="wt-home-tagline text-3xl md:text-5xl lg:text-6xl font-light italic text-[#E8CFC2] mb-6"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Compare, Style, Save – Your Fashion, Your Price!
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-100 max-w-2xl mb-10"
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
