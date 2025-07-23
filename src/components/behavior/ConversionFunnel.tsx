import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { conversionFunnelData } from "@/data/analyticsData";

const ConversionFunnel = () => {
  const getBarWidth = (userCount: number, maxCount: number) => {
    return (userCount / maxCount) * 100;
  };

  const maxCount = Math.max(...conversionFunnelData.map(step => step.userCount));

  const getStepColor = (step: any) => {
    if (step.isBranch) {
      return step.step.includes("3DS Success") ? "bg-green-500" : step.step.includes("3DS Not Req") ? "bg-blue-500" : "bg-yellow-500";
    }
    return "bg-primary";
  };

  return (
    <Card className="bg-dashboard-card border-dashboard-border shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          Conversion Funnel Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {conversionFunnelData.map((step, index) => (
            <div key={index} className={`${step.isBranch ? 'ml-8' : ''} space-y-2`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-medium ${step.isBranch ? 'text-muted-foreground' : 'text-foreground'}`}>
                    {step.step}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-foreground font-medium">
                    {step.userCount.toLocaleString()} users
                  </span>
                  <span className="text-muted-foreground">
                    {step.overallConversion}
                  </span>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-full bg-muted/20 rounded-full h-6">
                  <div 
                    className={`${getStepColor(step)} h-6 rounded-full flex items-center justify-between px-3 text-white text-xs font-medium transition-all duration-300`}
                    style={{ width: `${getBarWidth(step.userCount, maxCount)}%` }}
                  >
                    <span>{step.userCount.toLocaleString()}</span>
                    {step.conversionFromPrevious && (
                      <span>{step.conversionFromPrevious}</span>
                    )}
                  </div>
                </div>
              </div>

              {step.conversionFromPrevious && step.dropoffCount && (
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Conversion: {step.conversionFromPrevious}</span>
                  <span>Drop-off: {step.dropoffCount.toLocaleString()} ({step.dropoffRate})</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ConversionFunnel;