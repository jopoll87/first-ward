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
    date: 'Sunday, January 4, 2026',
    presiding: 'Bishop Miller',
    conducting: 'Jason Poll',
    openingHymnNumber: 1001,
    openingHymn: 'Come, Thou Fount of Every Blessing',
    sacramentHymnNumber: 195,
    sacramentHymn: 'How Great the Wisdom and the Love',
    intermediateHymnNumber: 0,
    intermediateHymn: '',
    closingHymnNumber: 2,
    closingHymn: 'The Spirit of God',
    invocation: 'Carina Love',
    benediction: 'Jon Poll',
    speaker1: '',
    speaker2: '',
    speaker3: '',
    speaker4: '',
    speaker5: '',
    isFast: true,
    isStreaming: false,
  },
];
