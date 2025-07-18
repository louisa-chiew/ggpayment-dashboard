
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { paymentMethodPerformance } from "@/data/analyticsData";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const PaymentMethodPopularity = () => {
  const chartData = paymentMethodPerformance.map((method, index) => ({
    name: method.method,
    value: method.tpv,
    color: `hsl(${index * 60}, 70%, 50%)`
  }));

  return (
    <Card className="bg-dashboard-card border-dashboard-border shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          Payment Method Popularity (TPV)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: £${(value / 1000).toFixed(0)}K`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`£${Number(value).toLocaleString()}`, 'TPV']} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentMethodPopularity;
