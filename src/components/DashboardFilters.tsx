import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { timeRangeData } from "@/data/paymentData";
import { Calendar, CreditCard } from "lucide-react";

interface DashboardFiltersProps {
  selectedTimeRange: string;
  setSelectedTimeRange: (range: string) => void;
  selectedPaymentMethod: string;
  setSelectedPaymentMethod: (method: string) => void;
}

const DashboardFilters = ({
  selectedTimeRange,
  setSelectedTimeRange,
  selectedPaymentMethod,
  setSelectedPaymentMethod,
}: DashboardFiltersProps) => {
  const paymentMethods = ["All", "Apple Pay", "Card", "PayPal", "Credit", "Voucher"];

  return (
    <Card className="bg-dashboard-card border-dashboard-border shadow-card">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Time Range:</span>
            </div>
            <div className="flex gap-2">
              {Object.entries(timeRangeData).map(([key, value]) => (
                <Button
                  key={key}
                  variant={selectedTimeRange === key ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTimeRange(key)}
                  className="text-xs"
                >
                  {value.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Payment Method:</span>
            </div>
            <Select value={selectedPaymentMethod} onValueChange={setSelectedPaymentMethod}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Select method" />
              </SelectTrigger>
              <SelectContent>
                {paymentMethods.map((method) => (
                  <SelectItem key={method} value={method}>
                    {method}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardFilters;