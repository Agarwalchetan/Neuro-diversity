"use client";

import { Navbar } from "@/components/navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormDialog } from "@/components/ui/form-dialog";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto py-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4 gradient-text">Community</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our vibrant community of advocates, professionals, and individuals passionate about neurodiversity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Discussion Forum</h2>
              <div className="space-y-4">
                <Textarea
                  placeholder="Share your thoughts with the community..."
                  className="min-h-[100px]"
                />
                <Button>Post</Button>
              </div>
            </Card>

            {posts.map((post, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-medium">{post.author}</h3>
                      <p className="text-sm text-muted-foreground">{post.date}</p>
                    </div>
                  </div>
                </div>
                {post.image && (
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={post.image}
                      alt="Post image"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <p className="mb-4">{post.content}</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Like</Button>
                  <Button variant="outline" size="sm">Reply</Button>
                </div>
              </Card>
            ))}
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Join Us</h2>
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=2070"
                    alt="Community"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm">Join our growing community</p>
                  </div>
                </div>
                <FormDialog
                  type="community"
                  trigger={
                    <Button className="w-full">Join the Community</Button>
                  }
                />
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
                {events.map((event, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <div className="relative h-32 mb-3 rounded-lg overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-2 left-2 text-white">
                        <h3 className="font-medium">{event.title}</h3>
                        <p className="text-sm opacity-80">{event.date}</p>
                      </div>
                    </div>
                    <FormDialog
                      type="register"
                      trigger={
                        <Button variant="outline" size="sm">Register</Button>
                      }
                    />
                  </div>
                ))}
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}

const posts = [
  {
    author: "Author",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    date: "2 hours ago",
    content: "Just completed the Foundations course! The insights on creating inclusive environments were incredibly valuable.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070",
  },
  {
    author: "Author",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    date: "5 hours ago",
    content: "Looking for advice on implementing sensory-friendly spaces in a startup environment. Any tips from the community?",
    image: "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?auto=format&fit=crop&q=80&w=2071",
  },
];

const events = [
  {
    title: "Virtual Coffee Chat",
    date: "Every Tuesday, 10:00 AM IS",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=2070",
  },
  {
    title: "Monthly Meetup",
    date: "Last Thursday of each month",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=2070",
  },
  {
    title: "Neurodiversity Workshop",
    date: "April 30, 2024",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=2070",
  },
];