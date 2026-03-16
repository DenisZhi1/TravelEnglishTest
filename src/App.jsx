import React from "react";

export default function TravelEnglishCourse() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white font-sans">
      <header className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 via-orange-400 to-yellow-300 text-transparent bg-clip-text">
          Английский для путешествий
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-300">
          Курс, который научит вашего ребёнка уверенно говорить на английском
          за границей — от аэропорта до знакомства с новыми друзьями.
        </p>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-6 text-teal-300">Для кого курс</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800/60 p-6 rounded-2xl shadow-lg">4–5 класс</div>
          <div className="bg-slate-800/60 p-6 rounded-2xl shadow-lg">6–8 класс</div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-8 text-orange-300">Программа курса</h2>
        <div className="space-y-6">
          {[
            "Аэропорт без стресса",
            "В отеле: заселение и помощь",
            "Кафе и рестораны",
            "На улице: ориентирование",
            "Экстренные случаи",
            "Туризм и развлечения",
            "Дружба в путешествиях",
            "Дипломный проект"
          ].map((item, i) => (
            <div key={i} className="bg-slate-800/60 p-6 rounded-2xl shadow-lg">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-6 text-yellow-300">Почему курс особенный</h2>
        <ul className="space-y-3 text-slate-300">
          <li>Практическая разговорная речь</li>
          <li>Реальные ситуации путешествий</li>
          <li>Ролевые игры и интерактив</li>
          <li>Уровень A2–B1 за курс</li>
        </ul>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold text-teal-300 mb-4">Что потребуется</h3>
          <ul className="text-slate-300 space-y-2">
            <li>Компьютер или ноутбук</li>
            <li>Наушники и микрофон</li>
            <li>Zoom и стабильный интернет</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-orange-300 mb-4">Расписание</h3>
          <p className="text-slate-300">Четверг 15:00 — 4–5 класс</p>
          <p className="text-slate-300">Пятница 15:30 — 6–8 класс</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-yellow-300">Стоимость</h2>
        <p className="text-xl text-slate-200">Полный курс: 12 000 руб</p>
        <p className="text-slate-400">1 300 руб / урок</p>
      </section>

      <section className="text-center py-20">
        <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
          Группы маленькие — максимум 6 детей. Места ограничены.
        </p>
        <button className="px-10 py-5 text-xl rounded-2xl bg-gradient-to-r from-teal-400 to-orange-400 text-slate-900 font-bold shadow-xl hover:scale-105 transition">
          Записаться на курс
        </button>
      </section>
    </div>
  );
}