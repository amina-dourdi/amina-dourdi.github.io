import { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiX, FiSend, FiMinimize2, FiMaximize2 } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';

// Define the comprehensive system instruction based on Amina's CV
const systemInstruction = `You are the virtual AI assistant on Amina Dourdi's portfolio. Your goal is to welcome visitors, answer their questions about her background, and highly recommend her for internship or job opportunities in Data Engineering, Data Science, or Machine Learning.

Here is the complete information about Amina:
- Status: Data Engineering Student at the National School of Applied Sciences (ENSA) of Al-Hoceima, Morocco (2024-present).
- Availability: Looking for a 3-month internship starting in July 2026 in France, Morocco, the Netherlands, and the European Union (she holds Dutch/EU nationality).
- Key technical skills: 
  * Programming: Python, SQL, Java, C, R.
  * Big Data & Data Eng: Hadoop HDFS, Trino, Avro, Kafka, Flink, Spark, Airflow, Docker, ETL Pipelines.
  * Databases: MySQL, PostgreSQL, Oracle, MongoDB, Cassandra.
  * Analytics & ML: Pandas, NumPy, Matplotlib, scikit-learn, Power BI, Machine Learning, NLP.
  * Web Dev: Spring Boot, FastAPI, Thymeleaf, React, PHP.
- Professional Experience:
  * (Jul-Sep 2025) Intern at Terra Nova EBS: Development of a digital dashboard on Power BI for aeronautical purchases.
  * (Jun-Aug 2025) Intern at CH Provincial Med VI: Medical data management.
- Notable Projects:
  1. Collaborative Annotation Platform (Spring Boot, Thymeleaf, Python).
  2. TaaSim — Urban Mobility Big Data Platform (Kafka, Flink, Spark, Cassandra).
  3. JobIntelligent Data Platform (Airflow, FastAPI, PostgreSQL, NLP).
  4. Batch Procurement Data Pipeline (Python, HDFS, Trino, Postgres).
  5. MongoDB Performance Optimization & Sharded Cluster.
  6. Regression House Prices End-to-End (Kaggle).
- Certifications: Supervised Learning with Scikit-Learn (DataCamp), Power BI (Udemy).
- Languages: Tarifit (Native), Arabic, French, English (Intermediate), Dutch, Spanish.
- Qualities: Problem-solving, Adaptability, Teamwork, Rigor.

Behave in a professional, proactive, enthusiastic, and concise manner. You must speak in English. Never invent information that is not in this context. If a recruiter asks questions, try to highlight Amina's added value (her Big Data skills, dual development/analytics profile, and international mobility). Encourage them to contact her or download her resume.`;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hello! I am Amina's AI assistant. If you have any questions about her skills, background, or why she would be a great asset to your team, feel free to ask!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef(null);
  
  // API Key usually comes from environment variable setup
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';

  // Initialize generative model if key exists
  const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;
  const model = genAI ? genAI.getGenerativeModel({ 
    model: "gemini-flash-latest",
    systemInstruction,
  }) : null;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    if (!apiKey) {
      setError("The Gemini API key (VITE_GEMINI_API_KEY) is not configured in the .env file.");
      return;
    }

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);
    setError('');

    try {
      // Build conversation history for the model
      const history = messages
        .filter(m => m.role !== 'assistant' || m.text !== messages[0].text) // Remove the hardcoded welcome message from history to prevent confusion or keep it
        .map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.text }]
        }));

      const chat = model.startChat({ history });
      const result = await chat.sendMessage(userText);
      const output = result.response.text();
      
      setMessages(prev => [...prev, { role: 'assistant', text: output }]);
    } catch (err) {
      console.error("Chat API Error:", err);
      setError("Sorry, I couldn't reply right now. Make sure you are connected to the internet and the API key is valid.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot__container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot__window"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="chatbot__header">
              <div className="chatbot__header-info">
                <div className="chatbot__avatar">AI</div>
                <div>
                  <h4 className="chatbot__title">Amina's Assistant</h4>
                  <p className="chatbot__subtitle">Powered by Gemini</p>
                </div>
              </div>
              <button 
                className="chatbot__close-btn" 
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                <FiX />
              </button>
            </div>

            <div className="chatbot__messages">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`chatbot__message-wrapper ${msg.role === 'user' ? 'chatbot__message-wrapper--user' : 'chatbot__message-wrapper--assistant'}`}
                >
                  <div className={`chatbot__message ${msg.role === 'user' ? 'chatbot__message--user' : 'chatbot__message--assistant'} markdown-content`}>
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="chatbot__message-wrapper chatbot__message-wrapper--assistant">
                  <div className="chatbot__message chatbot__message--assistant chatbot__message--typing">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                </div>
              )}
              {error && (
                <div className="chatbot__message-wrapper chatbot__message-wrapper--assistant">
                  <div className="chatbot__message chatbot__message--error">
                    {error}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form className="chatbot__input-area" onSubmit={handleSubmit}>
              <input
                type="text"
                className="chatbot__input"
                placeholder="Ask me a question about Amina..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
              />
              <button 
                type="submit" 
                className="chatbot__send-btn" 
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
              >
                <FiSend />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="chatbot__toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat" : "Open AI assistant"}
      >
        {isOpen ? <FiX size={24} /> : <FiMessageSquare size={24} />}
      </motion.button>
    </div>
  );
}
