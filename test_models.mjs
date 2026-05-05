const apiKey = 'AIzaSyCh7_zCV7wWN_4QKpxBbAmrbmAh9m61ypI';

async function listModels() {
  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.models) {
    const modelNames = data.models.map(m => m.name.replace('models/', ''));
    console.log("Available models:", modelNames.join(', '));
  } else {
    console.log("Error listing models:", JSON.stringify(data));
  }
}

listModels();
