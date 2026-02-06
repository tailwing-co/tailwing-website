import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <div className="mb-4">
            <Button variant="ghost" asChild className="pl-0 hover:bg-transparent hover:text-primary">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
          <CardTitle className="text-3xl font-bold">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert">
          <p className="text-muted-foreground">
            Tailwing collects and stores your name and email to identify and potentially contact you. 
            We also store any user generated data such as personal lists so you can persist them across devices.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
