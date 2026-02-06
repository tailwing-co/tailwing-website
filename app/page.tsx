import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DiAndroid, DiApple } from "react-icons/di";

export default function Home() {
        // logic executes on the server (or at build time), sending finished HTML to the browser.
        const currentYear = new Date().getFullYear();

        return (
                <div className="flex min-h-screen flex-col bg-background">
                        <div className="flex flex-1 flex-col items-center justify-center p-4 text-center">
                                <Image
                                        src="/icon.jpg"
                                        // Improved alt text for accessibility
                                        alt="Tailwing App Icon"
                                        width={150}
                                        height={150}
                                        className="mx-auto mb-5 rounded-[15px] shadow-lg"
                                        priority
                                />
                                <h1 className="mb-2.5 text-[2.5rem] font-semibold text-foreground">
                                        Tailwing
                                </h1>
                                <p className="text-[1.2rem] text-muted-foreground">
                                        Social multimedia discovery.
                                </p>

                                <div className="mt-5">
                                        {/* Cleaned up Badge classes for readability */}
                                        <Badge
                                                variant="outline"
                                                className="border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium uppercase tracking-wider text-blue-600 hover:bg-blue-50 hover:text-blue-600 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-400"
                                        >
                                                🎉 Beta out now
                                        </Badge>
                                </div>
                                <div className="mt-8 flex flex-col gap-3">
                                        <Button variant="outline" className="w-32" asChild>
                                                <Link href="/android" className="flex items-center justify-center gap-2">
                                                        <DiAndroid className="h-5 w-5" />
                                                        <span>Android</span>
                                                </Link>
                                        </Button>
                                        <Button variant="outline" className="w-32" asChild>
                                                <Link href="/ios" className="flex items-center justify-center gap-2">
                                                        {/* Added h-5 w-5 and removed pb-1 */}
                                                        <DiApple className="h-5 w-5 mb-1" />
                                                        <span>iOS</span>
                                                </Link>
                                        </Button>
                                </div>
                        </div>

                        <footer className="w-full pb-8 text-sm text-muted-foreground">
                                <div className="flex flex-col items-center gap-2">
                                        <div className="flex items-center justify-center space-x-3">
                                                <Link href="/privacy" className="hover:underline">
                                                        Privacy Policy
                                                </Link>
                                                <span className="h-1 w-1 rounded-full bg-muted-foreground/40"></span>
                                                <Link href="/tos" className="hover:underline">
                                                        Terms of Service
                                                </Link>
                                        </div>
                                        <div>
                                                &copy;{currentYear} Tailwing
                                        </div>
                                </div>
                        </footer>
                </div>
        );
}
