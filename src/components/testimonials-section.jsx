import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const testimonials = [
    {
      quote: "Finally a way for Indian developers to have a professional identity without paying for renewed domains every year.",
      name: "Rahul Sharma",
      role: "Full Stack Developer",
      company: "Freelancer",
      image: "https://github.com/shadcn.png"
    },
    {
      quote: "Setting up my portfolio on rahul.indevs.in was super easy. The DNS control is exactly what I needed.",
      name: "Priya Patel",
      role: "Student",
      company: "IIT Bombay",
      image: "https://github.com/shadcn.png"
    },
    {
      quote: "I love the community focus. It feels great to be part of a platform built specifically for us.",
      name: "Arjun Singh",
      role: "Engineer",
      company: "TechStark",
      image: "https://github.com/shadcn.png"
    }
  ];

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-background border-b border-border/40">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-medium mb-4">Trusted by Builders</h2>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="bg-secondary/20 border-border/50 shadow-sm backdrop-blur-sm">
                <CardContent className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                    <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-background relative z-10">
                      <AvatarImage src={testimonials[active].image} />
                      <AvatarFallback>{testimonials[active].name[0]}</AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="flex-1 text-center md:text-left space-y-6">
                    <Quote className="w-8 h-8 text-primary/40 mx-auto md:mx-0" />
                    <p className="text-xl md:text-2xl font-serif text-foreground leading-relaxed">
                      "{testimonials[active].quote}"
                    </p>
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">{testimonials[active].name}</h4>
                      <p className="text-muted-foreground">{testimonials[active].role} @ {testimonials[active].company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prev} className="rounded-full hover:bg-secondary">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={next} className="rounded-full hover:bg-secondary">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
