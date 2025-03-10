"use client";

import { Navbar } from "@/components/navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormDialog } from "@/components/ui/form-dialog";

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold mb-8">Community</h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
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
                  <div>
                    <h3 className="font-medium">{post.author}</h3>
                    <p className="text-sm text-muted-foreground">{post.date}</p>
                  </div>
                </div>
                <p className="mb-4">{post.content}</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Like</Button>
                  <Button variant="outline" size="sm">Reply</Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Join Us</h2>
              <FormDialog
                type="community"
                trigger={
                  <Button className="w-full">Join the Community</Button>
                }
              />
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
              {events.map((event, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <h3 className="font-medium">{event.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{event.date}</p>
                  <FormDialog
                    type="register"
                    trigger={
                      <Button variant="outline" size="sm">Register</Button>
                    }
                  />
                </div>
              ))}
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}

const posts = [
  {
    author: "User 1",
    date: "2 hours ago",
    content: "Just completed the Foundations course! The insights on creating inclusive environments were incredibly valuable.",
  },
  {
    author: "User 2",
    date: "5 hours ago",
    content: "Looking for advice on implementing sensory-friendly spaces in a startup environment. Any tips from the community?",
  },
];

const events = [
  {
    title: "Virtual Coffee Chat",
    date: "Every Tuesday, 10:00 AM IST",
  },
  {
    title: "Monthly Meetup",
    date: "Last Thursday of each month",
  },
  {
    title: "Neurodiversity Workshop",
    date: "April 30, 2024",
  },
];