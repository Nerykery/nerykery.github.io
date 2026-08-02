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
];

export const EXTRA_TAGS = [
  "Git", "WebSocket", "gRPC", "RabbitMQ", "Kafka", "Elasticsearch",
  "Prometheus", "Grafana", "Vault", "OAuth 2.0", "JWT", "Microservices",
  "Clean Architecture", "DDD", "Agile / Scrum", "Unit Testing",
];

export const MARQUEE = [
  "Python", "C++", "React", "TypeScript", "1С", "DevOps", "Kubernetes",
  "Docker", "PostgreSQL", "LLM / RAG", "Пентест", "SIEM", "FastAPI",
  "Terraform", "CI/CD", "ИБ финтеха", "Linux", "Node.js",
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
