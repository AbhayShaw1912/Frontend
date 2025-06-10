import { CheckCircle } from 'lucide-react';
import { useFileUpload, useDragAndDrop } from '../../../shared/hooks';
import ImagePreview from './ImagePreview';
import UploadPrompt from './UploadPrompt';
import UploadButton from './UploadButton';
import ErrorMessage from './ErrorMessage';
import type { DropZoneProps } from '../../../shared/types';

function DropZone({ setResult, setIsLoading }: DropZoneProps) {
    const { preview, uploadStatus, handleFile, resetUpload } = useFileUpload(setResult, setIsLoading);
    const { isDragActive, dragHandlers } = useDragAndDrop(handleFile);

    const onFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            await handleFile(files[0]);
        }
    };

    const getDropZoneClasses = () => {
        const baseClasses = "relative border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 ease-in-out min-h-[300px] flex flex-col items-center justify-center";
        
        if (isDragActive) {
            return `${baseClasses} border-blue-500 bg-blue-50 scale-[1.02]`;
        }
        
        switch (uploadStatus.status) {
            case 'success':
                return `${baseClasses} border-green-300 bg-green-50`;
            case 'error':
                return `${baseClasses} border-red-300 bg-red-50`;
            default:
                return `${baseClasses} border-gray-300 bg-white hover:border-blue-400 hover:bg-blue-50`;
        }
    };

    return (
        <div className="space-y-6">
            <div {...dragHandlers} className={getDropZoneClasses()}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={onFileSelect}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />

                {preview ? (
                    <div className="space-y-4">
                        <ImagePreview 
                            src={preview} 
                            alt="Preview" 
                            onRemove={resetUpload}
                        />
                        <div className="flex items-center justify-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span className="text-sm font-medium text-green-700">
                                Image uploaded successfully
                            </span>
                        </div>
                    </div>
                ) : (
                    <UploadPrompt isDragActive={isDragActive} />
                )}

                {uploadStatus.status === 'error' && uploadStatus.error && (
                    <ErrorMessage 
                        message={uploadStatus.error}
                        className="absolute bottom-4 left-4 right-4"
                    />
                )}
            </div>

            <UploadButton 
                onClick={() => document.querySelector<HTMLInputElement>('input[type="file"]')?.click()}
            />
        </div>
    );
}

export default DropZone;