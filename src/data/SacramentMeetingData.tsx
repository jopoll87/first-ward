export type MeetingData = {
  id: number;
  date: string;
  presiding: string;
  conducting: string;
  openingHymnNumber: number;
  openingHymn: string;
  sacramentHymnNumber: number;
  sacramentHymn: string;
  intermediateHymnNumber: number;
  intermediateHymn: string;
  closingHymnNumber: number;
  closingHymn: string;
  invocation: string;
  benediction: string;
  speaker1: string;
  speaker2: string;
  speaker3: string;
  speaker4: string;
  speaker5: string;
  isFast: boolean;
  isStreaming: boolean;
};

export const PROGRAMS = [
  {
    id: 1,
    date: 'Sunday, May 3, 2026',
    presiding: 'Bishop Miller',
    conducting: 'Abe McKay',
    openingHymnNumber: 52,
    openingHymn: 'The Day Dawn Is Breaking',
    sacramentHymnNumber: 184,
    sacramentHymn: 'Upon the Cross of Calvary',
    intermediateHymnNumber: 0,
    intermediateHymn: '',
    closingHymnNumber: 1001,
    closingHymn: 'Com, Thou Fount of Every Blessing',
    invocation: 'Matti Miller',
    benediction: 'Terry Bybee',
    speaker1: '',
    speaker2: '',
    speaker3: '',
    speaker4: '',
    speaker5: '',
    isFast: true,
    isStreaming: false,
  },
];
