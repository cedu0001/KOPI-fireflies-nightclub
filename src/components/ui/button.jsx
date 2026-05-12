"use client"
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva } from "class-variance-authority";
import {motion} from "framer-motion";
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
					"relative bg-primary p-4 text-primary-foreground border-t-2 border-b-2 p-4 pr-6 pl-6 border-primary-foreground cursor-pointer",
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

const MotionButton = motion.create(ButtonPrimitive);

function Button({ className, variant = "default", size = "default", children, ...props }) {
	const isHighlight = variant === "highlight";
	const isSecondary = variant === "secondary";
	return (
		<MotionButton
      data-slot="button"
	  initial="rest"
      whileHover="hover"
      animate="rest"
      className={cn(
        buttonVariants({
          variant,
          className,
        }),
        isHighlight && "overflow-hidden"
      )}
      {...props}
    >


      {isHighlight && (
        <motion.div
  variants={{
    rest: {
      scale: 0,
      opacity: 0,
	  x: -30,
	  y: -30,
    },
    hover: {
      scale: 10,
      opacity: 1,
	  x: 0,
	  y: 0,
    },
  }}
  transition={{
    duration: 0.6,
    ease: "easeOut",
  }}
  className="pointer-events-none absolute bottom-0 right-0 z-0 h-10 w-10 rounded-full bg-highlight-accent blur-2xl"
/>
      )}

	  {isSecondary && (
  <>
    {/* top line */}
    <motion.div
      variants={{
        rest: {
          scaleX: 0,
        },
        hover: {
          scaleX: 1,
        },
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className="absolute top-[-2px] right-0 h-[2px] w-full origin-right bg-highlight-secondary"
    />

    {/* bottom line */}
    <motion.div
      variants={{
        rest: {
          scaleX: 0,
        },
        hover: {
          scaleX: 1,
        },
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className="absolute bottom-[-2px] left-0 h-[2px] w-full origin-left bg-highlight-secondary"
    />
  </>
)}

    {isSecondary ? (
  <motion.span
    variants={{
      rest: {
        color: "var(--color-primary-foreground)",
      },
      hover: {
        color: "var(--color-highlight-secondary)",
      },
    }}
    transition={{
      delay: 0.35,
      duration: 0.2,
    }}
    className="relative z-10"
  >
    {children}
  </motion.span>
) : (
  <span className="relative z-10">
    {children}
  </span>
)}
    </MotionButton>
	);
}

export { Button, buttonVariants };
