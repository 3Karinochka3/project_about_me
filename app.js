const app = Vue.createApp({
    data() {
        return {
            greeting: "Всем привет! На связи Kariiina",
            imageSrc: "me.jpg",
            aboutLink: "about me.html",
            buttonText: "Нажми", // Текст на кнопке
            message: "Добро пожаловать на мой сайт! Надеюсь, вам будет интересно.",
            messageVisible: false, // Видимость текста
            isActive: false, // Состояние кнопки
            textColor: "black" // Цвет текста
        };
    },
    methods: {
        toggleMessage() {
            this.messageVisible = !this.messageVisible;
            this.isActive = !this.isActive;
            this.buttonText = this.messageVisible ? "Скрыть" : "Нажми";
        },
        changeTextColor() {
            this.textColor = this.textColor === "black" ? "white" : "black"; // Переключение цвета текста
        }
    }
});

app.mount("#app");
