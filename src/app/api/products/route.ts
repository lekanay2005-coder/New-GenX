import { NextResponse } from 'next/server';
import { products } from '@/lib/mockData';

let inMemoryProducts = [...products];

export async function GET() {
  return NextResponse.json(inMemoryProducts);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newProduct = {
    ...body,
    id: `genx-${Math.random().toString(36).slice(2, 9)}`,
    verified: false
  };
  inMemoryProducts = [newProduct, ...inMemoryProducts];
  return NextResponse.json(newProduct, { status: 201 });
}
