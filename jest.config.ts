// jest.config.ts
import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './', // 指向 Next.js 项目根目录
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'node', // 👈 测试数据库必须用 'node'，不是 'jsdom'
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default createJestConfig(config);