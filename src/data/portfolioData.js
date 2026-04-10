export const projects = [
  {
    id: 1,
    title: 'Agente Inteligente para Automação de Atendimento',
    description: 'Agente em Python com integração OpenAI e prompt engineering para interpretar solicitações e gerar respostas automáticas em múltiplos canais.',
    tech: ['Python', 'OpenAI API', 'Prompt Engineering'],
    category: 'AI Agents',
    featured: true,
    icon: '🤖',
    live: '#',
    repo: '#'
  },
  {
    id: 2,
    title: 'Sistema de Flashcards com IA (RAG)',
    description: 'Pipeline com embeddings e recuperação semântica para criação automática de flashcards com revisão de qualidade das respostas.',
    tech: ['Python', 'RAG', 'Embeddings', 'FastAPI'],
    category: 'RAG & LLMs',
    featured: true,
    icon: '🧠',
    live: '#',
    repo: '#'
  },
  {
    id: 3,
    title: 'Classificação Inteligente de Dados',
    description: 'Modelo de machine learning para categorizar dados e reduzir tarefas manuais repetitivas com monitoramento de performance.',
    tech: ['Python', 'Scikit-learn', 'Pandas'],
    category: 'Machine Learning',
    featured: false,
    icon: '📊',
    live: '#',
    repo: '#'
  },
  {
    id: 4,
    title: 'Orquestrador de APIs com IA',
    description: 'Integração orientada a eventos com APIs REST para processar dados em tempo real e acionar decisões automatizadas.',
    tech: ['Python', 'REST APIs', 'Docker'],
    category: 'Integrações',
    featured: false,
    icon: '🔗',
    live: '#',
    repo: '#'
  },
  {
    id: 5,
    title: 'Chatbot de Suporte para E-commerce',
    description: 'Assistente com histórico de conversas e respostas contextualizadas para reduzir chamados humanos de primeiro nível.',
    tech: ['Python', 'LangChain', 'PostgreSQL'],
    category: 'AI Agents',
    featured: false,
    icon: '🛍️',
    live: '#',
    repo: '#'
  },
  {
    id: 6,
    title: 'Analisador de Sentimento de Comentários',
    description: 'Pipeline para classificar sentimento e tópicos de feedbacks de clientes com dashboard de insights.',
    tech: ['Python', 'NLP', 'Plotly'],
    category: 'Machine Learning',
    featured: false,
    icon: '💬',
    live: '#',
    repo: '#'
  },
  {
    id: 7,
    title: 'Gerador de Resumos de Reunião',
    description: 'Automação para consolidar transcrições e gerar resumos acionáveis com próximos passos em formato estruturado.',
    tech: ['Python', 'Whisper', 'LLMs'],
    category: 'RAG & LLMs',
    featured: true,
    icon: '📝',
    live: '#',
    repo: '#'
  },
  {
    id: 8,
    title: 'Detecção de Fraudes em Transações',
    description: 'Modelo supervisionado para identificar padrões suspeitos com gatilhos automáticos para revisão.',
    tech: ['Python', 'XGBoost', 'SQL'],
    category: 'Machine Learning',
    featured: false,
    icon: '🛡️',
    live: '#',
    repo: '#'
  },
  {
    id: 9,
    title: 'RAG para Base de Conhecimento Interna',
    description: 'Busca semântica para documentos internos com respostas rastreáveis e atualização contínua de fontes.',
    tech: ['Python', 'FAISS', 'FastAPI'],
    category: 'RAG & LLMs',
    featured: true,
    icon: '📚',
    live: '#',
    repo: '#'
  },
  {
    id: 10,
    title: 'Painel de Métricas de Modelos',
    description: 'Dashboard para acompanhar drift, acurácia e latência de modelos em produção com alertas.',
    tech: ['Python', 'Streamlit', 'MLflow'],
    category: 'MLOps',
    featured: false,
    icon: '📈',
    live: '#',
    repo: '#'
  },
  {
    id: 11,
    title: 'Pipeline ETL com Enriquecimento por IA',
    description: 'ETL automatizado com normalização, deduplicação e enriquecimento semântico de registros.',
    tech: ['Python', 'Airflow', 'OpenAI API'],
    category: 'Integrações',
    featured: false,
    icon: '⚙️',
    live: '#',
    repo: '#'
  },
  {
    id: 12,
    title: 'Assistente para Triagem de Currículos',
    description: 'Sistema para comparar perfis com vagas e gerar ranking explicável com critérios de aderência.',
    tech: ['Python', 'NLP', 'FastAPI'],
    category: 'AI Agents',
    featured: false,
    icon: '👩‍💻',
    live: '#',
    repo: '#'
  },
  {
    id: 13,
    title: 'Motor de Recomendação de Conteúdo',
    description: 'Recomendador híbrido para sugerir conteúdos relevantes e aumentar retenção de usuários.',
    tech: ['Python', 'Surprise', 'Pandas'],
    category: 'Machine Learning',
    featured: false,
    icon: '🎯',
    live: '#',
    repo: '#'
  },
  {
    id: 14,
    title: 'Validador Inteligente de Formulários',
    description: 'Validação semântica de textos para detectar inconsistências e sugerir correções automaticamente.',
    tech: ['Python', 'Regex', 'LLMs'],
    category: 'AI Agents',
    featured: false,
    icon: '✅',
    live: '#',
    repo: '#'
  },
  {
    id: 15,
    title: 'API de Extração de Entidades',
    description: 'Serviço para reconhecer entidades nomeadas em documentos e exportar dados estruturados.',
    tech: ['Python', 'spaCy', 'FastAPI'],
    category: 'RAG & LLMs',
    featured: false,
    icon: '🧾',
    live: '#',
    repo: '#'
  },
  {
    id: 16,
    title: 'Agente para Follow-up Comercial',
    description: 'Agente que cria mensagens personalizadas de follow-up com base em histórico de interação do cliente.',
    tech: ['Python', 'LLMs', 'CRM API'],
    category: 'AI Agents',
    featured: false,
    icon: '📬',
    live: '#',
    repo: '#'
  }
];

export const skills = [
  { category: 'AI & ML', items: ['LLMs', 'RAG', 'Prompt Engineering', 'Machine Learning', 'QLoRA', 'AI Agents'] },
  { category: 'MLOps & Infra', items: ['Docker', 'Kubernetes', 'CI/CD', 'MLflow'] },
  { category: 'Linguagens', items: ['Python', 'JavaScript', 'SQL', 'Bash'] },
  { category: 'Frameworks', items: ['FastAPI', 'React', 'LangChain', 'Streamlit'] }
];

export const timeline = [
  { year: '2023 - 2025', title: 'Tecnólogo em Sistemas para Internet', org: 'Cruzeiro do Sul', type: 'education' },
  { year: '2021 - 2026', title: 'Bacharelado em Comunicação em Mídias Digitais', org: 'UFPB', type: 'education' },
  { year: '2024', title: 'Intercâmbio em Portugal', org: 'Instituto Politécnico de Bragança, campus Mirandela', type: 'education' },
  { year: '2024', title: 'Certificações em AI Engineer', org: 'LLM Engineering, RAG, QLoRA, Agents', type: 'cert' },
  { year: '2020 - Atual', title: 'Projetos em IA, Python e UX', org: 'Projetos práticos, freelas e pesquisa aplicada', type: 'exp' }
];

export const contactInfo = {
  email: 'ravtra301@gmail.com',
  phone: '(83) 99928-7661',
  location: 'João Pessoa, Paraíba',
  linkedin: 'https://linkedin.com/in/rayara-vilar',
  github: 'https://github.com/RayaraVilar',
  resume: import.meta.env.VITE_CV_LINK || '#'
};
