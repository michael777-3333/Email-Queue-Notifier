import { Queue, Worker } from 'bullmq';

import { getRedis } from './redis.js';

const connection = getRedis();

export const createQueue = (name: string) => new Queue(name, { connection });
export const createWorker = (name: string, processor: any) => new Worker(name, processor, { connection });