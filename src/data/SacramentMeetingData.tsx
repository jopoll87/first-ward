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
    date: 'Sunday, September 20, 2026',
    conducting: 'Bishop Miller',
    presiding: 'Bishop Miller',
    openingHymnNumber: 5,
    openingHymn: 'High on the Mountain Top',
    invocation: 'Jack DeLong',
    sacramentHymnNumber: 194,
    sacramentHymn: 'There is a Green Hill Far Away',
    speaker1: 'Greyson Poll',
    speaker2: 'Sarah Barker',
    intermediateHymnNumber: 95,
    intermediateHymn: 'I Love to See the Temple - Children\'s Songbook',
    speaker3: 'Dave Vogelsberg',
    closingHymnNumber: 1022,
    closingHymn: 'Faith in Every Footstep',
    benediction: 'Ashley Bench',
    isFast: false,
    isStreaming: false,
  },
];
