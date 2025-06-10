import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12'
    };

    return (
        <div className="relative">
            <Loader2 className={`${sizeClasses[size]} text-blue-600 animate-spin ${className}`} />
            <div className={`absolute inset-0 ${sizeClasses[size]} border-4 border-blue-200 rounded-full`}></div>
        </div>
    );
}

export default LoadingSpinner;