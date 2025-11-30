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
  tooltip?: string; // Short explanation on hover
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
      { 
        label: 'Entry Price', 
        value: '₹89 one-time', 
        isPositive: true, 
        highlight: true,
        tooltip: "Pay once, own forever. No hidden monthly fees eating into your profits."
      },
      { 
        label: 'Setup Time', 
        value: '24 hours', 
        isPositive: true,
        tooltip: "We build and hand over a fully functional store in less than a day."
      },
      { 
        label: 'Udyam Registration', 
        value: 'FREE + handhold', 
        isPositive: true,
        tooltip: "We handle your official government business registration at no extra cost."
      },
      { 
        label: 'Local SEO Bundle', 
        value: 'YES, free', 
        isPositive: true,
        tooltip: "Your store is optimized to rank at the top of local Google searches."
      },
      { 
        label: 'WhatsApp Selling', 
        value: 'Native built-in', 
        isPositive: true,
        tooltip: "Receive orders and chat with customers directly on WhatsApp."
      },
      { 
        label: 'Voice Dashboard', 
        value: 'Hindi/Local langs', 
        isPositive: true,
        tooltip: "Manage your inventory and orders using voice commands in your language."
      },
      { 
        label: 'Govt Schemes Link', 
        value: 'Real-time built-in', 
        isPositive: true,
        tooltip: "Get instant alerts about government loans and subsidies for your business."
      },
      { 
        label: 'AI Chatbot', 
        value: 'Included', 
        isPositive: true,
        tooltip: "A smart 24/7 assistant that answers customer queries instantly."
      },
      { 
        label: 'Community Support', 
        value: 'Daily WhatsApp', 
        isPositive: true,
        tooltip: "Join an active community of sellers for daily tips and growth hacks."
      },
      { 
        label: 'Compliance Help', 
        value: 'Tax + GST auto', 
        isPositive: true,
        tooltip: "Automated tools to help you calculate taxes and stay GST compliant."
      },
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