// Launch utilities for early-access logic - now uses real Supabase data
export const EARLY_ACCESS_END = new Date("2025-09-12T23:59:59Z");
export const TOTAL_SLOTS = 87;

export function getDaysLeft(today = new Date()) {
  const ms = EARLY_ACCESS_END.getTime() - today.getTime();
  return Math.max(Math.ceil(ms / 86400000), 0);
}

/** Round down to nearest 5, never below actual; add '+' for social proof. */
export function formatJoinedForSocial(count: number) {
  const rounded = Math.max(Math.floor(count / 5) * 5, count);
  return `${rounded}+`;
}

// These functions now fetch real data from Supabase
export async function getJoinedCount(): Promise<number> {
  try {
    const response = await fetch('/api/slots', { 
      cache: 'no-store' // Always get fresh data
    });
    const data = await response.json();
    return data.joined || 0;
  } catch (error) {
    console.error('Failed to fetch joined count:', error);
    return 0; // Fallback to 0 if API fails
  }
}

export async function getSlotsLeft(): Promise<number> {
  try {
    const response = await fetch('/api/slots', { 
      cache: 'no-store' // Always get fresh data
    });
    const data = await response.json();
    return data.slotsLeft || 0;
  } catch (error) {
    console.error('Failed to fetch slots left:', error);
    return TOTAL_SLOTS; // Fallback to total slots if API fails
  }
}
