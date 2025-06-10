import LoadingSpinner from './LoadingSpinner';

interface LoadingStateProps {
    className?: string;
}

function LoadingState({ className = '' }: LoadingStateProps) {
    return (
        <div className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 ${className}`}>
            <div className="flex flex-col items-center justify-center space-y-4 min-h-[300px]">
                <LoadingSpinner size="lg" />
                <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Analyzing Image...
                    </h3>
                    <p className="text-sm text-gray-600">
                        Our AI is processing your retinal image for glaucoma detection
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LoadingState;