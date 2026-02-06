"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { DiAndroid } from "react-icons/di";

export default function AndroidPage() {
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
            <DiAndroid className="h-12 w-12 text-foreground" />
            <CardTitle className="text-2xl font-bold">Install on Android</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
             <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Step 1: Join the Beta</p>
                <Button variant="outline" className="w-full" asChild>
                  <a
                    href="https://groups.google.com/g/tailwing-beta/about"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Beta Group
                  </a>
                </Button>
             </div>
             
             <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Step 2: Download App</p>
                <Button variant="outline" className="w-full" asChild>
                  <a
                    href="https://play.google.com/store/apps/details?id=co.tailwing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download from Play Store
                  </a>
                </Button>
             </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Make sure to join the Google Group first, otherwise the Play Store link might not work.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
