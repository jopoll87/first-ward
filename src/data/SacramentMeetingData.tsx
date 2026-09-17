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
    date: 'Sunday, September 13, 2026',
    conducting: 'Bishop Miller',
    presiding: 'Bishop Miller',
    openingHymnNumber: 78,
    openingHymn: 'Children\'s Songbook - I\'m Trying to Be Like Jesus',
    invocation: 'Julieanne Higgs',
    sacramentHymnNumber: 193,
    sacramentHymn: 'I Stand All Amazed',
    speaker1: 'Parker Miller',
    speaker2: 'Ellie Spencer',
    intermediateHymnNumber: 308,
    intermediateHymn: 'Love One Another',
    speaker3: 'Mckay Spencer',
    closingHymnNumber: 274,
    closingHymn: 'The Iron Rod',
    benediction: 'Rusty Baldwin',
    isFast: false,
    isStreaming: false,
  },
];
