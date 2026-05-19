import { NextResponse } from 'next/server';
import { products } from '@/lib/mockData';

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  const product = products.find((item) => item.id === params.id);

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}
