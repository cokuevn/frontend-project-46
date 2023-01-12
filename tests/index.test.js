import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixtureFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8').trim();

test('compare json', () => {
  const expected = readFixtureFile('fix1.txt');
  const first = getFixturePath('file1.json');
  const second = getFixturePath('file2.json');
  const actual = genDiff(first, second);
  expect(actual).toEqual(expected);
});
