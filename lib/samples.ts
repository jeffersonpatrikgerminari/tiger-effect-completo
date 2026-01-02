import type { BookKey } from "@/lib/buyLinks";

export type SampleSlug =
  | "efeito-tigre"
  | "nas-garras-do-tigre"
  | "a-fome-do-tigre"
  | "o-tigre-de-vidro";

export type Sample = {
  slug: SampleSlug;
  bookKey: BookKey;
  title: { pt: string; en: string };
  subtitle?: { pt: string; en: string };
  lead: { pt: string; en: string };
  // Short reading sample (web)
  excerpt: { pt: string[]; en: string[] };
  // Downloadable sample (PDF)
  pdfUrl: { pt: string; en: string };
  // Gentle content notice (no sensationalism)
  contentNotice: { pt: string; en: string };
};

export const samples: Sample[] = [
  {
    slug: "efeito-tigre",
    bookKey: "efeitoTigre",
    title: { pt: "Efeito Tigre", en: "Tiger Effect" },
    subtitle: {
      pt: "Box / Manifesto da Trilogia",
      en: "Box / Trilogy Manifesto"
    },
    lead: {
      pt: "A trilogia como um mapa: queda, arquitetura do quase e recuperação como ato coletivo.",
      en: "A trilogy as a map: collapse, the architecture of ‘almost’, and recovery as a collective act."
    },
    excerpt: {
      pt: [
        "Efeito Tigre é uma trilogia sobre uma nova forma de captura — silenciosa, portátil e socialmente aceita.",
        "Em qualquer país, em qualquer idioma, a promessa é a mesma: um atalho. Um toque. Uma chance. Um alívio. Só mais uma vez.",
        "Mas o que parece entretenimento é, muitas vezes, um sistema: plataformas desenhadas para transformar frustração em repetição — e repetição em dependência."
      ],
      en: [
        "Tiger Effect is a trilogy about a new kind of capture — silent, portable, and socially accepted.",
        "In any country, in any language, the promise is the same: a shortcut. A tap. A chance. Relief. Just one more time.",
        "But what looks like entertainment is often a system: platforms engineered to turn frustration into repetition — and repetition into dependency."
      ]
    },
    pdfUrl: { pt: "/samples/efeito-tigre-amostra-pt.pdf", en: "/samples/tiger-effect-sample-en.pdf" },
    contentNotice: {
      pt: "A obra aborda dependência em apostas digitais, ansiedade, endividamento e vergonha. Leia no seu ritmo.",
      en: "This work discusses gambling addiction, anxiety, debt, and shame. Read at your own pace."
    }
  },
  {
    slug: "nas-garras-do-tigre",
    bookKey: "nasGarrasDoTigre",
    title: { pt: "Nas garras do Tigre", en: "In the Tiger’s Grip" },
    subtitle: { pt: "Volume 1", en: "Volume 1" },
    lead: {
      pt: "A madrugada, o silêncio da casa e o corpo que já não obedece. O início do ciclo.",
      en: "The late night, the silent house, and a body that no longer obeys. Where the cycle begins."
    },
    excerpt: {
      pt: [
        "Em diferentes partes do mundo, milhões de pessoas estão perdendo dinheiro, tempo, vínculos e identidade sem que ninguém perceba.",
        "Nas garras do Tigre nasce desse silêncio global.",
        "Este livro não é apenas sobre apostas. É sobre como sistemas digitais podem sequestrar a esperança humana."
      ],
      en: [
        "Across the world, millions of people are losing money, time, bonds, and identity without anyone noticing.",
        "In the Tiger’s Grip is born from that global silence.",
        "This book is not only about bets. It’s about how digital systems can hijack human hope."
      ]
    },
    pdfUrl: { pt: "/samples/nas-garras-do-tigre-amostra-pt.pdf", en: "/samples/in-the-tigers-grip-sample-en.pdf" },
    contentNotice: {
      pt: "Pode conter descrições de compulsão, perda de controle, dívidas e isolamento. Sem sensacionalismo.",
      en: "May include depictions of compulsion, loss of control, debt, and isolation. No sensationalism."
    }
  },
  {
    slug: "a-fome-do-tigre",
    bookKey: "aFomeDoTigre",
    title: { pt: "A fome do Tigre", en: "The Tiger’s Hunger" },
    subtitle: { pt: "Volume 2", en: "Volume 2" },
    lead: {
      pt: "Quando o desejo deixa de ser humano e vira explorável — o ‘quase’ como método.",
      en: "When desire stops being human and becomes exploitable — ‘almost’ as a method."
    },
    excerpt: {
      pt: [
        "A Fome do Tigre investiga esse ponto exato onde o desejo deixa de ser humano e passa a ser explorável.",
        "Enquanto milhões de pessoas giram em busca de uma promessa que nunca se cumpre, alguém observa. Mede. Ajusta. Aprende.",
        "O jogo já não é apenas uma plataforma de apostas — é uma arquitetura invisível que transforma frustração em insistência e esperança em combustível."
      ],
      en: [
        "The Tiger’s Hunger explores the exact point where desire stops being human and becomes exploitable.",
        "While millions spin in pursuit of a promise that never pays off, someone is watching. Measuring. Tuning. Learning.",
        "The game is no longer just a betting platform — it’s an invisible architecture that turns frustration into persistence and hope into fuel."
      ]
    },
    pdfUrl: { pt: "/samples/a-fome-do-tigre-amostra-pt.pdf", en: "/samples/the-tigers-hunger-sample-en.pdf" },
    contentNotice: {
      pt: "Aborda engenharia de dependência e efeitos emocionais do vício. Leia com cuidado.",
      en: "Discusses addiction engineering and its emotional effects. Please read with care."
    }
  },
  {
    slug: "o-tigre-de-vidro",
    bookKey: "oTigreDeVidro",
    title: { pt: "O Tigre de Vidro", en: "The Glass Tiger" },
    subtitle: { pt: "Volume 3 — Cemitério de Ilusões", en: "Volume 3 — Cemetery of Illusions" },
    lead: {
      pt: "Depois da queda, a pergunta: e agora? Um grupo de apoio, relatos e reconstrução.",
      en: "After the fall comes the question: what now? A support group, testimonies, and rebuilding."
    },
    excerpt: {
      pt: [
        "Depois da promessa, vem a queda. Depois da queda, vem a pergunta: e agora?",
        "O Tigre de Vidro é o livro em que o jogo deixa de ser protagonista e dá lugar às pessoas.",
        "Este não é um livro sobre espetacularização da ruína. É um livro sobre consciência."
      ],
      en: [
        "After the promise comes the fall. After the fall comes the question: what now?",
        "The Glass Tiger is the volume where the game stops being the protagonist — and people take the stage.",
        "This is not a book about sensationalising ruin. It’s a book about awareness."
      ]
    },
    pdfUrl: { pt: "/samples/o-tigre-de-vidro-amostra-pt.pdf", en: "/samples/the-glass-tiger-sample-en.pdf" },
    contentNotice: {
      pt: "Pode conter relatos de crise emocional e consequências do vício, com foco em recuperação e apoio.",
      en: "May include accounts of emotional crisis and the consequences of addiction, with a focus on recovery and support."
    }
  }
];

export function getSampleBySlug(slug: string) {
  return samples.find((s) => s.slug === slug) || null;
}

export function sampleSlugs(): SampleSlug[] {
  return samples.map((s) => s.slug);
}
