import allo from '../images/allo.png'
import para from '../images/para.png'
import chatzy from '../images/chatzy.png'
import todo from '../images/todo.png'

export const projects = [
    {
        name: 'Allo - Fun with AI',
        technologies: ['JavaScript', 'React', 'Context API', 'CSS3'],
        demo: 'https://allo-ai.netlify.app/',
        code: 'https://github.com/ameer-ahmad/allo-ai',
        image: allo,
        desc: "Allo is an ai that can process plain text prompts and produce outputs which you'll have trouble distinguishing from human writing. It uses GPT-3, a powerful AI model created by OpenAI. Try asking Allo to write you a restaurant review!"
    },
    {
        name: 'Para - Food Tracker',
        technologies: ['JavaScript', 'React', 'Context API', 'CSS3'],
        demo: 'https://para-tracker.netlify.app/',
        code: 'https://github.com/ameer-ahmad/para',
        image: para,
        desc: "Para is a food tracking app that allows you to track the macro nutrients for all the foods you eat in a day. It uses the Spoonacular API to retrieve nutrient information for not only menu and grocery store items, but also recipes it finds on the internet."
    },
    {
        name: 'Chatzy - Chat with Friends',
        technologies: ['React', 'Node', 'Express', 'Socket.io'],
        demo: '',
        code: 'https://github.com/ameer-ahmad/chatzy',
        image: chatzy,
        desc: "Chatzy is a chat app that allows users to chat with their friends. Users can create private rooms and have their friends join. Chatzy not only allows for two people to chat, but also allows for group messaging."
    },
    {
        name: 'ToDo - Productivity App',
        technologies: ['Python', 'Flask', 'SQLAlchemy', 'Bootstrap'],
        demo: '',
        code: 'https://github.com/ameer-ahmad/flask-todo',
        image: todo,
        desc: "ToDo is a todo app that allows users to create and remove todos for their day. Users can register for an account and login which allows them to have their todos saved to their acccount."
    }
]

export default projects