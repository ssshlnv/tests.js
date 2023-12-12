let questions = [
    {
      text: 'кто лучший преподаватель?',
      variants: ['александр юрьевич', 'олег генрихович', 'ольга владимировна', 'анастасия викторовна'],
      right: 0
    },
    {
      text: 'какая кличка у андрея?',
      variants: ['адидас', 'зима', 'пальто', 'желтый'],
      right: 2
    },
    {
      text: 'ералаша убили',
      variants: ['жаль', 'слово пацана дадим что не забудем', 'и че', 'щас размажу всех виновных'],
      right: 1
    }
];

let html = '';

  questions.forEach((question, index) => {
    html += `<div>
      <p>${question.text}</p>
      ${question.variants.map((variant, i) => `
        <label>
          <input type="radio" name="question${index}" value="${i}">
          ${variant}
        </label>
      `).join('')}
    </div>`;
  });

  document.getElementById('test').innerHTML = html;

  document.getElementById('button').addEventListener('click', function() {
    let answers = questions.map(question => question.right);
    const questionsDivs = document.querySelectorAll('#test > div');
    questionsDivs.forEach((questionDiv, index) => {
      const inputs = questionDiv.querySelectorAll('input[type="radio"]');
      inputs.forEach((input, i) => {
        if (input.checked) {
          if (i === answers[index]) {
            input.parentElement.classList.add('right');
          } else {
            input.parentElement.classList.add('wrong');
          }
        }
      });
    });
  });