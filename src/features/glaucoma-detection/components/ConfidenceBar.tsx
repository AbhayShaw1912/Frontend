import { getConfidenceLevel } from '../../../shared/utils/confidence';

interface ConfidenceBarProps {
    percentage: number;
    className?: string;
}

function ConfidenceBar({ percentage, className = '' }: ConfidenceBarProps) {
    const confidenceLevel = getConfidenceLevel(percentage);

    return (
        <div className={`space-y-3 ${className}`}>
            <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Confidence Score</span>
                <span className="text-2xl font-bold text-gray-900">{percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                    className={`h-3 rounded-full transition-all duration-1000 ease-out ${confidenceLevel.bgColor}`}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
                <span>Low Risk</span>
                <span>High Risk</span>
            </div>
        </div>
    );
}

export default ConfidenceBar;