"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Brain, Users, Lightbulb, Heart, ArrowRight, Quote, Star, Sparkles } from "lucide-react";
import { FormDialog } from "@/components/ui/form-dialog";

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 px-4 hero-pattern">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent/5 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="container mx-auto max-w-4xl relative">
          <motion.div
            style={{ y }}
            className="relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center bg-accent/10 rounded-full px-4 py-2 mb-6 hover:bg-accent/20 transition-colors"
            >
              <Sparkles className="h-4 w-4 text-accent mr-2" />
              <span className="text-sm font-medium text-accent">Making a difference together</span>
            </motion.div>
            <motion.h1 
              className="text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Welcome to
              <br />
              <span className="gradient-text relative">
                The Neuro Impact
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-accent/30"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Empowering neurodivergent individuals and creating inclusive spaces where everyone can thrive. 
              Join us in building a more understanding and accepting society.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Let's Connect 
                  <motion.span
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <Check className="ml-2 h-4 w-4" />
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-accent text-accent hover:bg-accent/10 group"
              >
                Join The Community 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute right-0 top-0 w-1/3 h-full opacity-20"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 0.2, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <div className="wave-animation">
              <Brain className="w-full h-full text-accent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-muted relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-center mb-4 gradient-text">
              Feels Illegal to Know...
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              These statistics highlight why our mission is so crucial. Together, we can create positive change.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index}
                className="group"
              >
                <Card className="p-8 card-hover bg-white/50 backdrop-blur-sm border-accent/10 group-hover:border-accent/30 transition-all duration-300">
                  <p className="text-lg font-medium leading-relaxed">{stat}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section ref={featuresRef} className="py-20">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              Why Choose NeuroImpact?
            </h2>
            <p className="text-muted-foreground">
              We're committed to creating lasting change through understanding, education, and action.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <Card className="p-8 text-center card-hover group-hover:border-accent/50 transition-all duration-300">
                  <motion.div 
                    className="mb-6 flex justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {getFeatureIcon(index)}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-muted/50">
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 gradient-text"
            variants={itemVariants}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
          >
            Voices of Impact
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate={testimonialsInView ? "visible" : "hidden"}
                custom={index}
                whileHover={{ y: -5 }}
              >
                <Card className="p-8 card-hover group">
                  <Quote className="h-8 w-8 text-accent/40 mb-4 group-hover:text-accent transition-colors" />
                  <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-12 text-center relative overflow-hidden group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent/5 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
              <div className="relative z-10">
                <motion.h2 
                  className="text-4xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Ready to Make an Impact?
                </motion.h2>
                <motion.p 
                  className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Join our community of change-makers and help create a more inclusive world for everyone.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <FormDialog
                    type="community"
                    trigger={
                      <Button 
                        size="lg" 
                        className="bg-accent hover:bg-accent/90 group relative overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center">
                          Get Started Today
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                      </Button>
                    }
                  />
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

const stats = [
  "1 in 7 people are neurodivergent i.e. approx 1 billion population globally",
  "79% of autistic students drop out every year from high school",
  "51% of workers have quit or want to quit their jobs due to lack of support from their managers",
  "11+ forms of Neurodivergence, like ADHD, Autism, dyslexia, dysgraphia, epilepsy, apraxia, dyspraxia, TBI, OCD and Tourette's among others",
  "Around 50% of neurodivergent individuals are undiagnosed or unaware of their condition",
  "Studies show that teams with neurodivergent individuals increase productivity over 30%"
];

const features = [
  {
    title: "Real Stories",
    description: "Authentic experiences shared by neurodivergent individuals and allies."
  },
  {
    title: "Neuroinclusive Workspaces",
    description: "Expert guidance on creating accommodating work environments."
  },
  {
    title: "Avatar Guide",
    description: "Personalized learning journey tailored to your needs."
  },
  {
    title: "Awareness Gatherings",
    description: "Community events fostering understanding and connection."
  }
];

const testimonials = [
  {
    quote: "The Neuro Impact transformed our workplace culture and improved team productivity significantly.",
    name: "Speaker 1",
    role: "HR Director"
  },
  {
    quote: "Finally, a platform that truly understands and supports neurodivergent individuals.",
    name: "Speaker 2",
    role: "Software Engineer"
  },
  {
    quote: "The resources and community support here have been invaluable for our organization.",
    name: "Speaker 3",
    role: "Diversity Consultant"
  }
];

function getFeatureIcon(index: number) {
  const iconClass = "h-12 w-12 text-accent group-hover:scale-110 transition-transform";
  switch (index) {
    case 0:
      return <Heart className={iconClass} />;
    case 1:
      return <Users className={iconClass} />;
    case 2:
      return <Brain className={iconClass} />;
    case 3:
      return <Lightbulb className={iconClass} />;
    default:
      return null;
  }
}