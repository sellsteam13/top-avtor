import Choices from 'choices.js';
document.addEventListener('DOMContentLoaded', () => {
    selectInit();
});
const selectInit = () => {
    const selects = document.querySelectorAll('.select-block');
    if (selects.length > 0) {
        selects.forEach(element => {
            const selectInstance = new Choices(element.querySelector('select'), {
                searchEnabled: false,
                itemSelectText: '',
                noResultsText: 'Результатов нет',
                noChoicesText: 'Нет опций для выбора',
                maxItemText: (maxItemCount) => {
                    return `Доступно ${maxItemCount} опции(-ий) для выбора.`;
                }
            })
        });
    }
};