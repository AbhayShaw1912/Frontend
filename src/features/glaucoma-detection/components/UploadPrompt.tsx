import { Upload, Image } from 'lucide-react';
import { FILE_CONSTRAINTS } from '../../../shared/constants/ui';

interface UploadPromptProps {
    isDragActive: boolean;
    className?: string;
}

function UploadPrompt({ isDragActive, className = '' }: UploadPromptProps) {
    return (
        <div className={`space-y-6 ${className}`}>
            <div className="flex flex-col items-center space-y-4">
                {isDragActive ? (
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                        <Upload className="w-8 h-8 text-white" />
                    </div>
                ) : (
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                        <Image className="w-8 h-8 text-gray-600" />
                    </div>
                )}
                
                <div className="text-center">
                    <p className="text-lg font-medium text-gray-900 mb-2">
                        {isDragActive ? 'Drop the image here' : 'Upload or Drag Image'}
                    </p>
                    <p className="text-sm text-gray-500">
                        Supports {FILE_CONSTRAINTS.acceptedExtensions} up to 10MB
                    </p>
                </div>
            </div>
        </div>
    );
}

export default UploadPrompt;