import { GoogleGenerativeAI } from '@google/generative-ai';

// Use the key from .env
const apiKey = 'AIzaSyCh7_zCV7wWN_4QKpxBbAmrbmAh9m61ypI';

async function testModel(modelName) {
  try {
    console.log(`\nTesting model: ${modelName}...`);
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: modelName });
    const result = await model.generateContent("Say just 'OK' in one word.");
    console.log(`SUCCESS (${modelName}):`, result.response.text());
    return true;
  } catch (err) {
    console.error(`FAILED (${modelName}):`, err.message || err);
    return false;
  }
}

async function run() {
  const models = [
    'gemini-2.0-flash',
    'gemini-2.0-flash-lite',
    'gemini-1.5-flash',
    'gemini-1.5-pro',
    'gemini-pro',
  ];

  for (const m of models) {
    const ok = await testModel(m);
    if (ok) {
      console.log(`\n✅ Working model found: ${m}`);
      break;
    }
  }
}

run();
