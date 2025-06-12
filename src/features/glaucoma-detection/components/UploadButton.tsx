
interface UploadButtonProps {
    onClick: () => void;
    className?: string;
}

function UploadButton({ onClick,text, className = '' }: UploadButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98] flex items-center justify-center space-x-2 ${className}`}
        >
            <span>{ text }</span>
        </button>
    );
}

export default UploadButton;