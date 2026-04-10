import { WellnessProgram, Recommendation } from '../models/wellness.model';

export class RecommendationService {
    generatePersonalizedProgram(userId: string, userProfile: any, assessment: any): WellnessProgram {
        const program: WellnessProgram = {
            id: `prog_${userId}_${Date.now()}`,
            name: `Personalized Wellness Program - ${new Date().toLocaleDateString()}`,
            description: 'Your custom wellness program tailored to your goals and lifestyle',
            goals: this.createGoalsFromAssessment(assessment)
        };
        return program;
    }

    matchUserWithContent(userProfile: any): Recommendation[] {
        const recommendations: Recommendation[] = [];
        
        if (userProfile.stressLevel > 7) {
            recommendations.push({
                programId: 'stress_management_001',
                userId: userProfile.id,
                details: 'Daily meditation and breathing exercises'
            });
        }
        
        if (userProfile.exerciseFrequency < 3) {
            recommendations.push({
                programId: 'fitness_beginner_001',
                userId: userProfile.id,
                details: 'Beginner-friendly fitness routine'
            });
        }
        
        return recommendations;
    }

    scoreRecommendation(userProfile: any, recommendation: Recommendation): number {
        let score = 0.5;
        if (recommendation.details.length > 20) score += 0.2;
        if (userProfile.preferences?.includes(recommendation.programId)) score += 0.3;
        return Math.min(score, 1.0);
    }

    adaptProgramBasedOnProgress(userId: string, progressData: any, currentProgram: WellnessProgram): WellnessProgram {
        const adaptedProgram = { ...currentProgram };
        if (progressData.completionRate > 0.8) {
            adaptedProgram.name = adaptedProgram.name + ' (Advanced)';
        }
        return adaptedProgram;
    }

    private createGoalsFromAssessment(assessment: any): any[] {
        return [{
            id: 'goal_1',
            goal: 'Improve overall wellness',
            targetDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
        }];
    }
}
