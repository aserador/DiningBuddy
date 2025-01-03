import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 h-6",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-uiucblue text-primary-foreground shadow",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-red-500 text-destructive-foreground shadow",
        outline: "text-foreground",
        warning:
          "border-transparent bg-warning text-warning-foreground",
        success:
          "border-transparent bg-success text-success-foreground",
        black:
          "border-transparent bg-gray-800 text-white",
        info:
          "border-transparent bg-[#1D58A7] text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }