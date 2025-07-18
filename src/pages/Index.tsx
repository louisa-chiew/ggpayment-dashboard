
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GlobalFilters from "@/components/layout/GlobalFilters";
import KPIScoreCards from "@/components/executive/KPIScoreCards";
import PerformanceTrends from "@/components/executive/PerformanceTrends";
import PaymentMethodPopularity from "@/components/executive/PaymentMethodPopularity";
import TopDeclineReasons from "@/components/executive/TopDeclineReasons";
import PerformanceMatrix from "@/components/performance/PerformanceMatrix";
import DeclineReasonsChart from "@/components/analysis/DeclineReasonsChart";
import FailuresTimeline from "@/components/analysis/FailuresTimeline";
import DetailedFailuresLog from "@/components/analysis/DetailedFailuresLog";
import PaymentMethodBySegment from "@/components/behavior/PaymentMethodBySegment";
import AOVBySegment from "@/components/behavior/AOVBySegment";
import CountryPaymentHeatmap from "@/components/behavior/CountryPaymentHeatmap";
import { BarChart3 } from "lucide-react";

const Index = () => {
  // Global filter states
  const [selectedTimeRange, setSelectedTimeRange] = useState("30d");
  const [selectedUserJourney, setSelectedUserJourney] = useState("all");
  const [compareWithPrevious, setCompareWithPrevious] = useState(false);

  return (
    <div className="min-h-screen bg-dashboard-bg">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <BarChart3 className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Payment Analytics Dashboard</h1>
          </div>
          <p className="text-muted-foreground">
            Comprehensive payment performance analytics and insights
          </p>
        </div>

        {/* Global Filters */}
        <div className="mb-6">
          <GlobalFilters
            selectedTimeRange={selectedTimeRange}
            setSelectedTimeRange={setSelectedTimeRange}
            selectedUserJourney={selectedUserJourney}
            setSelectedUserJourney={setSelectedUserJourney}
            compareWithPrevious={compareWithPrevious}
            setCompareWithPrevious={setCompareWithPrevious}
          />
        </div>

        {/* Tab Navigation */}
        <Tabs defaultValue="executive" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="executive">Executive Overview</TabsTrigger>
            <TabsTrigger value="performance">Payment Method Performance</TabsTrigger>
            <TabsTrigger value="analysis">Decline & Failure Analysis</TabsTrigger>
            <TabsTrigger value="behavior">User Behaviour Analysis</TabsTrigger>
          </TabsList>

          {/* Executive Overview Tab */}
          <TabsContent value="executive" className="space-y-6">
            <KPIScoreCards compareWithPrevious={compareWithPrevious} />
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <PerformanceTrends />
              <PaymentMethodPopularity />
            </div>
            
            <TopDeclineReasons />
          </TabsContent>

          {/* Payment Method Performance Tab */}
          <TabsContent value="performance" className="space-y-6">
            <PerformanceMatrix />
          </TabsContent>

          {/* Decline & Failure Analysis Tab */}
          <TabsContent value="analysis" className="space-y-6">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <DeclineReasonsChart />
              <FailuresTimeline />
            </div>
            <DetailedFailuresLog />
          </TabsContent>

          {/* User Behaviour Analysis Tab */}
          <TabsContent value="behavior" className="space-y-6">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <PaymentMethodBySegment />
              <AOVBySegment />
            </div>
            <CountryPaymentHeatmap />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
