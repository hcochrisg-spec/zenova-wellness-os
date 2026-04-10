// Utility functions for wellness calculations

/**
 * Calculate Body Mass Index (BMI)
 * @param weight - weight in kilograms
 * @param height - height in meters
 * @returns BMI value
 */
function calculateBMI(weight: number, height: number): number {
    return weight / (height * height);
}

/**
 * Score Activity Level based on given metrics
 * @param minutes - minutes of activity per week
 * @returns Activity Level Score
 */
function scoreActivityLevel(minutes: number): number {
    if (minutes < 30) return 1; // Sedentary
    if (minutes < 150) return 2; // Moderately active
    return 3; // Active
}

/**
 * Compute overall wellness score based on multiple factors
 * @param bmi - calculated BMI
 * @param activityScore - score of activity level
 * @param goalAchieved - boolean representing if goals are achieved
 * @returns Wellness Score
 */
function computeWellnessScore(bmi: number, activityScore: number, goalAchieved: boolean): number {
    return (10 - bmi) + activityScore + (goalAchieved ? 1 : 0);
}

/**
 * Prioritize goals based on personal preferences and importance
 * @param goals - array of goals
 * @returns prioritized goals
 */
function prioritizeGoals(goals: string[]): string[] {
    return goals.sort((a, b) => a.length - b.length);
}