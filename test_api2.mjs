// Test using raw fetch to determine if it's a network or SDK issue
const apiKey = 'AIzaSyCh7_zCV7wWN_4QKpxBbAmrbmAh9m61ypI';

async function testRawFetch(modelName) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;
  console.log(`\nTesting ${modelName} via raw fetch...`);
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: "Say OK" }] }]
      })
    });
    const data = await res.json();
    if (res.ok) {
      console.log(`SUCCESS (${modelName}):`, JSON.stringify(data.candidates?.[0]?.content?.parts?.[0]?.text));
      return true;
    } else {
      console.log(`HTTP ${res.status} (${modelName}):`, data.error?.message || JSON.stringify(data));
      return false;
    }
  } catch (err) {
    console.error(`FETCH ERROR (${modelName}):`, err.message);
    return false;
  }
}

async function run() {
  const models = ['gemini-2.0-flash', 'gemini-2.0-flash-lite', 'gemini-1.5-flash', 'gemini-1.5-pro'];
  for (const m of models) {
    const ok = await testRawFetch(m);
    if (ok) {
      console.log(`\n✅ Working model: ${m}`);
      return;
    }
  }
  console.log('\n❌ No model worked');
}

run();
