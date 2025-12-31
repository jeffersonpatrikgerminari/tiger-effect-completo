export type Lang = "pt" | "en";

export const dict = {
  pt: {
    brand: {
      title: "Efeito Tigre",
      subtitle: "Trilogia sobre vício em apostas digitais e algoritmos predatórios"
    },
    nav: {
      home: "Início",
      trilogy: "A Trilogia",
      algorithm: "Por Dentro do Algoritmo",
      community: "Portal de Apoio",
      authors: "Sobre os Autores"
    },
    common: {
      language: "Idioma",
      pt: "PT-BR",
      en: "EN",
      learnMore: "Saiba mais",
      buy: "Comprar",
      open: "Abrir",
      back: "Voltar",
      loading: "Carregando…",
      required: "Obrigatório",
      optional: "Opcional"
    },
    home: {
      heroTag: "Dark Noir / Tech",
      heroTitle: "O jogo não quer que você vença, ele quer que você fique.",
      heroLead:
        "Uma trilogia literária sobre dependência digital, engenharia do quase e a recuperação como ato coletivo.",
      ctaTrilogy: "Explorar a Trilogia",
      ctaAlgorithm: "Entender o Algoritmo",
      ctaCommunity: "Entrar no Portal de Apoio",
      proofTitle: "Sobre o que é o Efeito Tigre",
      proofPoints: [
        "A queda individual: o silêncio, a madrugada e a mente negociando com o abismo.",
        "A arquitetura do sistema: retenção, quase-vitórias e design predatório.",
        "A recuperação: grupos de apoio, presença e interrupção do ciclo."
      ],
      warning:
        "Conteúdo educativo e literário. Se você estiver em sofrimento, busque apoio de pessoas de confiança e serviços locais de saúde."
    },
    trilogy: {
      title: "A Trilogia",
      lead:
        "Três volumes, um mesmo padrão: o lucro real não está na vitória — está na permanência.",
      boxText:
        "Não é sobre “perdedores”. É sobre a mentira moderna do atalho — e o preço do ciclo.",
      books: [
        {
          vol: "Vol. 1",
          title: "Nas Garras do Tigre",
          titleEnHint: "The Tiger’s Grip",
          cover: "/books/vol1.jpg",
          logline: "A queda individual.",
          synopsis:
            "André, às 03:14, encara um retângulo luminoso no silêncio da casa. O que começou como curiosidade vira urgência: uma plataforma desenhada para converter frustração em repetição e esperança em combustível. Aqui, o tempo é medido em ciclos — e cada ciclo cobra mais.",
          buyUrl: "#"
        },
        {
          vol: "Vol. 2",
          title: "A Fome do Tigre",
          titleEnHint: "The Tiger’s Hunger",
          cover: "/books/vol2.jpg",
          logline: "A arquitetura do sistema/algoritmo.",
          synopsis:
            "Neste volume, a narrativa entra no coração do sistema: a engenharia do quase, o ponto de orvalho e a retenção como método. Não há vilões caricatos; há uma infraestrutura que aprende com cada clique e reorganiza o ambiente para que as escolhas pareçam livres.",
          buyUrl: "#"
        },
        {
          vol: "Vol. 3",
          title: "O Tigre de Vidro: Cemitério de Ilusões",
          titleEnHint: "The Glass Tiger: Cemetery of Illusions",
          cover: "/books/vol3.jpg",
          logline: "A recuperação e grupos de apoio.",
          synopsis:
            "O jogo sai do centro e entram as pessoas. Um grupo de apoio, histórias diferentes e um desfecho estruturalmente idêntico: ninguém começa pelo dinheiro. Começa por dor, cansaço, luto e solidão. A saída não é sorte — é reconhecimento, fala e presença.",
          buyUrl: "#"
        }
      ]
    },
    algorithm: {
      title: "Por Dentro do Algoritmo",
      lead:
        "Duas ideias para enxergar o que a interface esconde: a Engenharia do Quase e o Ponto de Orvalho.",
      blocks: [
        {
          title: "Engenharia do Quase",
          subtitle: "Quando a vitória não é o objetivo — a permanência é.",
          body:
            "É o design que fabrica “quase-vitórias” e micro-recompensas para manter o cérebro em busca do próximo giro. O sistema ajusta estímulos (ritmo, cor, som, timing) para transformar frustração em insistência — sem precisar mentir explicitamente."
        },
        {
          title: "Ponto de Orvalho",
          subtitle: "A hora vulnerável em que a mente baixa a guarda.",
          body:
            "É o momento em que fadiga, silêncio e isolamento criam uma janela de decisão frágil. A plataforma aprende padrões: quando você tende a ceder, qual mensagem “funciona”, que tipo de gatilho te devolve ao ciclo."
        }
      ],
      section2Title: "Sinais de retenção predatória",
      bullets: [
        "Reforço intermitente (o imprevisível vicia).",
        "Quase-vitórias (o cérebro interpreta como ‘faltou pouco’).",
        "Ausência de fricção para continuar; fricção para parar.",
        "Notificações no timing da vulnerabilidade.",
        "Normalização social: “é só distração”, “ajuda a aguentar”."
      ]
    },
    authors: {
      title: "Sobre os Autores",
      lead:
        "Escrita a quatro mãos para traduzir o que é íntimo, técnico e social: o vício como arquitetura.",
      people: [
        {
          name: "Jefferson Patrik Germinari",
          role: "Autor",
          bio:
            "Escrita psicológica e investigativa sobre comportamento, dor e repetição — onde a promessa de controle vira aprisionamento."
        },
        {
          name: "Marcos Ewerton Germinari",
          role: "Autor",
          bio:
            "Foco narrativo na engrenagem por trás do desejo: sistemas, incentivos e a estética invisível que sustenta a permanência."
        }
      ]
    },
    community: {
      title: "Portal de Apoio",
      lead:
        "Comunidade, fórum e diário de interrupção do ciclo. Estrutura pronta para Supabase Auth e banco.",
      hub: {
        loginTitle: "Login/Cadastro",
        loginDesc: "Entre com e-mail e senha, ou crie uma conta (Supabase Auth).",
        dashboardTitle: "Dashboard",
        dashboardDesc: "Seu espaço: atalhos, progresso e acesso ao fórum.",
        forumTitle: "Fórum",
        forumDesc: "Lista de tópicos + novo post (Supabase Table)."
      },
      createdMsg: "Conta criada. Verifique seu e-mail (se a confirmação estiver ativa).",
      goForum: "Ir para o Fórum",
      shortcutsTitle: "Atalhos",
      shortcutsBullets: [
        "Se sentir vontade: espere 10 minutos e escreva aqui o gatilho.",
        "Evite o ‘ponto de orvalho’ (madrugada, cansaço, solidão).",
        "Peça companhia: presença reduz impulsos."
      ],
      forumGuideTitle: "Guia rápido",
      forumGuideBullets: [
        "Descreva o gatilho (hora, emoção, contexto).",
        "Sem julgamentos: foco em interrupção do ciclo.",
        "Compartilhe estratégias que funcionaram pra você."
      ],

      loginTitle: "Entrar ou criar conta",
      email: "E-mail",
      password: "Senha",
      signIn: "Entrar",
      signUp: "Criar conta",
      signOut: "Sair",
      dashboardTitle: "Dashboard",
      dashboardLead:
        "Seu espaço seguro: progresso, lembretes e acesso rápido ao fórum.",
      forumTitle: "Fórum",
      forumLead:
        "Tópicos da comunidade. Sem moralismo. Com presença.",
      newTopic: "Novo tópico",
      topicTitle: "Título",
      topicBody: "Mensagem",
      publish: "Publicar",
      emptyForum:
        "Ainda não há tópicos. Seja a primeira pessoa a abrir uma conversa."
    },
    footer: {
      note:
        "Efeito Tigre é uma obra literária e um projeto comunitário. Se você estiver em risco ou em sofrimento, procure apoio profissional e pessoas de confiança.",
      rights: "© 2026 Efeito Tigre. Todos os direitos reservados."
    }
  },

  en: {
    brand: {
      title: "Tiger Effect",
      subtitle: "A trilogy about digital betting addiction and predatory algorithms"
    },
    nav: {
      home: "Home",
      trilogy: "The Trilogy",
      algorithm: "Inside the Algorithm",
      community: "Support Portal",
      authors: "About the Authors"
    },
    common: {
      language: "Language",
      pt: "PT-BR",
      en: "EN",
      learnMore: "Learn more",
      buy: "Buy",
      open: "Open",
      back: "Back",
      loading: "Loading…",
      required: "Required",
      optional: "Optional"
    },
    home: {
      heroTag: "Dark Noir / Tech",
      heroTitle: "The game doesn’t want you to win — it wants you to stay.",
      heroLead:
        "A literary trilogy about digital dependence, near-miss engineering, and recovery as a collective act.",
      ctaTrilogy: "Explore the Trilogy",
      ctaAlgorithm: "Understand the Algorithm",
      ctaCommunity: "Enter the Support Portal",
      proofTitle: "What Tiger Effect is about",
      proofPoints: [
        "The individual fall: silence, late nights, and a mind bargaining with the abyss.",
        "The system’s architecture: retention, near-wins, and predatory design.",
        "Recovery: support groups, presence, and breaking the cycle."
      ],
      warning:
        "Educational and literary content. If you’re struggling, seek support from trusted people and local health services."
    },
    trilogy: {
      title: "The Trilogy",
      lead:
        "Three volumes, one pattern: the real profit isn’t in winning — it’s in staying.",
      boxText:
        "Not about “losers”. About the modern lie of shortcuts — and the cost of the cycle.",
      books: [
        {
          vol: "Vol. 1",
          title: "In the Tiger’s Grip",
          titleEnHint: "The Tiger’s Grip",
          cover: "/books/vol1.jpg",
          logline: "The individual fall.",
          synopsis:
            "At 03:14, André faces a glowing rectangle in the silence of home. What began as curiosity becomes urgency: a platform engineered to turn frustration into repetition and hope into fuel. Here, time is measured in cycles — and each cycle charges more.",
          buyUrl: "#"
        },
        {
          vol: "Vol. 2",
          title: "The Tiger’s Hunger",
          titleEnHint: "The Tiger’s Hunger",
          cover: "/books/vol2.jpg",
          logline: "The system/algorithm architecture.",
          synopsis:
            "This volume enters the system’s core: near-miss engineering, the dew-point window, and retention as method. No cartoon villains — just an infrastructure that learns from every click and rearranges the environment so choices feel free.",
          buyUrl: "#"
        },
        {
          vol: "Vol. 3",
          title: "The Glass Tiger: Cemetery of Illusions",
          titleEnHint: "The Glass Tiger: Cemetery of Illusions",
          cover: "/books/vol3.jpg",
          logline: "Recovery and support groups.",
          synopsis:
            "The game steps aside and people take the stage. A support group, different lives, the same structural ending: nobody starts with money. They start with pain, grief, exhaustion, and loneliness. The way out isn’t luck — it’s recognition, voice, and presence.",
          buyUrl: "#"
        }
      ]
    },
    algorithm: {
      title: "Inside the Algorithm",
      lead:
        "Two lenses to see what the interface hides: Near-Miss Engineering and the Dew Point.",
      blocks: [
        {
          title: "Near-Miss Engineering",
          subtitle: "When winning isn’t the goal — staying is.",
          body:
            "A design that manufactures ‘almost-wins’ and micro-rewards to keep the brain chasing the next spin. The system tunes stimuli (pace, color, sound, timing) to turn frustration into persistence — without ever needing an explicit lie."
        },
        {
          title: "Dew Point",
          subtitle: "The vulnerable hour when the mind drops its guard.",
          body:
            "A decision window shaped by fatigue, silence, and isolation. The platform learns patterns: when you tend to give in, which message ‘works’, which trigger pulls you back into the cycle."
        }
      ],
      section2Title: "Predatory retention signals",
      bullets: [
        "Intermittent reinforcement (unpredictability hooks).",
        "Near-wins (the brain reads it as ‘almost’).",
        "Low friction to continue; high friction to stop.",
        "Notifications timed to vulnerability.",
        "Social normalization: “just distraction”, “helps me cope”."
      ]
    },
    authors: {
      title: "About the Authors",
      lead:
        "Written by two authors to translate what is intimate, technical, and social: addiction as architecture.",
      people: [
        {
          name: "Jefferson Patrik Germinari",
          role: "Author",
          bio:
            "Psychological and investigative writing about behavior, pain, and repetition — where the promise of control turns into captivity."
        },
        {
          name: "Marcos Ewerton Germinari",
          role: "Author",
          bio:
            "Narrative focus on the machinery behind desire: systems, incentives, and the invisible aesthetics that sustain ‘staying’."
        }
      ]
    },
    community: {
      title: "Support Portal",
      lead:
        "Community, forum, and a cycle-breaking journal. Ready for Supabase Auth + database.",
      hub: {
        loginTitle: "Login/Sign up",
        loginDesc: "Sign in with email and password or create an account (Supabase Auth).",
        dashboardTitle: "Dashboard",
        dashboardDesc: "Your space: shortcuts, progress, and forum access.",
        forumTitle: "Forum",
        forumDesc: "Topic list + new post (Supabase Table)."
      },
      createdMsg: "Account created. Check your email (if confirmation is enabled).",
      goForum: "Go to Forum",
      shortcutsTitle: "Shortcuts",
      shortcutsBullets: [
        "If an urge hits: wait 10 minutes and write the trigger here.",
        "Avoid the ‘dew point’ (late night, fatigue, isolation).",
        "Ask for company: presence reduces impulses."
      ],
      forumGuideTitle: "Quick guide",
      forumGuideBullets: [
        "Describe the trigger (time, emotion, context).",
        "No judgment: focus on breaking the cycle.",
        "Share strategies that worked for you."
      ],

      loginTitle: "Sign in or create an account",
      email: "Email",
      password: "Password",
      signIn: "Sign in",
      signUp: "Sign up",
      signOut: "Sign out",
      dashboardTitle: "Dashboard",
      dashboardLead:
        "Your safe space: progress, reminders, and quick access to the forum.",
      forumTitle: "Forum",
      forumLead:
        "Community threads. No moralizing. Just presence.",
      newTopic: "New topic",
      topicTitle: "Title",
      topicBody: "Message",
      publish: "Publish",
      emptyForum:
        "No topics yet. Be the first to open a conversation."
    },
    footer: {
      note:
        "Tiger Effect is a literary work and a community project. If you’re at risk or in distress, seek professional help and trusted people.",
      rights: "© 2026 Tiger Effect. All rights reserved."
    }
  }
} as const;
