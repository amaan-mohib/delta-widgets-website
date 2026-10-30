"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    window.location.href = "/releases/latest?download=true";
  }, []);

  return <main>Redirecting...</main>;
}
