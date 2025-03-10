"use client";

import { Navbar } from "@/components/navbar";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Brain, Book, Users, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AutismNeurodiversityPage() {
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
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto py-10 space-y-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl font-bold gradient-text">Understanding Autism & Neurodiversity</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the beautiful spectrum of human neurodiversity and learn how we can create a more inclusive world together.
          </p>
        </motion.div>

        {/* Featured Articles */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="group">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Key Concepts */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold mb-8">Key Concepts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {concepts.map((concept, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-accent/10 text-accent">
                      {getConceptIcon(concept.icon)}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{concept.title}</h3>
                      <p className="text-muted-foreground">{concept.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <Card className="p-6">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                >
                  <AccordionItem value={`item-${index}`} className="border rounded-lg px-4">
                    <AccordionTrigger className="text-lg hover:text-accent transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </Card>
        </motion.section>

        {/* Success Stories */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold mb-8">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <Users className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{story.author}</h3>
                        <p className="text-sm text-muted-foreground">{story.role}</p>
                      </div>
                    </div>
                    <p className="italic text-lg">{story.quote}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}

const articles = [
  {
    title: "Understanding Sensory Processing",
    excerpt: "Explore how sensory experiences differ for neurodivergent individuals and ways to create sensory-friendly environments.",
    image: "https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?auto=format&fit=crop&q=80&w=1600",
    url: "https://www.understood.org/articles/understanding-sensory-processing-issues",
  },
  {
    title: "The Power of Special Interests",
    excerpt: "Discover how special interests can be leveraged for learning, career development, and personal growth.",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=1600",
    url: "https://www.spectrumnews.org/features/deep-dive/the-benefits-of-special-interests-in-autism/",
  },
  {
    title: "Communication Styles",
    excerpt: "Learn about different communication styles and strategies for effective interaction in diverse groups.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1600",
    url: "https://www.autism.org.uk/advice-and-guidance/topics/communication/communication-tools",
  },
];

const concepts = [
  {
    title: "Neurodiversity Paradigm",
    description: "Understanding neurodiversity as a natural variation in human cognition rather than a deficit.",
    icon: "brain",
  },
  {
    title: "Inclusive Education",
    description: "Creating learning environments that support diverse thinking and learning styles.",
    icon: "book",
  },
  {
    title: "Social Dynamics",
    description: "Understanding and supporting different approaches to social interaction and relationship building.",
    icon: "users",
  },
  {
    title: "Emotional Intelligence",
    description: "Recognizing and supporting different ways of experiencing and expressing emotions.",
    icon: "heart",
  },
];

const faqs = [
  {
    question: "What is neurodiversity?",
    answer: "Neurodiversity is the concept that neurological differences are natural variations in human brain function and behavioral traits, regarding these differences as normal rather than deficits. This includes conditions like autism, ADHD, dyslexia, and others.",
  },
  {
    question: "How can workplaces be more neuro-inclusive?",
    answer: "Workplaces can become more neuro-inclusive by providing flexible work arrangements, quiet spaces, clear communication protocols, sensory-friendly environments, and understanding different communication styles. It's also important to focus on individual strengths and provide appropriate accommodations.",
  },
  {
    question: "What are common misconceptions about autism?",
    answer: "Common misconceptions include that autistic people lack empathy, can't form relationships, or all have the same traits. In reality, autism is a spectrum, and each person's experience is unique. Autistic individuals often have deep empathy and can form meaningful relationships, just in different ways.",
  },
  {
    question: "How can I support neurodivergent family members?",
    answer: "Supporting neurodivergent family members involves understanding their unique needs, creating supportive environments, advocating for their rights, and celebrating their strengths. It's important to listen to their experiences and work together to find strategies that work for them.",
  },
  {
    question: "What is stimming and why is it important?",
    answer: "Stimming refers to self-stimulatory behaviors that can help with emotional regulation, concentration, and sensory processing. It's a natural and important coping mechanism that shouldn't be discouraged unless it's harmful.",
  },
];

const successStories = [
  {
    quote: "Understanding my neurodiversity helped me leverage my unique strengths in problem-solving and attention to detail. Now I lead a successful tech team that values diverse thinking styles.",
    author: "Alex Chen",
    role: "Software Engineering Manager",
  },
  {
    quote: "After implementing neuro-inclusive practices, our team's creativity and innovation increased dramatically. We've seen a 40% improvement in project outcomes.",
    author: "Sarah Johnson",
    role: "HR Director",
  },
  {
    quote: "Being diagnosed as autistic in adulthood was life-changing. It helped me understand myself better and find strategies that work for me. Now I help others embrace their neurodiversity.",
    author: "Michael Rodriguez",
    role: "Neurodiversity Advocate",
  },
  {
    quote: "Our school's shift to neurodiversity-affirming practices has led to improved academic outcomes and student well-being across the board.",
    author: "Dr. Emily Thompson",
    role: "Education Specialist",
  },
];

function getConceptIcon(type: string) {
  const className = "h-6 w-6";
  switch (type) {
    case "brain":
      return <Brain className={className} />;
    case "book":
      return <Book className={className} />;
    case "users":
      return <Users className={className} />;
    case "heart":
      return <Heart className={className} />;
    default:
      return null;
  }
}