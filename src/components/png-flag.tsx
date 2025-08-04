"use client";

import { cn } from "@/lib/utils";

interface PNGFlagProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function PNGFlag({ className, size = "md" }: PNGFlagProps) {
  const sizeClasses = {
    sm: "w-16 h-10",
    md: "w-24 h-15",
    lg: "w-32 h-20",
  };

  return (
    <div className={cn("flex flex-col", sizeClasses[size], className)}>
      {/* Red stripe */}
      <div className="flex-1 png-red"></div>
      
      {/* Black stripe with yellow diagonal */}
      <div className="flex-1 png-black relative overflow-hidden">
        <div className="absolute inset-0 transform -skew-x-12 bg-yellow-400 w-full h-full"></div>
      </div>
      
      {/* Red stripe */}
      <div className="flex-1 png-red"></div>
    </div>
  );
}

export function PNGFlagDemo() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">PNG Flag Colors</h3>
      <div className="flex items-center space-x-4">
        <div className="space-y-2">
          <div className="w-8 h-8 png-red rounded"></div>
          <span className="text-xs text-muted-foreground">PNG Red</span>
        </div>
        <div className="space-y-2">
          <div className="w-8 h-8 png-yellow rounded"></div>
          <span className="text-xs text-muted-foreground">PNG Yellow</span>
        </div>
        <div className="space-y-2">
          <div className="w-8 h-8 png-black rounded"></div>
          <span className="text-xs text-muted-foreground">PNG Black</span>
        </div>
      </div>
      <div className="pt-4">
        <PNGFlag size="lg" />
      </div>
    </div>
  );
}