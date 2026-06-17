import { encouragingMessages } from './mockData'

export function generateAIResponse(rant) {
  // Simulate AI understanding the rant and providing empathetic response
  const randomMessage = encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)]
  
  const responses = [
    `I hear you. ${randomMessage} Thank you for sharing what you're feeling. That takes courage. Remember, your mental wellness matters, and you deserve support.`,
    `Those are valid feelings. ${randomMessage} It's important to acknowledge and express what you're going through. You're taking the right step by being here.`,
    `I can sense the weight behind those words. ${randomMessage} Please be gentle with yourself. You're doing the best you can, and that's enough.`,
    `Thank you for trusting this space with your feelings. ${randomMessage} Consider trying one of our coping tools to help you feel better right now.`,
  ]

  return responses[Math.floor(Math.random() * responses.length)]
}
