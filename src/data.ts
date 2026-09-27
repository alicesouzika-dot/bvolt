/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Modality, Differential, Plan, Testimonial, GalleryItem, StatItem } from "./types";

export const CUSTOM_ASSETS = {
  heroBg: "/images/bvolt-background.png",
  aboutBg: "/images/sobre-nos.jpg",
  logo: "/images/icon-bvolt.png",
};

export const STATS_ITEMS: StatItem[] = [
  {
    id: "stats-1",
    value: "500+",
    label: "Alunos Ativos",
    description: "Comunidade focada em alta performance"
  },
  {
    id: "stats-2",
    value: "20+",
    label: "Equipamentos de Ponta",
    description: "Tecnologia de ponta importada"
  },
  {
    id: "stats-3",
    value: "95%",
    label: "Satisfação total",
    description: "Resultados comprovados e acompanhados"
  },
  {
    id: "stats-4",
    value: "1+",
    label: "Ano no mercado",
    description: "Referência em saúde e performance"
  }
];

export const DIFERENCIAIS_ITEMS: Differential[] = [
  {
    id: "dif-1",
    title: "Equipamentos Modernos",
    description: "Aparelhos ergonômicos de última geração das melhores marcas mundiais para otimizar seus resultados.",
    iconName: "Dumbbell",
    imageUrl: "/images/equipamentos.png"
  },
  {
    id: "dif-2",
    title: "Atendimento Personalizado",
    description: "Treinos e avaliações montados sob medida para seu biotipo, metas individuais e limitações.",
    iconName: "User",
    imageUrl: "/images/atendimento.png"
  },
  {
    id: "dif-3",
    title: "Ambiente Climatizado",
    description: "Climatização ideal com renovação constante de ar para manter seu rendimento sempre no máximo.",
    iconName: "Wind",
    imageUrl: "/images/ambiente.png"
  },
  {
    id: "dif-4",
    title: "Treino Adaptado",
    description: "Métodos dinâmicos ajustáveis à sua agenda de trabalho, viagem ou rotina corrida.",
    iconName: "Layers",
    imageUrl: "/images/treino.png"
  },
  {
    id: "dif-5",
    title: "Equipe Especializada",
    description: "Fisiologistas e educadores físicos certificados dispostos a corrigir sua postura e potencializar sua força.",
    iconName: "ShieldCheck",
    imageUrl: "/images/equipe.png"
  },
  {
    id: "dif-6",
    title: "Localização Privilegiada",
    description: "Localizado na Av. Dedo de Deus, de fácil acesso e excelente infraestrutura de estacionamento.",
    iconName: "MapPin",
    imageUrl: "/images/localizacao.png"
  }
];

export const MODALIDADES_ITEMS: Modality[] = [
  {
    id: "mod-1",
    title: "Musculação",
    description: "Treinamento de força focado em desenvolvimento muscular e densidade óssea.",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "mod-2",
    title: "Treinamento Funcional",
    description: "Exercícios multiarticulares que aprimoram sua agilidade, equilíbrio e força diária.",
    imageUrl: "https://images.unsplash.com/photo-1517838577899-40ab7235a10e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "mod-3",
    title: "Condicionamento Físico",
    description: "Aumento drástico do VO2 Max, explosão cardiovascular e resistência global.",
    imageUrl: "https://images.unsplash.com/photo-1605296867304-46d5465a25f1?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "mod-4",
    title: "Hipertrofia",
    description: "Planos específicos de volumização baseados em carga progressiva e técnica perfeita.",
    imageUrl: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "mod-5",
    title: "Emagrecimento",
    description: "Estímulos metabólicos intensos para queima de gordura residual e definição rápida.",
    imageUrl: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "mod-6",
    title: "Avaliação Física",
    description: "Análise por bioimpedância para tomada de decisões cirúrgicas em sua dieta e treinos.",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    imageUrl: "https://images.unsplash.com/photo-1540497077202-7c8a32792682?q=80&w=800&auto=format&fit=crop",
    category: "Estrutura",
    title: "Zona de Pesos Livres"
  },
  {
    id: "gal-2",
    imageUrl: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=800&auto=format&fit=crop",
    category: "Equipamentos",
    title: "Fileira de Cardio Premium"
  },
  {
    id: "gal-3",
    imageUrl: "https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?q=80&w=800&auto=format&fit=crop",
    category: "Estrutura",
    title: "Gaiolas de Agachamento Olímpico"
  },
  {
    id: "gal-4",
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
    category: "Aulas",
    title: "Treinamento Funcional Integrado"
  },
  {
    id: "gal-5",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
    category: "Aulas",
    title: "Acompanhamento Técnico de Elite"
  },
  {
    id: "gal-6",
    imageUrl: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop",
    category: "Estrutura",
    title: "Área de Combate e Isometria"
  }
];

export const PLAN_ITEMS: Plan[] = [
  {
    id: "plan-start",
    name: "PLANO START",
    price: "R$ 99",
    period: "mês",
    description: "Ideal para quem deseja iniciar sua rotina fitness com acompanhamento de excelência.",
    features: [
      "Acesso livre à musculação de Seg a Sáb",
      "Avaliação física a cada 3 meses",
      "Acesso completo a vestiários modernos",
      "Grade básica de treinamento sugerido",
      "Suporte de professores de plantão"
    ],
    isPopular: false,
    tagLine: "Comece seu progresso"
  },
  {
    id: "plan-performance",
    name: "PLANO PERFORMANCE",
    price: "R$ 139",
    period: "mês",
    description: "Nosso plano campeão. O equilíbrio perfeito entre musculação, aulas e metas de queima de gordura.",
    features: [
      "Acesso total à academia (inclui Domingos)",
      "Acesso completo ao Treinamento Funcional",
      "Avaliação física mensal detalhada",
      "Acompanhamento prioritário de professores",
      "Análise de bioimpedância inclusa",
      "Ficha de treino adaptável digital"
    ],
    isPopular: true,
    tagLine: "RECOMENDADO SEU UPGRADE"
  },
  {
    id: "plan-premium",
    name: "PLANO PREMIUM",
    price: "R$ 219",
    period: "mês",
    description: "Foco total em performance de elite, personal trainer parcial e comodidades exclusivas.",
    features: [
      "Sem restrições (Musculação, Funcional, Cardio)",
      "Horários livres e estacionamento prioritário",
      "Sessão de consultoria individual mensal",
      "1 Amigo convidado grátis por semana",
      "Camiseta exclusiva BVOLT",
      "Suporte VIP via WhatsApp com instrutor",
      "Prioridade em agendamentos de aparelhos"
    ],
    isPopular: false,
    tagLine: "Experiência de elite"
  }
];

export const TESTIMONIALS_ITEMS: Testimonial[] = [
  {
    id: "test-1",
    name: "Aline Vasconcellos",
    rating: 5,
    role: "Membro há 2 anos",
    comment: "Estrutura impecável! Sou fã do design e dos pesos. Tudo limpo e os professores são extremamente atenciosos. Sinto que meu treino rende o triplo aqui comparado a outras academias.",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "test-2",
    name: "Fabrício Medeiros",
    rating: 5,
    role: "Membro há 1 ano",
    comment: "O Plano Performance mudou totalmente meus hábitos. Fazer avaliação corporal e ajustar os treinos com os profissionais salvou minha postura e me ajudou a ganhar 7kg de massa magra.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "test-3",
    name: "Mariana Souza",
    rating: 5,
    role: "Membro há 6 meses",
    comment: "A BVolt tem o melhor ambiente de Guapimirim. Totalmente climatizada, equipamentos novos e sem aquela fila insuportável para revezar. Vale cada centavo investido!",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "test-4",
    name: "Carlos Eduardo Santos",
    rating: 5,
    role: "Membro há 3 anos",
    comment: "Equipamentos muito modernos e resistentes. Treino pesado e a academia entrega tudo o que promete. Atendimento nota 10, desde a recepção até a gerência.",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  }
];
