
import { reactiveIndicators } from './reactive';
import { proactiveIndicators } from './proactive';

export type { Indicator, IndicatorDetail } from './types';

export const indicators = [...reactiveIndicators, ...proactiveIndicators];

export const getCategories = (): string[] => {
  return [...new Set(indicators.map(indicator => indicator.category))];
};
