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
    date: 'Sunday, November 16, 2025',
    presiding: 'Bishop Miller',
    conducting: 'Abe McKay',
    openingHymnNumber: 86,
    openingHymn: 'How Great Thou Art',
    sacramentHymnNumber: 1008,
    sacramentHymn: 'Bread of Life, Living Water',
    intermediateHymnNumber: 0,
    intermediateHymn: '',
    closingHymnNumber: 239,
    closingHymn: 'Choose the Right',
    invocation: 'Loreen Poff',
    benediction: 'Brodie Nielson',
    speaker1: 'Ewan MacDougall',
    speaker2: 'Maddie Brown',
    speaker3: 'Colby Bentley',
    speaker4: '',
    speaker5: '',
    isFast: false,
    isStreaming: false,
  },
];
