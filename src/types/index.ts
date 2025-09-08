export interface User {
  id: string;
  email: string;
  phone: string;
  fullName: string;
  birthDate: Date;
  kycStatus: 'PENDING' | 'VERIFIED' | 'REJECTED';
  idPhotoUrl?: string;
  selfieWithIdUrl?: string;
  createdAt: Date;
  updatedAt: Date;
  wallet?: Wallet;
  reputation?: Reputation;
}

export interface Wallet {
  id: string;
  userId: string;
  coins: number;
  bonusCoins: number;
  totalWon: number;
  totalLost: number;
}

export interface Reputation {
  id: string;
  userId: string;
  reliability: number;
  fairPlay: number;
  punctuality: number;
  totalBets: number;
  disputesWon: number;
  disputesLost: number;
}

export interface Bet {
  id: string;
  type: 'GAMING' | 'SPORTS' | 'PERSONAL';
  amount: number;
  status: 'PENDING' | 'ACTIVE' | 'DISPUTED' | 'RESOLVED' | 'CANCELLED';
  creatorId: string;
  opponentId?: string;
  description: string;
  evidence: Record<string, unknown>[];
  createdAt: Date;
  updatedAt: Date;
}