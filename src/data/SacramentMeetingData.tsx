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
    date: 'Sunday, February 8, 2026',
    presiding: 'Bishop Miller',
    conducting: 'Abe McKay',
    openingHymnNumber: 58,
    openingHymn: 'Come, Ye Children of the Lord',
    sacramentHymnNumber: 183,
    sacramentHymn: 'In Remembrance of Thy Suffering',
    intermediateHymnNumber: 0,
    intermediateHymn: '',
    closingHymnNumber: 308,
    closingHymn: 'Love One Another',
    invocation: 'Dan Pacheco',
    benediction: 'Devon Baldwin',
    speaker1: 'Karter Keetch',
    speaker2: 'Kelly Olson',
    speaker3: 'AJ Colby',
    speaker4: '',
    speaker5: '',
    isFast: false,
    isStreaming: false,
  },
];
