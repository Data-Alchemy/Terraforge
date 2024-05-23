import * as React from "react";
import { CounterClockwiseClockIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ModelSelector } from "./model-selector";
import { TemperatureSelector } from "./temperature-selector";
import { TopPSelector } from "./top-p-selector";
import { models, types } from "./data/models";
import { presets } from "./data/presets";
import ChatOutput from "./ChatOutput";
import { FaReact } from 'react-icons/fa';
import { FiThumbsUp, FiThumbsDown, FiShare2, FiGithub } from 'react-icons/fi';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import MarkdownRenderer from "./MarkdownRenderer"; // Import the Markdown renderer
import SeaSharp from '@/assets/Terraforge.png'; // Import the image
import axios from 'axios';

interface Message {
  id: number;
  question: string;
  instructions?: string;
  answer?: string; // Added answer field
}

const API_URL = import.meta.env.VITE_API_URL;

export default function PlaygroundPage() {
  const [inputValue, setInputValue] = React.useState<string>("");
  const [instructionsValue, setInstructionsValue] = React.useState<string>("");
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [alertMessage, setAlertMessage] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false); // Add loading state

  const messageRefs = React.useRef<Map<number, HTMLDivElement>>(new Map());

  const handleSubmit = async () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        question: inputValue,
        instructions: instructionsValue.trim() ? instructionsValue : undefined,
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputValue("");
  
      setIsLoading(true); // Set loading state to true
  
      // Create memory with the new message question
      const memoryContent = `Question: ${newMessage.question}`;
      await createMemory(memoryContent);
  
      const answer = await fetchAnswerFromLLM(newMessage.question);
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === newMessage.id ? { ...msg, answer } : msg
        )
      );
  
      setIsLoading(false); // Set loading state to false
    }
  };

  const fetchAnswerFromLLM = async (question: string): Promise<string> => {
    try {
      const response = await axios.post('http://localhost:8080/api/completion', { question });
  
      console.log('API Response:', response.data); // Log the response for debugging
  
      return response.data.response;
    } catch (error) {
      console.error('Error sending the request', error);
      return 'Error fetching response';
    }
  };

  const createMemory = async (memory: string): Promise<string> => {
    try {
      const response = await axios.post('http://localhost:8080/api/session_memory', { memory });
  
      console.log('API Response:', response.data); // Log the response for debugging
  
      return response.data.response;
    } catch (error) {
      console.error('Error sending the request', error);
      return 'Error fetching response';
    }
  };

  const deleteMemory = async (): Promise<string> => {
    try {
      const response = await axios.delete('http://localhost:8080/api/clear_memory');
  
      console.log('API Response:', response.data); // Log the response for debugging
  
      return response.data.response;
    } catch (error) {
      console.error('Error sending the request', error);
      return 'Error fetching response';
    }
  };

  const handleClearSession = async () => {
    setMessages([]);
    setInstructionsValue("");
    
    const response = await deleteMemory(); // Call deleteMemory method
    setAlertMessage(response); // Set alert message with the response
    
    setTimeout(() => {
      setAlertMessage("");
    }, 3000); // Clear the alert after 3 seconds
  };

  const handleAction = (id: number, action: string) => {
    setAlertMessage(`Message ID ${id}: ${action} action completed.`);
    setTimeout(() => {
      setAlertMessage("");
    }, 3000); // Clear the alert after 3 seconds
  };

  const scrollToMessage = (id: number) => {
    const messageDiv = messageRefs.current.get(id);
    if (messageDiv) {
      messageDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  React.useEffect(() => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      scrollToMessage(lastMessage.id);
    }
  }, [messages]);

  const spinAnimation = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  
    .spin {
      animation: spin 2s linear infinite;
    }
  `;

  return (
    <>
      <style>
        {spinAnimation}
      </style>
      <div className="md:hidden p-4">
        <div className="flex flex-col space-y-4">
          <Label htmlFor="instructions-mobile">Instructions</Label>
          <Textarea
            id="instructions-mobile"
            placeholder="Use these specific rules🧾"
            value={instructionsValue}
            onChange={(e) => setInstructionsValue(e.target.value)}
          />
          <Label htmlFor="input-mobile">Input</Label>
          <Textarea
            id="input-mobile"
            placeholder="We are now live 🟢"
            className="flex-1 lg:min-h-[100px] max-h-[200px] overflow-y-auto"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{ resize: 'none' }}
          />
          <div className="flex items-center space-x-1">
            <Button onClick={handleSubmit}>Submit</Button>
            <Button variant="secondary">
              <span className="sr-only">Show history</span>
              <CounterClockwiseClockIcon className="h-4 w-4" />
            </Button>
            <Button variant="destructive" onClick={handleClearSession}>
              Clear Session
            </Button>
          </div>
        </div>
        <div className="mt-4 space-y-4">
          {messages.length === 0 ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <img src={SeaSharp} alt="No messages" />
            </div>
          ) : (
            messages.map((msg) => (
              <React.Fragment key={msg.id}>
                <div
                  className="p-4"
                  ref={(el) => {
                    if (el) {
                      messageRefs.current.set(msg.id, el);
                    } else {
                      messageRefs.current.delete(msg.id);
                    }
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <FaReact className={isLoading ? "spin" : ""} style={{ marginRight: '8px', fontSize: '1em' }} />
                    <p style={{ margin: 0 }}><strong>Q&A</strong></p>
                  </div>
                  <br />
                  {msg.instructions && (
                    <div>
                    </div>
                  )}
                  <strong><p>Question</p></strong>
                  <MarkdownRenderer content={msg.question} />
                  {msg.answer && (
                    <>
                      <div style={{ marginTop: '16px' }}>
                        <strong><p>Answer</p></strong>
                        <MarkdownRenderer content={msg.answer} />
                      </div>
                    </>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '8px' }}>
                    <FiThumbsUp style={{ cursor: 'pointer' }} onClick={() => handleAction(msg.id, 'Thumbs Up')} />
                    <FiThumbsDown style={{ cursor: 'pointer' }} onClick={() => handleAction(msg.id, 'Thumbs Down')} />
                    <FiShare2 style={{ cursor: 'pointer' }} onClick={() => handleAction(msg.id, 'Share')} />
                    <FiGithub style={{ cursor: 'pointer' }} onClick={() => handleAction(msg.id, 'Git')} />
                  </div>
                </div>
                <Separator />
              </React.Fragment>
            ))
          )}
        </div>
      </div>
      <div className="hidden h-full flex-col md:flex">
        <div className="container flex flex-col items-center justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
          <div className="ml-auto flex w-full space-x-2 sm:justify-end"></div>
        </div>
        <Tabs defaultValue="edit" className="flex-1">
          <div className="container h-full py-6">
            <div className="flex flex-col h-full items-stretch gap-6">
              <div className="flex-1 overflow-auto">
                <TabsContent value="edit" className="mt-0 border-0 p-0">
                  <div className="flex flex-col space-y-4">
                    {messages.length === 0 ? (
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <img src={SeaSharp} alt="No messages" />
                      </div>
                    ) : (
                      messages.map((msg) => (
                        <React.Fragment key={msg.id}>
                          <div
                            className="p-4"
                            ref={(el) => {
                              if (el) {
                                messageRefs.current.set(msg.id, el);
                              } else {
                                messageRefs.current.delete(msg.id);
                              }
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                              <FaReact className={isLoading ? "spin" : ""} style={{ marginRight: '8px', fontSize: '1em' }} />
                              <p style={{ margin: 0 }}><strong>Q&A</strong></p>
                            </div>
                            <br />
                            {msg.instructions && (
                              <div>
                              </div>
                            )}
                            <strong><p>Question</p></strong>
                            <MarkdownRenderer content={msg.question} />
                            {msg.answer && (
                              <>
                                <div style={{ marginTop: '16px' }}>
                                  <strong><p>Answer</p></strong>
                                  <MarkdownRenderer content={msg.answer} />
                                </div>
                              </>
                            )}
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '8px' }}>
                              <FiThumbsUp style={{ cursor: 'pointer' }} onClick={() => handleAction(msg.id, 'Thumbs Up')} />
                              <FiThumbsDown style={{ cursor: 'pointer' }} onClick={() => handleAction(msg.id, 'Thumbs Down')} />
                              <FiShare2 style={{ cursor: 'pointer' }} onClick={() => handleAction(msg.id, 'Share')} />
                              <FiGithub style={{ cursor: 'pointer' }} onClick={() => handleAction(msg.id, 'Git')} />
                            </div>
                          </div>
                          <Separator />
                        </React.Fragment>
                      ))
                    )}
                  </div>
                </TabsContent>
              </div>
              <div className="flex-none w-full max-w-lg mx-auto">
                <div className="flex flex-col space-y-4">
                  <Label htmlFor="instructions">Instructions</Label>
                  <Textarea
                    id="instructions"
                    placeholder="Use these specific rules🧾"
                    value={instructionsValue}
                    onChange={(e) => setInstructionsValue(e.target.value)}
                  />
                  <Label htmlFor="input">Input</Label>
                  <Textarea
                    id="input"
                    placeholder="We are now live 🟢"
                    className="flex-1 lg:min-h-[100px] max-h-[200px] overflow-y-auto"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    style={{ resize: 'none' }}
                  />
                  <div className="flex items-center space-x-1">
                    <Button onClick={handleSubmit}>Submit</Button>
                    <Button variant="secondary">
                      <span className="sr-only">Show history</span>
                      <CounterClockwiseClockIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="destructive" onClick={handleClearSession}>
                      Clear Session
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
      {alertMessage && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1000 }}>
          <Alert>
            <AlertTitle>Action Completed</AlertTitle>
            <AlertDescription>{alertMessage}</AlertDescription>
          </Alert>
        </div>
      )}
    </>
  );
}
