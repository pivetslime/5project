import React from 'react';
import { Book, ArrowLeft, CheckCircle, Users, Calendar, BarChart3, Settings, FileText, MessageCircle, Pin, Upload, Mic } from 'lucide-react';

interface ManualPageProps {
  onClose: () => void;
}

export function ManualPage({ onClose }: ManualPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Заголовок */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <Book className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900 uppercase">РУКОВОДСТВО ПОЛЬЗОВАТЕЛЯ PLANIFY</h1>
          </div>
          <button
            onClick={onClose}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="uppercase">НАЗАД</span>
          </button>
        </div>

        {/* Содержание */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 space-y-8">
          
          {/* Введение */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase flex items-center space-x-2">
              <FileText className="w-6 h-6 text-blue-600" />
              <span>ДОБРО ПОЖАЛОВАТЬ В PLANIFY</span>
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Planify — это профессиональное приложение для управления задачами и проектами с использованием методологии Kanban. 
              Приложение предназначено для командной работы и позволяет эффективно организовать рабочие процессы, 
              отслеживать прогресс выполнения задач и анализировать продуктивность команды.
            </p>
          </section>

          {/* Регистрация и вход */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase flex items-center space-x-2">
              <Users className="w-5 h-5 text-green-600" />
              <span>1. РЕГИСТРАЦИЯ И ВХОД В СИСТЕМУ</span>
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 uppercase">РЕГИСТРАЦИЯ:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Откройте приложение в браузере</li>
                  <li>На странице входа выберите вкладку "Регистрация"</li>
                  <li>Введите имя пользователя (8-30 символов, только английские буквы и цифры)</li>
                  <li>Укажите email адрес (8-50 символов)</li>
                  <li>Придумайте пароль (8-30 символов, английские буквы и цифры)</li>
                  <li>Введите имя и фамилию (только буквы)</li>
                  <li>Отчество (необязательно)</li>
                  <li>Если у вас есть код доски, введите его в поле "Код доски"</li>
                  <li>Нажмите "Создать аккаунт"</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 uppercase">ВХОД:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>На странице входа введите имя пользователя или email в соответствующее поле</li>
                  <li>Введите пароль</li>
                  <li>При необходимости заполните поле с кодом доски</li>
                  <li>Нажмите "Войти"</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2 uppercase">ДЕМО АККАУНТЫ ДЛЯ БЫСТРОГО ЗНАКОМСТВА:</h4>
                <ul className="text-blue-700 space-y-1">
                  <li><strong>Демо Администратор:</strong> admin123 / password123</li>
                  <li><strong>Демо Пользователь:</strong> user1234 / password123</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Управление задачами */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-purple-600" />
              <span>2. УПРАВЛЕНИЕ ЗАДАЧАМИ</span>
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 uppercase flex items-center space-x-2">
                  <FileText className="w-4 h-4" />
                  <span>СОЗДАНИЕ ЗАДАЧИ:</span>
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Нажмите кнопку "Создать задачу" в заголовке</li>
                  <li>Заполните форму:
                    <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                      <li>Название задачи (обязательно)</li>
                      <li>Описание с поддержкой форматирования</li>
                      <li>Статус: К выполнению / В процессе / Выполнено</li>
                      <li>Приоритет: Низкий / Средний / Высокий</li>
                      <li>Назначить пользователей (множественный выбор)</li>
                      <li>Срок выполнения (дата)</li>
                      <li>Закрепить задачу (необязательно)</li>
                      <li>Прикрепить вложения до 5 МБ (необязательно)</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 uppercase">ПЕРЕМЕЩЕНИЕ ЗАДАЧ:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Перетаскивайте задачи между колонками для изменения статуса</li>
                  <li>Задачи автоматически сортируются по приоритету и дате</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 uppercase flex items-center space-x-2">
                  <Pin className="w-4 h-4" />
                  <span>ЗАКРЕПЛЕНИЕ ЗАДАЧ:</span>
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Нажмите на иконку булавки для закрепления важных задач</li>
                  <li>Закрепленные задачи отображаются в верхней части списка</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 uppercase">УДАЛЕНИЕ ЗАДАЧ:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Наведите курсор на карточку задачи и нажмите на появившуюся иконку корзины</li>
                  <li>Администраторы могут удалять любые задачи</li>
                  <li>Пользователи могут удалять только созданные ими задачи</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 uppercase flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>КОММЕНТАРИИ (ТОЛЬКО ДЛЯ АДМИНИСТРАТОРОВ):</span>
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>В карточке задачи есть поле "Добавить комментарий"</li>
                  <li>Редактируйте свои комментарии, нажав на иконку рядом с комментарием</li>
                  <li>Только администраторы могут оставлять и редактировать комментарии</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 uppercase flex items-center space-x-2">
                  <Upload className="w-4 h-4" />
                  <span>ВЛОЖЕНИЯ И ГОЛОСОВЫЕ СООБЩЕНИЯ:</span>
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Прикрепляйте файлы размером до 5 МБ</li>
                  <li>Поддерживаются изображения, аудио, видео, документы</li>
                  <li>Записывайте голосовые сообщения прямо в приложении</li>
                  <li>Воспроизводите аудио и просматривайте изображения</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Управление досками */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase flex items-center space-x-2">
              <Settings className="w-5 h-5 text-orange-600" />
              <span>3. УПРАВЛЕНИЕ ДОСКАМИ</span>
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 uppercase">СОЗДАНИЕ ДОСКИ:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Нажмите на выпадающий список досок в заголовке</li>
                  <li>Выберите "Создать новую доску"</li>
                  <li>Введите название и описание</li>
                  <li>Нажмите "Создать доску"</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 uppercase">ПЕРЕКЛЮЧЕНИЕ И УПРАВЛЕНИЕ:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Переключение: используйте селектор досок</li>
                  <li>Редактирование: нажмите иконку редактирования (только для админов)</li>
                  <li>Удаление: доступно создателю доски или админу</li>
                  <li>Поделиться: скопируйте ссылку для приглашения пользователей</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Календарь */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-indigo-600" />
              <span>4. КАЛЕНДАРЬ ЗАДАЧ</span>
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700">Нажмите на кнопку "Календарь" в верхней части страницы:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Вкладка позволяет просматривать календарь с задачами по датам</li>
                <li>Переключение между месяцами реализовано стрелками навигации</li>
                <li>Кнопка "Сегодня" позволяет быстро вернуться к текущей дате</li>
                <li>Задачи отображаются цветными точками по приоритету</li>
              </ul>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2 uppercase">МОБИЛЬНАЯ ВЕРСИЯ КАЛЕНДАРЯ:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Компактный календарь с точками приоритета</li>
                  <li>Список задач с датами</li>
                  <li>Подробный просмотр задач выбранного дня</li>
                  <li>Точки имеют цвет, соответствующий цвету приоритета</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Аналитика */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-red-500" />
              <span>5. АНАЛИТИКА И ОТЧЕТЫ</span>
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700">При нажатии на кнопку "Аналитика" вы можете просмотреть:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Количество задач с процентом выполнения</li>
                <li>Выполненные задачи</li>
                <li>Задачи в процессе</li>
                <li>Просроченные задачи</li>
                <li>Распределение по статусам</li>
                <li>Визуальное представление задач по категориям</li>
                <li>Месячная статистика</li>
                <li>Статистика создания задач по месяцам</li>
                <li>Производительность пользователей</li>
              </ul>
            </div>
          </section>

          {/* Управление пользователями */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase flex items-center space-x-2">
              <Users className="w-5 h-5 text-teal-600" />
              <span>6. УПРАВЛЕНИЕ ПОЛЬЗОВАТЕЛЯМИ (ТОЛЬКО ДЛЯ АДМИНИСТРАТОРОВ)</span>
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 uppercase">ДОБАВЛЕНИЕ ПОЛЬЗОВАТЕЛЯ:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Перейдите в раздел "Пользователи" (просмотр информации доступен всем)</li>
                  <li>Нажмите "Добавить пользователя"</li>
                  <li>Введите имя пользователя существующего аккаунта</li>
                  <li>Выберите роль (Пользователь/Администратор)</li>
                  <li>Нажмите "Добавить в доску"</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 uppercase">УПРАВЛЕНИЕ РОЛЯМИ:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Редактирование: изменение роли пользователя</li>
                  <li>Удаление: удаление пользователя из системы (кроме себя)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Профиль пользователя */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase flex items-center space-x-2">
              <Users className="w-5 h-5 text-pink-600" />
              <span>7. ПРОФИЛЬ ПОЛЬЗОВАТЕЛЯ</span>
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 uppercase">РЕДАКТИРОВАНИЕ ПРОФИЛЯ:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Нажмите на аватар в заголовке</li>
                  <li>Выберите вкладку "Профиль"</li>
                  <li>Редактируйте данные</li>
                  <li>Загрузите аватар, нажав кнопку рядом с изображением (макс. 2МБ)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 uppercase">СМЕНА ПАРОЛЯ:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Введите текущий пароль</li>
                  <li>Введите новый пароль (8-30 символов)</li>
                  <li>Подтвердите новый пароль</li>
                  <li>Нажмите "Сохранить"</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 uppercase">СТАТИСТИКА ПРОФИЛЯ:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Нажмите на вкладку "Статистика"</li>
                  <li>Просматривайте личную статистику по задачам и доскам</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Уведомления */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase flex items-center space-x-2">
              <MessageCircle className="w-5 h-5 text-yellow-600" />
              <span>8. СИСТЕМА УВЕДОМЛЕНИЙ</span>
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 uppercase">ТИПЫ УВЕДОМЛЕНИЙ:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Назначение задач: уведомление о новых задачах</li>
                  <li>Завершение задач: информация о выполненных задачах</li>
                  <li>Добавление в доску: приглашение в новую доску</li>
                  <li>Назначение администратором: изменение роли</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 uppercase">УПРАВЛЕНИЕ УВЕДОМЛЕНИЯМИ:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Просмотр в панели уведомлений (иконка колокольчика)</li>
                  <li>Отметка как прочитанное: кнопка "Прочитать все"</li>
                  <li>Красная точка на иконке отображается при наличии непрочитанных уведомлений</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Горячие клавиши и советы */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>9. ПОЛЕЗНЫЕ СОВЕТЫ</span>
            </h2>
            
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2 uppercase">ЭФФЕКТИВНАЯ РАБОТА:</h4>
                <ul className="list-disc list-inside space-y-1 text-green-700 ml-4">
                  <li>Используйте закрепление для важных задач</li>
                  <li>Устанавливайте реалистичные сроки выполнения</li>
                  <li>Регулярно проверяйте аналитику для оптимизации процессов</li>
                  <li>Используйте комментарии для важных уточнений (администраторы)</li>
                  <li>Прикрепляйте файлы для лучшего понимания задач</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2 uppercase">МОБИЛЬНАЯ ВЕРСИЯ:</h4>
                <ul className="list-disc list-inside space-y-1 text-blue-700 ml-4">
                  <li>Приложение полностью адаптировано для мобильных устройств</li>
                  <li>Используйте горизонтальную прокрутку для просмотра колонок</li>
                  <li>Все функции доступны на мобильных устройствах</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2 uppercase">СИНХРОНИЗАЦИЯ ДАННЫХ:</h4>
                <ul className="list-disc list-inside space-y-1 text-yellow-700 ml-4">
                  <li>Все данные автоматически сохраняются в браузере</li>
                  <li>Вход с разных устройств позволяет работать с сохраненными данными</li>
                  <li>Приглашение пользователей работает на всех устройствах</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Техническая поддержка */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase flex items-center space-x-2">
              <Settings className="w-5 h-5 text-gray-600" />
              <span>10. ТЕХНИЧЕСКАЯ ИНФОРМАЦИЯ</span>
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 uppercase">СИСТЕМНЫЕ ТРЕБОВАНИЯ:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Современный веб-браузер (Chrome, Firefox, Safari, Edge)</li>
                  <li>Включенный JavaScript</li>
                  <li>Стабильное интернет-соединение</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 uppercase">ОГРАНИЧЕНИЯ:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Максимальный размер файла: 5 МБ</li>
                  <li>Максимальный размер аватара: 2 МБ</li>
                  <li>Поддерживаемые форматы файлов: изображения, аудио, видео, документы</li>
                </ul>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}