import { AlertTriangle, CheckCircle } from 'lucide-react';

interface StatusIconProps {
    isPositive: boolean;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

function StatusIcon({ isPositive, size = 'md', className = '' }: StatusIconProps) {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8'
    };

    const Icon = isPositive ? AlertTriangle : CheckCircle;
    const colorClass = isPositive ? 'text-amber-600' : 'text-green-600';

    return (
        <Icon className={`${sizeClasses[size]} ${colorClass} ${className}`} />
    );
}

export default StatusIcon;