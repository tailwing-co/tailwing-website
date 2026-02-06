import Image from "next/image";
import { DiAndroid } from "react-icons/di";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <Image
          src="/icon.jpg"
          alt="Tailwing Icon"
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
        <div className="mt-5 inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-[0.9rem] font-medium uppercase tracking-[1px] text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
          🎉 Beta out now
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 text-foreground">
          <DiAndroid className="h-6 w-6" />
          <span className="font-medium">Install on Android:</span>
        </div>
        <ol className="mt-4 text-left text-sm text-muted-foreground space-y-2 max-w-xs mx-auto">
          <li>
            1. Join the{" "}
            <a
              href="https://groups.google.com/g/tailwing-beta/about"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              beta test group
            </a>
          </li>
          <li>
            2. Download the{" "}
            <a
              href="https://play.google.com/store/apps/details?id=co.tailwing"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              app
            </a>{" "}
            on your android device.
          </li>
        </ol>
      </div>
    </div>
  );
}
