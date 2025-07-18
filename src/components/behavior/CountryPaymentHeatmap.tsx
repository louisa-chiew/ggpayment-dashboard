
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { countryPaymentHeatmap } from "@/data/analyticsData";

const CountryPaymentHeatmap = () => {
  const paymentMethods = ["Visa", "PayPal", "Apple Pay", "Mastercard", "Google Pay"];
  const countries = countryPaymentHeatmap.map(item => item.country);
  
  const getIntensity = (value: number) => {
    if (value >= 40) return "bg-primary/80";
    if (value >= 30) return "bg-primary/60";
    if (value >= 20) return "bg-primary/40";
    if (value >= 10) return "bg-primary/20";
    return "bg-primary/10";
  };

  return (
    <Card className="bg-dashboard-card border-dashboard-border shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          Payment Method Popularity by Country
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left p-2 font-medium text-muted-foreground">Country</th>
                {paymentMethods.map(method => (
                  <th key={method} className="text-center p-2 font-medium text-muted-foreground">
                    {method}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {countryPaymentHeatmap.map((country, index) => (
                <tr key={index} className="border-b border-dashboard-border">
                  <td className="p-2 font-medium text-foreground">{country.country}</td>
                  {paymentMethods.map(method => {
                    const value = country[method as keyof typeof country] as number;
                    return (
                      <td key={method} className="p-2 text-center">
                        <div className={`inline-block px-2 py-1 rounded text-xs font-medium ${getIntensity(value)} text-foreground`}>
                          {value}%
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default CountryPaymentHeatmap;
