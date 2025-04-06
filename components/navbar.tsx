"use client";

import { Navbar } from "@/components/navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { FormDialog } from "@/components/ui/form-dialog";
import Image from "next/image";

export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto py-10">
        <motion.div 
          className="relative mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2070"
              alt="Training background"
              fill
              className="object-cover opacity-10 rounded-3xl"
            />
          </div>
          <h1 className="text-4xl font-bold gradient-text text-center">Training Programs</h1>
          <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
            Enhance your understanding of neurodiversity through our comprehensive training programs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Upcoming Webinars</h2>
                {upcomingWebinars.map((webinar, index) => (
                  <div key={index} className="mb-4 last:mb-0 p-4 hover:bg-accent/5 rounded-lg transition-colors">
                    <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={webinar.image}
                        alt={webinar.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-medium text-lg">{webinar.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{webinar.date}</p>
                    <FormDialog
                      type="register"
                      trigger={
                        <Button variant="outline" size="sm" className="hover:bg-accent hover:text-white transition-colors">
                          Register
                        </Button>
                      }
                    />
                  </div>
                ))}
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Your Progress</h2>
                {courses.map((course, index) => (
                  <div key={index} className="mb-6 last:mb-0">
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-2 left-2 text-white font-medium">
                        {course.title}
                      </div>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{course.title}</span>
                      <span className="text-sm text-muted-foreground">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                ))}
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Featured Course</h2>
              <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2071"
                  alt="Featured course"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-medium">Understanding Neurodiversity in the Workplace</h3>
                  <p className="text-sm opacity-80">Comprehensive training for modern workplace inclusion</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  {featuredCourseImages.map((image, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`Course preview ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>✓ 8 Modules</span>
                  <span>•</span>
                  <span>✓ 4 Hours</span>
                  <span>•</span>
                  <span>✓ Certificate</span>
                </div>
                <FormDialog
                  type="register"
                  trigger={
                    <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                      Start Learning
                    </Button>
                  }
                />
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

const upcomingWebinars = [
  {
    title: "Neurodiversity in Tech",
    date: "April 15, 2025 - 2:00 PM IST",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1600",
  },
  {
    title: "Creating Inclusive Workspaces",
    date: "April 20, 2025 - 1:00 PM IST",
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&q=80&w=1600",
  },
  {
    title: "Leadership for Neurodiversity",
    date: "April 25, 2025 - 3:00 PM IST",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1600",
  },
];

const courses = [
  {
    title: "Foundations of Neurodiversity",
    progress: 75,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600",
  },
  {
    title: "Inclusive Communication",
    progress: 45,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1600",
  },
  {
    title: "Sensory-Friendly Environments",
    progress: 90,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600",
  },
];

const featuredCourseImages = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
];
