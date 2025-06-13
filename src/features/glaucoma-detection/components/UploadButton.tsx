
interface UploadButtonProps {
    onClick: () => void;
    text: string,
    enabled: boolean
    className?: string;
}

function UploadButton({ onClick, text, enabled, className = '' }: UploadButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98] flex items-center justify-center space-x-2 ${className}`}
            disabled={!enabled}
        >
            <span>{ text }</span>
        </button>
    );
}

export default UploadButton;