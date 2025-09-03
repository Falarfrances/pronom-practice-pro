import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  max: number;
  className?: string;
}

export function ProgressBar({ value, max, className }: ProgressBarProps) {
  const percentage = Math.round((value / max) * 100);
  
  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">Progression</span>
        <span className="text-sm text-muted-foreground">{value}/{max}</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
          aria-label={`Progression: ${percentage}%`}
        />
      </div>
      <div className="text-center mt-1">
        <span className="text-xs text-muted-foreground">{percentage}%</span>
      </div>
    </div>
  );
}