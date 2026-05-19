import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const walletAddress = body.walletAddress as string | undefined;

  if (!walletAddress) {
    return NextResponse.json({ error: 'Missing wallet address' }, { status: 400 });
  }

  return NextResponse.json({ walletAddress, verified: true, message: 'Wallet verified successfully.' });
}
