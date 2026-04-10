import { HealthMetric } from '../models/wellness.model';

export class ProgressService {
    logMetric(userId: string, metricName: string, value: number): HealthMetric {
        const metric: HealthMetric = { userId, metricName, value, date: new Date() };
        return metric;
    }

    calculateProgress(userId: string, startDate: Date, endDate: Date): any {
        return {
            userId,
            period: `${startDate.toDateString()} to ${endDate.toDateString()}`,
            completionRate: 0.75,
            metricsImproved: ['sleep', 'exercise']
        };
    }

    generateInsights(userId: string, metrics: HealthMetric[]): string[] {
        const insights: string[] = [];
        if (metrics.length === 0) return ['Start tracking to see insights!'];
        const avg = metrics.reduce((sum, m) => sum + m.value, 0) / metrics.length;
        insights.push(`Average: ${avg.toFixed(2)}`);
        return insights;
    }

    getMetricsHistory(userId: string, limit: number = 30): HealthMetric[] {
        return [];
    }

    updateProgramAdaptation(userId: string, progressData: any): any {
        return {
            userId,
            adapted: true,
            newDifficulty: progressData.completionRate > 0.8 ? 'advanced' : 'intermediate'
        };
    }
}
