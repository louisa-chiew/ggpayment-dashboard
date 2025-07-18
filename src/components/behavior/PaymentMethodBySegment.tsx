
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { userSegments } from "@/data/analyticsData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const PaymentMethodBySegment = () => {
  const chartData = userSegments.map(segment => {
    const data: any = { segment: segment.segment };
    segment.paymentMethods.forEach(method => {
      data[method.method] = method.percentage;
    });
    return data;
  });

  const colors = {
    "PayPal": "#0070ba",
    "Apple Pay": "#000000",
    "Visa": "#1a1f71",
    "Google Pay": "#34a853",
    "Mastercard": "#eb001b"
  };

  return (
    <Card className="bg-dashboard-card border-dashboard-border shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          Payment Method Usage by Segment
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ bottom: 50 }}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="segment" 
                className="text-xs"
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis className="text-xs" />
              <Tooltip formatter={(value) => [`${value}%`, 'Usage']} />
              <Legend />
              {Object.entries(colors).map(([method, color]) => (
                <Bar 
                  key={method}
                  dataKey={method} 
                  fill={color}
                  stackId="payment-methods"
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentMethodBySegment;
