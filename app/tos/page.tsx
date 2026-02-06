import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TosPage() {
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
                                        <CardTitle className="text-3xl font-bold">Terms of Service</CardTitle>
                                </CardHeader>
                                <CardContent className="prose dark:prose-invert">
                                        <p className="text-muted-foreground">
                                                By using any software from Tailwing, you henceforth concur to do the following: be excellent to each other! The rules are most simple - don't be a bogus bro, don't hack our circuits, and definitely don't ruin anyone else’s vibe. If you act like a total jerk, we reserve the right to toss you out of the metaphorical phone booth. Party on!
                                        </p>
                                </CardContent>
                        </Card>
                </div>
        );
}
