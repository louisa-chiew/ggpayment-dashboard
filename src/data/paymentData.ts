// Mock data for payment dashboard
export const paymentMethodData = [
  { method: "Apple Pay", value: 35, color: "hsl(var(--apple-pay))" },
  { method: "Card", value: 28, color: "hsl(var(--card-payment))" },
  { method: "PayPal", value: 18, color: "hsl(var(--paypal))" },
  { method: "Credit", value: 12, color: "hsl(var(--credit))" },
  { method: "Voucher", value: 7, color: "hsl(var(--voucher))" },
];

export const acceptanceRates = [
  { method: "Apple Pay", rate: 94.5, trend: "+2.1%" },
  { method: "Card", rate: 87.8, trend: "-1.2%" },
  { method: "PayPal", rate: 91.2, trend: "+0.8%" },
  { method: "Credit", rate: 84.6, trend: "-0.5%" },
  { method: "Voucher", rate: 98.1, trend: "+1.3%" },
];

export const conversionFunnelData = [
  { stage: "Page Before Payment", count: 10000, percentage: 100 },
  { stage: "Payment Page", count: 7800, percentage: 78 },
  { stage: "3DS Triggered", count: 4500, percentage: 45 },
  { stage: "3DS Success", count: 4200, percentage: 42 },
  { stage: "Overall Success", count: 3950, percentage: 39.5 },
];

export const funnelByPaymentMethod = {
  "Apple Pay": [
    { stage: "Page Before Payment", count: 3500, percentage: 100 },
    { stage: "Payment Page", count: 3200, percentage: 91.4 },
    { stage: "3DS Triggered", count: 800, percentage: 22.9 },
    { stage: "3DS Success", count: 760, percentage: 21.7 },
    { stage: "Overall Success", count: 3100, percentage: 88.6 },
  ],
  "Card": [
    { stage: "Page Before Payment", count: 2800, percentage: 100 },
    { stage: "Payment Page", count: 2200, percentage: 78.6 },
    { stage: "3DS Triggered", count: 1800, percentage: 64.3 },
    { stage: "3DS Success", count: 1650, percentage: 58.9 },
    { stage: "Overall Success", count: 1980, percentage: 70.7 },
  ],
  "PayPal": [
    { stage: "Page Before Payment", count: 1800, percentage: 100 },
    { stage: "Payment Page", count: 1550, percentage: 86.1 },
    { stage: "3DS Triggered", count: 900, percentage: 50.0 },
    { stage: "3DS Success", count: 850, percentage: 47.2 },
    { stage: "Overall Success", count: 1420, percentage: 78.9 },
  ],
  "Credit": [
    { stage: "Page Before Payment", count: 1200, percentage: 100 },
    { stage: "Payment Page", count: 900, percentage: 75.0 },
    { stage: "3DS Triggered", count: 600, percentage: 50.0 },
    { stage: "3DS Success", count: 550, percentage: 45.8 },
    { stage: "Overall Success", count: 760, percentage: 63.3 },
  ],
  "Voucher": [
    { stage: "Page Before Payment", count: 700, percentage: 100 },
    { stage: "Payment Page", count: 650, percentage: 92.9 },
    { stage: "3DS Triggered", count: 400, percentage: 57.1 },
    { stage: "3DS Success", count: 390, percentage: 55.7 },
    { stage: "Overall Success", count: 640, percentage: 91.4 },
  ],
};

export const timeRangeData = {
  "7d": { label: "Last 7 days", transactions: 15420 },
  "30d": { label: "Last 30 days", transactions: 67890 },
  "90d": { label: "Last 90 days", transactions: 198450 },
  "1y": { label: "Last year", transactions: 876320 },
};

export const paymentMethodColors = {
  "Apple Pay": "hsl(var(--apple-pay))",
  "Card": "hsl(var(--card-payment))",
  "PayPal": "hsl(var(--paypal))",
  "Credit": "hsl(var(--credit))",
  "Voucher": "hsl(var(--voucher))",
};