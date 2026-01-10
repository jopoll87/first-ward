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
    date: 'Sunday, January 11, 2026',
    presiding: 'Bishop Miller',
    conducting: 'Jason Poll',
    openingHymnNumber: 1047,
    openingHymn: 'He Cares for Me',
    sacramentHymnNumber: 175,
    sacramentHymn: 'Oh God, the Eternal Father',
    intermediateHymnNumber: 292,
    intermediateHymn: 'Put Your Shoulder to the Wheel',
    closingHymnNumber: 292,
    closingHymn: 'O My Father',
    invocation: 'Nate Baldwin',
    benediction: 'Lynsi Poll',
    speaker1: 'Rory Baldwin',
    speaker2: 'Carolina Rodriguez',
    speaker3: 'Ernesto Rodriguez',
    speaker4: '',
    speaker5: '',
    isFast: false,
    isStreaming: false,
  },
];
