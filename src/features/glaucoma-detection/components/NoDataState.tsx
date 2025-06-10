import { Database } from 'lucide-react';

interface NoDataStateProps {
    className?: string;
}

function NoDataState({ className = '' }: NoDataStateProps) {
    return (
        <div className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 ${className}`}>
            <div className="flex flex-col items-center justify-center space-y-6 min-h-[300px] text-center">
                <div className="relative">
                    <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center">
                        <Database className="w-12 h-12 text-blue-300" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-gray-400 text-sm">?</span>
                    </div>
                </div>
                
                <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">No Data</h3>
                    <p className="text-gray-600 max-w-sm">
                        Upload a retinal image to begin AI-powered glaucoma analysis
                    </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 max-w-sm">
                    <p className="text-sm text-blue-700">
                        💡 For best results, use high-quality fundus photographs with clear optic disc visibility
                    </p>
                </div>
            </div>
        </div>
    );
}

export default NoDataState;