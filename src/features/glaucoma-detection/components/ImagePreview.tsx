interface ImagePreviewProps {
    src: string;
    alt: string;
    onRemove: () => void;
    className?: string;
}

function ImagePreview({ src, alt, onRemove, className = '' }: ImagePreviewProps) {
    return (
        <div className={`relative ${className}`}>
            <img
                src={src}
                alt={alt}
                className="mx-auto max-h-48 max-w-full object-contain rounded-lg shadow-sm"
                onLoad={() => URL.revokeObjectURL(src)}
            />
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onRemove();
                }}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
            >
                ×
            </button>
        </div>
    );
}

export default ImagePreview;