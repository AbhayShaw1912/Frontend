import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
    message: string;
    className?: string;
}

function ErrorMessage({ message, className = '' }: ErrorMessageProps) {
    return (
        <div className={`flex items-center space-x-2 bg-red-100 border border-red-300 rounded-lg p-3 ${className}`}>
            <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
            <span className="text-sm text-red-700">{message}</span>
        </div>
    );
}

export default ErrorMessage;