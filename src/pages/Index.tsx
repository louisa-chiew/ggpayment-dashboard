import { useState } from "react";
import DashboardFilters from "@/components/DashboardFilters";
import DashboardStats from "@/components/DashboardStats";
import PaymentMethodBreakdown from "@/components/PaymentMethodBreakdown";
import AcceptanceRates from "@/components/AcceptanceRates";
import ConversionFunnel from "@/components/ConversionFunnel";
import { BarChart3 } from "lucide-react";

const Index = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("30d");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("All");

  return (
    <div className="min-h-screen bg-dashboard-bg">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <BarChart3 className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Payment Dashboard</h1>
          </div>
          <p className="text-muted-foreground">
            Monitor payment performance, acceptance rates, and conversion funnels
          </p>
        </div>

        <div className="space-y-6">
          <DashboardFilters
            selectedTimeRange={selectedTimeRange}
            setSelectedTimeRange={setSelectedTimeRange}
            selectedPaymentMethod={selectedPaymentMethod}
            setSelectedPaymentMethod={setSelectedPaymentMethod}
          />

          <DashboardStats selectedTimeRange={selectedTimeRange} />

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <PaymentMethodBreakdown />
            <AcceptanceRates />
          </div>

          <ConversionFunnel selectedPaymentMethod={selectedPaymentMethod} />
        </div>
      </div>
    </div>
  );
};

export default Index;
