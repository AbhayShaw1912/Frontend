export const CONFIDENCE_LEVELS = {
    high: {
        level: 'high' as const,
        color: 'text-red-600',
        bgColor: 'bg-red-500',
        threshold: 80
    },
    medium: {
        level: 'medium' as const,
        color: 'text-amber-600',
        bgColor: 'bg-amber-500',
        threshold: 50
    },
    low: {
        level: 'low' as const,
        color: 'text-green-600',
        bgColor: 'bg-green-500',
        threshold: 0
    }
} as const;

export const FILE_CONSTRAINTS = {
    maxSize: 10 * 1024 * 1024, // 10MB
    acceptedTypes: ['image/jpeg', 'image/png', 'image/webp'],
    acceptedExtensions: 'JPG, PNG, WebP'
} as const;

export const ANIMATION_DURATIONS = {
    fast: 200,
    normal: 300,
    slow: 1000
} as const;