export const clinic = {
  name: "AS FISIOTERAPIA",
  logo: "/images/logo.png",
  tagline: "Tu recuperación en Santa Cruz de Tenerife",
  description: "AS FISIOTERAPIA es tu clínica de confianza en Santa Cruz de Tenerife, Álava. Con valoración de 5 estrellas en Google, nuestro equipo especializado en fisioterapia, osteopatía y tratamiento de ATM te ofrece atención personalizada y técnicas avanzadas. Desde la primera sesión notarás la diferencia con profesionales que combinan formación de alto nivel, trato cercano y resultados visibles.",
  colors: {
    primary: "#2563EB",
    secondary: "#1E293B",
    accent: "#06B6D4",
    neutral: "#F8FAFC"
  },
  phone: "626 45 14 52",
  whatsapp: "+34626451452",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de fisioterapia.",
  email: "",
  address: {
    street: "Av. Ángel Guimerá, 50, 38003 Santa Cruz de Tenerife, España",
    city: "Santa Cruz de Tenerife",
    province: "Álava",
    postalCode: "38003",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=5071675420522560893&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=AS%20FISIOTERAPIA%20%4028.4669%2C-16.2536&z=16&output=embed",
  coordinates: {
    lat: 28.4669,
    lng: -16.2536
  },
  schedule: [
    {
      days: "lunes - viernes",
      hours: "9:00–20:00"
    },
    {
      days: "sábado",
      hours: "10:00–14:00"
    },
    {
      days: "domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 5,
    count: 18,
    url: "https://maps.google.com/?cid=5071675420522560893&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
    featured: [
      {
        author: "Juan Ramón Noda Rodríguez",
        rating: 5,
        text: "Mi experiencia en el centro de fisioterapia fue excelente, gracias a María, la profesional que me atendió. Su trato cercano y amable, combinado con su gran formación y conocimiento en el tratamiento de la  ATM, me transmitieron mucha confianza desde el inicio. María supo explicar claramente el origen de mi problema y el enfoque del tratamiento, lo que me permitió sentirme en buenas manos. Además, su dedicación y compromiso con la mejora del paciente se notan en cada sesión. He visto una notable mejoría en poco tiempo y recomiendo el centro, especialmente por la calidad y profesionalidad humana.",
        date: "Hace un año"
      },
      {
        author: "Minerva",
        rating: 5,
        text: "Estoy muy contenta con la fisioterapeuta María, la conocí porque me daba clases de pilates online y asistí a la clínica para que me tratara algunas lesiones y, sin duda la mejor fisioterapeuta que me ha tratado en mi vida. Me trató partes de mi cuerpo que nunca me habían tratado, se nota su buena formación y experiencia en fisioterapia y osteopatía. Después de una sesión con ella mejoré muchísimo, nunca había experimentado tanta mejoría en una sola sesión. Súper recomendable!!!",
        date: "Hace un año"
      },
      {
        author: "Silvia SH",
        rating: 5,
        text: "He visitado AS Fisioterapia por varios motivos y en diferentes ocasiones. Siempre he recibido el mejor trato y han sabido solucionar mis problemas. Sin duda, en las mejores manos.",
        date: "Hace 2 meses"
      },
      {
        author: "José Manuel Ramos",
        rating: 5,
        text: "Excelente profesional. Fui por una molestia en el gemelo y Asier me trató genial. Muy profesional, cercano y se nota que sabe lo que hace. Salí mucho mejor. Recomendado.",
        date: "Hace 8 meses"
      },
      {
        author: "Delia Sálamo González",
        rating: 5,
        text: "Grandes profesionales. Desde la primera sesión se nota la mejoría. El trato con el paciente es inmejorable. Fisioterapia de calidad. 100% recomendable.",
        date: "Hace un año"
      }
    ]
  },
  services: [
    {
      id: "fisioterapia-manual",
      name: "Fisioterapia Manual",
      description: "Técnicas manuales especializadas aplicadas por fisioterapeutas con formación avanzada. Tratamos cada parte de tu cuerpo de forma integral, llegando donde otros tratamientos no llegan. Nuestros pacientes experimentan mejorías notables desde la primera sesión gracias a nuestro enfoque personalizado y profundo conocimiento anatómico.",
      benefits: [
        "Mejoría notable desde la primera sesión",
        "Tratamiento integral de todo el cuerpo",
        "Técnicas avanzadas y personalizadas"
      ],
      icon: "Hand"
    },
    {
      id: "osteopatia",
      name: "Osteopatía",
      description: "Tratamiento osteopático realizado por profesionales con amplia experiencia y formación específica. Abordamos el origen de tu problema con técnicas manuales que restablecen el equilibrio del cuerpo. La osteopatía complementa perfectamente la fisioterapia para resultados más completos y duraderos.",
      benefits: [
        "Tratamiento del origen del problema",
        "Enfoque integral del cuerpo",
        "Resultados duraderos y efectivos"
      ],
      icon: "Activity"
    },
    {
      id: "tratamiento-atm",
      name: "Tratamiento de ATM",
      description: "Especialistas en trastornos de la articulación temporomandibular (ATM). Explicamos claramente el origen de tu problema y diseñamos un tratamiento específico que genera confianza y resultados. Nuestros pacientes experimentan mejorías notables en poco tiempo gracias a nuestro conocimiento especializado en esta área compleja.",
      benefits: [
        "Especialización específica en ATM",
        "Explicación clara del problema",
        "Mejoría notable en poco tiempo"
      ],
      icon: "Target"
    },
    {
      id: "fisioterapia-deportiva",
      name: "Fisioterapia Deportiva",
      description: "Recuperación efectiva de lesiones deportivas como molestias musculares, sobrecargas y lesiones de gemelos. Tratamiento profesional y cercano que te permite volver a tu actividad deportiva con seguridad. Nos aseguramos de que salgas mucho mejor después de cada sesión.",
      benefits: [
        "Recuperación rápida de lesiones",
        "Vuelta segura al deporte",
        "Prevención de futuras lesiones"
      ],
      icon: "Dumbbell"
    },
    {
      id: "rehabilitacion",
      name: "Rehabilitación Personalizada",
      description: "Programas de rehabilitación diseñados específicamente para tu caso. Seguimiento continuo y compromiso total con tu mejoría en cada sesión. Tratamos diversos problemas en diferentes ocasiones, siempre con el mejor trato y soluciones efectivas.",
      benefits: [
        "Programas personalizados a tu caso",
        "Seguimiento continuo de tu evolución",
        "Solución efectiva de problemas diversos"
      ],
      icon: "Heart"
    },
    {
      id: "pilates-terapeutico",
      name: "Pilates Terapéutico",
      description: "Clases de pilates con enfoque terapéutico, disponibles tanto presenciales como online. Combinamos el fortalecimiento y la prevención con el tratamiento de lesiones. Ideal para complementar tu recuperación y mantener los resultados a largo plazo.",
      benefits: [
        "Fortalecimiento y prevención",
        "Modalidad presencial y online",
        "Complemento perfecto al tratamiento"
      ],
      icon: "Activity"
    },
    {
      id: "tratamiento-lesiones",
      name: "Tratamiento de Lesiones",
      description: "Atención especializada para todo tipo de lesiones y molestias. Nuestros profesionales identifican y tratan partes del cuerpo que otros no han tratado antes, gracias a nuestra formación avanzada y experiencia. La fisioterapia de calidad que marca la diferencia desde la primera sesión.",
      benefits: [
        "Tratamiento completo y profundo",
        "Mejoría desde la primera sesión",
        "Experiencia y formación avanzada"
      ],
      icon: "Zap"
    },
    {
      id: "valoracion-personalizada",
      name: "Valoración Personalizada",
      description: "Primera sesión de valoración donde analizamos tu caso en profundidad y diseñamos tu plan de tratamiento. Explicamos claramente el origen de tu problema y el enfoque terapéutico para que te sientas en buenas manos desde el inicio. Trato cercano y profesional garantizado.",
      benefits: [
        "Análisis completo de tu caso",
        "Explicación clara del problema",
        "Plan de tratamiento personalizado"
      ],
      icon: "Target"
    }
  ],
  process: [
    {
      step: 1,
      title: "Contacta con Nosotros",
      description: "Llámanos al 626 45 14 52 o escríbenos por WhatsApp. Te atenderemos de forma cercana y resolveremos todas tus dudas para agendar tu cita de valoración en el horario que mejor te convenga."
    },
    {
      step: 2,
      title: "Valoración Especializada",
      description: "En tu primera sesión realizamos un análisis completo de tu caso. Te explicamos claramente el origen de tu problema y diseñamos un plan de tratamiento personalizado adaptado a tus necesidades específicas."
    },
    {
      step: 3,
      title: "Tratamiento Profesional",
      description: "Aplicamos técnicas avanzadas de fisioterapia y osteopatía con dedicación y compromiso en cada sesión. Tratamos tu cuerpo de forma integral, llegando donde otros tratamientos no llegan, para conseguir mejorías notables desde el primer día."
    },
    {
      step: 4,
      title: "Seguimiento y Recuperación",
      description: "Realizamos un seguimiento continuo de tu evolución hasta tu completa recuperación. Te acompañamos en todo el proceso con el mejor trato profesional y humano, asegurándonos de que alcances tus objetivos de salud y bienestar."
    }
  ],
  whyUs: [
    {
      title: "Valoración 5★ en Google",
      description: "Contamos con la máxima valoración de 5 estrellas en Google basada en 18 reseñas reales de pacientes satisfechos. Nuestros clientes destacan la profesionalidad, el trato cercano y las mejorías notables que experimentan desde la primera sesión. Una prueba real de la calidad de nuestro trabajo.",
      icon: "Award"
    },
    {
      title: "Formación y Experiencia Avanzada",
      description: "Nuestro equipo cuenta con gran formación en fisioterapia y osteopatía, con especialización en áreas complejas como el tratamiento de ATM. Tratamos partes del cuerpo que otros no tratan, llegando al origen del problema con técnicas avanzadas y conocimiento profundo de la anatomía.",
      icon: "GraduationCap"
    },
    {
      title: "Resultados Desde la Primera Sesión",
      description: "Nuestros pacientes experimentan mejorías significativas desde el primer tratamiento. La combinación de técnicas manuales especializadas, enfoque integral y dedicación en cada sesión permite obtener resultados visibles rápidamente. La fisioterapia de calidad que marca la diferencia.",
      icon: "TrendingUp"
    },
    {
      title: "Trato Cercano y Profesional",
      description: "En AS FISIOTERAPIA te sentirás en buenas manos desde el inicio. Explicamos claramente el origen de tu problema y el plan de tratamiento, generando confianza y tranquilidad. Nuestro compromiso con tu recuperación se refleja en la dedicación y el trato humano de cada sesión.",
      icon: "Users"
    }
  ],
  team: [
    {
      name: "María",
      role: "Fisioterapeuta y Osteópata",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En AS FISIOTERAPIA nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    },
    {
      name: "Asier",
      role: "Fisioterapeuta",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En AS FISIOTERAPIA nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    }
  ],
  gallery: [
    {
      src: "/images/hero.webp",
      alt: "AS FISIOTERAPIA - Imagen 1"
    }
  ],
  faq: [
    {
      question: "¿Qué hace diferente a AS FISIOTERAPIA?",
      answer: "En AS FISIOTERAPIA contamos con valoración de 5 estrellas en Google basada en 18 reseñas reales de pacientes satisfechos. Nuestros profesionales destacan por su formación avanzada en fisioterapia y osteopatía, trato cercano y capacidad de generar mejorías notables desde la primera sesión. Tratamos cada parte del cuerpo de forma integral, llegando donde otros tratamientos no llegan."
    },
    {
      question: "¿Sois especialistas en tratamiento de ATM?",
      answer: "Sí, el tratamiento de la articulación temporomandibular (ATM) es una de nuestras especialidades. Contamos con gran formación y conocimiento específico en esta área compleja. Explicamos claramente el origen del problema y el enfoque del tratamiento, logrando mejorías notables en poco tiempo. Nuestros pacientes destacan la confianza que transmitimos desde el inicio."
    },
    {
      question: "¿Veré resultados desde la primera sesión?",
      answer: "Muchos de nuestros pacientes experimentan mejorías significativas desde la primera sesión en AS FISIOTERAPIA. Nuestro enfoque integral y técnicas avanzadas de fisioterapia y osteopatía permiten tratar el problema en profundidad. El tiempo total de recuperación depende de cada caso, pero desde el primer día notarás la diferencia en el trato profesional y la efectividad del tratamiento."
    },
    {
      question: "¿Qué tipo de lesiones tratáis?",
      answer: "En AS FISIOTERAPIA tratamos todo tipo de lesiones y molestias: problemas de ATM, lesiones deportivas, molestias musculares, sobrecargas, contracturas y diversas patologías. Nuestros profesionales tienen experiencia tratando múltiples problemas en diferentes ocasiones, siempre con soluciones efectivas. Cada tratamiento es personalizado según tus necesidades específicas."
    },
    {
      question: "¿Ofrecéis clases de pilates terapéutico?",
      answer: "Sí, ofrecemos pilates terapéutico tanto en modalidad presencial como online. Es un complemento perfecto para tu tratamiento de fisioterapia, ayudando en la prevención de lesiones y el fortalecimiento corporal. Nuestros profesionales combinan el enfoque terapéutico con el trabajo de pilates para resultados más completos y duraderos."
    },
    {
      question: "¿Cómo puedo pedir cita en AS FISIOTERAPIA?",
      answer: "Pedir cita es muy sencillo. Puedes llamarnos directamente al 626 45 14 52 o escribirnos por WhatsApp al mismo número. Te atenderemos de forma cercana, resolveremos tus dudas y agendaremos tu cita de valoración en el horario que mejor te convenga. Estamos en Santa Cruz de Tenerife, Álava."
    },
    {
      question: "¿Qué opinan vuestros pacientes?",
      answer: "AS FISIOTERAPIA tiene una valoración de 5 estrellas en Google con 18 reseñas. Nuestros pacientes destacan la profesionalidad, el trato cercano y amable, la formación avanzada de nuestro equipo y las mejorías notables que experimentan. Muchos comentan que es la mejor fisioterapia que han recibido y que tratamos partes del cuerpo que nunca les habían tratado antes. El compromiso con la recuperación del paciente se nota en cada sesión."
    },
    {
      question: "¿Trabajáis con técnicas de osteopatía?",
      answer: "Sí, la osteopatía es una parte fundamental de nuestros tratamientos en AS FISIOTERAPIA. Nuestros profesionales cuentan con formación y experiencia específica en osteopatía, lo que nos permite abordar el origen de los problemas de forma integral. Combinamos fisioterapia y osteopatía para ofrecer tratamientos más completos y efectivos que generan resultados duraderos."
    }
  ],
  seo: {
    titleTemplate: "%s | AS FISIOTERAPIA",
    defaultTitle: "AS FISIOTERAPIA - Fisioterapia en Santa Cruz de Tenerife",
    defaultDescription: "Clínica de fisioterapia y osteopatía en Santa Cruz de Tenerife, Álava. Especialistas en ATM, lesiones deportivas y rehabilitación. Valoración 5★. Pide cita: 626 45 14 52",
    keywords: [
      "fisioterapia Santa Cruz de Tenerife",
      "AS FISIOTERAPIA",
      "osteopatía Santa Cruz de Tenerife",
      "tratamiento ATM Santa Cruz de Tenerife",
      "fisioterapia deportiva Santa Cruz de Tenerife",
      "fisioterapeuta Santa Cruz de Tenerife",
      "rehabilitación Santa Cruz de Tenerife",
      "pilates terapéutico Santa Cruz de Tenerife",
      "clínica fisioterapia Álava",
      "fisioterapia manual Santa Cruz de Tenerife",
      "mejor fisioterapeuta Santa Cruz de Tenerife",
      "tratamiento lesiones Santa Cruz de Tenerife"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "AS FISIOTERAPIA",
    cif: "",
    registeredAddress: "Av. Ángel Guimerá, 50, 38003 Santa Cruz de Tenerife, España, Santa Cruz de Tenerife, Álava"
  },
  heroHeadline: [
    "Tu Centro de",
    "Fisioterapia",
    "en Santa Cruz de Tenerife"
  ],
  heroDescription: "En AS FISIOTERAPIA combinamos técnicas manuales avanzadas de fisioterapia y osteopatía con un enfoque personalizado para tu recuperación. Nuestros profesionales especializados en ATM, lesiones deportivas y rehabilitación te ofrecen tratamientos efectivos desde la primera sesión.",
  specialty: "Fisioterapia y Osteopatía",
  ctaLabel: "Tu Recuperación",
  ctaHeadline: "¿Listo para recuperar tu bienestar?",
  ctaDescription: "Solicita tu cita de valoración en AS FISIOTERAPIA. Llámanos al 626 45 14 52 o escríbenos por WhatsApp. Estaremos encantados de ayudarte a recuperar tu movilidad y calidad de vida.",
  statsLabel: "Pacientes",
  schemaType: "PhysicalTherapy",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Soluciones profesionales adaptadas a tus necesidades de salud.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la recuperación en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu salud, nuestra prioridad",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para cuidar de tu salud.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestros pacientes",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestra clínica",
    galleryDescription: "Un espacio diseñado para tu bienestar y recuperación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestros pacientes.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializados",
    teamDescription: "Experiencia y dedicación al servicio de tu salud"
  }
}

export type Clinic = typeof clinic
