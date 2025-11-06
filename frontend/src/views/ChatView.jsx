import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';

const ChatView = ({ onNavigate }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "Hello! I'm your Health Finder assistant. I'm here to help you find the right clinic for your needs. What kind of healthcare service are you looking for?",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('cardio') || message.includes('heart')) {
      return "I can help you find cardiology clinics. Based on your needs, I'd recommend checking out Heart Care Center. Would you like me to show you more options or provide details about this clinic?";
    } else if (message.includes('pediatric') || message.includes('child') || message.includes('kid')) {
      return "For pediatric care, I recommend Pediatric Care Associates. They have excellent ratings and specialize in children's health. Would you like to see more pediatric clinics in your area?";
    } else if (message.includes('family') || message.includes('general')) {
      return "For general or family medicine, Wellness Family Clinic is a great option. They're open extended hours and have high patient satisfaction. Should I show you more family medicine clinics?";
    } else if (message.includes('emergency') || message.includes('urgent')) {
      return "For urgent care, I recommend calling 911 if it's a true emergency. For non-emergency urgent care, would you like me to find urgent care clinics near you?";
    } else if (message.includes('yes') || message.includes('sure') || message.includes('ok')) {
      return "Great! Let me show you a list of clinics that match your needs. Click here to view the search results, or tell me more about your specific requirements.";
    } else if (message.includes('no') || message.includes('not')) {
      return "No problem! Is there something else I can help you with? You can ask me about specific specialties, locations, or any other healthcare needs.";
    } else {
      return "I understand you're looking for healthcare services. Could you tell me more about what type of care you need? For example, you can mention specialties like cardiology, pediatrics, dermatology, or general care.";
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: inputMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing and response
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        text: getBotResponse(inputMessage),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const quickActions = [
    'Find a general practitioner',
    'Pediatric care',
    'Cardiology',
    'Show emergency clinics',
  ];

  const handleQuickAction = (action) => {
    setInputMessage(action);
  };

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10 bg-verde-matcha rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold text-gray-900">Health Finder Assistant</h2>
              <p className="text-sm text-gray-500">Online • Here to help</p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`flex items-start max-w-md ${
                    message.type === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === 'user' ? 'bg-azul-cielo ml-2' : 'bg-verde-matcha mr-2'
                    }`}
                  >
                    {message.type === 'user' ? (
                      <User className="w-5 h-5 text-white" />
                    ) : (
                      <Bot className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div
                    className={`px-4 py-2 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-azul-cielo text-white'
                        : 'bg-white text-gray-900 shadow-sm'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-verde-matcha rounded-full flex items-center justify-center mr-2">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      {messages.length === 1 && (
        <div className="bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <p className="text-sm text-gray-600 mb-3">Quick actions:</p>
            <div className="grid grid-cols-2 gap-2">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action)}
                  className="px-4 py-2 text-sm text-verde-matcha border border-verde-matcha rounded-lg hover:bg-verde-matcha hover:text-white transition-colors text-left"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-verde-matcha focus:border-verde-matcha"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="p-2 bg-verde-matcha text-white rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-2">
            Not finding what you need?{' '}
            <button
              onClick={() => onNavigate('search')}
              className="text-verde-matcha hover:underline"
            >
              Try our search page
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatView;
