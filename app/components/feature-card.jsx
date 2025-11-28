"use client"

import { Card } from "@/components/ui/card"

export function FeatureCard({ icon: Icon, title, description, gradientFrom, gradientTo }) {
  return (
    <div id="features">
    <Card className="group relative p-8 bg-card/30 backdrop-blur-md border border-border/50 hover:border-transparent transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 blur-xl -z-10" />
      <div className="absolute inset-[1px] bg-card/80 backdrop-blur-md rounded-lg -z-10" />

      <div
        className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${gradientFrom} ${gradientTo} mb-6 transition-transform duration-500 ease-out group-hover:rotate-12 group-hover:scale-110`}
      >
        <Icon className="w-8 h-8 text-white" />
      </div>

      <h3 className="text-2xl font-bold mb-3 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </Card>
    </div>
  )
}
