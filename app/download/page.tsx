"use client";

import { Body2, Caption1, Link } from "@fluentui/react-components";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    window.location.href = "/releases/latest?download=true";
  }, []);

  return (
    <main>
      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-2 items-center justify-center h-[52vh]">
          <Body2>Redirecting...</Body2>
          <Caption1 as="p">
            Your download should start automatically. If it doesn't,{" "}
            <Link href="/releases/latest?download=true">click here</Link>
          </Caption1>
        </div>
      </section>
    </main>
  );
}
