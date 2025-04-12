
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

interface ImageUploaderProps {
  onImageUploaded: (imageUrl: string) => void;
}

export const ImageUploader = ({ onImageUploaded }: ImageUploaderProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  // Process the file and create a local URL
  const processFile = (file: File) => {
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          onImageUploaded(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload an image file");
    }
  };

  // Handle drag and drop events
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files.length) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  // Trigger file input click
  const handleSelectClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div 
      className={`w-full ${isDragging ? 'bg-blue-100' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      
      <Button 
        variant="outline" 
        onClick={handleSelectClick}
        className="flex items-center gap-2 text-sm border-blue-300 text-blue-600 hover:bg-blue-50"
      >
        <Upload size={16} />
        Upload Image
      </Button>
    </div>
  );
};
