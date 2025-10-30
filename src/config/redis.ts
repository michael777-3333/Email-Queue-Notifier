import Redis from 'ioredis';

let redis: Redis | null = null;

export const initRedis = (): void => {
  redis = new Redis({
    host: process.env.REDIS_HOST || '127.0.0.1',
    port: parseInt(process.env.REDIS_PORT || '6379') as number,
    lazyConnect: true,
    maxRetriesPerRequest: null
  });

  redis.on('connect', () => console.log('✅ Redis connected'));
  redis.on('error', (err: any) => console.error('❌ Redis error', err));
  redis.on('ready', () => console.log('🚀 Redis ready'));
};

export const getRedis = (): Redis => {
  if (!redis) {
    throw new Error('Redis not initialized. Call initRedis() first.');
  }
  return redis;
};