import burgerBuilder from "../images/burgerBuilder.png";
import expenseManager from "../images/expense-manager.png";
import whatsAppClone from "../images/whatsappclone.png";
import drumkit from "../images/drumkit.png";
import weatherapp from "../images/weatherapp.png";

// import css1 from '../img/portImages/cv_css.png';
// import css2 from '../img/portImages/ms.png';
// import react1 from '../img/portImages/react_styled.png';
// import img2 from '../img/portImages/maya-4.jpg';
// import img3 from '../img/portImages/maya-3.jpg';

const projects = [
  {
    id: 1,
    category: "ReactJs",
    image: whatsAppClone,
    link1: "https://github.com/himanigulati01/whatsapp-clone",
    link2: "https://whatapp-clone-9613c.web.app/",
    title: "WhatsApp-clone",
    text: "Created with ReactJs backed by firebase.",
  },
  {
    id: 2,
    category: "ReactJs",
    image: burgerBuilder,
    link1: "https://github.com/himanigulati01/MyBurger",
    link2: "https://my-burger01.herokuapp.com/",
    title: "My Burger",
    text: "Customized your burger.",
  },
  {
    id: 3,
    category: "ReactJs",
    image: expenseManager,
    link1: "https://github.com/himanigulati01/expenseManager",
    link2: "https://expense-manager-01.herokuapp.com/",
    title: "Expense Manger",
    text: "tip - Investing for long term is always a better option!",
  },
  {
    id: 4,
    category: "HTML/CSS/JS",
    image: drumkit,
    link1: "https://github.com/himanigulati01/Drumkit",
    link2: "https://himanigulati01.github.io/Drumkit/",
    title: "Drumkit",
    text: "You think you are drummer?",
  },
  {
    id: 5,
    category: "NodeJs",
    image: weatherapp,
    link1: "https://github.com/himanigulati01/weather-app",
    link2: "https://weather-indices-app.herokuapp.com/",
    title: "Weather App",
    text: "First NodeJs Project.",
  },
];

export default projects;
