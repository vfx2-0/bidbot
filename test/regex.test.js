const assert = require('assert');

// Replicate the regex used in script.js
const SCENE_SPLIT_REGEX = /\n(?=[ \t]*(?:INT|EXT)\.?[ \t]*(?:\/[ \t]*(?:INT|EXT)\.?)?)/gi;

function splitScenes(text) {
  return text.split(SCENE_SPLIT_REGEX).filter(Boolean);
}

const script = [
  'INT. HOUSE',
  'line1',
  'EXT. STREET',
  'line2',
  'INT/EXT CAR',
  'line3',
  'EXT./INT OFFICE',
  'line4',
  'int/ext basement',
  'line5',
  'ext/int field',
  'line6'
].join('\n');

const scenes = splitScenes(script);

assert.deepStrictEqual(
  scenes.map(s => s.split('\n')[0].trim()),
  [
    'INT. HOUSE',
    'EXT. STREET',
    'INT/EXT CAR',
    'EXT./INT OFFICE',
    'int/ext basement',
    'ext/int field'
  ]
);

console.log('Tests passed');
