import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { conversionFunnelData, funnelByPaymentMethod } from "@/data/paymentData";
import { ChevronDown } from "lucide-react";

interface ConversionFunnelProps {
  selectedPaymentMethod: string;
}

const ConversionFunnel = ({ selectedPaymentMethod }: ConversionFunnelProps) => {
  const data = selectedPaymentMethod === "All" 
    ? conversionFunnelData 
    : funnelByPaymentMethod[selectedPaymentMethod as keyof typeof funnelByPaymentMethod];

  return (
    <Card className="bg-dashboard-card border-dashboard-border shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          Payment Conversion Funnel
          {selectedPaymentMethod !== "All" && (
            <span className="text-sm font-normal text-muted-foreground ml-2">
              ({selectedPaymentMethod})
            </span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((stage, index) => (
            <div key={stage.stage} className="relative">
              <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border border-dashboard-border">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{stage.stage}</div>
                    <div className="text-sm text-muted-foreground">
                      {stage.count.toLocaleString()} users
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-foreground">{stage.percentage}%</div>
                  <div className="text-sm text-muted-foreground">conversion</div>
                </div>
              </div>
              {index < data.length - 1 && (
                <div className="flex justify-center py-2">
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-success/10 rounded-lg border border-success/20">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-success">Overall Conversion Rate</span>
            <span className="text-lg font-bold text-success">
              {data[data.length - 1].percentage}%
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConversionFunnel;