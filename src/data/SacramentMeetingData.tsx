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
    date: 'Sunday, December 28, 2025',
    presiding: 'Bishop Miller',
    conducting: 'Bishop Miller',
    openingHymnNumber: 117,
    openingHymn: 'Come Unto Jesus',
    sacramentHymnNumber: 177,
    sacramentHymn: 'Tis\' Sweet to Sing the Matchless Love',
    intermediateHymnNumber: 0,
    intermediateHymn: '',
    closingHymnNumber: 298,
    closingHymn: 'Home Can Be a Heaven on Earth',
    invocation: 'Mike Poll',
    benediction: 'Myrt Hyer',
    speaker1: 'BrickLynne Ketts',
    speaker2: 'Tami Ketts',
    speaker3: 'Roney Ketts',
    speaker4: '',
    speaker5: '',
    isFast: false,
    isStreaming: false,
  },
];
