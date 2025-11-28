"use client"

import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function PricingCard({
  name,
  price,
  period = "month",
  description,
  features,
  isPopular = false,
  ctaText = "Get Started",
  customPrice = false,
}) {
  return (
    <div id="pricing">
    <Card 
      className={`relative p-8 bg-card/50 backdrop-blur-md border transition-all duration-300 hover:scale-105 ${
        isPopular
          ? "border-purple-500/50 shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30"
          : "border-border hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10"
      }`}
    >
      {/* Most Popular Badge */}
      {isPopular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
          <Star className="w-3 h-3 mr-1 fill-white" />
          Most Popular
        </Badge>
      )}

      {/* Plan Name */}
      <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>
      <p className="text-sm text-muted-foreground mb-6">{description}</p>

      {/* Price Display */}
      <div className="mb-8">
        {customPrice ? (
          <div className="text-5xl font-bold text-foreground">Custom</div>
        ) : (
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-bold text-foreground">${price}</span>
            <span className="text-lg text-muted-foreground">/{period}</span>
          </div>
        )}
      </div>

      {/* CTA Button */}
      <Button
        size="lg"
        className={`w-full mb-8 transition-all duration-300 ${
          isPopular
            ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-lg shadow-purple-500/20"
            : "bg-card border-2 border-purple-500/50 text-foreground hover:bg-purple-500/10 hover:border-purple-500"
        }`}
      >
        {ctaText}
      </Button>

      {/* Features List */}
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className={`mt-0.5 p-1 rounded-full ${isPopular ? "bg-purple-500/20" : "bg-muted"}`}>
              <Check className={`w-4 h-4 ${isPopular ? "text-purple-400" : "text-muted-foreground"}`} />
            </div>
            <span className="text-sm text-foreground">{feature}</span>
          </div>
        ))}
      </div>
    </Card>
    </div>
  )
}
