
export interface IndicatorDetail {
  description: string;
  source: string;
  tools: string;
  formula: string;
  frequency: string;
  responsible: string;
  target: string;
  method: string;
  topics: string;
  references?: string;
}

export interface Indicator {
  id: number;
  title: string;
  category: string;
  details: IndicatorDetail;
}
