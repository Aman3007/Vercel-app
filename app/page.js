"use client"
import { ArrowRight, Sparkles, Users, Zap, TrendingUp, Bot, Workflow, Shield, Rocket, Brain, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { FeatureCard } from "./components/feature-card"
import { PricingCard } from "./components/pricing-card"
import { ContactForm } from "./components/contact-form"
import TestimonialsSection from "./components/reviews-section"

export default function Page() {
  return (
    <div className="relative min-h-screen bg-background dark overflow-hidden">
      {/* Animated Background Blur Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center min-h-screen py-20 text-center">
            {/* Main Heading with Gradient */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 max-w-5xl">
              <span className="text-balance bg-gradient-to-r from-purple-400 via-pink-500 to-pink-400 bg-clip-text text-transparent">
                Automate Everything
              </span>
              <br />
              <span className="text-foreground">with AI Power</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl text-balance">
              Transform your workflow with intelligent automation. Save time, reduce costs, and scale your business
              effortlessly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-20">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-purple-500/50 text-foreground hover:bg-purple-500/10 hover:border-purple-500 bg-transparent"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 rounded-full bg-purple-500/20">
                    <Users className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">50K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-pink-500/20 hover:border-pink-500/40 transition-all">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 rounded-full bg-pink-500/20">
                    <Zap className="w-6 h-6 text-pink-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">1M+</div>
                <div className="text-sm text-muted-foreground">Automations Run</div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 transition-all">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 rounded-full bg-purple-500/20">
                    <TrendingUp className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-4 py-2 bg-purple-500/10 border-purple-500/20 text-purple-300">
              <Sparkles className="w-4 h-4 mr-2" />
              Features
            </Badge>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Everything you need to automate your business with cutting-edge AI technology
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <FeatureCard
              icon={Bot}
              title="AI-Powered Workflows"
              description="Create intelligent automation workflows that adapt and learn from your business processes in real-time."
              gradientFrom="from-purple-500"
              gradientTo="to-purple-600"
            />
            <FeatureCard
              icon={Workflow}
              title="No-Code Builder"
              description="Design complex automations with our intuitive drag-and-drop interface. No coding required."
              gradientFrom="from-pink-500"
              gradientTo="to-pink-600"
            />
            <FeatureCard
              icon={Shield}
              title="Enterprise Security"
              description="Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards to keep your data safe."
              gradientFrom="from-purple-500"
              gradientTo="to-pink-500"
            />
            <FeatureCard
              icon={Rocket}
              title="Lightning Fast"
              description="Process millions of tasks per day with our optimized infrastructure built for scale and speed."
              gradientFrom="from-purple-600"
              gradientTo="to-purple-700"
            />
            <FeatureCard
              icon={Brain}
              title="Smart Analytics"
              description="Get actionable insights with AI-powered analytics that help you optimize and improve workflows."
              gradientFrom="from-pink-600"
              gradientTo="to-pink-700"
            />
            <FeatureCard
              icon={Lock}
              title="Advanced Permissions"
              description="Granular access controls and role-based permissions to manage your team effectively and securely."
              gradientFrom="from-purple-500"
              gradientTo="to-pink-600"
            />
          </div>
        </div>
      </div>
               <TestimonialsSection></TestimonialsSection>
      {/* Pricing Section */}
      <div className="relative py-20 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-4 py-2 bg-purple-500/10 border-purple-500/20 text-purple-300">
              <Sparkles className="w-4 h-4 mr-2" />
              Pricing
            </Badge>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Choose the perfect plan for your business needs. All plans include a 14-day free trial.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              name="Starter"
              price="29"
              period="month"
              description="Perfect for individuals and small teams getting started with automation"
              features={[
                "Up to 1,000 tasks per month",
                "5 active workflows",
                "Basic AI models",
                "Email support",
                "Standard integrations",
                "Basic analytics",
              ]}
              ctaText="Start Free Trial"
            />
            <PricingCard
              name="Professional"
              price="99"
              period="month"
              description="For growing teams that need advanced features and priority support"
              features={[
                "Up to 10,000 tasks per month",
                "Unlimited workflows",
                "Advanced AI models",
                "Priority support",
                "All integrations",
                "Advanced analytics",
                "Custom automations",
                "Team collaboration",
              ]}
              isPopular={true}
              ctaText="Get Started"
            />
            <PricingCard
              name="Enterprise"
              customPrice={true}
              description="For large organizations with custom needs and dedicated support"
              features={[
                "Unlimited tasks",
                "Unlimited workflows",
                "Custom AI models",
                "24/7 dedicated support",
                "Custom integrations",
                "Advanced security",
                "SLA guarantees",
                "Dedicated account manager",
              ]}
              ctaText="Contact Sales"
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-4 py-2 bg-purple-500/10 border-purple-500/20 text-purple-300">
              <Sparkles className="w-4 h-4 mr-2" />
              Contact
            </Badge>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Let's Talk
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Ready to transform your workflow? Get in touch with our team.
            </p>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
