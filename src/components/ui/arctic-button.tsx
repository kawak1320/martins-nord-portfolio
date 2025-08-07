import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const arcticButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-arctic focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        frost: "bg-gradient-arctic text-polar-night-0 shadow-arctic hover:shadow-soft hover:scale-105",
        aurora: "bg-aurora-red text-snow-storm-2 hover:bg-aurora-orange transition-arctic hover:scale-105",
        polar: "bg-polar-night-1 text-snow-storm-2 hover:bg-polar-night-0 border border-polar-night-2",
        ghost: "text-polar-night-1 hover:bg-snow-storm-0 hover:text-polar-night-0",
        outline: "border border-frost-3 text-frost-3 hover:bg-frost-3 hover:text-snow-storm-2",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4",
        lg: "h-12 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "frost",
      size: "default",
    },
  }
);

export interface ArcticButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof arcticButtonVariants> {
  asChild?: boolean;
}

const ArcticButton = React.forwardRef<HTMLButtonElement, ArcticButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(arcticButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
ArcticButton.displayName = "ArcticButton";

export { ArcticButton, arcticButtonVariants };