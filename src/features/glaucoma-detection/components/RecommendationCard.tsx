import { isPositiveDiagnosis } from '../../../shared/utils/confidence';

interface RecommendationCardProps {
    diagnosis: string;
    recommendations?: string[];
    className?: string;
}

function RecommendationCard({ diagnosis, recommendations, className = '' }: RecommendationCardProps) {
    const isPositive = isPositiveDiagnosis(diagnosis);
    
    const defaultRecommendation = isPositive 
        ? 'Please consult with an ophthalmologist for further evaluation and confirmation.'
        : 'No signs of glaucoma detected. Continue regular eye examinations as recommended by your healthcare provider.';

    return (
        <div className={`rounded-xl p-4 ${
            isPositive ? 'bg-amber-50 border border-amber-200' : 'bg-green-50 border border-green-200'
        } ${className}`}>
            <h4 className={`font-semibold mb-2 ${
                isPositive ? 'text-amber-800' : 'text-green-800'
            }`}>
                Recommendations
            </h4>
            {recommendations && recommendations.length > 0 ? (
                <ul className={`text-sm space-y-1 ${
                    isPositive ? 'text-amber-700' : 'text-green-700'
                }`}>
                    {recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start space-x-2">
                            <span className="text-xs mt-1">•</span>
                            <span>{rec}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className={`text-sm ${
                    isPositive ? 'text-amber-700' : 'text-green-700'
                }`}>
                    {defaultRecommendation}
                </p>
            )}
        </div>
    );
}

export default RecommendationCard;