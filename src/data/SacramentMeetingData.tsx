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
  speaker1?: string;
  speaker2?: string;
  speaker3?: string;
  speaker4?: string;
  speaker5?: string;
  isFast: boolean;
  isStreaming: boolean;
};

export const PROGRAMS = [
  {
    id: 1,
    date: 'Sunday, September 27, 2026',
    conducting: 'Jason Poll',
    presiding: 'Jason Poll',
    openingHymnNumber: 67,
    openingHymn: 'Glory to God on High',
    invocation: 'Kimi Gustafson',
    sacramentHymnNumber: 196,
    sacramentHymn: 'Jesus, Once of Humble Birth',
    speaker1: 'Nick Hadley',
    speaker2: 'Krista Funk',
    intermediateHymnNumber: 0,
    intermediateHymn: '',
    speaker3: 'Derek Funk',
    closingHymnNumber: 2,
    closingHymn: 'The Spirit of God',
    benediction: 'Dean Dayton',
    isFast: false,
    isStreaming: false,
  },
];
