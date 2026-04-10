// wellness.model.ts

// Interfaces for Wellness Application Data Models

// User Interface
export interface User {
    id: string;
    username: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

// UserProfile Interface
export interface UserProfile {
    userId: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    gender: string;
    bio?: string;
}

// WellnessGoal Interface
export interface WellnessGoal {
    id: string;
    userId: string;
    goalDescription: string;
    targetDate: Date;
    status: 'active' | 'completed' | 'inactive';
}

// WellnessProgram Interface
export interface WellnessProgram {
    id: string;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    active: boolean;
}

// UserAssessment Interface
export interface UserAssessment {
    userId: string;
    assessmentDate: Date;
    scores: {[key: string]: number}; // Dynamic scoring metrics
}

// Recommendation Interface
export interface Recommendation {
    id: string;
    userId: string;
    recommendationText: string;
    dateRecommended: Date;
}

// ProgressTracking Interface
export interface ProgressTracking {
    userId: string;
    progressDate: Date;
    goalsMet: string[];
    notes?: string;
}

// HealthMetric Interface
export interface HealthMetric {
    userId: string;
    metricDate: Date;
    metrics: {[key: string]: number}; // e.g., weight, BMI
}
