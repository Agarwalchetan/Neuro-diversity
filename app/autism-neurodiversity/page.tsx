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
          className="text-center space-y-6 relative"
        >
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2070"
              alt="Diverse group collaborating"
              fill
              className="object-cover opacity-10 rounded-3xl"
            />
          </div>
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
              <motion.div key={index} variants={itemVariants} className="group">
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
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
              <motion.div key={index} variants={itemVariants} className="group">
                <Card className="p-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 bg-accent/5 rounded-full" />
                  <div className="flex items-start gap-4 relative z-10">
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
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
                alt="Team collaboration"
                width={800}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
            <Card className="p-6">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div key={index} variants={itemVariants}>
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
          </div>
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
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src={story.image}
                        alt={story.author}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
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

// Data below...

const articles = [
  {
    title: "Understanding Sensory Processing",
    excerpt:
      "Explore how sensory experiences differ for neurodivergent individuals and ways to create sensory-friendly environments.",
    image: "https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?auto=format&fit=crop&q=80&w=1600",
    url: "https://www.understood.org/articles/understanding-sensory-processing-issues",
  },
  {
    title: "The Power of Special Interests",
    excerpt:
      "Discover how special interests can be leveraged for learning, career development, and personal growth.",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=1600",
    url: "https://www.spectrumnews.org/features/deep-dive/the-benefits-of-special-interests-in-autism/",
  },
  {
    title: "Communication Styles",
    excerpt:
      "Learn about different communication styles and strategies for effective interaction in diverse groups.",
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
    answer:
      "Neurodiversity is the concept that neurological differences are natural variations in human brain function and behavioral traits, regarding these differences as normal rather than deficits.",
  },
  {
    question: "How can workplaces be more neuro-inclusive?",
    answer:
      "By providing flexible work arrangements, sensory-friendly environments, and accommodating communication styles while focusing on strengths.",
  },
  {
    question: "What are common misconceptions about autism?",
    answer:
      "That autistic people lack empathy or can't form relationships. In reality, autism is a spectrum with diverse traits and strengths.",
  },
  {
    question: "How can I support neurodivergent family members?",
    answer:
      "Understand their needs, create supportive environments, and listen to their experiences to find strategies that work for them.",
  },
  {
    question: "What is stimming and why is it important?",
    answer:
      "Stimming helps with emotional regulation and sensory processing. It's a natural coping mechanism that should be respected.",
  },
];

const successStories = [
  {
    quote:
      "Understanding my neurodiversity helped me leverage my unique strengths in problem-solving and attention to detail.",
    author: "Jamie Reed",
    role: "Tech Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote:
      "After implementing neuro-inclusive practices, our team's creativity and innovation increased dramatically.",
    author: "Sarah Liu",
    role: "HR Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote:
      "Being diagnosed as autistic in adulthood was life-changing. It helped me understand myself better and help others too.",
    author: "Alex Morgan",
    role: "Neurodiversity Consultant",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote:
      "Our school's shift to neurodiversity-affirming practices improved academic outcomes and student well-being.",
    author: "Linda Carter",
    role: "Education Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
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
