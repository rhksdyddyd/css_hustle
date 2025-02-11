import { getIsLiked, toggleIsLiked } from '@/app/server/like';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const idxStr = request.nextUrl.searchParams.get('idx');
  const idx = Number(idxStr);
  return NextResponse.json({ isLiked: getIsLiked(idx) });
}

export async function POST(request: NextRequest) {
  const { idx } = await request.json();
  toggleIsLiked(idx);
  await new Promise(resolve => {
    setTimeout(resolve, 1000 * Math.random() + 200);
  });
  return NextResponse.json({ isLiked: getIsLiked(idx) });
}
