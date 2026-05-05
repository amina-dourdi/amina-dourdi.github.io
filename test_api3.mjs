// Test both API keys with gemini-2.0-flash (the current model)
const keys = {
  'env_key': 'AIzaSyCh7_zCV7wWN_4QKpxBbAmrbmAh9m61ypI',
  'test_key': 'AIzaSyDTEcnnRQpIoZGfybixcpQW84CirO-itTI',
};

async function testKey(label, apiKey) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
  console.log(`\nTesting ${label} with gemini-2.0-flash...`);
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: "Say just OK" }] }]
      })
    });
    const data = await res.json();
    if (res.ok) {
      console.log(`✅ SUCCESS (${label}):`, data.candidates?.[0]?.content?.parts?.[0]?.text);
    } else {
      console.log(`❌ HTTP ${res.status} (${label}):`, data.error?.message?.substring(0, 200));
    }
  } catch (err) {
    console.error(`❌ FETCH ERROR (${label}):`, err.message);
  }
}

async function run() {
  for (const [label, key] of Object.entries(keys)) {
    await testKey(label, key);
  }
}

run();
