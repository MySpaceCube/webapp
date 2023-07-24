const fs = require('fs');
const path = require('path');

function loadTranslations (file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function checkMissingTranslations (baseData, compareData, lang) {
  console.log(`Checking missing translations for ${lang}:`);
  const missingKeys = [];

  for (const key in baseData) {
    if (Object.prototype.hasOwnProperty.call(baseData, key)) {
      if (!Object.prototype.hasOwnProperty.call(compareData, key)) {
        missingKeys.push(key);
      }
    }
  }

  if (missingKeys.length === 0) {
    console.log('  No missing translations.');
  } else {
    console.log(`  Missing translations: ${missingKeys.join(', ')}`);
  }
  console.log();
}

function scanCodeForMissingTranslations (baseData) {
  console.log('Scanning code for missing translations in the base file:');
  const codeDirectory = './';
  const translationKeyRegex = /t\(['"]([^'"]+)['"]\)/g;
  const usedKeys = new Set();

  function extractKeysFromMatches (matches) {
    if (!matches.length) return;
    matches.forEach((match) => {
      const key = match[1];
      usedKeys.add(key);
    });
  }

  fs.readdirSync(codeDirectory)
    .filter((file) => file.endsWith('.js'))
    .forEach((file) => {
      const codeContent = fs.readFileSync(path.join(codeDirectory, file), 'utf8');
      const matches = codeContent.matchAll(translationKeyRegex);
      extractKeysFromMatches(matches);
    });

  const missingKeys = [];

  for (const key in baseData) {
    if (Object.prototype.hasOwnProperty.call(baseData, key)) {
      if (!usedKeys.has(key)) {
        missingKeys.push(key);
      }
    }
  }

  if (missingKeys.length === 0) {
    console.log('  No missing translations in the base file detected in the code.');
  } else {
    console.log(`  Missing translations in the base file found in the code: ${missingKeys.join(', ')}`);
  }
  console.log();
}

function main () {
  const baseLang = 'en'; // Language code of the base translation (e.g., en for English)
  const translationsDirectory = './locales/';
  const baseFile = path.join(translationsDirectory, `${baseLang}.json`);

  if (!fs.existsSync(baseFile)) {
    console.error(`Base translation file ${baseLang}.json not found.`);
    process.exit(1);
  }

  const baseData = loadTranslations(baseFile);
  scanCodeForMissingTranslations(baseData);

  fs.readdirSync(translationsDirectory)
    .filter((file) => file.endsWith('.json') && file !== `${baseLang}.json`)
    .forEach((file) => {
      const lang = file.replace('.json', '');
      const compareData = loadTranslations(path.join(translationsDirectory, file));
      checkMissingTranslations(baseData, compareData, lang);
    });
}

main();
