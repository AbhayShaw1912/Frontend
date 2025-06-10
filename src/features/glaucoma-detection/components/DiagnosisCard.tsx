import { FileText } from 'lucide-react';

interface DiagnosisCardProps {
    diagnosis: string;
    className?: string;
}

function DiagnosisCard({ diagnosis, className = '' }: DiagnosisCardProps) {
    return (
        <div className={`bg-gray-50 rounded-xl p-6 border-l-4 border-l-blue-600 ${className}`}>
            <div className="flex items-start space-x-3">
                <FileText className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">Diagnosis</h4>
                    <p className="text-gray-800 text-lg">{diagnosis}</p>
                </div>
            </div>
        </div>
    );
}

export default DiagnosisCard;