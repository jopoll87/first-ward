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
    date: 'Sunday, July 19, 2026',
    presiding: 'President Chard',
    conducting: 'Jason Poll',
    openingHymnNumber: 263,
    openingHymn: 'Go Forth with Faith',
    sacramentHymnNumber: 170,
    sacramentHymn: 'God, Our Father, Hear Us Pray',
    intermediateHymnNumber: 0,
    intermediateHymn: '',
    closingHymnNumber: 249,
    closingHymn: 'Called to Serve',
    invocation: 'Amy Hayes',
    benediction: 'Lynn Poll',
    speaker1: 'Finn MacDougall',
    speaker2: 'Elder Nate Dickson',
    speaker3: 'Natalie Browning',
    isFast: false,
    isStreaming: false,
  },
];
