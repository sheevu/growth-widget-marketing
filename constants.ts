import { Check, X, Minus } from 'lucide-react';

export interface ProductData {
  id: string;
  name: string;
  price: string;
  pricePeriod: string;
  description: string;
  isPopular: boolean;
  buttonText: string;
  buttonVariant: 'primary' | 'outline' | 'ghost';
  features: FeatureItem[];
}

export interface FeatureItem {
  label: string;
  value: string;
  isPositive?: boolean; 
  isNegative?: boolean;
  highlight?: boolean; // For specific Sudarshan highlights
}

export const COMPARISON_DATA: ProductData[] = [
  {
    id: 'dukaan',
    name: 'Dukaan',
    price: '₹799',
    pricePeriod: '/month',
    description: 'Standard store builder.',
    isPopular: false,
    buttonText: 'Expensive',
    buttonVariant: 'ghost',
    features: [
      { label: 'Entry Price', value: '₹799/month', isNegative: true },
      { label: 'Setup Time', value: '2-3 days' },
      { label: 'Udyam Registration', value: 'You do it alone', isNegative: true },
      { label: 'Local SEO Bundle', value: 'Extra ₹500+', isNegative: true },
      { label: 'WhatsApp Selling', value: 'Plugin ₹99' },
      { label: 'Voice Dashboard', value: 'English only', isNegative: true },
      { label: 'Govt Schemes Link', value: 'NO', isNegative: true },
      { label: 'AI Chatbot', value: 'Extra ₹500+', isNegative: true },
      { label: 'Community Support', value: 'No community', isNegative: true },
      { label: 'Compliance Help', value: 'Manual', isNegative: true },
    ]
  },
  {
    id: 'sudarshan',
    name: 'Sudarshan',
    price: '₹89',
    pricePeriod: 'one-time',
    description: 'Built FOR India\'s grassroots.',
    isPopular: true,
    buttonText: 'Join Revolution',
    buttonVariant: 'primary',
    features: [
      { label: 'Entry Price', value: '₹89 one-time', isPositive: true, highlight: true },
      { label: 'Setup Time', value: '24 hours', isPositive: true },
      { label: 'Udyam Registration', value: 'FREE + handhold', isPositive: true },
      { label: 'Local SEO Bundle', value: 'YES, free', isPositive: true },
      { label: 'WhatsApp Selling', value: 'Native built-in', isPositive: true },
      { label: 'Voice Dashboard', value: 'Hindi/Local langs', isPositive: true },
      { label: 'Govt Schemes Link', value: 'Real-time built-in', isPositive: true },
      { label: 'AI Chatbot', value: 'Included', isPositive: true },
      { label: 'Community Support', value: 'Daily WhatsApp', isPositive: true },
      { label: 'Compliance Help', value: 'Tax + GST auto', isPositive: true },
    ]
  },
  {
    id: 'shopify',
    name: 'Shopify',
    price: '₹2000+',
    pricePeriod: '/month',
    description: 'For large enterprises.',
    isPopular: false,
    buttonText: 'Expensive',
    buttonVariant: 'ghost',
    features: [
      { label: 'Entry Price', value: '₹2000+/month', isNegative: true },
      { label: 'Setup Time', value: '1 week+', isNegative: true },
      { label: 'Udyam Registration', value: 'You do it alone', isNegative: true },
      { label: 'Local SEO Bundle', value: 'Extra $20+', isNegative: true },
      { label: 'WhatsApp Selling', value: 'Plugin $29+', isNegative: true },
      { label: 'Voice Dashboard', value: 'English only', isNegative: true },
      { label: 'Govt Schemes Link', value: 'NO', isNegative: true },
      { label: 'AI Chatbot', value: 'Extra $29+', isNegative: true },
      { label: 'Community Support', value: 'No community', isNegative: true },
      { label: 'Compliance Help', value: 'Manual', isNegative: true },
    ]
  },
];