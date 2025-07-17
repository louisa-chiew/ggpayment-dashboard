import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { timeRangeData } from "@/data/paymentData";
import { DollarSign, TrendingUp, Users, Activity } from "lucide-react";

interface DashboardStatsProps {
  selectedTimeRange: string;
}

const DashboardStats = ({ selectedTimeRange }: DashboardStatsProps) => {
  const currentData = timeRangeData[selectedTimeRange as keyof typeof timeRangeData];
  
  const stats = [
    {
      title: "Total Transactions",
      value: currentData.transactions.toLocaleString(),
      icon: Activity,
      trend: "+12.5%",
      trendUp: true,
    },
    {
      title: "Total Revenue",
      value: `$${(currentData.transactions * 45.67).toLocaleString()}`,
      icon: DollarSign,
      trend: "+8.2%",
      trendUp: true,
    },
    {
      title: "Active Users",
      value: Math.floor(currentData.transactions * 0.73).toLocaleString(),
      icon: Users,
      trend: "+15.3%",
      trendUp: true,
    },
    {
      title: "Success Rate",
      value: "89.4%",
      icon: TrendingUp,
      trend: "-1.2%",
      trendUp: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="bg-dashboard-card border-dashboard-border shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="flex items-center gap-1 mt-1">
                <TrendingUp className={`h-3 w-3 ${stat.trendUp ? 'text-success' : 'text-error'}`} />
                <span className={`text-xs ${stat.trendUp ? 'text-success' : 'text-error'}`}>
                  {stat.trend}
                </span>
                <span className="text-xs text-muted-foreground">from last period</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default DashboardStats;