export const DOMAINS = [
  {
    code: "DEV",
    title: "Фулл-стек разработка",
    desc: "Проектирую и создаю продукты целиком: от схемы базы данных и API до интерфейса. Python, C++, JavaScript, React — под задачу, а не наоборот.",
    points: ["Python / FastAPI / Django", "C++ (высоконагруженные модули)", "React, TypeScript, Node.js", "PostgreSQL, Redis, брокеры сообщений"],
    accent: "amber",
  },
  {
    code: "OPS",
    title: "DevOps и инфраструктура",
    desc: "Автоматизирую путь кода до продакшена: CI/CD, контейнеры, оркестрация, мониторинг. Инфраструктура как код — воспроизводимая и наблюдаемая.",
    points: ["Docker, Kubernetes", "CI/CD: GitLab CI, GitHub Actions", "Terraform, Ansible", "Prometheus, Grafana, алертинг"],
    accent: "ice",
  },
  {
    code: "SEC",
    title: "Информационная безопасность",
    desc: "Защищаю системы там, где цена ошибки максимальна — в финансовых структурах. Аудит, харденинг, соответствие требованиям регуляторов.",
    points: ["ИБ финансовых организаций", "Аудит и пентест инфраструктуры", "PCI DSS, 152-ФЗ, стандарты ЦБ", "SIEM, реагирование на инциденты"],
    accent: "amber",
  },
  {
    code: "AI",
    title: "Нейросети в бизнесе",
    desc: "Встраиваю LLM и ML-модели в реальные процессы: автоматизация документооборота, ассистенты, анализ данных. Не хайп — измеримый результат.",
    points: ["Интеграция LLM в бизнес-процессы", "RAG-системы на своих данных", "Автоматизация рутинных операций", "ML-пайплайны и аналитика"],
    accent: "ice",
  },
  {
    code: "1C",
    title: "1С и учётные системы",
    desc: "Дорабатываю и интегрирую 1С с внешним миром: обмен с сайтами, банками, CRM. Учёт перестаёт быть изолированным островом.",
    points: ["Разработка и доработка конфигураций", "Интеграции: HTTP-сервисы, шины", "Обмен с банками и маркетплейсами", "Оптимизация запросов и производительности"],
    accent: "amber",
  },
  {
    code: "ARC",
    title: "Архитектура и аудит",
    desc: "Смотрю на систему целиком: узкие места, риски, стоимость владения. Помогаю принять технические решения до того, как они станут дорогими.",
    points: ["Проектирование архитектуры", "Технический аудит проектов", "Код-ревью и наставничество", "Миграции легаси-систем"],
    accent: "ice",
  },
  {
    code: "MOB",
    title: "Мобильная и десктопная разработка",
    desc: "Разрабатываю нативные и кроссплатформенные приложения для iOS, Android и десктопа. От прототипа до публикации в App Store и Google Play.",
    points: ["iOS (Swift / SwiftUI)", "Android (Kotlin / Jetpack Compose)", "Кроссплатформа: React Native, Flutter", "Desktop: Electron, Tauri (Windows, macOS, Linux)"],
    accent: "amber",
  },
  {
    code: "BAS",
    title: "Парсеры и автоматизация браузера",
    desc: "Разрабатываю парсеры любой сложности и автоматизирую браузерные сценарии через BAS (Browser Automation Studio). Сбор данных, обход защит, эмуляция действий пользователя.",
    points: ["BAS (Browser Automation Studio)", "Парсинг сайтов с защитой (Cloudflare, капча)", "Selenium, Playwright, Puppeteer", "Массовые операции: регистрации, постинг, мониторинг"],
    accent: "ice",
  },
  {
    code: "TG",
    title: "Telegram-боты и MiniApp",
    desc: "Создаю Telegram-ботов любой сложности: от простых уведомлялок до полноценных бизнес-инструментов. MiniApp — веб-приложение прямо внутри мессенджера.",
    points: ["Боты на aiogram / python-telegram-bot", "Боты на Telegraf (Node.js)", "Telegram MiniApp (Web App API)", "Интеграции с CRM, платёжными системами, БД"],
    accent: "ice",
  },
];

export const SKILL_CATEGORIES = [
  {
    title: "Языки программирования",
    color: "from-indigo-500 to-blue-500",
    skills: [
      { name: "Python", level: 95, icon: "🐍" },
      { name: "C++", level: 88, icon: "⚡" },
      { name: "JavaScript / TypeScript", level: 92, icon: "🟨" },
      { name: "SQL", level: 90, icon: "🗄️" },
      { name: "1С", level: 85, icon: "📊" },
      { name: "Go", level: 75, icon: "🔵" },
    ],
  },
  {
    title: "Frontend",
    color: "from-cyan-500 to-teal-500",
    skills: [
      { name: "React / Next.js", level: 93, icon: "⚛️" },
      { name: "Vue.js / Nuxt", level: 82, icon: "💚" },
      { name: "HTML5 / CSS3", level: 95, icon: "🎨" },
      { name: "Tailwind CSS", level: 90, icon: "🌊" },
    ],
  },
  {
    title: "Backend и базы данных",
    color: "from-emerald-500 to-green-500",
    skills: [
      { name: "Django / FastAPI", level: 94, icon: "🚀" },
      { name: "Node.js / Express", level: 88, icon: "🟢" },
      { name: "PostgreSQL / MySQL", level: 92, icon: "🐘" },
      { name: "MongoDB / Redis", level: 85, icon: "🍃" },
      { name: "GraphQL / REST API", level: 90, icon: "🔗" },
    ],
  },
  {
    title: "DevOps и Cloud",
    color: "from-orange-500 to-amber-500",
    skills: [
      { name: "Docker / Kubernetes", level: 92, icon: "🐳" },
      { name: "CI/CD (GitLab, GitHub Actions)", level: 90, icon: "🔄" },
      { name: "Linux / Bash", level: 95, icon: "🐧" },
      { name: "AWS / GCP / Yandex Cloud", level: 85, icon: "☁️" },
      { name: "Terraform / Ansible", level: 80, icon: "🏗️" },
    ],
  },
  {
    title: "Информационная безопасность",
    color: "from-red-500 to-rose-500",
    skills: [
      { name: "ИБ в финансовых структурах", level: 90, icon: "🏦" },
      { name: "Penetration Testing", level: 88, icon: "🔓" },
      { name: "OWASP / Security Audit", level: 87, icon: "🛡️" },
      { name: "SIEM / SOC", level: 85, icon: "📡" },
      { name: "Compliance (PCI DSS, 152-ФЗ)", level: 85, icon: "📋" },
    ],
  },
  {
    title: "AI и нейросети",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Интеграция AI в бизнес", level: 92, icon: "💡" },
      { name: "LLM / GPT интеграция", level: 88, icon: "🤖" },
      { name: "TensorFlow / PyTorch", level: 82, icon: "🧠" },
      { name: "ML Ops", level: 78, icon: "📈" },
    ],
  },
  {
    title: "Мобильная и десктопная разработка",
    color: "from-sky-500 to-blue-500",
    skills: [
      { name: "React Native", level: 88, icon: "📱" },
      { name: "Flutter", level: 82, icon: "🦋" },
      { name: "Swift / SwiftUI (iOS)", level: 80, icon: "🍎" },
      { name: "Kotlin / Jetpack Compose (Android)", level: 80, icon: "🤖" },
      { name: "Electron / Tauri (Desktop)", level: 85, icon: "🖥️" },
    ],
  },
  {
    title: "Парсеры и автоматизация браузера",
    color: "from-violet-500 to-purple-500",
    skills: [
      { name: "BAS (Browser Automation Studio)", level: 92, icon: "🤖" },
      { name: "Selenium / Playwright", level: 90, icon: "🎭" },
      { name: "Puppeteer / Cheerio", level: 88, icon: "🕷️" },
      { name: "Обход Cloudflare / капч", level: 85, icon: "🛡️" },
      { name: "Scrapy / BeautifulSoup", level: 90, icon: "🕸️" },
    ],
  },
  {
    title: "Telegram-боты и MiniApp",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "aiogram / python-telegram-bot", level: 93, icon: "🤖" },
      { name: "Telegraf (Node.js)", level: 88, icon: "⚡" },
      { name: "Telegram Web App API (MiniApp)", level: 87, icon: "💬" },
      { name: "Платёжные системы (Stars, ЮКасса)", level: 82, icon: "💳" },
    ],
  },
];

export const EXTRA_TAGS = [
  { name: "Git", desc: "Система контроля версий: история изменений и командная работа над кодом.", example: "git commit -m \"feat: add tooltip\"" },
  { name: "WebSocket", desc: "Постоянное двустороннее соединение для обновлений в реальном времени.", example: "ws://api.example.com/live" },
  { name: "gRPC", desc: "Высокопроизводительный RPC-фреймворк на Protocol Buffers.", example: "rpc GetUser (id) returns (User);" },
  { name: "RabbitMQ", desc: "Брокер сообщений с очередями для асинхронных задач.", example: "amqp://user:pass@host:5672" },
  { name: "Kafka", desc: "Распределённый стриминг событий для больших потоков данных.", example: "kafka-console-consumer --topic events" },
  { name: "Elasticsearch", desc: "Полнотекстовый поиск и аналитика на больших объёмах.", example: "GET /products/_search" },
  { name: "Prometheus", desc: "Сбор метрик и алертинг по модели pull.", example: "rate(http_requests_total[5m])" },
  { name: "Grafana", desc: "Дашборды и визуализация метрик из Prometheus и других источников.", example: "dashboard uid: abc123" },
  { name: "Vault", desc: "Хранилище секретов: ключи, токены и доступы под контролем.", example: "vault kv get secret/api" },
  { name: "OAuth 2.0", desc: "Протокол авторизации — вход через сторонние сервисы.", example: "authorization_code + refresh_token" },
  { name: "JWT", desc: "Компактный токен доступа для бесшовной авторизации.", example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." },
  { name: "Microservices", desc: "Разбиение системы на независимые сервисы.", example: "order-service, auth-service" },
  { name: "Clean Architecture", desc: "Разделение на слои: домен не зависит от фреймворков.", example: "domain → usecases → adapters" },
  { name: "DDD", desc: "Предметно-ориентированное проектирование: язык бизнеса в коде.", example: "Ubiquitous Language, Aggregates" },
  { name: "Agile / Scrum", desc: "Итеративная разработка с короткими циклами и обратной связью.", example: "sprint = 2 недели, demo" },
  { name: "Unit Testing", desc: "Автоматическая проверка поведения отдельных модулей.", example: "pytest tests/test_auth.py" },
  { name: "App Store / Google Play", desc: "Публикация и сопровождение мобильных приложений.", example: "build → review → release" },
  { name: "Push Notifications", desc: "Точечные уведомления на устройства пользователей.", example: "FCM token + payload" },
  { name: "Telegram Bot API", desc: "Официальный интерфейс для создания ботов.", example: "bot.sendMessage(chat_id, \"hi\")" },
  { name: "Telegram MiniApp", desc: "Веб-приложения прямо внутри Telegram.", example: "WebAppData, initData" },
  { name: "BAS", desc: "Browser Automation Studio — визуальная автоматизация браузера.", example: "блок «Создать браузер» → клики" },
  { name: "Selenium", desc: "Автоматизация браузера через WebDriver.", example: "driver.find_element(By.ID, \"btn\")" },
  { name: "Playwright", desc: "Современная автоматизация браузера с авто-ожиданиями.", example: "page.goto(\"https://...\")" },
  { name: "Puppeteer", desc: "Управление Chrome из Node.js.", example: "await page.click(\"#submit\")" },
  { name: "Scrapy", desc: "Python-фреймворк для масштабного парсинга.", example: "scrapy crawl quotes" },
  { name: "BeautifulSoup", desc: "Парсинг HTML в Python для быстрых задач.", example: "soup.select_one(\"a.price\")" },
];

export const MARQUEE = [
  "Python", "C++", "React", "TypeScript", "1С", "DevOps", "Kubernetes",
  "Docker", "PostgreSQL", "LLM / RAG", "Пентест", "SIEM", "FastAPI",
  "Terraform", "CI/CD", "ИБ финтеха", "Linux", "Node.js",
  "React Native", "Flutter", "iOS", "Android", "Electron", "Telegram Bot", "MiniApp",
  "BAS", "Парсинг", "Selenium", "Playwright", "Автоматизация",
];

export const PRINCIPLES = [
  {
    step: "01",
    title: "Погружение",
    desc: "Разбираюсь в бизнесе, а не только в ТЗ. Половина дорогих ошибок закладывается до первой строчки кода.",
  },
  {
    step: "02",
    title: "Архитектура",
    desc: "Проектирую решение с учётом безопасности и нагрузки с первого дня — а не «прикрутим потом».",
  },
  {
    step: "03",
    title: "Реализация",
    desc: "Итерации с рабочими результатами каждую неделю. Код в репозитории, пайплайн собирает, стенд живёт.",
  },
  {
    step: "04",
    title: "Сопровождение",
    desc: "Мониторинг, алерты, документация. Система, которую можно передать команде — а не чёрный ящик.",
  },
];
