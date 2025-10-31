import { Queue } from 'bullmq';

import { getRedis } from './redis.ts';
import type { EmailJobData } from '../interfaces/job.interface.ts';

const connection = getRedis();

export const emailQueue = new Queue<EmailJobData>('emailQueue', {
  connection: connection,
});

