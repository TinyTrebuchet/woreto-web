import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyPolicyModalProps {
  children: React.ReactNode;
}

const PrivacyPolicyModal = ({ children }: PrivacyPolicyModalProps) => {
  const [open, setOpen] = useState(false);
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl h-[80vh]">
        <DialogHeader>
          <DialogTitle>Privacy Policy</DialogTitle>
          <DialogDescription>
            Last updated: July 15, 2023
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-full pr-4">
          <div className="space-y-4 mt-4">
            <h3 className="text-lg font-semibold">1. Introduction</h3>
            <p>
              Welcome to Woreto. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website or use our app and tells you about your privacy rights and how the law protects you.
            </p>
            
            <h3 className="text-lg font-semibold">2. Data We Collect</h3>
            <p>
              We collect various types of information, including:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Identity Data: includes name, username or similar identifier</li>
              <li>Contact Data: includes email address and phone number</li>
              <li>Technical Data: includes internet protocol (IP) address, your login data, browser type and version</li>
              <li>Usage Data: includes information about how you use our website and app</li>
              <li>Fashion Preference Data: includes your style preferences, sizes, and wardrobe items</li>
            </ul>
            
            <h3 className="text-lg font-semibold">3. How We Use Your Data</h3>
            <p>
              We use your data to provide you with the best possible experience when using our services, including:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>To register you as a new customer</li>
              <li>To provide personalized style recommendations</li>
              <li>To manage our relationship with you</li>
              <li>To administer and protect our business and website</li>
              <li>To deliver relevant content and advertisements to you</li>
            </ul>
            
            <h3 className="text-lg font-semibold">4. Data Sharing</h3>
            <p>
              We may share your data with:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Service providers acting as processors who provide IT and system administration services</li>
              <li>Professional advisers including lawyers, bankers, auditors and insurers</li>
              <li>Regulators and other authorities who require reporting of processing activities in certain circumstances</li>
              <li>Third party vendors to facilitate price comparisons and wardrobe management</li>
            </ul>
            
            <h3 className="text-lg font-semibold">5. Data Security</h3>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
            
            <h3 className="text-lg font-semibold">6. Data Retention</h3>
            <p>
              We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
            
            <h3 className="text-lg font-semibold">7. Your Legal Rights</h3>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>
            
            <h3 className="text-lg font-semibold">8. Changes to This Privacy Policy</h3>
            <p>
              We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "last updated" date at the top.
            </p>
            
            <h3 className="text-lg font-semibold">9. Contact Us</h3>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
              <br />
              Email: privacy@woreto.com
              <br />
              Phone: +1 (800) WORETO
              <br />
              Address: Fashion District, New York
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyModal;
