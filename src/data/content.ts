import { Testimonial, GalleryItem, ServiceCategory } from '../types';

export const INSTRUCTOR_INFO = {
  name: 'Ruberval',
  fullName: 'Ruberval – Instrutor de Autoescola',
  role: 'Instrutor de Trânsito Credenciado',
  experienceYears: '27+',
  experienceLabel: 'Mais de 27 anos de experiência',
  studentsTrained: '9.000+',
  studentsLabel: 'Mais de 9 mil alunos formados',
  categories: 'Categorias A e B',
  city: 'Fortaleza – CE',
  phoneDisplay: '(85) 98712-6064',
  phoneRaw: '5585987126064',
  address: {
    street: 'Rua 110, CJ Tupã Mirim, 46',
    neighborhood: 'Parque Dois Irmãos',
    city: 'Fortaleza',
    state: 'CE',
    zip: '60744-480',
    full: 'Rua 110, CJ Tupã Mirim, 46 – Parque Dois Irmãos, Fortaleza – CE, CEP 60744-480',
  },
  instagram: {
    handle: '@rubervalinstrutor',
    url: 'https://www.instagram.com/rubervalinstrutor/',
  },
  googleMaps: {
    url: 'https://maps.app.goo.gl/neC9TMiFL3xP4ofq9',
    embedUrl:
      'https://maps.google.com/maps?q=Rua%20110%2C%20Conjunto%20Tup%C3%A3%20Mirim%2C%2046%20-%20Parque%20Dois%20Irm%C3%A3os%2C%20Fortaleza%20-%20CE%2C%2060744-480&t=&z=16&ie=UTF8&iwloc=&output=embed',
  },
};

export const createWhatsAppUrl = (customText?: string) => {
  const defaultText = 'Olá, Ruberval! Gostaria de conversar sobre as aulas práticas de autoescola.';
  const message = customText ? customText.trim() : defaultText;
  return `https://wa.me/${INSTRUCTOR_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;
};

export const SERVICES: ServiceCategory[] = [
  {
    id: 'categoria-a',
    code: 'A',
    title: 'CATEGORIA A – MOTOCICLETA',
    subtitle: 'Aulas práticas para condução de motos',
    description:
      'Aulas práticas para quem deseja aprender a conduzir motocicletas com segurança e responsabilidade.',
    imageUrl: '/images/moto_lesson.jpg',
    badge: 'Categoria A · Moto',
    features: [
      'Equilíbrio, postura correta e manuseio suave do acelerador',
      'Treino prático no circuito oficial de cones e pista de prova',
      'Frenagem segura dianteira/traseira e desvio de obstáculos',
      'Acompanhamento atento para quem nunca subiu em uma moto',
      'Foco direcionado nos critérios de avaliação do Detran-CE',
    ],
    whatsappMessage:
      'Olá, Ruberval! Gostaria de tirar dúvidas sobre as aulas práticas da Categoria A (Moto).',
  },
  {
    id: 'categoria-b',
    code: 'B',
    title: 'CATEGORIA B – AUTOMÓVEL',
    subtitle: 'Aulas práticas para condução de carros',
    description:
      'Aulas práticas para quem deseja aprender a dirigir carros, desenvolvendo confiança e domínio do veículo.',
    imageUrl: '/images/baliza_practice.jpg',
    badge: 'Categoria B · Carro',
    features: [
      'Controle firme de ponto de embreagem e saída em ladeira',
      'Passo a passo descomplicado para acertar a baliza de primeira',
      'Treinamento tanto em circuito fechado quanto no trânsito de Fortaleza',
      'Atenção especial para quem sente medo, trava ou ansiedade ao volante',
      'Simulação real dos comandos cobrados pelo examinador',
    ],
    whatsappMessage:
      'Olá, Ruberval! Gostaria de tirar dúvidas sobre as aulas práticas da Categoria B (Carro).',
  },
];

export const DIFERENCIAIS = [
  {
    title: 'Mais de 27 anos de experiência',
    description:
      'Trajetória contínua e dedicada ao ensino de trânsito em Fortaleza, conhecendo de perto as maiores dificuldades de cada etapa.',
  },
  {
    title: 'Mais de 9 mil alunos capacitados',
    description:
      'Milhares de condutores hoje habilitados e independentes graças a um método claro, prático e responsável.',
  },
  {
    title: 'Instrutor credenciado',
    description:
      'Profissional devidamente certificado e atualizado segundo as exigências legais e normas dos órgãos de trânsito.',
  },
  {
    title: 'Ensino com paciência e dedicação',
    description:
      'Sem pressa e sem grosseria. O ensino é feito no ritmo do aluno, com calma para tirar dúvidas quantas vezes for preciso.',
  },
  {
    title: 'Orientação personalizada',
    description:
      'Foco exato onde você mais precisa: seja no ponto da embreagem, na baliza, no percurso ou no medo do trânsito.',
  },
  {
    title: 'Compromisso com a segurança no trânsito',
    description:
      'Mais do que apenas passar na prova: o objetivo é que você dirija com autonomia, calma e segurança para a vida inteira.',
  },
];

// Avaliação REAL do Google (respeitando estritamente a instrução do cliente)
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'ruan-lima',
    author: 'Ruan Lima',
    avatarText: 'R',
    rating: 5,
    reviewDate: 'Avaliação no Google Maps',
    text: 'Ótimo instrutor, correto, imparcial e muito paciente.',
    source: 'Google',
    isLocalGuide: true,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-vid-moto',
    title: 'Aula prática de motocicleta',
    category: 'category-a',
    categoryLabel: 'Categoria A · Vídeo',
    mediaType: 'video',
    imageUrl: '/images/poster_moto.jpg',
    videoUrl: '/videos/aula_moto.mp4',
    duration: '1:00',
    description:
      'Treinamento completo na pista de moto em Fortaleza: equilíbrio, curvas no oito e passagem pelos cones com acompanhamento atento.',
  },
  {
    id: 'gal-vid-carro-aluna',
    title: 'Aula prática no trânsito real',
    category: 'category-b',
    categoryLabel: 'Categoria B · Vídeo',
    mediaType: 'video',
    imageUrl: '/images/poster_carro_aluna.jpg',
    videoUrl: '/videos/aula_carro_aluna.mp4',
    duration: '0:54',
    description:
      'Orientação calma de troca de marchas, controle de embreagem e direção segura em avenida de Fortaleza.',
  },
  {
    id: 'gal-vid-baliza',
    title: 'Passo a passo para a baliza',
    category: 'category-b',
    categoryLabel: 'Dica de Baliza · Vídeo',
    mediaType: 'video',
    imageUrl: '/images/poster_baliza.jpg',
    videoUrl: '/videos/dicas_baliza.mp4',
    duration: '0:39',
    description:
      'Preparação de retrovisores, alinhamento, ponto de referência e ajuste final na vaga entre balizadores.',
  },
  {
    id: 'gal-vid-carro-manual',
    title: 'Evolução no câmbio manual',
    category: 'instructor',
    categoryLabel: 'Aula Real · Vídeo',
    mediaType: 'video',
    imageUrl: '/images/poster_carro_manual.jpg',
    videoUrl: '/videos/aula_carro_manual.mp4',
    duration: '0:20',
    description:
      'Aluno desenvolvendo firmeza e segurança nas trocas de marcha até a quarta marcha, sem pressa e sem enrolação.',
  },
  {
    id: 'gal-foto-ruberval',
    title: 'Instrutor Ruberval em Fortaleza',
    category: 'instructor',
    categoryLabel: 'Instrutor · Foto',
    mediaType: 'image',
    imageUrl: '/images/ruberval_portrait.jpg',
    description:
      'Atendimento dedicado para formação de condutores com segurança, tranquilidade e respeito ao ritmo de cada aluno.',
  },
  {
    id: 'gal-foto-veiculo',
    title: 'Veículo para aulas práticas',
    category: 'instructor',
    categoryLabel: 'Categoria B · Foto',
    mediaType: 'image',
    imageUrl: '/images/ruberval_carro.jpg',
    description:
      'Automóvel equipado e regularizado para treinamento de condução urbana e baliza em Fortaleza – CE.',
  },
];

export const FAQS = [
  {
    question: 'Nunca dirigi ou tenho muito medo de errar. As aulas são para mim?',
    answer:
      'Com certeza. Grande parte dos alunos chega às primeiras aulas com insegurança, medo de deixar o carro morrer ou receio do trânsito. O método do Ruberval é baseado na paciência, sem pressão ou broncas. Você vai aprender no seu tempo até se sentir seguro.',
  },
  {
    question: 'O que é necessário para começar as aulas práticas?',
    answer:
      'Para quem está tirando a primeira habilitação, é necessário já ter concluído a etapa teórica do processo no Detran-CE e ter a LADV (Licença para Aprendizagem de Direção Veicular) emitida. Se você já é habilitado e quer apenas perder o medo ou aperfeiçoar, basta entrar em contato direto para combinarmos.',
  },
  {
    question: 'As aulas preparam para a prova prática do Detran-CE?',
    answer:
      'Sim. O treinamento aborda exatamente os critérios de avaliação e o percurso de prova do Detran-CE: colocação do cinto, regulagem de retrovisores, seta, parada obrigatória, controle de rampa e a baliza completa.',
  },
  {
    question: 'Onde são realizadas as aulas e qual a região de atendimento?',
    answer:
      'O atendimento tem base no Parque Dois Irmãos (Fortaleza – CE) e atende alunos de diversos bairros da capital, com aulas em circuitos de treinamento e em vias públicas adequadas para cada estágio de aprendizado.',
  },
];
