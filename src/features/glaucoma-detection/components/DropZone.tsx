import { CheckCircle } from 'lucide-react';
import { useFileUpload, useDragAndDrop } from '../../../shared/hooks';
import ImagePreview from './ImagePreview';
import UploadPrompt from './UploadPrompt';
import UploadButton from './UploadButton';
import ErrorMessage from './ErrorMessage';
import type { DropZoneProps } from '../../../shared/types';
import { detectGlaucoma } from "../../../shared/api";
import { useRef, useState } from "react";

function DropZone({ setResult, setIsLoading }: DropZoneProps) {
    const { preview, uploadStatus, setUploadStatus, handleFile, resetUpload } = useFileUpload(setResult, setIsLoading);
    const { isDragActive, dragHandlers } = useDragAndDrop(handleFile);
    const [file, setFile] = useState<File | undefined>();
    const fileInputRef = useRef<HTMLInputElement | null>(null);


    const onFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            setFile(handleFile(files[0]));

        }
    };

    async function CnnModelResult() {
        if (!file) return
        try {
            setIsLoading(true);
            setResult(null);
            const report = await detectGlaucoma("CNN", file);
            setResult(report);
        } catch (err) {
            console.error('Detection error:', err);
            setUploadStatus({
                status: 'error',
                error: 'Failed to analyze image. Please try again.'
            });
        } finally {
            setIsLoading(false);
        }
    }

    async function TransFormerModelResult() {
        if (!file) return
        try {
            setIsLoading(true);
            setResult(null);
            const report = await detectGlaucoma("Transform", file);
            setResult(report);
        } catch (err) {
            console.error('Detection error:', err);
            setUploadStatus({
                status: 'error',
                error: 'Failed to analyze image. Please try again.'
            });
        } finally {
            setIsLoading(false);
        }

    }

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
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={onFileSelect}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    formEncType="multipart/form-data"
                />

                {preview ? (
                    <div className="space-y-4">
                        <ImagePreview
                            src={preview}
                            alt="Preview"
                            onRemove={() => {
                                resetUpload();
                                setFile(undefined);
                                if (fileInputRef.current) {
                                    fileInputRef.current.value = "";
                                }
                            }}
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

            <div className="flex lg:flex-row gap-5 sm:flex-col">

                <UploadButton
                    onClick={() => CnnModelResult()}
                    text="CNN Model"
                    enabled={!!file}
                />
                <UploadButton
                    onClick={() => TransFormerModelResult()}
                    text="Transformer Model"
                    enabled={!!file}
                />
            </div>
        </div>
    );
}

export default DropZone;