import { NextResponse } from 'next/server';
import { orders } from '@/lib/mockData';

let inMemoryOrders = [...orders];

export async function GET() {
  return NextResponse.json(inMemoryOrders);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newOrder = {
    id: `order-${Math.random().toString(36).slice(2, 9)}`,
    createdAt: new Date().toISOString(),
    productIds: body.productIds ?? [],
    totalAmount: body.totalAmount ?? '$0',
    status: 'Pending',
    paymentMethod: body.paymentMethod ?? 'Stripe'
  };
  inMemoryOrders = [newOrder, ...inMemoryOrders];
  return NextResponse.json(newOrder, { status: 201 });
}
