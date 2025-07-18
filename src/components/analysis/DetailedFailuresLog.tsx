
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { failureLogData } from "@/data/analyticsData";
import { Search, Download } from "lucide-react";
import { useState } from "react";

const DetailedFailuresLog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = failureLogData.filter(entry => 
    entry.transactionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.paymentMethod.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.declineReason.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="bg-dashboard-card border-dashboard-border shadow-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-foreground">
            Detailed Failures Log
          </CardTitle>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            <Button size="sm" variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dashboard-border">
                <th className="text-left p-2 font-medium text-muted-foreground">Timestamp</th>
                <th className="text-left p-2 font-medium text-muted-foreground">Transaction ID</th>
                <th className="text-left p-2 font-medium text-muted-foreground">Amount</th>
                <th className="text-left p-2 font-medium text-muted-foreground">Payment Method</th>
                <th className="text-left p-2 font-medium text-muted-foreground">Decline Reason</th>
                <th className="text-left p-2 font-medium text-muted-foreground">Device</th>
                <th className="text-left p-2 font-medium text-muted-foreground">User Type</th>
                <th className="text-left p-2 font-medium text-muted-foreground">3DS Status</th>
                <th className="text-left p-2 font-medium text-muted-foreground">Issuing Bank</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((entry, index) => (
                <tr key={index} className="border-b border-dashboard-border hover:bg-muted/20">
                  <td className="p-2 text-foreground">{entry.timestamp}</td>
                  <td className="p-2 text-foreground font-mono text-xs">{entry.transactionId}</td>
                  <td className="p-2 text-foreground">£{entry.amount.toFixed(2)}</td>
                  <td className="p-2 text-foreground">{entry.paymentMethod}</td>
                  <td className="p-2 text-error">{entry.declineReason}</td>
                  <td className="p-2 text-foreground">{entry.device}</td>
                  <td className="p-2 text-foreground">{entry.userType}</td>
                  <td className="p-2 text-foreground">{entry.threeDSecureStatus}</td>
                  <td className="p-2 text-foreground">{entry.issuingBank}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default DetailedFailuresLog;
