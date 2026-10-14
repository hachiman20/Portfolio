"use client";

import { useEffect, useState } from "react";

export default function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    async function fetchViews() {
      try {
        const response = await fetch("/api/views", { cache: "no-store" });
        const data = (await response.json()) as { views?: number };
        setViews(Number(data.views ?? 0));
      } catch {
        setViews(0);
      }
    }

    fetchViews();
  }, []);

  return (
    <div className="flex justify-end px-5 pt-6 sm:px-8 lg:px-10">
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700 shadow-sm">
        <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
        <span>Visitors</span>
        <span className="font-semibold">{views === null ? "--" : views.toLocaleString()}</span>
      </div>
    </div>
  );
}
