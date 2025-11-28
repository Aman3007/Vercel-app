"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [focusedField, setFocusedField] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission
  }

  return (
    <div id="contact" className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Contact Information Column */}
      <div className="space-y-6">
        <div>
          <h3 className="text-3xl font-bold text-foreground mb-2">Get in Touch</h3>
          <p className="text-muted-foreground">
            Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="space-y-4">
          <Card className="p-6 bg-card/50 backdrop-blur-md border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Email</h4>
                <p className="text-sm text-muted-foreground">support@aiautomation.com</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-md border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 group hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-md border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Location</h4>
                <p className="text-sm text-muted-foreground">123 AI Street, San Francisco, CA 94102</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Contact Form Column */}
      <Card className="p-8 bg-card/50 backdrop-blur-md border-purple-500/20">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              className={`w-full px-4 py-3 bg-background border-2 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-300 ${
                focusedField === "name"
                  ? "border-purple-500 shadow-lg shadow-purple-500/20 scale-[1.02]"
                  : "border-border"
              }`}
              placeholder="Your name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              className={`w-full px-4 py-3 bg-background border-2 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-300 ${
                focusedField === "email"
                  ? "border-purple-500 shadow-lg shadow-purple-500/20 scale-[1.02]"
                  : "border-border"
              }`}
              placeholder="your@email.com"
              required
            />
          </div>

          {/* Subject Input */}
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-foreground">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onFocus={() => setFocusedField("subject")}
              onBlur={() => setFocusedField(null)}
              className={`w-full px-4 py-3 bg-background border-2 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-300 ${
                focusedField === "subject"
                  ? "border-purple-500 shadow-lg shadow-purple-500/20 scale-[1.02]"
                  : "border-border"
              }`}
              placeholder="How can we help?"
              required
            />
          </div>

          {/* Message Textarea */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              rows={5}
              className={`w-full px-4 py-3 bg-background border-2 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-300 resize-none ${
                focusedField === "message"
                  ? "border-purple-500 shadow-lg shadow-purple-500/20 scale-[1.02]"
                  : "border-border"
              }`}
              placeholder="Tell us more about your needs..."
              required
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 group"
          >
            Send Message
            <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Button>
        </form>
      </Card>
    </div>
  )
}
