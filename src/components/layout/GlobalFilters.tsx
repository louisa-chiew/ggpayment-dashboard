
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { timeRangeOptions, userJourneyOptions, countryOptions } from "@/data/analyticsData";
import { Calendar, MapPin, Route, TrendingUp } from "lucide-react";

interface GlobalFiltersProps {
  selectedTimeRange: string;
  setSelectedTimeRange: (range: string) => void;
  selectedUserJourney: string;
  setSelectedUserJourney: (journey: string) => void;
  selectedCountries: string[];
  setSelectedCountries: (countries: string[]) => void;
  compareWithPrevious: boolean;
  setCompareWithPrevious: (compare: boolean) => void;
}

const GlobalFilters = ({
  selectedTimeRange,
  setSelectedTimeRange,
  selectedUserJourney,
  setSelectedUserJourney,
  selectedCountries,
  setSelectedCountries,
  compareWithPrevious,
  setCompareWithPrevious,
}: GlobalFiltersProps) => {
  const handleCountryChange = (country: string) => {
    if (country === "all") {
      setSelectedCountries(["all"]);
    } else {
      const newCountries = selectedCountries.includes("all") 
        ? [country]
        : selectedCountries.includes(country)
        ? selectedCountries.filter(c => c !== country)
        : [...selectedCountries, country];
      setSelectedCountries(newCountries);
    }
  };

  return (
    <Card className="bg-dashboard-card border-dashboard-border shadow-card">
      <CardContent className="p-4">
        <div className="flex flex-wrap items-center gap-6">
          {/* Date & Time Range */}
          <div className="flex items-center gap-3">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <Label className="text-sm font-medium text-foreground">Date Range:</Label>
            <Select value={selectedTimeRange} onValueChange={setSelectedTimeRange}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {timeRangeOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* User Journey Filter */}
          <div className="flex items-center gap-3">
            <Route className="w-4 h-4 text-muted-foreground" />
            <Label className="text-sm font-medium text-foreground">Journey:</Label>
            <Select value={selectedUserJourney} onValueChange={setSelectedUserJourney}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {userJourneyOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Geography Filter */}
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <Label className="text-sm font-medium text-foreground">Countries:</Label>
            <Select value={selectedCountries[0]} onValueChange={handleCountryChange}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select countries" />
              </SelectTrigger>
              <SelectContent>
                {countryOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Compare with Previous Period */}
          <div className="flex items-center gap-3">
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
            <Label className="text-sm font-medium text-foreground">Compare Period:</Label>
            <Switch
              checked={compareWithPrevious}
              onCheckedChange={setCompareWithPrevious}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GlobalFilters;
