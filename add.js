// Создаем объект с информацией о группах
const kpopGroups = {
    groups: [
        { name: "BTS", debutYear: 2013 },
        { name: "Ateez", debutYear: 2018 },
        { name: "Seventeen", debutYear: 2015 },
        { name: "Treasure", debutYear: 2020 },
        { name: "Xikers", debutYear: 2022 },
        { name: "Victon", debutYear: 2016 },
        { name: "The Boyz", debutYear: 2017 },
        { name: "The KingDom", debutYear: 2021 },
        { name: "TXT", debutYear: 2019 },
        { name: "Itzy", debutYear: 2019 },
        { name: "(G)I-DLE", debutYear: 2018 },
        { name: "XG", debutYear: 2022 },
        { name: "Taemin", debutYear: 2020 } // Участник группы Riize
    ]
};

// Функция для вывода информации о группах
function displayGroups() {
    // Проходим по массиву групп
    for (let i = 0; i < kpopGroups.groups.length; i++) {
        const group = kpopGroups.groups[i];
        // Условие для проверки, если группа дебютировала после 2015 года
        if (group.debutYear > 2015) {
            // Выводим информацию о группе в консоль
            console.log(`Группа: ${group.name}, Год дебюта: ${group.debutYear}`);
        }
    }
}

// Вызываем функцию для отображения групп
displayGroups();
