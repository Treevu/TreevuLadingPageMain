import React from 'react';

export enum PlanType {
  PERSONA = 'PERSONA',
  EMPRESA = 'EMPRESA',
  COMERCIO = 'COMERCIO'
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlight?: boolean;
  cta: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface ContactFormData {
  nombre: string;
  email: string;
  empresa: string;
  mensaje: string;
}