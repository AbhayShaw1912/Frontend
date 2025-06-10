import { useState, useCallback } from 'react';

export function useDragAndDrop(onDrop: (file: File) => void) {
    const [isDragActive, setIsDragActive] = useState(false);

    const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragActive(false);
        
        const files = Array.from(e.dataTransfer.files);
        if (files.length > 0) {
            onDrop(files[0]);
        }
    }, [onDrop]);

    const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragActive(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragActive(false);
    }, []);

    return {
        isDragActive,
        dragHandlers: {
            onDrop: handleDrop,
            onDragOver: handleDragOver,
            onDragLeave: handleDragLeave
        }
    };
}