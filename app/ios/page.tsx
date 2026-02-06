"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { DiApple } from "react-icons/di";

export default function IosPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
           <div className="mb-4 flex justify-start">
            <Button variant="ghost" asChild className="pl-0 hover:bg-transparent hover:text-primary">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
          <div className="flex flex-col items-center gap-2">
            <DiApple className="h-12 w-12 text-foreground" />
            <CardTitle className="text-2xl font-bold">Install on iOS</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            The iOS beta is coming soon.
          </p>
          <Button variant="outline" className="w-full" disabled>
            Join TestFlight (Coming Soon)
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
