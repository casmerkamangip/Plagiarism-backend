"use client";

import { cn } from "@/lib/utils";

interface ChartData {
  name: string;
  value: number;
  color: string;
}

interface ChartProps {
  data: ChartData[];
  className?: string;
}

export function Chart({ data, className }: ChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Analytics Overview</h3>
        <span className="text-sm text-muted-foreground">Total: {total}</span>
      </div>
      
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={item.name} className="flex items-center space-x-3">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <div className="flex-1">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{item.name}</span>
                <span className="text-muted-foreground">{item.value}</span>
              </div>
              <div className="mt-1 w-full bg-muted rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: item.color,
                    width: `${(item.value / total) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ChartDemo() {
  const chartData: ChartData[] = [
    { name: "Revenue", value: 45, color: "var(--color-chart-1)" },
    { name: "Users", value: 32, color: "var(--color-chart-2)" },
    { name: "Orders", value: 28, color: "var(--color-chart-3)" },
    { name: "Growth", value: 18, color: "var(--color-chart-4)" },
    { name: "Conversion", value: 12, color: "var(--color-chart-5)" },
  ];

  return <Chart data={chartData} />;
}