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
      readSample: "Ler amostra",
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
          buyUrl: "#",
          href: "/trilogy/nas-garras-do-tigre"
        },
        {
          vol: "Vol. 2",
          title: "A Fome do Tigre",
          titleEnHint: "The Tiger’s Hunger",
          cover: "/books/pt/vol2.png",
          logline: "A arquitetura do sistema/algoritmo.",
          synopsis:
            "Neste volume, a narrativa entra no coração do sistema: a engenharia do quase, o ponto de orvalho e a retenção como método. Não há vilões caricatos; há uma infraestrutura que aprende com cada clique e reorganiza o ambiente para que as escolhas pareçam livres.",
          buyUrl: "#",
          href: "/trilogy/a-fome-do-tigre"
        },
        {
          vol: "Vol. 3",
          title: "O Tigre de Vidro: Cemitério de Ilusões",
          titleEnHint: "The Glass Tiger: Cemetery of Illusions",
          cover: "/books/pt/vol3.png",
          logline: "A recuperação e grupos de apoio.",
          synopsis:
            "O jogo sai do centro e entram as pessoas. Um grupo de apoio, histórias diferentes e um desfecho estruturalmente idêntico: ninguém começa pelo dinheiro. Começa por dor, cansaço, luto e solidão. A saída não é sorte — é reconhecimento, fala e presença.",
          buyUrl: "#",
          href: "/trilogy/o-tigre-de-vidro"
        },
        {
          vol: "BOX",
          title: "Efeito Tigre",
          titleEnHint: "Tiger Effect (Box Set)",
          cover: "/books/pt/box.png",
          logline: "A trilogia completa.",
          synopsis:
            "O box reúne os três volumes — a queda individual, a arquitetura do algoritmo e a recuperação como ato coletivo. Um mesmo padrão atravessa tudo: a interface não vende vitória; vende permanência. E, no centro, a pergunta incômoda: o que está sendo treinado em você, repetição após repetição?",
          buyUrl: "#",
          href: "/trilogy/efeito-tigre"
        }
      ]
    },

    bookPages: {
      eyebrow: "TRILOGIA",
      backToTrilogy: "Voltar para A Trilogia",
      whatYoullFind: "O que você vai encontrar",
      contentNotice: "Aviso de conteúdo",
      contentNoticeLead:
        "Sem sensacionalismo. Apenas o necessário para você decidir se este volume é para você agora.",
      sampleTitle: "Amostra",
      sampleLead: "Um microtrecho para sentir o tom, sem spoilers.",
      microExcerpt: "Microtrecho",
      presentationTitle: "Apresentação",

      efeitoTigre: {
        vol: "BOX / Manifesto",
        title: "Efeito Tigre",
        subtitle: "Uma nova forma de captura — silenciosa, portátil e socialmente aceita.",
        cover: "/books/pt/box.png",
        buyUrl: "#",
        synopsis:
          "O box reúne a trilogia e seu manifesto: a interface não vende vitória; vende permanência. A jornada vai da queda individual (Vol. 1), passa pela engenharia do desejo e da retenção (Vol. 2) e retorna ao humano — recuperação como ato coletivo (Vol. 3).",
        bullets: [
          "A tese central do box: o lucro real está na permanência, não na vitória.",
          "O arco completo: queda individual → arquitetura do sistema → recuperação coletiva.",
          "Mecanismos psicológicos e sociais do “só mais uma vez”, sem moralismo.",
          "Linguagem noir/tech: íntima, direta e perturbadoramente reconhecível.",
          "Chamadas práticas: amostra + Portal de Apoio com canais e barreiras digitais.",
        ],
        excerpt: "Em qualquer país, em qualquer idioma, a promessa é a mesma: um atalho. Um toque. Uma chance. Um alívio. Só mais uma vez.",
        triggers: [
          "Dependência em apostas/jogos e compulsão",
          "Pressão financeira e dívidas",
          "Ansiedade, insônia e isolamento",
          "Conflitos familiares e vergonha",
          "Linguagem intensa (sem sensacionalismo)",
        ],
        presentation: [
          "Efeito Tigre é uma trilogia sobre uma nova forma de captura — silenciosa, portátil e socialmente aceita.",
          "Em qualquer país, em qualquer idioma, a promessa é a mesma: um atalho. Um toque. Uma chance. Um alívio. Só mais uma vez.",
          "Mas o que parece entretenimento é, muitas vezes, um sistema: plataformas desenhadas para transformar frustração em repetição, culpa em insistência e adrenalina em orientação emocional. O tempo deixa de ser medido em horas e passa a ser medido em ciclos — e cada ciclo cobra mais do que o anterior.",
          "Nas garras do Tigre",
          "No primeiro volume, Nas garras do Tigre, você entra no lugar onde ninguém vê: a madrugada, o silêncio da casa, o corpo que não obedece e a mente que negocia com o próprio abismo. No segundo, A fome do Tigre, a narrativa amplia o foco e revela a engrenagem por trás do desejo: quando o jogo deixa de ser “um jogo” e vira método — uma arquitetura que aprende, ajusta e escala.",
          "E no desfecho, O Tigre de Vidro: Cemitério de Ilusões, o espetáculo cai e restam as pessoas. Um grupo de apoio, relatos diferentes, um mesmo padrão: ninguém começa pelo dinheiro. Começa por dor, cansaço, luto, solidão, excesso de controle ou falta dele — e o sistema apenas ocupa o espaço disponível.",
          "Efeito Tigre não é uma trilogia sobre “perdedores”. É uma trilogia sobre a mentira moderna do atalho — a ideia de que fugir da dor custa menos do que enfrentá-la. Não custa. A fuga cobra juros altos.",
          "Ao final do box, uma certeza permanece: não existe vitória possível nesse jogo — existe apenas a chance de interromper o ciclo antes que ele leve tudo.",
        ],
      },

      nasGarrasDoTigre: {
        vol: "Vol. 1",
        title: "Nas Garras do Tigre",
        subtitle: "A queda individual.",
        cover: "/books/pt/vol1.png",
        buyUrl: "#",
        synopsis:
          "Às 03:14, André encara um retângulo de luz no silêncio da casa. O que começou como curiosidade vira urgência: ciclos que convertem frustração em repetição e esperança em combustível — até o controle se revelar ilusão.",
        bullets: [
          "A madrugada, o silêncio e a escalada: de curiosidade a urgência.",
          "Mecanismos psicológicos do ciclo: frustração → repetição → culpa → insistência.",
          "Erosão de vínculos, decisões distorcidas e isolamento progressivo.",
          "A captura como processo (não como “desvio moral”).",
          "As primeiras fissuras: interrupções pequenas, mas possíveis.",
        ],
        excerpt: "O universo de André havia sido reduzido a um retângulo luminoso de seis polegadas.",
        triggers: [
          "Dependência em apostas/jogos e compulsão",
          "Pressão financeira e dívidas",
          "Ansiedade, insônia e isolamento",
          "Conflitos familiares",
          "Linguagem intensa (sem sensacionalismo)",
        ],
        presentation: [
          "Em diferentes partes do mundo, milhões de pessoas estão perdendo dinheiro, tempo, vínculos e identidade sem que ninguém perceba. Não em cassinos luxuosos nem em ambientes clandestinos, mas em espaços íntimos e silenciosos — quartos, banheiros, carros — diante de uma tela que cabe na palma da mão.",
          "Nas garras do Tigre nasce desse silêncio global.",
          "Às três e quatorze da manhã, André está sentado no banheiro de casa, com o celular na mão e o corpo encostado no azulejo frio. O cenário é comum. A experiência também. O que começou como curiosidade virou hábito. O que parecia controle virou urgência. O que prometia solução se transformou em aprisionamento.",
          "Este livro não é apenas sobre apostas. É sobre como sistemas digitais podem sequestrar a esperança humana.",
          "A narrativa revela os mecanismos psicológicos por trás de plataformas desenhadas para nunca perder: algoritmos que convertem frustração em repetição, culpa em insistência e adrenalina em orientação emocional. Aqui, o tempo não é medido em horas, mas em ciclos. E cada ciclo cobra um preço maior do que o anterior.",
          "Com uma escrita visceral e profundamente humana, Nas garras do Tigre conduz o leitor para dentro da mente de alguém que acredita estar jogando, quando na verdade já foi capturado. O vício não aparece como exceção ou desvio moral, mas como um processo silencioso que atravessa culturas, classes sociais e fronteiras, corroendo relações, distorcendo decisões e isolando quem mais precisa de apoio.",
          "Embora ambientada no Brasil, esta é uma história que poderia acontecer em qualquer lugar. Porque o mecanismo é global. A promessa é universal. E a queda, também.",
          "Nas garras do Tigre é uma leitura intensa, perturbadora e necessária. Não para chocar, mas para revelar.",
          "Depois da última página, torna-se impossível olhar para o dinheiro fácil, para os jogos digitais — e para a própria ideia de controle — da mesma forma.",
          "Boa Leitura!",
        ],
      },

      aFomeDoTigre: {
        vol: "Vol. 2",
        title: "A Fome do Tigre",
        subtitle: "A arquitetura do sistema/algoritmo.",
        cover: "/books/pt/vol2.png",
        buyUrl: "#",
        synopsis:
          "O foco se amplia: não apenas o jogador, mas o sistema que observa, mede, ajusta e aprende. A narrativa entra na engenharia do “quase”, na retenção como método e no ponto onde o desejo deixa de ser humano e passa a ser explorável.",
        bullets: [
          "A engrenagem por trás do desejo: medir, ajustar, aprender, escalar.",
          "Engenharia do “quase” e reforço intermitente como método de retenção.",
          "Baixa fricção para continuar; alta fricção para parar.",
          "A ilusão de escolha: ambiente reorganizado para parecer liberdade.",
          "Leitura densa e psicológica — para nomear a arquitetura, não para chocar.",
        ],
        excerpt: "O silêncio na cobertura de Ricardo não era um acidente arquitetônico.",
        triggers: [
          "Dependência em apostas/jogos e compulsão",
          "Pressão financeira e consequências",
          "Ansiedade e ruminação",
          "Linguagem intensa (sem sensacionalismo)",
        ],
        presentation: [
          "Toda engrenagem começa com uma necessidade simples: querer mais. Mais dinheiro. Mais controle. Mais tempo para corrigir o que já foi perdido.",
          "A Fome do Tigre investiga esse ponto exato onde o desejo deixa de ser humano e passa a ser explorável.",
          "Enquanto milhões de pessoas giram em busca de uma promessa que nunca se cumpre, alguém observa. Mede. Ajusta. Aprende.",
          "O jogo já não é apenas uma plataforma de apostas — é uma arquitetura invisível que transforma frustração em insistência e esperança em combustível.",
          "Neste segundo volume da trilogia, o leitor é conduzido para além da experiência do jogador e entra no coração do sistema.",
          "Aqui, a narrativa revela como a lógica do “quase” é construída, refinada e escalada até se tornar um método. Não há vilões caricatos nem heróis óbvios. Há engenheiros, advogados, intermediários e investidores que compreendem algo essencial: o verdadeiro lucro não está na vitória, mas na permanência.",
          "Com uma escrita densa, precisa e psicológica, A Fome do Tigre expõe a engrenagem que sustenta o vício moderno — um sistema que não precisa mentir explicitamente, apenas reorganizar o ambiente para que as escolhas pareçam livres.",
          "O leitor acompanha a transformação silenciosa de uma ideia em infraestrutura, de um experimento em mercado, de um jogo em dependência estrutural.",
          "Embora ambientada no Brasil e em centros financeiros globais, esta é uma história que ultrapassa fronteiras. Porque a sede que move o Tigre não é cultural, nem local. É universal. E quanto mais é alimentada, menos pode ser saciada.",
          "A Fome do Tigre não é apenas uma continuação. É o momento em que o leitor entende que a armadilha não está no clique — mas no sistema que aprende com cada um deles.",
          "Depois desta leitura, a pergunta deixa de ser “por que as pessoas jogam?” e passa a ser: quem se beneficia quando elas nunca param?",
        ],
      },

      oTigreDeVidro: {
        vol: "Vol. 3",
        title: "O Tigre de Vidro: Cemitério de Ilusões",
        subtitle: "A recuperação e grupos de apoio.",
        cover: "/books/pt/vol3.png",
        buyUrl: "#",
        synopsis:
          "Depois da queda, vem a pergunta: e agora? O jogo sai do centro e entram as pessoas — um grupo de apoio, histórias diferentes, um mesmo padrão. A recuperação aqui é feita de reconhecimento, fala e presença: interrupções pequenas, repetidas, coletivas.",
        bullets: [
          "Um grupo de apoio como mapa humano: gatilhos, padrões e reparo.",
          "Recuperação sem moralismo: responsabilidade com presença.",
          "A ilusão do “dinheiro fácil” vista pelo que é: atraso da dor.",
          "Reconstrução do cotidiano: limites, rotina e comunidade.",
          "Ponte direta para o Portal de Apoio (canais + barreiras digitais).",
        ],
        excerpt: "Ricardo chegou cedo demais. Percebeu isso ao olhar o relógio do carro.",
        triggers: [
          "Dependência em apostas/jogos e compulsão",
          "Estresse financeiro e consequências",
          "Ansiedade e sofrimento emocional",
          "Conflitos familiares",
          "Linguagem intensa (sem sensacionalismo)",
        ],
        presentation: [
          "Depois da promessa, vem a queda. Depois da queda, vem a pergunta: e agora?",
          "O Tigre de Vidro: Cemitério de Ilusões é o livro da trilogia em que o jogo deixa de ser protagonista e dá lugar às pessoas. Homens e mulheres que chegaram ao limite não por fraqueza moral, mas por acreditarem em uma saída que nunca existiu.",
          "Neste volume, o leitor acompanha um grupo de apoio formado por pessoas viciadas em jogos de aposta digitais. Cada encontro revela uma história diferente: como conheceram o jogo, o que faziam da vida, onde acreditaram estar no controle — e em que momento perceberam que estavam apenas tentando fugir da própria dor.",
          "Este não é um livro sobre espetacularização da ruína.",
          "É um livro sobre consciência.",
          "Ao ouvir esses relatos, o leitor compreende que o jogo não destrói apenas finanças, mas distorce a percepção do tempo, da esperança e das relações humanas. A promessa de dinheiro fácil se revela, em todas as histórias, como aquilo que realmente é: um atraso da dor que retorna multiplicada.",
          "Com uma narrativa psicológica, humana e responsável, O Tigre de Vidro mostra que o fundo do poço não é um lugar único — é um processo silencioso. E que sair dele não depende de sorte, mas de reconhecimento, fala e apoio coletivo.",
          "Embora ambientada no Brasil, esta é uma história universal. Porque os mecanismos do vício digital atravessam fronteiras, culturas e classes sociais. E porque a ilusão de controle é uma armadilha global.",
          "Este livro cumpre um papel claro dentro da trilogia: ensinar, sem moralizar, que a fuga não compensa. Que o jogo não vale a pena. E que enfrentar a dor, por mais difícil que seja, custa menos do que desaparecer tentando evitá-la.",
          "O Tigre de Vidro é o livro em que o leitor entende, definitivamente, que não existe vitória possível nesse jogo — apenas a chance de interromper o ciclo antes que ele leve tudo.",
          "Boa Leitura!",
        ],
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
      readSample: "Read sample",
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
          buyUrl: "#",
          href: "/trilogy/nas-garras-do-tigre"
        },
        {
          vol: "Vol. 2",
          title: "The Tiger’s Hunger",
          titleEnHint: "The Tiger’s Hunger",
          cover: "/books/en/vol2.png",
          logline: "The system/algorithm architecture.",
          synopsis:
            "This volume enters the system’s core: near-miss engineering, the dew-point window, and retention as method. No cartoon villains — just an infrastructure that learns from every click and rearranges the environment so choices feel free.",
          buyUrl: "#",
          href: "/trilogy/a-fome-do-tigre"
        },
        {
          vol: "Vol. 3",
          title: "The Glass Tiger: Cemetery of Illusions",
          titleEnHint: "The Glass Tiger: Cemetery of Illusions",
          cover: "/books/en/vol3.png",
          logline: "Recovery and support groups.",
          synopsis:
            "The game steps aside and people take the stage. A support group, different lives, the same structural ending: nobody starts with money. They start with pain, grief, exhaustion, and loneliness. The way out isn’t luck — it’s recognition, voice, and presence.",
          buyUrl: "#",
          href: "/trilogy/o-tigre-de-vidro"
        },
        {
          vol: "BOX",
          title: "Tiger Effect",
          titleEnHint: "Tiger Effect (Box Set)",
          cover: "/books/en/box.png",
          logline: "The complete trilogy.",
          synopsis:
            "The box set brings all three volumes together — the individual fall, the algorithm’s architecture, and recovery as a collective act. One pattern runs through everything: the interface doesn’t sell victory; it sells staying. And at the center is the uncomfortable question: what is being trained in you, repetition after repetition?",
          buyUrl: "#",
          href: "/trilogy/efeito-tigre"
        }
      ]
    },

    bookPages: {
      eyebrow: "TRILOGY",
      backToTrilogy: "Back to The Trilogy",
      whatYoullFind: "What you’ll find",
      contentNotice: "Content notice",
      contentNoticeLead:
        "No sensationalism. Just enough context for you to decide whether this volume is right for you right now.",
      sampleTitle: "Sample",
      sampleLead: "A micro-excerpt to feel the tone — no spoilers.",
      microExcerpt: "Micro-excerpt",
      presentationTitle: "Presentation",

      efeitoTigre: {
        vol: "BOX / Manifesto",
        title: "Tiger Effect",
        subtitle: "A new form of capture — silent, pocket-sized, and socially accepted.",
        cover: "/books/en/box.png",
        buyUrl: "#",
        synopsis:
          "The box set gathers the trilogy and its manifesto: the interface doesn’t sell victory; it sells staying. The journey moves from an individual fall (Vol. 1), into the engineering of desire and retention (Vol. 2), and back to the human — recovery as a collective act (Vol. 3).",
        bullets: [
          "The box’s central thesis: the real profit is in staying, not in winning.",
          "The full arc: individual fall → system architecture → collective recovery.",
          "Psychological and social mechanics of “just one more time”, without moralising.",
          "Dark noir / tech tone: intimate, sharp, disturbingly recognisable.",
          "Practical calls: sample + Support Portal (channels + digital barriers).",
        ],
        excerpt: "In any country, in any language, the promise is the same: a shortcut. A tap. A chance. Relief. Just one more time.",
        triggers: [
          "Gambling/betting addiction and compulsive behaviour",
          "Financial pressure and debt",
          "Anxiety, insomnia, and isolation",
          "Family conflict and shame",
          "Intense language (no sensationalism)",
        ],
        presentation: [
          "Tiger Effect is a trilogy about a new form of capture — silent, pocket-sized, and socially accepted.",
          "In any country, in any language, the promise is the same: a shortcut. A tap. A chance. Relief. Just one more time.",
          "But what looks like entertainment is often a system: platforms designed to turn frustration into repetition, guilt into persistence, and adrenaline into an emotional compass. Time stops being measured in hours and starts being measured in cycles — and each cycle charges more than the last.",
          "In the Tiger’s Grip",
          "In the first volume, In the Tiger’s Grip, you enter the place no one sees: the small hours, the house’s silence, the body that won’t obey, and a mind bargaining with the edge of itself. In the second, The Tiger’s Hunger, the narrative widens the lens and reveals the machinery behind desire: the moment a game stops being “a game” and becomes method — an architecture that learns, adjusts, and scales.",
          "And in the closing volume, The Glass Tiger: Cemetery of Illusions, the spectacle collapses and what remains are people. A support group, different stories, the same pattern: no one starts for money. They start with pain, fatigue, grief, loneliness, too much control or too little — and the system simply occupies the available space.",
          "Tiger Effect is not a trilogy about “losers”. It is a trilogy about the modern lie of the shortcut — the idea that escaping pain costs less than facing it. It doesn’t. Escape charges interest.",
          "By the end of the box, one certainty remains: there is no possible victory in this game — only the chance to interrupt the cycle before it takes everything.",
        ],
      },

      nasGarrasDoTigre: {
        vol: "Vol. 1",
        title: "In the Tiger’s Grip",
        subtitle: "The individual fall.",
        cover: "/books/en/vol1.png",
        buyUrl: "#",
        synopsis:
          "At 3:14 a.m., André stares at a rectangle of light in the house’s silence. What began as curiosity becomes urgency: cycles that turn frustration into repetition and hope into fuel — until “control” reveals itself as illusion.",
        bullets: [
          "The small hours, the silence, the escalation: from curiosity to urgency.",
          "Cycle mechanics: frustration → repetition → guilt → persistence.",
          "Relationships erode; decisions distort; isolation grows.",
          "Capture as process (not a moral ‘failure’).",
          "First cracks: small interruptions — but possible.",
        ],
        excerpt: "André’s universe had shrunk to a luminous six-inch rectangle.",
        triggers: [
          "Gambling/betting addiction and compulsive behaviour",
          "Financial pressure and debt",
          "Anxiety, insomnia, and isolation",
          "Family conflict",
          "Intense language (no sensationalism)",
        ],
        presentation: [
          "Across the world, millions of people are losing money, time, bonds, and identity without anyone noticing. Not in luxurious casinos or clandestine rooms, but in intimate, silent places — bedrooms, bathrooms, cars — in front of a screen that fits in the palm of a hand.",
          "In the Tiger’s Grip is born from that global silence.",
          "At 3:14 a.m., André is sitting in his bathroom, phone in hand, his body pressed against cold tile. The scene is ordinary. The experience, too. What began as curiosity became habit. What felt like control became urgency. What promised a solution became captivity.",
          "This book is not only about betting. It is about how digital systems can hijack human hope.",
          "The narrative exposes the psychological mechanisms behind platforms designed never to lose: algorithms that turn frustration into repetition, guilt into persistence, and adrenaline into an emotional compass. Here, time is not measured in hours, but in cycles — and each cycle charges a higher price than the last.",
          "With visceral, deeply human writing, In the Tiger’s Grip takes the reader inside the mind of someone who thinks he is playing, when in fact he has already been captured. Addiction appears not as an exception or a moral failing, but as a silent process that crosses cultures, social classes, and borders, corroding relationships, distorting decisions, and isolating those who most need support.",
          "Though set in Brazil, this is a story that could happen anywhere. Because the mechanism is global. The promise is universal. And so is the fall.",
          "In the Tiger’s Grip is an intense, unsettling, necessary read — not to shock, but to reveal.",
          "After the final page, it becomes impossible to look at easy money, at digital games — and at the very idea of control — in quite the same way.",
          "Happy reading!",
        ],
      },

      aFomeDoTigre: {
        vol: "Vol. 2",
        title: "The Tiger’s Hunger",
        subtitle: "The system/algorithm architecture.",
        cover: "/books/en/vol2.png",
        buyUrl: "#",
        synopsis:
          "The lens widens: not only the player, but the system that watches, measures, adjusts, and learns. The narrative enters the engineering of the “almost”, retention as method, and the point where desire stops being human and becomes exploitable.",
        bullets: [
          "The machinery behind desire: watch, measure, adjust, learn, scale.",
          "Intermittent reinforcement and the engineering of the “almost”.",
          "Low friction to continue; high friction to stop.",
          "The illusion of choice: an environment arranged to feel like freedom.",
          "Dense, psychological writing — to name the architecture, not to shock.",
        ],
        excerpt: "The silence in Ricardo’s penthouse wasn’t an architectural accident.",
        triggers: [
          "Gambling/betting addiction and compulsive behaviour",
          "Financial pressure and consequences",
          "Anxiety and rumination",
          "Intense language (no sensationalism)",
        ],
        presentation: [
          "Every mechanism begins with a simple need: wanting more. More money. More control. More time to fix what has already been lost.",
          "The Tiger’s Hunger investigates the exact point where desire stops being human and becomes exploitable.",
          "While millions spin in search of a promise that never comes true, someone is watching. Measuring. Adjusting. Learning.",
          "The game is no longer merely a betting platform — it is an invisible architecture that turns frustration into persistence and hope into fuel.",
          "In this second volume of the trilogy, the reader is led beyond the player’s experience and into the heart of the system.",
          "Here, the narrative reveals how the logic of the “almost” is built, refined, and scaled until it becomes method. There are no cartoon villains and no obvious heroes. There are engineers, lawyers, intermediaries, and investors who understand something essential: the real profit is not in winning, but in staying.",
          "With dense, precise, psychological writing, The Tiger’s Hunger exposes the machinery that sustains modern addiction — a system that doesn’t need to lie explicitly; it only needs to reorganise the environment so that choices feel free.",
          "The reader follows the silent transformation of an idea into infrastructure, of an experiment into a market, of a game into structural dependence.",
          "Though set in Brazil and in global financial centres, this is a story that crosses borders. Because the thirst that drives the Tiger is neither cultural nor local. It is universal — and the more it is fed, the less it can be satisfied.",
          "The Tiger’s Hunger is not merely a continuation. It is the moment the reader understands that the trap is not in the click — but in the system that learns from each one.",
          "After this book, the question shifts from “why do people play?” to: who benefits when they never stop?",
        ],
      },

      oTigreDeVidro: {
        vol: "Vol. 3",
        title: "The Glass Tiger: Cemetery of Illusions",
        subtitle: "Recovery and support groups.",
        cover: "/books/en/vol3.png",
        buyUrl: "#",
        synopsis:
          "After the fall comes the question: what now? The game leaves the centre and people step in — a support group, different stories, the same pattern. Recovery here is made of recognition, voice, and presence: small interruptions, repeated, collective.",
        bullets: [
          "A support group as a human map: triggers, patterns, repair.",
          "Recovery without moralising: responsibility with presence.",
          "“Easy money” exposed for what it is: postponed pain.",
          "Rebuilding the everyday: limits, routine, community.",
          "A direct bridge to the Support Portal (channels + digital barriers).",
        ],
        excerpt: "Ricardo arrived too early. He realised it when he glanced at the car clock.",
        triggers: [
          "Gambling/betting addiction and compulsive behaviour",
          "Financial stress and consequences",
          "Anxiety and emotional distress",
          "Family conflict",
          "Intense language (no sensationalism)",
        ],
        presentation: [
          "After the promise comes the fall. After the fall comes the question: what now?",
          "The Glass Tiger: Cemetery of Illusions is the volume in which the game stops being the protagonist and makes room for people — men and women who reached the edge not through moral weakness, but by believing in an exit that never existed.",
          "In this book, the reader follows a support group formed by people addicted to digital betting games. Each meeting reveals a different story: how they found the game, what their lives looked like, where they believed they were in control — and the moment they realised they were only trying to escape their own pain.",
          "This is not a book about sensationalising ruin.",
          "It is a book about awareness.",
          "By listening to these accounts, the reader understands that the game does not destroy only finances; it distorts the sense of time, hope, and human relationships. The promise of easy money reveals itself, in every story, as what it truly is: a postponement of pain that returns multiplied.",
          "With a psychological, human, responsible narrative, The Glass Tiger shows that rock bottom is not a single place — it is a silent process. And that getting out of it does not depend on luck, but on recognition, voice, and collective support.",
          "Though set in Brazil, this is a universal story. Because the mechanisms of digital addiction cross borders, cultures, and social classes. And because the illusion of control is a global trap.",
          "This book has a clear role within the trilogy: to teach, without moralising, that escape does not pay. That the game is not worth it. And that facing pain, however hard, costs less than disappearing while trying to avoid it.",
          "The Glass Tiger is the volume in which the reader understands, definitively, that there is no possible victory in this game — only the chance to interrupt the cycle before it takes everything.",
          "Happy reading!",
        ],
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
  }
} as const;

