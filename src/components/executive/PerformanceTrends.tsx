
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { performanceTrends } from "@/data/analyticsData";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const PerformanceTrends = () => {
  return (
    <Card className="bg-dashboard-card border-dashboard-border shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          Performance Over Time
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceTrends}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="date" 
                tickFormatter={(value) => new Date(value).toLocaleDateString()}
                className="text-xs"
              />
              <YAxis yAxisId="tpv" orientation="left" className="text-xs" />
              <YAxis yAxisId="rate" orientation="right" className="text-xs" />
              <Tooltip 
                labelFormatter={(value) => new Date(value).toLocaleDateString()}
                formatter={(value, name) => [
                  name === 'tpv' ? `£${Number(value).toLocaleString()}` : `${value}%`,
                  name === 'tpv' ? 'TPV' : 'Success Rate'
                ]}
              />
              <Line 
                yAxisId="tpv"
                type="monotone" 
                dataKey="tpv" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                dot={{ fill: "hsl(var(--primary))" }}
              />
              <Line 
                yAxisId="rate"
                type="monotone" 
                dataKey="successRate" 
                stroke="hsl(var(--success))" 
                strokeWidth={2}
                dot={{ fill: "hsl(var(--success))" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceTrends;
