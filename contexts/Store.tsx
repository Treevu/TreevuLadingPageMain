
import React, { createContext, useContext, useState } from 'react';
import { UserRole, SubscriptionTier, OfferType } from '../types';

const defaultContext = {
  user: {
    subscriptionTier: SubscriptionTier.FREE,
    treevus: 1250,
    monthlyBudget: 2500,
  },
  companyKPIs: {
    avgFWI: 72,
    trend: { avgFWI: '+2.1', flightRiskScore: '-5%' },
    flightRiskScore: 18,
    financialENPS: 45,
    retentionSavings: 15400,
    influenceMap: [
       { id: 1, name: 'Ana M.', department: 'Ventas', avatar: 'https://i.pravatar.cc/150?u=1', riskLevel: 'HIGH', influenceScore: 92 },
       { id: 2, name: 'Carlos R.', department: 'IT', avatar: 'https://i.pravatar.cc/150?u=2', riskLevel: 'LOW', influenceScore: 88 }
    ],
    sentimentAnalysis: [
        { topic: 'Salario On-Demand', count: 85, sentiment: 'positive' },
        { topic: 'Carga Laboral', count: 42, sentiment: 'negative' },
        { topic: 'Beneficios Salud', count: 60, sentiment: 'neutral' }
    ],
    adoption: { active: 75, sporadic: 15, inactive: 10 },
    history: { moodHistory: [65, 68, 70, 72, 69, 75, 78] },
    teamMoodScore: 78
  },
  merchantKPIs: {
    buyerProfiles: [
        { type: 'Impulsivo', percentage: 40, color: 'bg-purple-500' },
        { type: 'Planificador', percentage: 35, color: 'bg-blue-500' },
        { type: 'Cazador Ofertas', percentage: 25, color: 'bg-emerald-500' }
    ],
    basketAnalysis: [
        { item: 'Café Americano', matchesWith: 'Muffin Arándano', probability: 75 },
        { item: 'Pizza Familiar', matchesWith: 'Bebida 1.5L', probability: 82 }
    ],
    elasticity: [
        { scenario: 'Descuento 10%', discount: 10, volumeChange: 15 },
        { scenario: 'Descuento 20%', discount: 20, volumeChange: 45 }
    ]
  },
  expenses: [] as any[],
  savingsGoals: [
    { id: '1', title: 'Viaje a Cusco', targetAmount: 3000, currentAmount: 1200, image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=100&q=80', color: 'bg-emerald-500' }
  ],
  offers: [
    { 
        id: '1', 
        title: '2x1 Cineplanet', 
        merchantName: 'Cineplanet', 
        image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=300&q=80', 
        redemptions: 120, 
        costTreevus: 500, 
        isFlash: true, 
        revenueGenerated: 1200,
        description: 'Válido lunes y miércoles en salas 2D.',
        type: OfferType.DISCOUNT,
        isCashback: false
    },
    { 
        id: '2', 
        title: '20% Starbucks', 
        merchantName: 'Starbucks', 
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=300&q=80', 
        redemptions: 340, 
        costTreevus: 300, 
        revenueGenerated: 4500,
        description: 'En bebidas preparadas de tamaño Alto o Venti.',
        type: OfferType.DISCOUNT,
        isCashback: false
    }
  ],
  notifications: [] as {id: string, message: string, type: 'success' | 'error' | 'info' | 'warning'}[],
  hourlyTraffic: Array.from({ length: 12 }, (_, i) => ({ hour: `${8+i}:00`, volume: Math.floor(Math.random() * 100), isPeak: i === 5 })),
  sectorHourlyTraffic: Array.from({ length: 12 }, (_, i) => ({ volume: Math.floor(Math.random() * 80) })),
  sectorStats: { avgTicket: 42.50 },
  togglePricingModal: (isOpen: boolean) => {},
  removeNotification: (id: string) => {},
  redeemOffer: (id: string) => {},
  toggleBudgetModal: (isOpen: boolean) => {},
  addNotification: (message: string, type: 'success' | 'error' | 'info' | 'warning') => {},
  isBudgetModalOpen: false,
  merchantActivityLog: []
};

const StoreContext = createContext(defaultContext);

export const useStore = () => useContext(StoreContext);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [store] = useState(defaultContext);
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
