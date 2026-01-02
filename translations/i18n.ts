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
      heroCover: "/books/pt/box.png",
      proofTitle: "Sobre o que é o Efeito Tigre",
      proofPoints: [
        "A queda individual: o silêncio, a madrugada e a mente negociando com o abismo.",
        "A arquitetura do sistema: retenção, quase-vitórias e design predatório.",
        "A recuperação: grupos de apoio, presença e interrupção do ciclo."
      ],
      pillarLabels: ["Queda", "Arquitetura", "Recuperação"],
      supportCard: {
        kicker: "COMUNIDADE",
        title: "Portal de Apoio: presença, interrupção e conversa real.",
        lead:
          "O fórum é parte do projeto: um espaço para relatar gatilhos, pedir companhia e dividir estratégias que funcionaram.",
        cta: "Entrar no Portal"
      },
            warning:
        "Conteúdo educativo e literário. Se você estiver em sofrimento, busque apoio de pessoas de confiança e serviços locais de saúde."
    },
    trilogy: {
      title: "A Trilogia",
      lead:
        "Três volumes, um mesmo padrão: o lucro real não está na vitória — está na permanência.",
      boxText:
        "Não é sobre “perdedores”. É sobre a mentira moderna do atalho — e o preço do ciclo.",
      boxCover: "/books/pt/box.png",

      // ✅ IMPORTANTE: Vol. 1–3 primeiro; BOX por último.
      books: [
        {
          vol: "Vol. 1",
          title: "Nas Garras do Tigre",
          titleEnHint: "In the Tiger’s Grip",
          cover: "/books/pt/vol1.png",
          logline: "A queda individual.",
          synopsis:
            "André, às 03:14, encara um retângulo luminoso no silêncio da casa. O que começou como curiosidade vira urgência: uma plataforma desenhada para converter frustração em repetição e esperança em combustível. Aqui, o tempo é medido em ciclos — e cada ciclo cobra mais.",
          buyUrl: "#"
        },
        {
          vol: "Vol. 2",
          title: "A Fome do Tigre",
          titleEnHint: "The Tiger’s Hunger",
          cover: "/books/pt/vol2.png",
          logline: "A arquitetura do sistema/algoritmo.",
          synopsis:
            "Neste volume, a narrativa entra no coração do sistema: a engenharia do quase, o ponto de orvalho e a retenção como método. Não há vilões caricatos; há uma infraestrutura que aprende com cada clique e reorganiza o ambiente para que as escolhas pareçam livres.",
          buyUrl: "#"
        },
        {
          vol: "Vol. 3",
          title: "O Tigre de Vidro: Cemitério de Ilusões",
          titleEnHint: "The Glass Tiger: Cemetery of Illusions",
          cover: "/books/pt/vol3.png",
          logline: "A recuperação e grupos de apoio.",
          synopsis:
            "O jogo sai do centro e entram as pessoas. Um grupo de apoio, histórias diferentes e um desfecho estruturalmente idêntico: ninguém começa pelo dinheiro. Começa por dor, cansaço, luto e solidão. A saída não é sorte — é reconhecimento, fala e presença.",
          buyUrl: "#"
        },
        {
          vol: "BOX",
          title: "Efeito Tigre",
          titleEnHint: "Tiger Effect (Box Set)",
          cover: "/books/pt/box.png",
          logline: "A trilogia completa.",
          synopsis:
            "O box reúne os três volumes — a queda individual, a arquitetura do algoritmo e a recuperação como ato coletivo. Um mesmo padrão atravessa tudo: a interface não vende vitória; vende permanência. E, no centro, a pergunta incômoda: o que está sendo treinado em você, repetição após repetição?",
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
      kicker: "COMUNIDADE",
      lead:
        "Comunidade, fórum e diário de interrupção do ciclo. Estrutura pronta para Supabase Auth e banco.",
      resources: {
        kicker: "RECURSOS",
        title: "Canais de apoio e ferramentas",
        lead:
          "Uma curadoria de recursos gratuitos e especializados (Brasil e exterior) e de barreiras digitais para reduzir recaídas em momentos de impulso.",
        disclaimer:
          "Informativo. Não substitui atendimento profissional. Se você estiver em crise, busque serviços locais de saúde e pessoas de confiança.",
        tabChannels: "Canais de apoio",
        tabTools: "Apps & dispositivos",
        open: "Abrir site",
        noLink: "Sem link direto",
        phone: "Telefone",
        whatsapp: "WhatsApp",
        email: "E-mail"
      },
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
      nickname: "Apelido",
      nicknamePlaceholder: "Como você quer ser chamado no fórum",
      nicknameHint: "Será exibido publicamente nas postagens. Evite usar seu nome completo.",
      nicknameRequired: "Informe um apelido para continuar.",
      nicknameInvalid: "Apelido inválido. Use 2–24 caracteres (letras, números, espaço, _ ou -).",
      saveNickname: "Salvar apelido",
      nicknameSaved: "Apelido salvo.",
      needNickname: "Defina um apelido no Dashboard antes de publicar no fórum.",
      anonymous: "Anônimo",

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
        "Ainda não há tópicos. Seja a primeira pessoa a abrir uma conversa.",
      removedTag: "Removido",
      removedContent: "Conteúdo removido pela moderação.",
      loginRequired: "Você precisa estar logado.",
      publishError: "Erro ao publicar.",
      replyTitle: "Responder",
      replyPlaceholder: "Escreva sua resposta…",
      publishReply: "Publicar resposta",
      replies: "Respostas",
      noReplies: "Ainda não há respostas. Seja a primeira pessoa a responder.",
      replyError: "Erro ao publicar resposta.",
      replyDisabledRemoved: "Este tópico foi removido. Respostas desativadas.",
      report: "Denunciar",
      reportTitle: "Denunciar conteúdo",
      reportReason: "Motivo",
      reportDetails: "Detalhes",
      optionalDetails: "Opcional: descreva o problema",
      sendReport: "Enviar denúncia",
      reportSent: "Denúncia enviada.",
      reportError: "Erro ao enviar denúncia.",
      reportReasons: {
        spam: "Spam / Golpe",
        hate: "Discurso de ódio",
        harassment: "Assédio / Ameaça",
        self_harm: "Autoagressão",
        illegal: "Ilegal / Perigoso",
        other: "Outro"
      },
      adminTools: "Ferramentas do administrador",
      openReports: "Ver denúncias",
      adminReportsTitle: "Denúncias",
      adminReportsLead: "Gerencie denúncias e remova conteúdos problemáticos.",
      markResolved: "Marcar resolvida",
      noReports: "Nenhuma denúncia encontrada.",
      noDetails: "Sem detalhes adicionais.",
      targetMissing: "Publicação não encontrada (pode ter sido removida).",
      openTopic: "Abrir tópico",
      topicNotFound: "Tópico não encontrado.",
      adminRemove: "Remover"
    },
    footer: {
      note:
        "Efeito Tigre é uma obra literária e um projeto comunitário. Se você estiver em risco ou em sofrimento, procure apoio profissional e pessoas de confiança.",
      rights: "© 2026 Efeito Tigre. Todos os direitos reservados."
    }
  

    bookPages: {
      eyebrow: "TRILOGIA",
      backToTrilogy: "Voltar para A Trilogia",
      whatYoullFind: "O que você vai encontrar",
      microExcerpt: "Microtrecho",
      presentationTitle: "Apresentação",
      contentNotice: "Aviso de conteúdo",
      contentNoticeLead:
        "O tema central é o Transtorno do Jogo (apostas online), com foco em compreensão, prevenção e recuperação — sem glamourização.",
      sampleTitle: "Ler amostra",
      sampleLead:
        "Um trecho curto para você sentir o ritmo e o tom (sem spoilers relevantes).",

      efeitoTigre: {
        vol: "BOX / Manifesto",
        title: "Efeito Tigre",
        subtitle: "Apresentação da trilogia e do conceito",
        cover: "/books/pt/box.png",
        synopsis:
          "Uma trilogia sobre vício em apostas digitais e algoritmos predatórios. Não é sobre azar ou falta de força — é sobre um sistema feito para te manter jogando.",
        bullets: [
          "O que é o ‘Efeito Tigre’ e por que ele captura",
          "Por que a permanência vale mais que a vitória",
          "Como a engenharia do quase cria retorno compulsivo",
          "O arco completo: promessa, queda e recuperação"
        ],
        excerpt:
          "O lucro real não está na vitória — está na permanência.",
        presentation: [
          "‘Efeito Tigre’ apresenta a trilogia como um mapa narrativo do Transtorno do Jogo na era das apostas digitais: primeiro a promessa, depois a captura, e por fim a tentativa concreta de sair do ciclo.",
          "A história não trata pessoas como fracas. Trata a lógica estrutural do produto: reforços intermitentes, quase-vitórias, personalização e reconfiguração do ambiente para que a escolha pareça sempre ‘livre’.",
          "Cada volume aprofunda uma camada: o golpe do dinheiro fácil, a arquitetura do algoritmo e, no desfecho, a reconstrução por meio de barreiras, linguagem e apoio coletivo.",
          "O objetivo é simples e difícil: reconhecer o mecanismo a tempo de interromper."
        ],
        triggers: [
          "Apostas/jogos de azar e compulsão",
          "Perdas financeiras e pressão emocional",
          "Manipulação digital e reforço intermitente"
        ],
        buyUrl: "#"
      },

      nasGarrasDoTigre: {
        vol: "Vol. 1",
        title: "Nas Garras do Tigre",
        subtitle: "O golpe do dinheiro fácil",
        cover: "/books/pt/vol1.png",
        synopsis:
          "O começo do ciclo: quando a promessa de ‘resolver a vida’ encontra cansaço, silêncio e um clique. A queda não acontece de uma vez — acontece por repetição.",
        bullets: [
          "O primeiro contato com a promessa e suas ‘provas’",
          "O efeito do quase e a sensação de controle",
          "Gatilhos emocionais: cansaço, luto, solidão, vergonha",
          "O início da perda de espontaneidade e de tempo",
          "Como a narrativa do lucro vira desculpa"
        ],
        excerpt:
          "Ninguém começa pelo dinheiro. O dinheiro aparece depois — como justificativa.",
        presentation: [
          "O Volume 1 abre a trilogia pela porta mais comum: a promessa. Não a promessa abstrata, mas aquela que chega no momento certo — quando o corpo está cansado e a mente quer um atalho.",
          "Aos poucos, o jogo deixa de ser evento e vira rotina. A pessoa não percebe ‘quando entrou’, porque entrou por microdecisões: mais uma tentativa, mais um dia, mais um respiro.",
          "O livro acompanha a transformação: de curiosidade em hábito; de hábito em compensação; de compensação em perda de controle."
        ],
        triggers: [
          "Apostas/jogos de azar e compulsão",
          "Ansiedade, estresse e solidão",
          "Dívidas e sensação de urgência"
        ],
        buyUrl: "#"
      },

      aFomeDoTigre: {
        vol: "Vol. 2",
        title: "A Fome do Tigre",
        subtitle: "A arquitetura do abismo",
        cover: "/books/pt/vol2.png",
        synopsis:
          "Aqui o foco muda: menos ‘sorte’, mais sistema. O que parece decisão individual revela um mecanismo que aprende, mede e empurra.",
        bullets: [
          "Como o produto molda comportamento por repetição",
          "Engenharia do quase e reforço intermitente",
          "Personalização: quando o sistema ‘lê’ você",
          "A ilusão de ganho e o custo real do ciclo",
          "Por que a pergunta deixa de ser ‘por que cliquei?’"
        ],
        excerpt:
          "O problema não está no clique — está no sistema que aprende com cada um deles.",
        presentation: [
          "O Volume 2 entra na ‘arquitetura’: como a experiência é desenhada para manter você perto do botão, mesmo quando você sabe que vai perder.",
          "A narrativa mostra a fome como metáfora: não é só desejo de dinheiro, é desejo de alívio, de anestesia, de sentido rápido — e o sistema oferece exatamente isso, em doses calculadas.",
          "O leitor percebe que o ciclo não depende da vitória: depende da esperança renovada pela quase-vitória."
        ],
        triggers: [
          "Apostas/jogos de azar e compulsão",
          "Manipulação algorítmica e urgência",
          "Perdas financeiras e conflitos familiares"
        ],
        buyUrl: "#"
      },

      oTigreDeVidro: {
        vol: "Vol. 3",
        title: "O Tigre de Vidro: Cemitério de Ilusões",
        subtitle: "A recuperação e o apoio",
        cover: "/books/pt/vol3.png",
        synopsis:
          "Depois da queda, vem a pergunta real: como viver sem a promessa? A saída não é sorte — é reconhecimento, fala e presença.",
        bullets: [
          "Grupos de apoio e a força do coletivo",
          "Interrupções: pequenas, repetidas, imperfeitas",
          "Barreiras digitais e proteção contra impulsos",
          "Reconstrução de rotina, corpo e linguagem",
          "O pós-jogo: culpa, reparação e recomeço"
        ],
        excerpt:
          "O grupo não existe para salvar. Existe para interromper trajetórias.",
        presentation: [
          "No desfecho, a trilogia troca o centro: sai o ‘jogo’ e entram as pessoas — e o trabalho silencioso de voltar a existir no mundo sem o vício.",
          "O livro mostra o papel do grupo: não como milagre, mas como mapa humano, onde cada história vira espelho e cada encontro vira freio.",
          "A recuperação aparece como prática: barreiras, rotina, fala e escolhas mínimas repetidas até virarem estrutura."
        ],
        triggers: [
          "Apostas/jogos de azar e recaída",
          "Culpa, vergonha e pressão social",
          "Situações de crise financeira"
        ],
        buyUrl: "#"
      }
    },
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
      heroCover: "/books/en/box.png",
      proofTitle: "What Tiger Effect is about",
      proofPoints: [
        "The individual fall: silence, late nights, and a mind bargaining with the abyss.",
        "The system’s architecture: retention, near-wins, and predatory design.",
        "Recovery: support groups, presence, and breaking the cycle."
      ],
      pillarLabels: ["Fall", "Architecture", "Recovery"],
      supportCard: {
        kicker: "COMMUNITY",
        title: "Support Portal: presence, interruption, and real conversation.",
        lead:
          "The forum is part of the project: a place to share triggers, ask for company, and trade strategies that worked.",
        cta: "Enter the Portal"
      },
            warning:
        "Educational and literary content. If you’re struggling, seek support from trusted people and local health services."
    },
    trilogy: {
      title: "The Trilogy",
      lead:
        "Three volumes, one pattern: the real profit isn’t in winning — it’s in staying.",
      boxText:
        "Not about “losers”. About the modern lie of shortcuts — and the cost of the cycle.",
      boxCover: "/books/en/box.png",

      // ✅ IMPORTANT: Vol. 1–3 first; BOX last.
      books: [
        {
          vol: "Vol. 1",
          title: "In the Tiger’s Grip",
          titleEnHint: "In the Tiger’s Grip",
          cover: "/books/en/vol1.png",
          logline: "The individual fall.",
          synopsis:
            "At 03:14, André faces a glowing rectangle in the silence of home. What began as curiosity becomes urgency: a platform engineered to turn frustration into repetition and hope into fuel. Here, time is measured in cycles — and each cycle charges more.",
          buyUrl: "#"
        },
        {
          vol: "Vol. 2",
          title: "The Tiger’s Hunger",
          titleEnHint: "The Tiger’s Hunger",
          cover: "/books/en/vol2.png",
          logline: "The system/algorithm architecture.",
          synopsis:
            "This volume enters the system’s core: near-miss engineering, the dew-point window, and retention as method. No cartoon villains — just an infrastructure that learns from every click and rearranges the environment so choices feel free.",
          buyUrl: "#"
        },
        {
          vol: "Vol. 3",
          title: "The Glass Tiger: Cemetery of Illusions",
          titleEnHint: "The Glass Tiger: Cemetery of Illusions",
          cover: "/books/en/vol3.png",
          logline: "Recovery and support groups.",
          synopsis:
            "The game steps aside and people take the stage. A support group, different lives, the same structural ending: nobody starts with money. They start with pain, grief, exhaustion, and loneliness. The way out isn’t luck — it’s recognition, voice, and presence.",
          buyUrl: "#"
        },
        {
          vol: "BOX",
          title: "Tiger Effect",
          titleEnHint: "Tiger Effect (Box Set)",
          cover: "/books/en/box.png",
          logline: "The complete trilogy.",
          synopsis:
            "The box set brings all three volumes together — the individual fall, the algorithm’s architecture, and recovery as a collective act. One pattern runs through everything: the interface doesn’t sell victory; it sells staying. And at the center is the uncomfortable question: what is being trained in you, repetition after repetition?",
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
      kicker: "COMMUNITY",
      lead:
        "Community, forum, and a cycle-breaking journal. Ready for Supabase Auth + database.",
      resources: {
        kicker: "RESOURCES",
        title: "Support channels and tools",
        lead:
          "A curated list of free and specialized support resources (Brazil and worldwide) plus digital barriers to reduce relapse during urge moments.",
        disclaimer:
          "Informational only. Not a substitute for professional care. If you’re in crisis, seek local health services and trusted people.",
        tabChannels: "Support channels",
        tabTools: "Apps & devices",
        open: "Open website",
        noLink: "No direct link",
        phone: "Phone",
        whatsapp: "WhatsApp",
        email: "Email"
      },
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
      nickname: "Nickname",
      nicknamePlaceholder: "How you want to be seen in the forum",
      nicknameHint: "This will be public on posts. Avoid using your full name.",
      nicknameRequired: "Please enter a nickname to continue.",
      nicknameInvalid: "Invalid nickname. Use 2–24 characters (letters, numbers, space, _ or -).",
      saveNickname: "Save nickname",
      nicknameSaved: "Nickname saved.",
      needNickname: "Set a nickname in the Dashboard before posting.",
      anonymous: "Anonymous",

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
        "No topics yet. Be the first to open a conversation.",
      removedTag: "Removed",
      removedContent: "Content removed by moderation.",
      loginRequired: "You must be logged in.",
      publishError: "Failed to publish.",
      replyTitle: "Reply",
      replyPlaceholder: "Write your reply…",
      publishReply: "Post reply",
      replies: "Replies",
      noReplies: "No replies yet. Be the first to reply.",
      replyError: "Failed to post reply.",
      replyDisabledRemoved: "This topic was removed. Replies are disabled.",
      report: "Report",
      reportTitle: "Report content",
      reportReason: "Reason",
      reportDetails: "Details",
      optionalDetails: "Optional: describe the issue",
      sendReport: "Send report",
      reportSent: "Report sent.",
      reportError: "Failed to send report.",
      reportReasons: {
        spam: "Spam / Scam",
        hate: "Hate speech",
        harassment: "Harassment / Threats",
        self_harm: "Self-harm",
        illegal: "Illegal / Dangerous",
        other: "Other"
      },
      adminTools: "Admin tools",
      openReports: "View reports",
      adminReportsTitle: "Reports",
      adminReportsLead: "Review reports and remove harmful content.",
      markResolved: "Mark resolved",
      noReports: "No reports found.",
      noDetails: "No extra details.",
      targetMissing: "Post not found (it may have been removed).",
      openTopic: "Open topic",
      topicNotFound: "Topic not found.",
      adminRemove: "Remove"
    },
    footer: {
      note:
        "Tiger Effect is a literary work and a community project. If you’re at risk or in distress, seek professional help and trusted people.",
      rights: "© 2026 Tiger Effect. All rights reserved."
    }
  

    bookPages: {
      eyebrow: "TRILOGY",
      backToTrilogy: "Back to The Trilogy",
      whatYoullFind: "What you’ll find inside",
      microExcerpt: "Micro excerpt",
      presentationTitle: "Introduction",
      contentNotice: "Content notice",
      contentNoticeLead:
        "The central topic is Gambling Disorder (online betting), focused on understanding, prevention and recovery — without glamourising the behaviour.",
      sampleTitle: "Read a sample",
      sampleLead:
        "A short excerpt so you can feel the rhythm and tone (no meaningful spoilers).",

      efeitoTigre: {
        vol: "BOX / Manifesto",
        title: "Tiger Effect",
        subtitle: "The trilogy’s introduction and core idea",
        cover: "/books/en/box.png",
        synopsis:
          "A trilogy about online betting addiction and predatory algorithms. It’s not about weakness — it’s about a system built to keep you playing.",
        bullets: [
          "What the ‘Tiger Effect’ is and why it captures attention",
          "Why staying matters more than winning",
          "How near-miss design fuels compulsive return",
          "The full arc: promise, collapse and recovery"
        ],
        excerpt:
          "Real profit isn’t in winning — it’s in staying.",
        presentation: [
          "‘Tiger Effect’ frames the trilogy as a narrative map of Gambling Disorder in the era of digital betting: first the promise, then the capture, and finally the practical attempt to break the loop.",
          "The story refuses to blame individuals. It looks at product logic: intermittent reinforcement, near-misses, personalisation and an environment shaped to make choices feel ‘free’.",
          "Each volume deepens a layer: the easy-money hook, the algorithmic architecture, and — in the end — rebuilding through barriers, language and collective support.",
          "The goal is simple and hard: recognise the mechanism in time to interrupt it."
        ],
        triggers: [
          "Betting/gambling and compulsive behaviour",
          "Financial stress and emotional pressure",
          "Digital manipulation and intermittent reinforcement"
        ],
        buyUrl: "#"
      },

      nasGarrasDoTigre: {
        vol: "Vol. 1",
        title: "In the Tiger’s Grip",
        subtitle: "The easy-money hook",
        cover: "/books/en/vol1.png",
        synopsis:
          "The beginning of the loop: when the promise of ‘fixing everything’ meets fatigue, silence and a click. The fall isn’t sudden — it’s repetitive.",
        bullets: [
          "The first contact with the promise and its ‘proofs’",
          "Near-misses and the illusion of control",
          "Emotional triggers: fatigue, grief, loneliness, shame",
          "Losing spontaneity, time and attention",
          "How ‘profit’ becomes a justification"
        ],
        excerpt:
          "No one starts for the money. The money comes later — as an excuse.",
        presentation: [
          "Volume 1 opens through the most common doorway: the promise — arriving at the exact moment the mind wants an escape and the body is exhausted.",
          "Little by little, the game stops being an event and becomes routine. You don’t notice ‘when you got in’, because it happens through micro-decisions: one more try, one more day, one more breath.",
          "The book follows the shift: curiosity into habit; habit into compensation; compensation into loss of control."
        ],
        triggers: [
          "Betting/gambling and compulsion",
          "Anxiety, stress and loneliness",
          "Debt and urgency"
        ],
        buyUrl: "#"
      },

      aFomeDoTigre: {
        vol: "Vol. 2",
        title: "The Tiger’s Hunger",
        subtitle: "The architecture of the abyss",
        cover: "/books/en/vol2.png",
        synopsis:
          "Here the focus changes: less ‘luck’, more system. What looks like personal choice reveals a mechanism that learns, measures and nudges.",
        bullets: [
          "How products shape behaviour through repetition",
          "Near-miss engineering and intermittent reinforcement",
          "Personalisation: when the system ‘reads’ you",
          "The profit illusion and the real cost of the loop",
          "Why the question stops being ‘why did I click?’"
        ],
        excerpt:
          "The problem isn’t the click — it’s the system learning from every click.",
        presentation: [
          "Volume 2 enters the ‘architecture’: how the experience is designed to keep you close to the button, even when you already know you’re losing.",
          "Hunger becomes metaphor: not only hunger for money, but hunger for relief, numbness, quick meaning — and the system serves it in measured doses.",
          "You realise the loop doesn’t depend on winning. It depends on hope constantly refreshed by near-wins."
        ],
        triggers: [
          "Betting/gambling and compulsive behaviour",
          "Algorithmic manipulation and urgency",
          "Financial loss and family conflict"
        ],
        buyUrl: "#"
      },

      oTigreDeVidro: {
        vol: "Vol. 3",
        title: "The Glass Tiger: Cemetery of Illusions",
        subtitle: "Recovery and support",
        cover: "/books/en/vol3.png",
        synopsis:
          "After the collapse, the real question arrives: how do you live without the promise? The way out isn’t luck — it’s recognition, voice and presence.",
        bullets: [
          "Support groups and the power of the collective",
          "Interruptions: small, repeated, imperfect",
          "Digital barriers to protect against impulses",
          "Rebuilding routine, body and language",
          "After the game: guilt, repair and starting again"
        ],
        excerpt:
          "The group doesn’t exist to save. It exists to interrupt trajectories.",
        presentation: [
          "In the finale, the trilogy shifts the centre: the ‘game’ fades and people appear — and with them, the quiet labour of returning to life without addiction.",
          "The group isn’t a miracle. It’s a human map: each story becomes a mirror, each meeting becomes a brake.",
          "Recovery is portrayed as practice: barriers, routine, speech and small choices repeated until they become structure."
        ],
        triggers: [
          "Betting/gambling and relapse",
          "Guilt, shame and social pressure",
          "Financial crisis situations"
        ],
        buyUrl: "#"
      }
    },
}
} as const;

