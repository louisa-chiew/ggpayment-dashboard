
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { failuresOverTime } from "@/data/analyticsData";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const FailuresTimeline = () => {
  return (
    <Card className="bg-dashboard-card border-dashboard-border shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          Failures Over Time
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={failuresOverTime}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="date" 
                className="text-xs"
                tickFormatter={(value) => new Date(value).toLocaleDateString()}
              />
              <YAxis className="text-xs" />
              <Tooltip 
                labelFormatter={(value) => new Date(value).toLocaleDateString()}
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="Insufficient Funds" 
                stackId="1" 
                stroke="#ef4444" 
                fill="#ef4444" 
                fillOpacity={0.6}
              />
              <Area 
                type="monotone" 
                dataKey="3D Secure Failed" 
                stackId="1" 
                stroke="#f97316" 
                fill="#f97316" 
                fillOpacity={0.6}
              />
              <Area 
                type="monotone" 
                dataKey="Do Not Honour" 
                stackId="1" 
                stroke="#f59e0b" 
                fill="#f59e0b" 
                fillOpacity={0.6}
              />
              <Area 
                type="monotone" 
                dataKey="Other" 
                stackId="1" 
                stroke="#84cc16" 
                fill="#84cc16" 
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default FailuresTimeline;
