import { Result } from '../types/api';
import axios from "axios";

const formData = new FormData();
export async function CnnResult(formData): Promise<any>{
    const result = await axios.post("https://nthander2002-eyevanguard.hf.space/predict_cnn", formData,{
        headers : { 'Content-Type' : 'multipart/form-data', 'accept': 'application/json' },

    })

    return result.data
}

export async function TransformerResult(formData): Promise<any>{
    const result = await axios.post("https://nthander2002-eyevanguard.hf.space/predict_transformer", formData,{
        headers : { 'Content-Type' : 'multipart/form-data', 'accept': 'application/json' },



    })

    return result.data
}

export async function detectGlaucoma(model, file: File): Promise<Result> {


    formData.append('file', new Blob([file]));

    const result = model == "CNN" ? await CnnResult(formData) : await TransformerResult(formData)



    await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 2000));



    const fileName = file.name.toLowerCase();
    const isGlaucomaPositive = result.label.toLowerCase() == "positive"
    const detectedPercent = Math.round(Math.floor(result.probability * 100))

    if (isGlaucomaPositive) {
        return {
            diagnosis: "Glaucoma indicators detected - Further evaluation recommended",
            detectedPercent: detectedPercent,
            confidence: Math.round(result.confidence * 100) >= 60 ? 'high' : 'medium',
            timestamp: new Date().toISOString(),
            recommendations: [
                "Consult with an ophthalmologist immediately",
                "Schedule comprehensive eye examination",
                "Consider additional diagnostic tests (OCT, visual field)"
            ]
        };
    } else {
        const detectedPercent = Math.round(Math.floor(result.probability * 100));
        return {
            diagnosis: "No significant glaucoma indicators detected",
            detectedPercent: detectedPercent,
            confidence: 'low',
            timestamp: new Date().toISOString(),
            recommendations: [
                "Continue regular eye examinations",
                "Maintain healthy lifestyle",
                "Monitor for any vision changes"
            ]
        };
    }
}

export const detect = detectGlaucoma;
export type { Result };