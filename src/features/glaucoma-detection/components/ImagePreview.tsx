interface ImagePreviewProps {
    src: string;
    alt: string;
    onRemove?: () => void;
    className?: string;
}

function ImagePreview({ src, alt, onRemove, className = '' }: ImagePreviewProps) {
    const isDisabled = !onRemove;

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
                    if (onRemove) {
                        onRemove();
                    }
                }}
                disabled={isDisabled}
                className={`absolute -top-2 -right-2 rounded-full w-6 h-6 flex items-center justify-center text-xs transition-all duration-200 ${isDisabled
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed opacity-50'
                    : 'bg-red-500 text-white hover:bg-red-600 cursor-pointer'
                    }`}
            >
                ×
            </button>
        </div>
    );
}

export default ImagePreview;