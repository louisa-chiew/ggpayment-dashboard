
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { segmentAOVData } from "@/data/analyticsData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const AOVBySegment = () => {
  return (
    <Card className="bg-dashboard-card border-dashboard-border shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          Average Order Value by Segment
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={segmentAOVData} margin={{ bottom: 50 }}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="segment" 
                className="text-xs"
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis className="text-xs" />
              <Tooltip formatter={(value) => [`£${value}`, 'AOV']} />
              <Legend />
              <Bar 
                dataKey="aov" 
                fill="hsl(var(--primary))"
                name="Average Order Value"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default AOVBySegment;
