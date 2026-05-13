/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CoffeeRecipe, MembershipPlan } from './types';

export const COFFEE_RECIPES: CoffeeRecipe[] = [
  {
    id: 'espresso',
    name: 'Espresso',
    description: 'The foundation of coffee. Intense, rich, and concentrated.',
    ingredients: ['18-20g ground coffee', '36-40ml water'],
    steps: [
      'Grind coffee beans finely.',
      'Distribute and tamp coffee in the portafilter.',
      'Pull the shot for 25-30 seconds.',
      'Serve immediately in a warm cup.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1510707577719-5d6815a204aa?auto=format&fit=crop&q=80&w=800',
    category: 'espresso',
    ratio: '1:2',
    temperature: '93°C',
    grammage: '19g',
    waterAmount: '38ml',
    grindSize: 'Fine',
    brewTime: '0:28',
    notes: 'Focus on even tamping to avoid channeling.',
    recommendedBeans: {
      origin: 'Brazil / Colombia Blend',
      description: 'A blend of Brazilian and Colombian beans provides the classic espresso profile: rich chocolate, toasted nuts, and a syrupy mouthfeel. The low-to-medium acidity and high sweetness of these regions ensure a balanced shot that pairs perfectly with milk or stands bold as a straight espresso.'
    }
  },
  {
    id: 'americano',
    name: 'Americano',
    description: 'Espresso with added hot water for a smooth, bold flavor.',
    ingredients: ['Double shot espresso', '150-180ml hot water'],
    steps: [
      'Pull a double shot of espresso.',
      'Fill a cup with hot water.',
      'Pour the espresso over the hot water.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=800',
    category: 'espresso',
    ratio: '1:3+',
    temperature: '93°C (Espresso)',
    grammage: '19g',
    waterAmount: '180ml',
    grindSize: 'Fine',
    brewTime: '0:28 (Shot)',
    notes: 'Hot water first, then espresso to preserve crema.'
  },
  {
    id: 'v60',
    name: 'V60 Pour Over',
    description: 'Clean, bright, and nuanced coffee using the classic pour-over method.',
    ingredients: ['20g medium-fine coffee', '300ml water (92-96°C)'],
    steps: [
      'Rinse the filter paper with hot water.',
      'Add coffee grounds and level them.',
      'Bloom with 40g water for 30s.',
      'Pour remaining water in circular motions.',
      'Total draw-down should be around 2:30-3:00.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544787210-22c6729738ce?auto=format&fit=crop&q=80&w=800',
    category: 'filter',
    ratio: '1:15',
    temperature: '94°C',
    grammage: '20g',
    waterAmount: '300ml',
    grindSize: 'Medium-Fine',
    brewTime: '3:00',
    notes: 'Pouring technique is key to clarity.',
    recommendedBeans: {
      origin: 'Ethiopia Kochere / Guji',
      description: 'Washer Ethiopian beans from regions like Kochere or Guji are the gold standard for V60 brewing. Their complex acidity and tea-like body are beautifully unraveled by the V60’s design, highlighting vibrant notes of Earl Grey, peach, and citrus that a darker or heavier bean might lose.'
    }
  },
  {
    id: 'cafe-latte',
    name: 'Cafe Latte',
    description: 'Creamy espresso topped with silky microfoam.',
    ingredients: ['Double shot espresso', '200ml steamed milk', 'Small layer of foam'],
    steps: [
      'Pull a double shot of espresso.',
      'Steam milk to 60-65°C with minimal foam.',
      'Pour milk slowly into espresso, finishing with art.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800',
    category: 'milk-based',
    ratio: '1:6 (Total)',
    temperature: '65°C (Milk)',
    grammage: '19g (Coffee)',
    waterAmount: '240ml (Milk)',
    grindSize: 'Fine',
    brewTime: '0:28 (Shot)',
    notes: 'The silkiness of the foam defines the latte.'
  },
  {
    id: 'long-black',
    name: 'Long Black',
    description: 'Similar to an Americano but with a stronger crema and different pouring order.',
    ingredients: ['120ml hot water', 'Double shot espresso'],
    steps: [
      'Fill a cup with hot water.',
      'Pull a double shot of espresso directly into the hot water to preserve the crema.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=800',
    category: 'espresso',
    ratio: '1:2',
    temperature: '93°C',
    grammage: '19g',
    waterAmount: '120ml',
    grindSize: 'Fine',
    brewTime: '0:28',
    notes: 'Higher water-to-espresso ratio than a shot, but less than an Americano.'
  },
  {
    id: 'magic',
    name: 'Magic',
    description: 'A Melbourne cult classic: double ristretto with silky steamed milk.',
    ingredients: ['Double ristretto (30ml total)', '120ml microfoam milk'],
    steps: [
      'Pull a double ristretto shot (cut the espresso extraction early).',
      'Steam milk to a very fine microfoam.',
      'Pour into a 5-6oz cup.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
    category: 'milk-based',
    ratio: '1:4',
    temperature: '60°C (Milk)',
    grammage: '20g (Coffee)',
    waterAmount: '150ml (Total)',
    grindSize: 'Fine',
    brewTime: '0:20 (Shot)',
    notes: 'The short extraction provides sweetness without bitterness.'
  },
  {
    id: 'mocachino',
    name: 'Mocachino',
    description: 'A chocolate-infused latte for those who love a sweet, rich treat.',
    ingredients: ['Double espresso', '20g dark chocolate or cocoa', 'Steamed milk'],
    steps: [
      'Mix chocolate with espresso in the cup.',
      'Steam milk as you would for a latte.',
      'Pour steamed milk over the chocolate-espresso mixture.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=800',
    category: 'milk-based',
    ratio: '1:1:5',
    temperature: '65°C',
    grammage: '19g',
    waterAmount: '200ml',
    grindSize: 'Fine',
    brewTime: '0:28',
    notes: 'Quality of chocolate matters as much as the coffee.'
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    description: 'A balanced ratio of espresso, steamed milk, and rich foam.',
    ingredients: ['Single or Double espresso', 'Steamed milk', 'Thick foam'],
    steps: [
      'Pull the espresso shot.',
      'Steam milk to create more foam than a latte.',
      'Pour the steamed milk and foam equally over espresso.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=800',
    category: 'milk-based',
    ratio: '1:3 (Total)',
    temperature: '65°C',
    grammage: '19g',
    waterAmount: '150ml',
    grindSize: 'Fine',
    brewTime: '0:28',
    notes: 'Classic rule: 1/3 espresso, 1/3 milk, 1/3 foam.'
  },
  {
    id: 'japanese-iced',
    name: 'Japanese Iced Coffee',
    description: 'Brewed hot over ice for instant aroma trapping and crisp flavor.',
    ingredients: ['20g coffee', '150g ice', '150ml hot water'],
    steps: [
      'Place ice in the server.',
      'Brew coffee using V60 method over the ice.',
      'Swirl to melt ice and chill the coffee instantly.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800',
    category: 'filter',
    ratio: '1:15',
    temperature: '96°C',
    grammage: '20g',
    waterAmount: '150ml Water + 150g Ice',
    grindSize: 'Medium',
    brewTime: '2:30',
    notes: 'Higher temperature helps extract more flavor to cut through the dilution.',
    recommendedBeans: {
      origin: 'Ethiopia Yirgacheffe / Sidamo',
      description: 'Ethiopian beans, particularly from Yirgacheffe or Sidamo, are prized for their floral aromatics and bright citrus acidity. In the Japanese Iced method, these delicate notes—resembling jasmine, lemon, and bergamot—are flash-frozen and preserved, resulting in a tea-like, refreshing profile that is exceptionally vibrant when served cold.'
    }
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: '1-month',
    name: 'Monthly Enthusiast',
    duration: '1 Month',
    price: 'Rp. 50,000',
    priceValue: 50000,
    features: ['Exclusive Brewing Recipes', 'Ad-free Experience', 'Early Access to Beans', 'Community Forums']
  },
  {
    id: '6-months',
    name: 'Semi-Annual Barista',
    duration: '6 Months',
    price: 'Rp. 500,000',
    priceValue: 500000,
    features: ['All Monthly Features', '10% Shop Discount', 'Brewing Workshops', 'Digital Badges']
  },
  {
    id: '1-year',
    name: 'Annual Master',
    duration: '1 Year',
    price: 'Rp. 1,000,000',
    priceValue: 1000000,
    features: ['All Semi-Annual Features', 'Free Merch Kit', 'Priority Support', 'VIP Event Invites']
  }
];
