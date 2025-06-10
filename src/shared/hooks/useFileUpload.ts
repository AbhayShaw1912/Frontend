import { useState, useCallback } from 'react';
import { validateFile, createPreviewUrl, revokePreviewUrl } from '../utils/fileValidation';
import { detectGlaucoma } from '../api/detect';
import type { Result, UploadStatus } from '../types';

export function useFileUpload(
    setResult: (result: Result | null) => void,
    setIsLoading: (loading: boolean) => void
) {
    const [preview, setPreview] = useState<string | null>(null);
    const [uploadStatus, setUploadStatus] = useState<UploadStatus>({ status: 'idle' });

    const handleFile = useCallback(async (file: File) => {
        const validation = validateFile(file);
        
        if (!validation.isValid) {
            setUploadStatus({ status: 'error', error: validation.error });
            return;
        }

        const previewUrl = createPreviewUrl(file);
        setPreview(previewUrl);
        setUploadStatus({ status: 'success' });

        try {
            setIsLoading(true);
            setResult(null);
            const report = await detectGlaucoma(file);
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
    }, [setResult, setIsLoading]);

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
        resetUpload
    };
}