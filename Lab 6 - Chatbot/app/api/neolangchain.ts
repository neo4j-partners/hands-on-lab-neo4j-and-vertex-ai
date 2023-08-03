import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage, ChatMessage, SystemMessage } from "langchain/schema";


const chatllm = new ChatOpenAI({
    openAIApiKey: process.env.OPEN_AI_KEY,
    modelName: 'code bison',
    maxTokens: 2048,
    temperature: 0,
    topP: 0.95,
})


const result = await chatllm.predictMessages([
    new HumanMessage("Translate this from English to Spanish")
])


console.log(result)