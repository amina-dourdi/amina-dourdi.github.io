const apiKey = 'AIzaSyCh7_zCV7wWN_4QKpxBbAmrbmAh9m61ypI';

async function testModel(modelName) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;
  console.log(`\nTesting ${modelName} ...`);
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
      console.log(`✅ SUCCESS (${modelName}):`, JSON.stringify(data.candidates?.[0]?.content?.parts?.[0]?.text));
      return true;
    } else {
      console.log(`❌ HTTP ${res.status} (${modelName}):`, data.error?.message);
      return false;
    }
  } catch (err) {
    console.error(`❌ FETCH ERROR (${modelName}):`, err.message);
    return false;
  }
}

async function run() {
  const models = ['gemini-flash-latest', 'gemini-pro-latest', 'gemini-2.0-flash'];
  for (const m of models) {
    const ok = await testModel(m);
    if (ok) return;
  }
}

run();
