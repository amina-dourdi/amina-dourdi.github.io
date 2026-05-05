import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = 'AIzaSyDTEcnnRQpIoZGfybixcpQW84CirO-itTI';
const genAI = new GoogleGenerativeAI(apiKey);

async function run() {
  try {
    console.log("Testing model gemini-1.5-pro...");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
    const result = await model.generateContent("Test bref: dit juste 'OK'.");
    console.log("RESULT (PRO):", result.response.text());
  } catch (err) {
    console.error("ERROR (PRO):", err.message || err);
  }

  try {
    console.log("\nTesting model gemini-1.5-flash...");
    const model2 = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result2 = await model2.generateContent("Test bref: dit juste 'OK'.");
    console.log("RESULT (FLASH):", result2.response.text());
  } catch (err) {
    console.error("ERROR (FLASH):", err.message || err);
  }
}

run();
