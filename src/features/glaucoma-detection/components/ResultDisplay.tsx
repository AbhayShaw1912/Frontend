import { isPositiveDiagnosis } from '../../../shared/utils/confidence';
import StatusIcon from './StatusIcon';
import ConfidenceBar from './ConfidenceBar';
import DiagnosisCard from './DiagnosisCard';
import RecommendationCard from './RecommendationCard';
import LoadingState from './LoadingState';
import NoDataState from './NoDataState';
import type { ResultDisplayProps } from '../../../shared/types';

function ResultDisplay({ result, isLoading }: ResultDisplayProps) {
    if (isLoading) {
        return <LoadingState />;
    }

    if (!result) {
        return <NoDataState />;
    }

    const isPositive = isPositiveDiagnosis(result.diagnosis);
    // const confidenceLevel = getConfidenceLevel(result.detectedPercent);

    return (
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="space-y-6">
                {/* Status Header */}
                <div className="flex items-center space-x-3">
                    <StatusIcon isPositive={isPositive} size="lg" />
                    <div>
                        <h3 className="text-xl font-bold text-gray-900">Analysis Complete</h3>
                        <p className="text-sm text-gray-600">
                            {new Date().toLocaleDateString()} • AI Confidence: {result.detectedPercent}
                        </p>
                    </div>
                </div>

                {/* Diagnosis */}
                <DiagnosisCard diagnosis={result.diagnosis} />

                {/* Confidence Score */}
                <ConfidenceBar percentage={result.detectedPercent} />

                {/* Recommendations */}
                <RecommendationCard
                    diagnosis={result.diagnosis}
                    recommendations={result.recommendations}
                />

                {/* Disclaimer */}
                <div className="text-xs text-gray-500 border-t border-gray-100 pt-4">
                    <p>
                        ⚠️ This AI analysis is for screening purposes only and should not replace professional medical diagnosis.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ResultDisplay;