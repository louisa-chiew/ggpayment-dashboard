
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { declineReasons } from "@/data/analyticsData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const TopDeclineReasons = () => {
  const topReasons = declineReasons.slice(0, 5);

  return (
    <Card className="bg-dashboard-card border-dashboard-border shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          Top 5 Decline Reasons
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={topReasons} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis type="number" className="text-xs" />
              <YAxis 
                dataKey="reason" 
                type="category" 
                width={120}
                className="text-xs"
                tickFormatter={(value) => value.length > 15 ? `${value.substring(0, 15)}...` : value}
              />
              <Tooltip 
                formatter={(value, name) => [`${value} (${topReasons.find(r => r.count === value)?.percentage}%)`, 'Count']}
              />
              <Bar 
                dataKey="count" 
                fill="hsl(var(--error))" 
                radius={[0, 4, 4, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopDeclineReasons;
