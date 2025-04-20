import { FaApple, FaGooglePlay } from "react-icons/fa";

interface DownloadButtonProps {
  platform: "ios" | "android";
  className?: string;
  style?: "primary" | "secondary";
  showIcon?: boolean;
  large?: boolean;
}

const DownloadButton = ({
  platform,
  className = "",
  style = "primary",
  showIcon = true,
  large = false,
}: DownloadButtonProps) => {
  const isPrimary = style === "primary";
  const isIOS = platform === "ios";
  const icon = isIOS ? <FaApple className={large ? "text-2xl mr-2" : "text-xl mr-2"} /> : <FaGooglePlay className={large ? "text-2xl mr-2" : "text-xl mr-2"} />;
  const store = isIOS ? "App Store" : "Google Play";
  const text = isIOS ? "Download for iOS" : "Download for Android";
  const preText = isIOS ? "Download on the" : "GET IT ON";
  
  const baseClasses = "wt-home-download-btn flex items-center justify-center rounded-full shadow-lg transition-all duration-300";
  const primaryClasses = "bg-[#E8CFC2] text-black";
  const secondaryClasses = "border-2 border-[#E8CFC2] text-[#E8CFC2]";
  const sizeClasses = large ? "px-8 py-4 rounded-xl" : "py-3 px-6";
  
  return (
    <a 
      href="#download" 
      className={`${baseClasses} ${isPrimary ? primaryClasses : secondaryClasses} ${sizeClasses} ${className}`}
    >
      {large ? (
        <>
          {showIcon && icon}
          <div className="text-left">
            <div className="text-xs">{preText}</div>
            <div className="text-xl font-semibold">{store}</div>
          </div>
        </>
      ) : (
        <>
          {showIcon && icon}
          <span>{text}</span>
        </>
      )}
    </a>
  );
};

export default DownloadButton;
