"use client";

import { Navbar } from "@/components/navbar";
import { Card } from "@/components/ui/card";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto py-10">
        <Card className="p-6 text-center">
          <h1 className="text-2xl font-bold text-destructive">Coming Soon</h1>
          <p className="text-muted-foreground mt-2">
            The admin portal will be available after deployment.
          </p>
        </Card>
      </div>
    </main>
  );
}