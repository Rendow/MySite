import todoImg from "../assets/img/tasks.png";
import exchangeImg from "../assets/img/money-exchange.png";
import socialImg from "../assets/img/soc2.png";
import dashboard from "../assets/img/PinClipart.com_beneficiary-clip-art_1453484.png";
import chat from "../assets/img/chat.png";
import address from "../assets/img/address.png";
import todov2 from "../assets/img/todov2.png";
import library from "../assets/img/library.svg";

const styles = {
    todo: {
        backgroundImage: `url(${todoImg})`,
        width: '90%',
    },
    exchange: {
        backgroundImage: `url(${exchangeImg})`,
        width: '90%',
    },
    social: {
        backgroundImage: `url(${socialImg})`,
    },
    dashboard: {
        backgroundImage: `url(${dashboard})`,
    },
    chat: {
        backgroundImage: `url(${chat})`,
    },
    address: {
        backgroundImage: `url(${address})`,
    },
    todov2: {
        backgroundImage: `url(${todov2})`,
    },
    library: {
        backgroundImage: `url(${library})`,
    },
}
export const projects = [
    {
        id: 1,
        style: styles.social,
        demo: "https://rendow.github.io/ReactSocial/",
        code: "https://github.com/Rendow/ReactSocial",
        title: 'Social network',
        projectType:'Studying project',
        description: 'Include react, redux, typeScript, webSocket, rest API, class component, hooks',
    },
    {
        id: 2,
        style: styles.todo,
        demo: "https://rendow.github.io/TodoList/",
        code: "https://github.com/Rendow/TodoList",
        title: 'Todolist',
        projectType:'Studying project',
        description: 'Include react, redux, typeScript, material UI, rest API, thunk, formik',
    },
    {
        id: 3,
        style: styles.exchange,
        demo: "https://rendow.github.io/CurrencyExchange/",
        code: "https://github.com/Rendow/CurrencyExchange",
        title: 'Exchanger',
        projectType:'Studying project',
        description: 'include react, redux, typeScript',

    },
    // {
    //     id: 4,
    //     style: styles.todov2,
    //     demo: "https://rendow.github.io/webinar-todo/",
    //     code: "https://github.com/Rendow/webinar-todo/",
    //     title: 'Todolist v2',
    //     projectType: 'Test task',
    //     description: 'Todolist with material UI, prettier, husky, immutableJs, typeScript, drag\'n\'drop, hooks',
    // },
    {
        id: 5,
        style: styles.dashboard,
        demo: "https://rendow.github.io/dashboard/",
        code: "https://github.com/Rendow/dashboard",
        title: 'Dashboard',
        projectType: 'Test task',
        description: 'Dashboard with hooks, axios, classnames, react-router-dom, sass',
    },
    // {
    //     id: 6,
    //     style: styles.chat,
    //     demo: "https://rendow.github.io/ws-chat/",
    //     code: "https://github.com/Rendow//ws-chat",
    //     title: 'Chat',
    //     projectType: 'Test task',
    //     description: 'Test task - chat with WebSocket, local storage and offline mod (PWA), hooks, sass',
    // },
    // {
    //     id: 7,
    //     style: styles.address,
    //     demo: "https://rendow.github.io/the-address-book/",
    //     title: 'The address book',
    //     projectType: 'Test task',
    //     description: 'Test task - address book with Material UI, Rest API, Thunk, Formik, axios, hooks',
    // },

    {
        id: 8,
        style: styles.library,
        demo: "https://rendow.github.io/library-app/",
        code: "https://github.com/Rendow/library-app/",
        title: 'Book\'s search',
        projectType: 'Test task',
        description: 'Book\'s search with google API, redux, errors handlers, unit tests, typeScript, hooks',
    },
]
export const params = {
    preloadImages: false,
    lazy: true,
    pagination: true,
    navigation: true,
    loop: false,
    spaceBetween: 5,
    slidesPerView: 1,
    breakpoints: {820: {slidesPerView: 2}},
    centeredSlides: false,
    centerInsufficientSlides: true,
};
