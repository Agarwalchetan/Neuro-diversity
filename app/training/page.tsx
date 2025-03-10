"use client";

import { Navbar } from "@/components/navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { FormDialog } from "@/components/ui/form-dialog";

export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto py-10">
        <motion.h1 
          className="text-4xl font-bold mb-8 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Training Programs
        </motion.h1>

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
              <div className="aspect-video bg-gradient-to-r from-accent/20 to-accent/5 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-4xl text-accent">🎓</div>
              </div>
              <h3 className="text-xl font-medium mb-2">Understanding Neurodiversity in the Workplace</h3>
              <p className="text-muted-foreground mb-6">
                Learn how to create an inclusive environment that celebrates neurodiversity and maximizes team potential.
                This comprehensive course covers essential topics for modern workplace inclusion.
              </p>
              <div className="space-y-4">
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
  },
  {
    title: "Creating Inclusive Workspaces",
    date: "April 20, 2025 - 1:00 PM IST",
  },
  {
    title: "Leadership for Neurodiversity",
    date: "April 25, 2025 - 3:00 PM IST",
  },
];

const courses = [
  {
    title: "Foundations of Neurodiversity",
    progress: 75,
  },
  {
    title: "Inclusive Communication",
    progress: 45,
  },
  {
    title: "Sensory-Friendly Environments",
    progress: 90,
  },
];