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
    date: 'Sunday, April 26, 2026',
    presiding: 'Bishop Miller',
    conducting: 'Jason Poll',
    openingHymnNumber: 131,
    openingHymn: 'More Holiness Give Me',
    sacramentHymnNumber: 180,
    sacramentHymn: 'Father in Heaven, We Do Believe',
    intermediateHymnNumber: 0,
    intermediateHymn: '',
    closingHymnNumber: 239,
    closingHymn: 'Choose the Right',
    invocation: 'Clyde Gowers',
    benediction: 'Natalie Browning',
    speaker1: 'Charlie Alvey',
    speaker2: 'Ann Turner',
    speaker3: 'Steve Hyer',
    speaker4: '',
    speaker5: '',
    isFast: false,
    isStreaming: false,
  },
];
