
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { paymentMethodPerformance } from "@/data/analyticsData";
import { ArrowUpDown } from "lucide-react";
import { useState } from "react";

const PerformanceMatrix = () => {
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);

  // Calculate total attempts for adoption percentage
  const totalAttempts = paymentMethodPerformance.reduce((sum, method) => sum + method.totalAttempts, 0);
  
  // Add adoption percentage to data
  const dataWithAdoption = paymentMethodPerformance.map(method => ({
    ...method,
    adoptionRate: (method.totalAttempts / totalAttempts) * 100
  }));

  const sortedData = [...dataWithAdoption].sort((a, b) => {
    if (!sortConfig) return 0;
    
    const aValue = a[sortConfig.key as keyof typeof a];
    const bValue = b[sortConfig.key as keyof typeof b];
    
    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <Card className="bg-dashboard-card border-dashboard-border shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          Payment Method Performance Matrix
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-32">Payment Method</TableHead>
                <TableHead className="text-right">
                  <Button variant="ghost" size="sm" onClick={() => handleSort('successRate')}>
                    Success Rate <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead className="text-right">
                  <Button variant="ghost" size="sm" onClick={() => handleSort('tpv')}>
                    TPV (£) <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead className="text-right">
                  <Button variant="ghost" size="sm" onClick={() => handleSort('aov')}>
                    AOV (£) <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead className="text-right">
                  <Button variant="ghost" size="sm" onClick={() => handleSort('adoptionRate')}>
                    Adoption (%) <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead className="text-right">Total Attempts</TableHead>
                <TableHead className="text-right">Successful</TableHead>
                <TableHead className="text-right">Failed</TableHead>
                <TableHead className="text-right">Refund Rate (%)</TableHead>
                <TableHead className="text-right">Chargeback Rate (%)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedData.map((method) => (
                <TableRow key={method.method}>
                  <TableCell className="font-medium">{method.method}</TableCell>
                  <TableCell className="text-right">
                    <span className={`font-medium ${method.successRate >= 95 ? 'text-success' : method.successRate >= 90 ? 'text-warning' : 'text-error'}`}>
                      {method.successRate}%
                    </span>
                  </TableCell>
                  <TableCell className="text-right">£{method.tpv.toLocaleString()}</TableCell>
                  <TableCell className="text-right">£{method.aov}</TableCell>
                  <TableCell className="text-right font-medium">{method.adoptionRate.toFixed(1)}%</TableCell>
                  <TableCell className="text-right">{method.totalAttempts.toLocaleString()}</TableCell>
                  <TableCell className="text-right text-success">{method.successful.toLocaleString()}</TableCell>
                  <TableCell className="text-right text-error">{method.failed.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{method.refundRate}%</TableCell>
                  <TableCell className="text-right">{method.chargebackRate}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceMatrix;
