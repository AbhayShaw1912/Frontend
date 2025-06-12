import { useState, useCallback } from 'react';
import { validateFile, createPreviewUrl, revokePreviewUrl } from '../utils/fileValidation';
import type { Result, UploadStatus } from '../types';

export function useFileUpload(
    setResult: (result: Result | null) => void,
    setIsLoading: (loading: boolean) => void
) {
    const [preview, setPreview] = useState<string | null>(null);
    const [uploadStatus, setUploadStatus] = useState<UploadStatus>({ status: 'idle' });

    const handleFile =  (file: File) => {
        const validation = validateFile(file);

        if (!validation.isValid) {
            setUploadStatus({ status: 'error', error: validation.error });
            return;
        }

        const previewUrl = createPreviewUrl(file);
        console.log(previewUrl)
        setPreview(previewUrl);
        setUploadStatus({ status: 'success' });

        return file;

    }

    const resetUpload = useCallback(() => {
        if (preview) {
            revokePreviewUrl(preview);
        }
        setPreview(null);
        setResult(null);
        setUploadStatus({ status: 'idle' });
    }, [preview, setResult]);

    return {
        preview,
        uploadStatus,
        handleFile,
        resetUpload,
        setUploadStatus
    };
}