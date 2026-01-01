export type SupportLink = {
  name: { pt: string; en: string };
  whatItDoes: { pt: string; en: string };
  url?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  notes?: { pt: string; en: string };
};

export type SupportSection = {
  title: { pt: string; en: string };
  items: SupportLink[];
};

export const supportChannels: SupportSection[] = [
  {
    title: { pt: "🇧🇷 Canais e projetos de apoio no Brasil", en: "🇧🇷 Support channels in Brazil" },
    items: [
      {
        name: { pt: "Jogadores Anônimos (JA)", en: "Gamblers Anonymous (Brazil)" },
        whatItDoes: {
          pt: "Rede de apoio mútuo baseada nos 12 passos, com reuniões presenciais e online em ambiente sigiloso.",
          en: "A 12-step mutual-aid network with in-person and online meetings in a confidential environment."
        },
        url: "https://jogadoresanonimos.com.br",
        phone: "(11) 3229-1023 (SP) / (21) 2516-4311 (RJ)"
      },
      {
        name: { pt: "PRO-AMJO (IPq HC-FMUSP)", en: "PRO-AMJO (HC-FMUSP Psychiatry Institute)" },
        whatItDoes: {
          pt: "Tratamento médico e psicológico gratuito pelo SUS (triagem e grupos terapêuticos) focado em Transtorno do Jogo.",
          en: "Free clinical and psychological care through Brazil’s public health system (screening and therapy groups) focused on Gambling Disorder."
        },
        url: "https://ipqhc.org.br/saude/ambulatorios-e-servicos/programas-e-grupos/",
        whatsapp: "(11) 99004-6247",
        email: "proamjo.secretaria@gmail.com"
      },
      {
        name: { pt: "PRO-AMITI (USP)", en: "PRO-AMITI (USP)" },
        whatItDoes: {
          pt: "Centro de referência em transtornos do impulso com atendimento multidisciplinar e grupos terapêuticos para Transtorno do Jogo.",
          en: "A reference center for impulse-control disorders offering multidisciplinary care and therapy groups focused on Gambling Disorder."
        },
        url: "https://proamiti.com.br",
        whatsapp: "(11) 99004-6247",
        email: "proamjo.secretaria@gmail.com",
        notes: {
          pt: "Acesso por triagem via WhatsApp ou e-mail (mesma secretaria do PRO-AMJO).",
          en: "Access via screening through WhatsApp or email (same PRO-AMJO office)."
        }
      },
      {
        name: { pt: "CAPS (SUS) — CAPS AD", en: "CAPS (Brazil SUS) — CAPS AD" },
        whatItDoes: {
          pt: "Atendimento multiprofissional em saúde mental. Para dependências, procure o CAPS AD (Álcool e Drogas/Dependências).",
          en: "Public mental-health services with multidisciplinary care. For addictions, look for CAPS AD (Alcohol & Drugs/Addictions)."
        },
        url: "https://www.gov.br/saude/pt-br/composicao/saes/desmad/raps/caps"
      },
      {
        name: { pt: "CVV — Centro de Valorização da Vida", en: "CVV — Emotional support (Brazil)" },
        whatItDoes: {
          pt: "Apoio emocional e prevenção do suicídio, sob sigilo. Útil em crises emocionais, financeiras e momentos de desespero.",
          en: "Confidential emotional support and suicide prevention. Helpful during emotional or financial crises and moments of despair."
        },
        url: "https://cvv.org.br",
        phone: "188 (24h)"
      }
    ]
  },
  {
    title: { pt: "🌍 Projetos e fóruns internacionais", en: "🌍 International projects and forums" },
    items: [
      {
        name: { pt: "GamTalk", en: "GamTalk" },
        whatItDoes: {
          pt: "Comunidade global com chat ao vivo e fóruns para trocar apoio e estratégias de recuperação.",
          en: "A global community with live chat and forums to share support and recovery strategies."
        },
        url: "https://www.gamtalk.org"
      },
      {
        name: { pt: "GamCare (Reino Unido)", en: "GamCare (UK)" },
        whatItDoes: {
          pt: "Chat 24h, fóruns e ferramentas digitais — incluindo bloqueio de sites e educação para jogo responsável.",
          en: "24/7 chat, forums, and digital tools — including blocking options and education for safer gambling."
        },
        url: "https://www.gamcare.org.uk"
      },
      {
        name: { pt: "Gambling Therapy", en: "Gambling Therapy" },
        whatItDoes: {
          pt: "Serviço global com suporte em vários idiomas e recursos (inclui app e grupos por chat).",
          en: "A global service offering multi-language support and resources (including an app and chat groups)."
        },
        url: "https://www.gamblingtherapy.org"
      },
      {
        name: { pt: "Gamblers Anonymous International", en: "Gamblers Anonymous International" },
        whatItDoes: {
          pt: "Diretório mundial de reuniões presenciais e online (modelo 12 passos) para manutenção da abstinência.",
          en: "A global directory of in-person and online meetings (12-step model) supporting long-term abstinence."
        },
        url: "https://www.gamblersanonymous.org"
      }
    ]
  },
  {
    title: { pt: "🇪🇸 🇵🇹 Apoio em espanhol e Portugal", en: "🇪🇸 🇵🇹 Spanish & Portugal support" },
    items: [
      {
        name: { pt: "FEJAR (Espanha)", en: "FEJAR (Spain)" },
        whatItDoes: {
          pt: "Linha de ajuda, guias de autoajuda e rede de associações locais para reabilitação.",
          en: "Helpline, self-help guides, and a network of local associations for recovery."
        },
        url: "https://www.fejar.org"
      },
      {
        name: { pt: "Instituto de Apoio ao Jogador (Portugal)", en: "Instituto de Apoio ao Jogador (Portugal)" },
        whatItDoes: {
          pt: "Consultas de psicologia e linha de apoio por telefone e e-mail para jogadores e famílias.",
          en: "Specialized psychological support and a helpline for players and families."
        },
        url: "https://www.iaj.pt"
      }
    ]
  },
  {
    title: { pt: "🇺🇸 🇨🇦 América do Norte", en: "🇺🇸 🇨🇦 North America" },
    items: [
      {
        name: { pt: "NCPG — National Council on Problem Gambling (EUA)", en: "NCPG — National Council on Problem Gambling (USA)" },
        whatItDoes: {
          pt: "Chat online e biblioteca extensa de recursos sobre transtorno do jogo.",
          en: "Live chat and a large library of resources about gambling problems."
        },
        url: "https://www.ncpgambling.org"
      },
      {
        name: { pt: "Responsible Gambling Council (Canadá)", en: "Responsible Gambling Council (Canada)" },
        whatItDoes: {
          pt: "Estratégias de prevenção, educação e ferramentas de autoexclusão.",
          en: "Prevention strategies, education, and self-exclusion tools."
        },
        url: "https://www.responsiblegambling.org"
      }
    ]
  },
  {
    title: { pt: "🇦🇺 🇬🇧 Oceania e Reino Unido", en: "🇦🇺 🇬🇧 Oceania & UK" },
    items: [
      {
        name: { pt: "Gambling Help Online (Austrália)", en: "Gambling Help Online (Australia)" },
        whatItDoes: {
          pt: "Aconselhamento por SMS e chat 24/7, além de módulos guiados de autoajuda.",
          en: "24/7 chat/SMS counselling plus guided self-help modules."
        },
        url: "https://www.gamblinghelponline.org.au"
      },
      {
        name: { pt: "BeGambleAware (Reino Unido)", en: "BeGambleAware (UK)" },
        whatItDoes: {
          pt: "Ferramentas para gestão de dinheiro e materiais de conscientização.",
          en: "Tools for money management and awareness resources."
        },
        url: "https://www.begambleaware.org"
      }
    ]
  }
];

export const toolsAndDevices: SupportSection[] = [
  {
    title: { pt: "1) Bloqueadores diretos (barreiras digitais)", en: "1) Direct blockers (digital barriers)" },
    items: [
      {
        name: { pt: "BetBlocker (gratuito)", en: "BetBlocker (free)" },
        whatItDoes: {
          pt: "Bloqueia milhares de sites e apps de apostas em vários dispositivos por períodos de 24h até 5 anos.",
          en: "Blocks thousands of gambling websites/apps across devices for periods from 24 hours up to 5 years."
        },
        notes: {
          pt: "Ótima opção para quem já está endividado, por ser gratuito.",
          en: "Great option if you’re in debt, since it’s free."
        },
        url: "https://www.betblocker.org"
      },
      {
        name: { pt: "Gamban (pago)", en: "Gamban (paid)" },
        whatItDoes: {
          pt: "Bloqueador robusto, difícil de desinstalar, que bloqueia sites e também apps instalados.",
          en: "A robust blocker that’s hard to uninstall, blocking both websites and installed apps."
        },
        url: "https://gamban.com"
      },
      {
        name: { pt: "Net Nanny (pago)", en: "Net Nanny (paid)" },
        whatItDoes: {
          pt: "Filtro de conteúdo que permite bloquear categorias inteiras, como ‘Gambling’.",
          en: "Content filtering that can block entire categories, including ‘Gambling’."
        },
        url: "https://www.netnanny.com"
      }
    ]
  },
  {
    title: { pt: "2) Aplicativos de suporte e recuperação", en: "2) Recovery and support apps" },
    items: [
      {
        name: { pt: "Gambling Therapy (app)", en: "Gambling Therapy (app)" },
        whatItDoes: {
          pt: "Exercícios (TCC/mindfulness), botão de crise e diário de progresso. Suporte multilíngue.",
          en: "Exercises (CBT/mindfulness), a crisis button, and a progress journal. Multi-language support."
        },
        url: "https://www.gamblingtherapy.org"
      },
      {
        name: { pt: "I Am Sober", en: "I Am Sober" },
        whatItDoes: {
          pt: "Rastreador de sobriedade para ‘Jogo de Azar’: dias sem jogar, dinheiro economizado e comunidade.",
          en: "A sobriety tracker for gambling: days clean, money saved, and a supportive community."
        },
        url: "https://iamsober.com"
      },
      {
        name: { pt: "Quit Gambling / Stop Gambling (Android)", en: "Quit Gambling / Stop Gambling (Android)" },
        whatItDoes: {
          pt: "Ajuda a mapear gatilhos e sugerir alternativas para momentos de impulso.",
          en: "Helps map triggers and suggests alternatives for urge moments."
        },
        url: "https://play.google.com/store/search?q=quit%20gambling&c=apps"
      }
    ]
  },
  {
    title: { pt: "3) Autoexclusão (sistemas oficiais)", en: "3) Self-exclusion (official systems)" },
    items: [
      {
        name: { pt: "Autoexclusão (Brasil — em implementação)", en: "Self-exclusion (Brazil — being implemented)" },
        whatItDoes: {
          pt: "Com a regulamentação das apostas, o governo prevê mecanismos para bloquear CPF em casas licenciadas.",
          en: "Under regulation, Brazil is implementing mechanisms to block national ID (CPF) across licensed operators."
        },
        notes: {
          pt: "Busque por atualizações oficiais em portais gov.br.",
          en: "Check official updates on gov.br portals."
        }
      },
      {
        name: { pt: "GAMSTOP (Reino Unido)", en: "GAMSTOP (UK)" },
        whatItDoes: {
          pt: "Bloqueia a criação de contas em plataformas licenciadas no Reino Unido por até 5 anos.",
          en: "Prevents account creation across UK-licensed operators for up to 5 years."
        },
        url: "https://www.gamstop.co.uk"
      }
    ]
  },
  {
    title: { pt: "4) Bloqueios bancários e financeiros", en: "4) Banking and payment blocks" },
    items: [
      {
        name: { pt: "Bloqueio de transações (bancos)", en: "Transaction blocks (banks)" },
        whatItDoes: {
          pt: "Alguns bancos permitem solicitar bloqueio de pagamentos para empresas de apostas ou limitar PIX e cartões.",
          en: "Some banks allow you to request gambling-payment blocks or lower limits for transfers and cards."
        },
        notes: {
          pt: "Dica: defina limites baixos e peça ajuda a alguém de confiança para revisar configurações financeiras.",
          en: "Tip: set low limits and ask a trusted person to help review financial settings."
        }
      },
      {
        name: { pt: "Gambling Block (bancos internacionais)", en: "Gambling Block (international banks)" },
        whatItDoes: {
          pt: "Alguns bancos digitais oferecem ‘Gambling Block’ no app, recusando pagamentos para apostas.",
          en: "Some digital banks provide an in-app ‘Gambling Block’ that declines gambling payments."
        }
      }
    ]
  }
];
