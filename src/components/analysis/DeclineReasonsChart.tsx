
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { declineReasons } from "@/data/analyticsData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const DeclineReasonsChart = () => {
  const colors = ['#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16', '#22c55e', '#06b6d4'];

  return (
    <Card className="bg-dashboard-card border-dashboard-border shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          Decline Reasons Breakdown
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={declineReasons} layout="horizontal" margin={{ left: 120 }}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis type="number" className="text-xs" />
              <YAxis 
                dataKey="reason" 
                type="category" 
                width={120}
                className="text-xs"
                tick={{ fontSize: 12 }}
              />
              <Tooltip 
                formatter={(value, name) => [
                  `${value} (${declineReasons.find(r => r.count === value)?.percentage}%)`, 
                  'Count'
                ]}
              />
              <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                {declineReasons.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeclineReasonsChart;
