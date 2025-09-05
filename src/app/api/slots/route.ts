import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";

export const dynamic = "force-dynamic";
export const runtime = 'nodejs';

// Disable all caching
export const revalidate = 0;

export async function GET() {
  try {
    const supabase = getSupabaseClient();
    
    // Get all records and count them manually since count query might have RLS issues
    const { data: records, error } = await supabase
      .from('waitlist')
      .select('id');

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: "Failed to fetch count" }, { status: 500 });
    }

    const TOTAL_SLOTS = 87;
    const joined = records?.length || 0;
    const slotsLeft = Math.max(TOTAL_SLOTS - joined, 0);

    console.log('Slots API - Records found:', joined, 'Slots Left:', slotsLeft);

    const response = NextResponse.json({ 
      totalSlots: TOTAL_SLOTS,
      joined,
      slotsLeft 
    });

    // Disable caching
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');

    return response;
  } catch (e: any) {
    console.error('API error:', e);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
