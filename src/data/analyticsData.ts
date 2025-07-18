
// Comprehensive analytics data model for multi-tab dashboard
export interface KPIMetrics {
  totalPaymentVolume: number;
  overallSuccessRate: number;
  successfulTransactions: number;
  netSuccessfulTransactions: number;
  averageOrderValue: number;
  refunds: { value: number; count: number };
  chargebacks: { value: number; count: number };
}

export interface PaymentMethodPerformance {
  method: string;
  successRate: number;
  tpv: number;
  aov: number;
  totalAttempts: number;
  successful: number;
  failed: number;
  refundRate: number;
  chargebackRate: number;
}

export interface DeclineReason {
  reason: string;
  count: number;
  percentage: number;
  category: string;
}

export interface UserSegment {
  segment: string;
  paymentMethods: { method: string; percentage: number }[];
  aov: number;
  successRate: number;
}

export interface GeographicData {
  country: string;
  tpv: number;
  successRate: number;
  topPaymentMethod: string;
}

// Mock data for analytics dashboard
export const kpiMetrics: KPIMetrics = {
  totalPaymentVolume: 2450750,
  overallSuccessRate: 89.4,
  successfulTransactions: 42850,
  netSuccessfulTransactions: 41230,
  averageOrderValue: 57.23,
  refunds: { value: 92580, count: 1620 },
  chargebacks: { value: 15670, count: 285 }
};

export const paymentMethodPerformance: PaymentMethodPerformance[] = [
  {
    method: "Visa",
    successRate: 92.5,
    tpv: 1250400,
    aov: 85.30,
    totalAttempts: 16923,
    successful: 15650,
    failed: 1273,
    refundRate: 1.2,
    chargebackRate: 0.08
  },
  {
    method: "PayPal",
    successRate: 96.1,
    tpv: 850200,
    aov: 72.40,
    totalAttempts: 12015,
    successful: 11545,
    failed: 470,
    refundRate: 0.8,
    chargebackRate: 0.02
  },
  {
    method: "Apple Pay",
    successRate: 97.3,
    tpv: 620150,
    aov: 65.10,
    totalAttempts: 9603,
    successful: 9343,
    failed: 260,
    refundRate: 0.5,
    chargebackRate: 0.01
  },
  {
    method: "Mastercard",
    successRate: 91.8,
    tpv: 445320,
    aov: 78.90,
    totalAttempts: 5920,
    successful: 5435,
    failed: 485,
    refundRate: 1.1,
    chargebackRate: 0.06
  },
  {
    method: "Google Pay",
    successRate: 95.2,
    tpv: 284680,
    aov: 68.40,
    totalAttempts: 4380,
    successful: 4170,
    failed: 210,
    refundRate: 0.6,
    chargebackRate: 0.03
  }
];

export const declineReasons: DeclineReason[] = [
  { reason: "Insufficient Funds", count: 1250, percentage: 35.2, category: "Customer Issue" },
  { reason: "3D Secure Failed", count: 890, percentage: 25.1, category: "Authentication" },
  { reason: "Do Not Honour", count: 520, percentage: 14.6, category: "Bank Decline" },
  { reason: "Invalid Card Details", count: 380, percentage: 10.7, category: "Data Issue" },
  { reason: "Expired Card", count: 290, percentage: 8.2, category: "Card Issue" },
  { reason: "Transaction Limit Exceeded", count: 145, percentage: 4.1, category: "Limit Issue" },
  { reason: "Suspected Fraud", count: 75, percentage: 2.1, category: "Security" }
];

export const userSegments: UserSegment[] = [
  {
    segment: "New Users",
    paymentMethods: [
      { method: "PayPal", percentage: 45 },
      { method: "Apple Pay", percentage: 25 },
      { method: "Visa", percentage: 20 },
      { method: "Google Pay", percentage: 10 }
    ],
    aov: 52.30,
    successRate: 87.2
  },
  {
    segment: "Returning Users",
    paymentMethods: [
      { method: "Visa", percentage: 40 },
      { method: "Mastercard", percentage: 25 },
      { method: "Apple Pay", percentage: 20 },
      { method: "PayPal", percentage: 15 }
    ],
    aov: 68.90,
    successRate: 91.8
  },
  {
    segment: "Desktop Users",
    paymentMethods: [
      { method: "Visa", percentage: 38 },
      { method: "PayPal", percentage: 32 },
      { method: "Mastercard", percentage: 20 },
      { method: "Apple Pay", percentage: 10 }
    ],
    aov: 74.50,
    successRate: 93.1
  },
  {
    segment: "Mobile Users",
    paymentMethods: [
      { method: "Apple Pay", percentage: 35 },
      { method: "Google Pay", percentage: 25 },
      { method: "PayPal", percentage: 22 },
      { method: "Visa", percentage: 18 }
    ],
    aov: 49.80,
    successRate: 88.4
  }
];

export const geographicData: GeographicData[] = [
  { country: "United Kingdom", tpv: 1200000, successRate: 91.5, topPaymentMethod: "Visa" },
  { country: "United States", tpv: 850000, successRate: 89.2, topPaymentMethod: "Apple Pay" },
  { country: "Germany", tpv: 320000, successRate: 93.1, topPaymentMethod: "PayPal" },
  { country: "France", tpv: 280000, successRate: 90.8, topPaymentMethod: "Visa" },
  { country: "Canada", tpv: 195000, successRate: 92.3, topPaymentMethod: "Apple Pay" },
  { country: "Australia", tpv: 145000, successRate: 88.7, topPaymentMethod: "Visa" }
];

export const timeRangeOptions = [
  { value: "today", label: "Today" },
  { value: "7d", label: "Last 7 Days" },
  { value: "30d", label: "Last 30 Days" },
  { value: "mtd", label: "Month-to-Date" },
  { value: "custom", label: "Custom Range" }
];

export const userJourneyOptions = [
  { value: "all", label: "All Journeys" },
  { value: "initial_checkout", label: "Initial Checkout" },
  { value: "subscription_renewal", label: "Subscription Renewal" },
  { value: "invoice_payment", label: "Invoice Payment" }
];

export const countryOptions = [
  { value: "all", label: "All Countries" },
  { value: "uk", label: "United Kingdom" },
  { value: "us", label: "United States" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" }
];

// Time series data for trends
export const performanceTrends = [
  { date: "2024-01-01", tpv: 185000, successRate: 88.5 },
  { date: "2024-01-02", tpv: 201000, successRate: 89.2 },
  { date: "2024-01-03", tpv: 178000, successRate: 90.1 },
  { date: "2024-01-04", tpv: 195000, successRate: 89.8 },
  { date: "2024-01-05", tpv: 220000, successRate: 91.2 },
  { date: "2024-01-06", tpv: 235000, successRate: 90.5 },
  { date: "2024-01-07", tpv: 198000, successRate: 89.9 }
];
