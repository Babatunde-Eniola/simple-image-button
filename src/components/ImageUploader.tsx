
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

interface ImageUploaderProps {
  onImageUploaded: (imageUrl: string) => void;
  disabled?: boolean;
}

export const ImageUploader = ({ onImageUploaded, disabled = false }: ImageUploaderProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Prevent any file handling if disabled
  const handleFileChange = () => {};
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const handleDragLeave = () => {};
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const handleSelectClick = () => {};

  return (
    <div 
      className={`w-full ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
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
        disabled={disabled}
      />
      
      <Button 
        variant="outline" 
        onClick={handleSelectClick}
        disabled={disabled}
        className="flex items-center gap-2 text-sm border-blue-300 text-blue-600 hover:bg-blue-50 opacity-50 cursor-not-allowed"
      >
        <Upload size={16} />
        Upload Image
      </Button>
    </div>
  );
};
