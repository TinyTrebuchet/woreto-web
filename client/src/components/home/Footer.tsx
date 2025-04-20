import { 
  FaInstagram, 
  FaTwitter, 
  FaFacebook, 
  FaPinterest,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";
import { scrollTo } from "@/utils/scrollTo";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import logoPath from "@assets/logo.jpg";

const Footer = () => {
  const socialLinks = [
    { icon: <FaInstagram className="text-xl" />, url: "#" },
    { icon: <FaTwitter className="text-xl" />, url: "#" },
    { icon: <FaFacebook className="text-xl" />, url: "#" },
    { icon: <FaPinterest className="text-xl" />, url: "#" }
  ];
  
  const quickLinks = [
    { name: "About Us", id: "about" },
    { name: "Features", id: "features" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Download", id: "download" }
  ];
  
  const legalLinks = [
    { name: "Privacy Policy", id: "privacy-policy" },
    { name: "Terms of Service", id: "terms" },
    { name: "Cookie Policy", id: "cookies" },
    { name: "GDPR Compliance", id: "gdpr" }
  ];
  
  const contactInfo = [
    { icon: <FaEnvelope className="mr-2 text-[#E8CFC2]" />, content: "hello@woreto.com", url: "mailto:hello@woreto.com" },
    { icon: <FaPhone className="mr-2 text-[#E8CFC2]" />, content: "+1 (800) WORETO" },
    { icon: <FaMapMarkerAlt className="mr-2 text-[#E8CFC2]" />, content: "Fashion District, New York" }
  ];
  
  return (
    <footer className="bg-black text-gray-100 pt-16 pb-8">
      <div className="wt-home-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <img src={logoPath} alt="Woreto Logo" className="h-20 mb-4" />
            <p className="text-sm text-[#E8CFC2] mb-4">
              Compare, Style, Save – Your Fashion, Your Price!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  className="text-[#E8CFC2] hover:text-white transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-[#E8CFC2] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollTo(link.id)}
                    className="hover:text-[#E8CFC2] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-[#E8CFC2] mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  {link.id === "privacy-policy" ? (
                    <PrivacyPolicyModal>
                      <button className="hover:text-[#E8CFC2] transition-colors">
                        {link.name}
                      </button>
                    </PrivacyPolicyModal>
                  ) : (
                    <a href={`#${link.id}`} className="hover:text-[#E8CFC2] transition-colors">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-[#E8CFC2] mb-4">Contact Us</h3>
            <ul className="space-y-2">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center">
                  {item.icon}
                  {item.url ? (
                    <a href={item.url} className="hover:text-[#E8CFC2] transition-colors">
                      {item.content}
                    </a>
                  ) : (
                    <span>{item.content}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Woreto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
