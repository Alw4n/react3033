const Item = () => {
  const riddles = [
      {
          id: 1,
          description: 'Загадка 1: Что можно измерить, но нельзя увидеть или потрогать?',
          option1: 'Морковь',
          option2: 'Время',
          option3: 'Лошадь',
          option4: 'Корова',
          correct: 2
      },
      {
          id: 2,
          description: 'Загадка 2: Они ведут нас вперед, хотя сами всегда ходят по кругу.',
          option1: 'Собаки',
          option2: 'Заяц',
          option3: 'Стрелки на часах',
          option4: 'Телега',
          correct: 3
      },
      {
          id: 3,
          description: 'Загадка 3: Есть три литра кефира. Как его уместить в литровую банку?',
          option1: 'Чудом',
          option2: 'Никак',
          option3: 'Подумаю',
          option4: 'Сварить творог',
          correct: 4
      },
      {
        id: 4,
        description: 'Загадка 4: Она везде: в почве в небе, в воздухе, в реке, в море, в овощах, во фруктах и даже в человеке.',
        option1: 'Вода',
        option2: 'Аня',
        option3: 'газ',
        option4: 'Моника',
        correct: 1
    },
    {
        id: 5,
        description: 'Загадка 5: Что делится пополам только раз в четыре года?',
        option1: 'Нерешаемо',
        option2: 'Год по дням',
        option3: 'День',
        option4: 'Киллограм',
        correct: 2
    },
    {
        id: 6,
        description: 'Загадка 6: Оно может говорить, но точно ничего не покажет.',
        option1: 'Колонка',
        option2: 'Магнитофон',
        option3: 'Радио',
        option4: 'Телевизор',
        correct: 3
    }
  ];

  return (
      <div>
        <h1>ИТ/2-23 Толстов Илья Алексеевич</h1>
          <h2>Загадки</h2>
          {riddles.map(riddle => (
              <div key={riddle.id}>
                  <p>{riddle.description}</p>
                  <ul>
                      <li>{riddle.option1}</li>
                      <li>{riddle.option2}</li>
                      <li>{riddle.option3}</li>
                      <li>{riddle.option4}</li>
                  </ul>
              </div>
          ))}
      </div>
  );
}

export default Item;
