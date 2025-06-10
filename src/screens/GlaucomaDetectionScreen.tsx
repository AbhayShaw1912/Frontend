import { useState } from "react";
import { DropZone, ResultDisplay } from "../features/glaucoma-detection/components";
import type { Result } from "../shared/types";

function GlaucomaDetectionScreen() {
    const [result, setResult] = useState<Result | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="bg-white shadow-sm border-b border-gray-100">
                <div className="container mx-auto px-6 py-8">
                    <h1 className="text-5xl font-bold text-center">
                        <span className="text-gray-900">Glaucoma</span>
                        <span className="text-blue-600 ml-2">Detector</span>
                    </h1>
                    <p className="text-center text-gray-600 mt-3 text-lg">
                        Advanced AI-powered glaucoma detection from retinal images
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-12 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Input Section */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">1</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Input</h3>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Upload a high-quality retinal image for AI-powered glaucoma analysis. 
                            Supported formats: JPG, PNG, WebP
                        </p>
                        <DropZone setResult={setResult} setIsLoading={setIsLoading} />
                    </div>

                    {/* Result Section */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">2</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Result</h3>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            View detailed analysis results including diagnosis confidence and recommendations.
                        </p>
                        <ResultDisplay result={result} isLoading={isLoading} />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-white border-t border-gray-100 mt-16">
                <div className="container mx-auto px-6 py-8">
                    <p className="text-center text-gray-500 text-sm">
                        This tool is for educational purposes only and should not replace professional medical diagnosis.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default GlaucomaDetectionScreen;