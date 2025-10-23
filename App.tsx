
import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import FeatureCard from './components/FeatureCard';
import { AppsIcon } from './components/icons/AppsIcon';
import { BoltIcon } from './components/icons/BoltIcon';
import { EyeIcon } from './components/icons/EyeIcon';
import { MicrophoneIcon } from './components/icons/MicrophoneIcon';
import { ChipIcon } from './components/icons/ChipIcon';
import { AccessibilityIcon } from './components/icons/AccessibilityIcon';
import { ShieldCheckIcon } from './components/icons/ShieldCheckIcon';
import { BrainIcon } from './components/icons/BrainIcon';
import { WaveformIcon } from './components/icons/WaveformIcon';
import { MultimodalIcon } from './components/icons/MultimodalIcon';
import { ChatBubbleIcon } from './components/icons/ChatBubbleIcon';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
        <Header />

        <div className="mt-12 space-y-12">
          <Section title="About this app">
            <p className="text-lg font-semibold text-cyan-400 mb-4">
              First open-source AI assistant that controls your phone like a human
            </p>
            <p className="text-gray-400 leading-relaxed">
              Meet Dummy AI - Automate with Voice, your personal AI phone operator. Go beyond standard voice assistants and experience true hands-free control of your device. Dummy AI is an intelligent agent that understands your commands and operates your phone's interface to accomplish complex tasks across any application, just like a human would.
            </p>
            <p className="mt-4 italic text-gray-500">
              Your voice commands. Our intelligent execution.
            </p>
          </Section>

          <Section title="What Can Dummy AI Do?">
            <p className="text-gray-400 mb-6 leading-relaxed">
              Dummy AI isn't limited to a few pre-programmed actions. By using Android's Accessibility Service, it can see and interact with your screen to perform a vast range of tasks. Simply tell Dummy AI what you want to achieve, and it will handle the taps, swipes, and text input for you.
            </p>
            <h3 className="text-lg font-semibold text-white mb-3">Examples:</h3>
            <ul className="space-y-3 list-disc list-inside text-gray-400">
              <li>"Send a Telegram message to Dad saying 'Running 10 minutes late'"</li>
              <li>"Open Spotify and play my 'Workout Mix' playlist"</li>
              <li>"Find my recent Amazon order and copy the delivery date"</li>
              <li>"Check my bank app for recent transactions and summarize them"</li>
            </ul>
          </Section>

          <Section title="Key Features">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard 
                icon={<AppsIcon />} 
                title="Universal Cross-App Control" 
                description="Dummy AI works with any application you have installed. By parsing screen elements, it can tap, swipe, and type, performing actions seamlessly across your device." 
              />
              <FeatureCard 
                icon={<BoltIcon />} 
                title="Smart Automation with Triggers" 
                description="Create powerful automated workflows. Schedule triggers like 'Every morning at 7 AM, read my schedule' or use notification triggers like 'When I get a message from Emergency Contacts, read it immediately'." 
              />
              <FeatureCard 
                icon={<EyeIcon />} 
                title="Intelligent Screen Understanding" 
                description="Using advanced computer vision with gemini-2.5-flash, Dummy AI understands your screen's content—buttons, text fields, and images—to execute precise action plans for your commands." 
              />
              <FeatureCard 
                icon={<BrainIcon />}
                title="Advanced Reasoning with Thinking Mode"
                description="For your most complex queries, Dummy AI engages its Thinking Mode, powered by gemini-2.5-pro with a maximum thinking budget to analyze, reason, and deliver comprehensive solutions."
              />
              <FeatureCard 
                icon={<WaveformIcon />}
                title="Real-Time Voice Conversations"
                description="Have natural, real-time conversations using the Gemini Live API. Get instant spoken responses for a truly interactive and hands-free experience."
              />
              <FeatureCard
                icon={<MultimodalIcon />}
                title="Multimodal Understanding"
                description="Go beyond text. Upload a photo for analysis with gemini-2.5-flash, or speak naturally and have your words transcribed instantly. Dummy AI understands multiple forms of input."
              />
              <FeatureCard
                icon={<ChatBubbleIcon />}
                title="Instant AI Chat"
                description="Get quick answers with our low-latency chatbot. Powered by gemini-2.5-flash and gemini-2.5-flash-lite, it's perfect for tasks that need to happen fast."
              />
              <FeatureCard 
                icon={<MicrophoneIcon />} 
                title="Natural Voice Interface" 
                description="Features crystal-clear, natural text-to-speech responses powered by gemini-2.5-flash-preview-tts, making conversations feel smooth and human-like." 
              />
              <FeatureCard 
                icon={<ChipIcon />} 
                title="On-Device Memory System" 
                description="For complex multi-step tasks, Dummy AI uses a secure, on-device system to remember context, save preferences, and track progress through lengthy operations." 
              />
            </div>
          </Section>

          <Section title="Designed for Accessibility">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-cyan-500/20">
              <div className="flex items-center gap-4 mb-4">
                <AccessibilityIcon />
                <p className="text-gray-400 leading-relaxed font-medium">
                  Dummy AI revolutionizes smartphone access for users with visual and motor impairments. If you depend on accessibility tools but want a more efficient, fluid experience, Dummy AI delivers unprecedented independence.
                </p>
              </div>
              <ul className="space-y-2 list-disc list-inside text-gray-400 mt-4">
                <li><span className="font-semibold text-white">Complete Hands-Free Operation:</span> Execute intricate, multi-app tasks without ever touching your screen.</li>
                <li><span className="font-semibold text-white">Voice-First Efficiency:</span> Skip tedious screen reader navigation for everyday actions.</li>
                <li><span className="font-semibold text-white">Total Device Command:</span> Launch applications, compose messages, adjust settings, and more—all through voice commands.</li>
              </ul>
            </div>
          </Section>
          
          <Section title="Privacy & Permissions">
             <div className="bg-gray-800/50 p-6 rounded-lg border border-cyan-500/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 pt-1">
                     <ShieldCheckIcon />
                  </div>
                  <div>
                    <p className="text-gray-400 mb-4 leading-relaxed font-medium">Your privacy is our fundamental principle. Dummy AI requires Accessibility Service permission to function effectively. Here's why and how we protect you:</p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-white">Why This Permission?</h4>
                        <p className="text-gray-500">This access serves as Dummy AI's "eyes and hands"—allowing it to read screen elements and perform gestures (taps, swipes, typing) on your behalf. Cross-application automation would be impossible without it.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Your Data Handling</h4>
                        <p className="text-gray-500">Screen content and voice interactions are processed by our AI models solely to understand and execute your commands in real-time. We maintain complete transparency—review our Privacy Policy for comprehensive details.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">You Maintain Control</h4>
                        <p className="text-gray-500">The Accessibility Service activates only when you assign Dummy AI a task. You can disable this permission anytime through your device settings.</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </Section>

          <footer className="text-center pt-8 border-t border-gray-700">
            <div className="flex justify-center space-x-4 text-sm text-cyan-400">
              <a href="#" className="hover:text-cyan-300 transition-colors">More Information</a>
              <span>|</span>
              <a href="#" className="hover:text-cyan-300 transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-cyan-300 transition-colors">User Guide</a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default App;
