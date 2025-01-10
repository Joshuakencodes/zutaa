import * as React from "react"
import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, isOpen, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        isOpen && "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean
}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, isOpen, ...props }, ref) => (
    <div 
      ref={ref} 
      className={cn(
        "relative p-4",
        isOpen && "bg-white rounded-lg max-w-md w-full m-4",
        className
      )} 
      {...props} 
    />
  )
)
CardContent.displayName = "CardContent"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

export { Card, CardHeader, CardTitle, CardDescription, CardContent }

