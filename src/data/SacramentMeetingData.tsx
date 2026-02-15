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
    date: 'Sunday, February 15, 2026',
    presiding: 'Bishop Miller',
    conducting: 'Abe McKay',
    openingHymnNumber: 1010,
    openingHymn: 'Amazing Grace',
    sacramentHymnNumber: 185,
    sacramentHymn: 'Reverently and Meekly Now',
    intermediateHymnNumber: 0,
    intermediateHymn: '',
    closingHymnNumber: 22,
    closingHymn: 'We Listen to a Prophet’s Voice',
    invocation: 'Kaila Alvey',
    benediction: 'Kenny Carson',
    speaker1: 'Devon Baldwin',
    speaker2: 'Michelle Nelson',
    speaker3: 'Tara Hadley',
    speaker4: 'Amber Ferre',
    speaker5: '',
    isFast: false,
    isStreaming: false,
  },
];
