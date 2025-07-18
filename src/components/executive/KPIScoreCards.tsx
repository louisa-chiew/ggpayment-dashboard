
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { kpiMetrics } from "@/data/analyticsData";
import { DollarSign, TrendingUp, Users, CreditCard, RotateCcw, AlertTriangle, Target } from "lucide-react";

interface KPIScoreCardsProps {
  compareWithPrevious: boolean;
}

const KPIScoreCards = ({ compareWithPrevious }: KPIScoreCardsProps) => {
  const cards = [
    {
      title: "Overall Success Rate",
      value: `${kpiMetrics.overallSuccessRate}%`,
      icon: Target,
      trend: "+1.4%",
      trendUp: true,
      isPrimary: true,
    },
    {
      title: "Net Success Rate",
      value: `${kpiMetrics.netSuccessRate}%`,
      icon: TrendingUp,
      trend: "+0.8%",
      trendUp: true,
      subtitle: "After refunds & chargebacks",
      isPrimary: true,
    },
    {
      title: "Total Payment Volume",
      value: `£${kpiMetrics.totalPaymentVolume.toLocaleString()}`,
      icon: DollarSign,
      trend: "+8.2%",
      trendUp: true,
    },
    {
      title: "Successful Transactions",
      value: kpiMetrics.successfulTransactions.toLocaleString(),
      icon: Users,
      trend: "+12.7%",
      trendUp: true,
    },
    {
      title: "Net Successful",
      value: kpiMetrics.netSuccessfulTransactions.toLocaleString(),
      icon: CreditCard,
      trend: "+11.2%",
      trendUp: true,
    },
    {
      title: "Average Order Value",
      value: `£${kpiMetrics.averageOrderValue}`,
      icon: TrendingUp,
      trend: "+3.8%",
      trendUp: true,
    },
    {
      title: "Refunds",
      value: `£${kpiMetrics.refunds.value.toLocaleString()}`,
      icon: RotateCcw,
      trend: "-2.1%",
      trendUp: false,
      subtitle: `${kpiMetrics.refunds.count} transactions`,
    },
    {
      title: "Chargebacks",
      value: `£${kpiMetrics.chargebacks.value.toLocaleString()}`,
      icon: AlertTriangle,
      trend: "-5.3%",
      trendUp: false,
      subtitle: `${kpiMetrics.chargebacks.count} cases`,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <Card 
            key={index} 
            className={`bg-dashboard-card border-dashboard-border shadow-card ${
              card.isPrimary ? 'ring-2 ring-primary/20 bg-primary/5' : ''
            }`}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className={`text-xs font-medium ${card.isPrimary ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
                {card.title}
              </CardTitle>
              <Icon className={`h-4 w-4 ${card.isPrimary ? 'text-primary' : 'text-muted-foreground'}`} />
            </CardHeader>
            <CardContent>
              <div className={`font-bold text-foreground ${card.isPrimary ? 'text-3xl' : 'text-xl'}`}>
                {card.value}
              </div>
              {card.subtitle && (
                <div className="text-xs text-muted-foreground mt-1">{card.subtitle}</div>
              )}
              {compareWithPrevious && (
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className={`h-3 w-3 ${card.trendUp ? 'text-success' : 'text-error'}`} />
                  <span className={`text-xs ${card.trendUp ? 'text-success' : 'text-error'}`}>
                    {card.trend}
                  </span>
                  <span className="text-xs text-muted-foreground">vs prev period</span>
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default KPIScoreCards;
