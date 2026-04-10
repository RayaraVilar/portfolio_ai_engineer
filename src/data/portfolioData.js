export const projects = [
  {
    id: 1,
    title: 'Agente Inteligente para Automação de Atendimento',
    description: 'Agente em Python com integração OpenAI e prompt engineering. Interpretou solicitações e gerou respostas automáticas, reduzindo o tempo médio de resposta em 30%.',
    tech: ['Python', 'OpenAI API', 'Prompt Engineering'],
    category: 'AI Agents',
    featured: true,
    image: '/projects/agent-atendimento.jpg',
    live: '#',
    repo: '#'
  },
  {
    id: 2,
    title: 'Sistema de Flashcards com IA (RAG)',
    description: 'Aplicação baseada em LLMs e RAG para gerar flashcards automáticos a partir de textos. Melhoria na qualidade das respostas e redução de horas de criação.',
    tech: ['Python', 'LLMs', 'RAG', 'Embeddings'],
    category: 'RAG & LLMs',
    featured: true,
    image: '/projects/flashcards-rag.jpg',
    live: '#',
    repo: '#'
  },
  {
    id: 3,
    title: 'Automação de Classificação de Dados',
    description: 'Sistema de ML em Python para categorização inteligente de dados, eliminando tarefas manuais repetitivas e aumentando a precisão organizacional.',
    tech: ['Python', 'Machine Learning', 'Data Analysis'],
    category: 'Machine Learning',
    featured: false,
    image: '/projects/classificacao-ml.jpg',
    live: '#',
    repo: '#'
  },
  {
    id: 4,
    title: 'Integração de APIs para Sistema Inteligente',
    description: 'Pipeline escalável orientado a eventos integrando múltiplas APIs REST e serviços de IA para processamento de dados em tempo real.',
    tech: ['Python', 'REST APIs', 'Event-Driven', 'CI/CD'],
    category: 'Integrações',
    featured: false,
    image: '/projects/api-integration.jpg',
    live: '#',
    repo: '#'
  }
];

export const skills = [
  { category: 'AI & ML', items: ['LLMs', 'RAG', 'Prompt Engineering', 'Machine Learning', 'QLoRA', 'AI Agents'] },
  { category: 'DevOps & Infra', items: ['Docker', 'Kubernetes', 'CI/CD', 'Git'] },
  { category: 'Linguagens & Frameworks', items: ['Python', 'JavaScript', 'React', 'FastAPI'] },
  { category: 'UX & Design', items: ['Figma', 'Prototipagem', 'Design System', 'User Research'] }
];

export const timeline = [
  { year: '2023 - 2025', title: 'Tecnólogo em Sistemas para Internet', org: 'Cruzeiro do Sul', type: 'education' },
  { year: '2021 - 2026', title: 'Bacharelado em Comunicação em Mídias Digitais', org: 'UFPB', type: 'education' },
  { year: '2024', title: 'Certificações em AI Engineer', org: 'LLM Engineering, RAG, QLoRA, Agents', type: 'cert' },
  { year: '2020 - Atual', title: 'Foco em UX/UI & Automação com IA', org: 'Projetos Práticos & Pesquisa', type: 'exp' }
];

export const contactInfo = {
  email: 'ravtra301@gmail.com',
  phone: '(83) 99928-7661',
  location: 'João Pessoa, Paraíba',
  linkedin: 'https://linkedin.com/in/rayara-vilar',
  github: 'https://github.com/RayaraVilar'
};