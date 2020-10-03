import autoComplete from '@tarekraafat/autocomplete.js';
document.addEventListener('DOMContentLoaded', () => {
    autoCompleteInit();
});

const autoCompleteInit = () => {
    if (document.querySelector('.autocomplete-holder')) {
        const allHolders = document.querySelectorAll('.autocomplete-holder');
        allHolders.forEach(element => {
            const inputInner = element.querySelector('.autocomplete');
            const autoCompleteInstance = new autoComplete({
                data: {
                    src: ['Пример', 'Длинный пример', ' Пример 3', ' Пример 4'],
                },
                placeHolder: element.querySelector('.autocomplete').getAttribute('data-placeholder'),
                selector: () => element.querySelector('.autocomplete'),
                threshold: 3,
                searchEngine: "strict",
                resultsList: {
                    render: true,
                    container: source => {
                        source.setAttribute("class", "unstyled res_list");
                    },
                    destination: element.querySelector(".autocomplete"),
                    position: "afterend",
                    element: "ul"
                },
                highlight: true,
                resultItem: {
                    content: (data, source) => {
                        source.innerHTML = data.match;
                        element.classList.add('is-opened');
                    },
                    element: "li",
                },
                noResults: () => {
                    const result = document.createElement("li");
                    result.setAttribute("class", "no_result");
                    result.setAttribute("tabindex", "1");
                    result.innerHTML = "Такой компании не найдено :(";
                    element.querySelector("#autoComplete_list").appendChild(result);
                },
                onSelection: feedback => {
                    element.querySelector('.autocomplete').value = feedback.selection.value;
                    element.classList.remove('is-opened');
                }
            });
            inputInner.addEventListener('input', () => {
                if (inputInner.value.length < 4) {
                    element.classList.remove('is-opened');
                } else {
                    element.classList.add('is-opened');
                }
            });
            document.body.addEventListener('click', (e) => {
                if (e.target != element && element.classList.contains('is-opened')) {
                    element.classList.remove('is-opened');
                }
            });
        });
    }
};