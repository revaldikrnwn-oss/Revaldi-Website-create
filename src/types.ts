/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CoffeeRecipe {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  steps: string[];
  imageUrl: string;
  category: 'espresso' | 'filter' | 'milk-based';
  ratio?: string;
  temperature?: string;
  grammage?: string;
  waterAmount?: string;
  grindSize?: string;
  brewTime?: string;
  notes?: string;
  recommendedBeans?: {
    origin: string;
    description: string;
  };
}

export interface MembershipPlan {
  id: string;
  name: string;
  duration: string;
  price: string;
  priceValue: number;
  features: string[];
}

export interface UserProfile {
  uid: string;
  displayName: string;
  email: string;
  photoURL?: string;
  bio?: string;
  membershipStatus?: 'free' | 'premium';
  membershipExpiry?: string;
}
