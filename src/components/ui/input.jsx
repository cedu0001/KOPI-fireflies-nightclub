import * as React from "react"
import { Input } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

function InputBasic({
  className,
  type,
  ...props
}) {
  return (
    <Input
      type={type}
      data-slot="input"
      className={cn(
        "h-8 w-full mb-8 min-w-0 border border-input bg-transparent px-2.5 py-1 transition-colors outline-none file:inline-flex file:h-6  file:bg-transparent file:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm",
        className
      )}
      {...props} />
  );
}

export { InputBasic }
