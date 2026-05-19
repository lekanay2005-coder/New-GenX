import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const items = body.items ?? [];
  const total = items.reduce((sum: number, item: any) => sum + Number(String(item.price).replace(/[^0-9.]/g, '')), 0);

  const checkoutUrl = `/checkout?success=true&amount=${total.toFixed(2)}`;

  return NextResponse.json({ checkoutUrl, total }, { status: 200 });
}
