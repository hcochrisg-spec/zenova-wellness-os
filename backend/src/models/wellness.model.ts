// TypeScript interfaces for wellness models

export interface User {
    id: string;
    name: string;
    email: string;
}

export interface UserProfile {
    userId: string;
    age: number;
    gender: string;
    height: number;
    weight: number;
}

export interface WellnessGoal {
    id: string;
    goal: string;
    targetDate: Date;
}

export interface WellnessProgram {
    id: string;
    name: string;
    description: string;
    goals: WellnessGoal[];
}

export interface UserAssessment {
    userId: string;
    answers: any;
    score: number;
}

export interface Recommendation {
    programId: string;
    userId: string;
    details: string;
}

export interface ProgressTracking {
    userId: string;
    metricId: string;
    value: number;
}

export interface HealthMetric {
    userId: string;
    metricName: string;
    value: number;
    date: Date;
}
