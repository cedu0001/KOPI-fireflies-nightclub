import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"group/button inline-flex shrink-0 items-center justify-center border-transparent text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
	{
		variants: {
			variant: {
				default:
					"bg-primary/40 text-primary-foreground  border-2 border-primary-foreground cursor-pointer p-4 pr-6 pl-6",
          ghost:
          "hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
          outline:
          "border-foreground border-2 pl-1 pr-1 bg-background hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
				secondary:
					"bg-primary p-4 text-primary-foreground border-t-2 border-b-2 p-4 pr-6 pl-6 border-primary-foreground cursor-pointer [a]:hover:bg-primary/80 aria-expanded:bg-primary aria-expanded:text-primary-foreground",
				highlight:
					"relative bg-gradient-to-br from-highlight-primary to-highlight-accent p-4 pr-6 pl-6 border-2 cursor-pointer after:absolute after:top-0 after:right-0 after:w-5 after:h-5 after:border-t-2 after:border-r-2 after:border-primary-foreground/50 after:opacity-100 after:blur-[1px]",
				square_btn: "h-[43px] w-[43px] border-white border-2 rounded-none bg-black cursor-pointer hover:",
				link: "text-primary underline-offset-4 hover:underline",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

function Button({ className, variant = "default", size = "default", ...props }) {
	return (
		<ButtonPrimitive
			data-slot="button"
			className={cn(
				buttonVariants({
					variant,
					className,
				}),
			)}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
