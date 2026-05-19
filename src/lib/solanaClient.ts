import { clusterApiUrl, Connection, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';

export const createConnection = () => {
  const endpoint = process.env.NEXT_PUBLIC_SOLANA_RPC_URL || clusterApiUrl('devnet');
  return new Connection(endpoint, 'confirmed');
};

export function buildTransferInstruction(receiver: string, lamports: number, payer: PublicKey) {
  const toPubkey = new PublicKey(receiver);
  return SystemProgram.transfer({ fromPubkey: payer, toPubkey, lamports });
}

export function buildSolanaPayUrl(reference: string, amount: number, label: string) {
  return `solana:${process.env.NEXT_PUBLIC_SOLANA_PAY_URL || 'devnet'}?amount=${amount}&label=${encodeURIComponent(label)}&reference=${reference}`;
}
