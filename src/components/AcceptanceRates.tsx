import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { acceptanceRates, paymentMethodColors } from "@/data/paymentData";
import { TrendingUp, TrendingDown } from "lucide-react";

const AcceptanceRates = () => {
  return (
    <Card className="bg-dashboard-card border-dashboard-border shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          Payment Acceptance Rates
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {acceptanceRates.map((rate) => (
            <div key={rate.method} className="flex items-center justify-between p-4 rounded-lg border border-dashboard-border">
              <div className="flex items-center gap-3">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: paymentMethodColors[rate.method as keyof typeof paymentMethodColors] }}
                />
                <span className="font-medium text-foreground">{rate.method}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {rate.trend.startsWith('+') ? (
                    <TrendingUp className="w-4 h-4 text-success" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-error" />
                  )}
                  <span className={`text-sm font-medium ${
                    rate.trend.startsWith('+') ? 'text-success' : 'text-error'
                  }`}>
                    {rate.trend}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-foreground">{rate.rate}%</div>
                  <div className="text-sm text-muted-foreground">success rate</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AcceptanceRates;