document.addEventListener("DOMContentLoaded", () => {
    // Табы и станции
    const tripTabs = document.querySelectorAll('.trip-tab');
    const selectFrom = document.querySelector('select[name="from"]');
    const selectTo = document.querySelector('select[name="to"]');
    const swapBtn = document.querySelector('.swap-button');
    const whenButtons = document.querySelectorAll('.when-button');

    // Кнопки управления состояниями
    const settingsBtn = document.querySelector('.settings-button');
    const saveBtn = document.querySelector('.save-button');
    const searchBtn = document.querySelector('.search-button');

    // Блоки для показа/скрытия
    const settingsPanel = document.querySelector('.settings-panel');
    const quickInfo = document.querySelector('.quick-info');
    const resultSection = document.querySelector('.result-section');

    // Элементы текста в результатах
    const fromStationName = document.querySelector('.from-station-name');
    const toStationName = document.querySelector('.to-station-name');

    // 1. Показ / скрытие панели настроек (Mina stationer)
    settingsBtn?.addEventListener('click', () => {
        const isHidden = settingsPanel.style.display === 'none';
        settingsPanel.style.display = isHidden ? 'grid' : 'none';
    });

    saveBtn?.addEventListener('click', () => {
        settingsPanel.style.display = 'none';
        alert('Stationer sparade!');
    });

    // 2. Переключение табов и обмен станций
    function swapStations() {
        if (selectFrom && selectTo) {
            const temp = selectFrom.value;
            selectFrom.value = selectTo.value;
            selectTo.value = temp;
        }
    }

    tripTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            tripTabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');
            swapStations();
        });
    });

    swapBtn?.addEventListener('click', swapStations);

    // 3. Выбор времени
    whenButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            whenButtons.forEach(b => b.style.borderColor = '#e7dcd3');
            btn.style.borderColor = '#c9614e';
        });
    });

    // 4. Поиск (скрывает quickInfo, показывает resultSection)
    searchBtn?.addEventListener('click', () => {
        // Подставляем названия станций в результаты
        if (fromStationName) fromStationName.textContent = selectFrom.value;
        if (toStationName) toStationName.textContent = selectTo.value;

        // Показываем блок с результатами
        quickInfo.style.display = 'none';
        resultSection.style.display = 'block';
    });
});