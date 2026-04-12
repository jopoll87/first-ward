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
    date: 'Sunday, April 12, 2026',
    presiding: 'Bishop Miller',
    conducting: 'Jason Poll',
    openingHymnNumber: 66,
    openingHymn: 'Rejoice, the Lord Is King!',
    sacramentHymnNumber: 190,
    sacramentHymn: 'In Memory of the Crucified',
    intermediateHymnNumber: 272,
    intermediateHymn: 'Oh Say, What Is Truth?',
    closingHymnNumber: 116,
    closingHymn: 'Come, Follow Me',
    invocation: 'Brian Hall',
    benediction: 'Alex Groneman',
    speaker1: '',
    speaker2: '',
    speaker3: '',
    speaker4: '',
    speaker5: '',
    isFast: true,
    isStreaming: false,
  },
];
