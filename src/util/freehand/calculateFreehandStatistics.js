import { spawn, Thread } from 'threads';
import Worker from './calculateFreehandStatistics.worker';

export default function(sp, boundingBox, dataHandles, cb) {
  setTimeout(async () => {
    const statistics = await spawn(new Worker());
    const stats = await statistics.calculateFreehandStatistics(
      sp,
      boundingBox,
      dataHandles
    );

    cb(stats);

    await Thread.terminate(statistics);
  }, 0);
}
