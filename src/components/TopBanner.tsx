"use client";

import { useEffect, useState } from "react";
import { getDaysLeft } from "@/lib/launch";

export default function TopBanner() {
  const [joined, setJoined] = useState(0); // Number of people who joined
  const [loading, setLoading] = useState(true);
  const days = getDaysLeft();
  const TOTAL_SLOTS = 87;

  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const response = await fetch('/api/slots', { 
          cache: 'no-store',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        const data = await response.json();
        setJoined(data.joined || 0);
      } catch (error) {
        console.error('Failed to fetch slots:', error);
        setJoined(0); // Keep fallback
      } finally {
        setLoading(false);
      }
    };
    fetchSlots();
  }, []);

  if (loading) {
    return (
      <div className="w-full bg-brand-600 text-white">
        <div className="container flex items-center justify-center py-2 text-sm">
          <p className="font-medium">
            ⏳ Early access closes <span className="underline">Sept 12</span> • Loading...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-brand-600 text-white">
      <div className="container flex items-center justify-center py-2 text-sm">
        <p className="font-medium">
          ⏳ Early access closes <span className="underline">Sept 12</span> •{" "}
          <span className="font-semibold">{TOTAL_SLOTS - joined}</span> out of {TOTAL_SLOTS} slots left
          {days > 0 ? ` • ${days} day${days === 1 ? "" : "s"} left` : " • Last day"}
        </p>
      </div>
    </div>
  );
}
