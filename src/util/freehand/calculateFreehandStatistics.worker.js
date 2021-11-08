import { expose } from 'threads/worker';
import { calculateFreehandStatistics } from './calculateFreehandStatisticsHelpers';

expose({
  calculateFreehandStatistics,
});
