import { Component, afterNextRender, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // Blindaje de seguridad: El número nunca se expone como un string completo en el HTML
  private p1 = '58';
  private p2 = '424';
  private p3 = '2782411';

  selectedProduct = signal<any>(null);
  showChatBubble = signal(false);

  products = signal([
    {
  id: 1,
  name: 'Super Concret',
  category: 'Ingeniería Estructural',
  description:
    'Mezcla técnica de Cemento Portland y Arena Sílice de alta pureza. Máxima resistencia estructural para vaciados de columnas, vigas, losas, zapataz, aceras y obras civiles de gran escala.',
  badge: 'Resistencia Estructural',
  image: 'products/superconcret.png',
  details: {
    uso: 'Para estructuras de concreto reforzado: columnas, vigas, losas, Zapataz, aceras, rampas, escalones. Agregar agua limpia y mezclar por 5 minutos hasta consistencia plástica.',
    garantia:
      'Respaldo Total Construcpego: Mezcla formulada con Cemento Portland tipo I/III y Arena Sílice malla 10-30. Cumple con estándares de ingeniería en Venezuela.',
    ficha: 'Resistencia: 3000-4000 PSI | Tiempo de mezcla: >45 min | Conservación: 6 meses.',
    pdfUrl: 'assets/docs/05_MORTEROS PARA SUPERCONCRET.pdf',
  },
},
{
  id: 2,
  name: 'Superbloq',
  category: 'Morteros de Alto Rendimiento',
  description:
    'Mortero de alta resistencia para instalación de bloques de arcilla, concreto, concreto ligero, tejas y piedras. Formulación lista: solo agregue agua.',
  badge: 'Alta Resistencia',
  image: 'products/superbloq.png',
  details: {
    uso: 'Para instalar cualquier tipo de bloque, ladrillo, piedra y laja terracota. Mezclar con 4L de agua por cada 20kg. Aplicar con cuchara de albañil directo a la superficie.',
    garantia:
      'Respaldo Total Construcpego: Fórmula con Arena Sílice y Cemento Portland. Rendimiento de 3-4 m² dependiendo del tamaño de la pieza y espesor de junta.',
    ficha: 'Fraguado inicial: 4 horas | Resistencia final: 28 días | Tiempo de mezcla: >45 min.',
    pdfUrl: 'assets/docs/04_MORTEROS PARA SUPERBLOQ.pdf',
  },
},
{
  id: 3,
  name: 'Superfriso',
  category: 'Nivelación de Precisión',
  description:
    'Mortero de ingeniería con propiedades hidrofugas para nivelación de paredes, corrección de fisuras y acabado extra liso. Ideal como base para estuco.',
  badge: 'Nivelación Técnica',
  image: 'products/super-friso.png',
  details: {
    uso: 'Para corregir imperfecciones en muros de bloque, ladrillo, concreto. Aplicar con llana dentada en espesor medio de 2cm. Regular con regla y alisar.',
    garantia:
      'Respaldo Total Construcpego: Mortero hidrofugo con Arena Sílice y Cemento Portland. Acabado extra liso con fraguado controlado.',
    ficha: 'Espesor máximo: 5mm por capa | Rendimiento: 3-4 m² | Tiempo de mezcla: >45 min.',
    pdfUrl: 'assets/docs/03_MORTEROS PARA SUPERFRISO.pdf',
  },
},

// ========================================
// 🎨 PRODUCTOS ARQUITECTÓNICOS
// ========================================

{
  id: 4,
  name: 'Supercolo',
  category: 'Pegantes de Ingeniería',
  description:
    'Mortero adhesivo de alta tecnología para cerámica, gres, porcelanatos y piedra natural. Formulación con polímeros redispersables que garantizan adherencia superior y tiempo abierto optimizado.',
  badge: 'Adherencia Molecular',
  image: 'products/supercolo-gris.png',
  details: {
    uso: 'Ideal para cerámicas de formato medio en interiores y exteriores. Mezcle 14kg con 5L de agua limpia hasta obtener pasta homogénea. Aplicar con llana dentada.',
    garantia:
      'Respaldo Total Construcpego: Adhesivo con Arena Sílice malla 10-30, Cemento Portland tipo I/III y celulosa. Cumplimiento de estándares de ingeniería venezolanos.',
    ficha: 'Densidad: 1.6 g/cm³ | Tiempo de ajuste: 20 min | Resistencia: > 1.0 MPa | Rendimiento: 1.8-2.5 m²/saco.',
    pdfUrl: 'assets/docs/01_MORTEROS PARA PEGO (GRIS Y BLANCO).pdf',
  },
},
{
  id: 5,
  name: 'Supercolo Plus',
  category: 'Grado Inmersión',
  description:
    'Adhesivo de alto desempeño especializado para zonas de inmersión constante: piscinas, spas, fuentes y estanques. Resistente a químicos, cambios térmicos y presión hidrostática.',
  badge: 'Grado Inmersión',
  image: 'products/supercolo-plus(piscina).png',
  details: {
    uso: 'Para azulejos, cerámica y mosaico de vidrio en piscinas y zonas húmedas. Disolver 14kg en 6L de agua, dejar reposar 15min y mezclar. Aplicar con llana dentada 1/4".',
    garantia:
      'Respaldo Total Construcpego: Adhesivo con propiedades hidrofóbicas. Resistente a inmersión constante y ciclos de hielo/deshielo.',
    ficha: 'Flexibilidad mejorada | Absorción nula | Rendimiento: 0.8-1 m²/saco | Tiempo abierto optimizado.',
    pdfUrl: 'assets/docs/06_MORTEROS PARA SUPERCOLO PLUS (GRIS BLANCO).pdf',
  },
},
{
  id: 6,
  name: 'Supercolo Premium',
  category: 'Formatos Gigantes',
  description:
    'Adhesivo de última generación para piezas de gran formato y baja absorción: mármol, granito, porcelanatos y espacatos jumbo. Clasificación C2TE con alta deformabilidad.',
  badge: 'Formato Jumbo',
  image: 'products/supercolo-premium.png',
  details: {
    uso: 'Para piezas superiores a 60x60cm. Recomendado doble encolado (aplicar adhesivo tanto en la superficie como en el reverso de la pieza).',
    garantia:
      'Respaldo Total Construcpego: Adhesivo con polímeros redispersables de acetato de vinilo y etileno. Clasificación C2TE según normativa europea.',
    ficha: 'Clasificación: C2TE | Alta deformabilidad | Rendimiento: 0.8-1 m²/saco | Cubre 70-80% del reverso.',
    pdfUrl: 'assets/docs/07_MORTEROS PARA SUPERCOLO PREMIUM (GRIS BLANCO).pdf',
  },
},
{
  id: 7,
  name: 'Super Estuco',
  category: 'Alta Decoración',
  description:
    'Acabado decorativo de lujo con máxima blancura y suavidad. Presentación de 10kg para obtener superficies tipo espejo en paredes y techos interiores.',
  badge: 'Acabado Espejo',
  image: 'products/super-estuco.png',
  details: {
    uso: 'Aplicar sobre Superfriso o concreto en espesores de 2-4mm con llana de acero inoxidable. Una vez seco, lijar con lija grano 120-180 para acabado tipo espejo.',
    garantia:
      'Respaldo Total Construcpego: Estuco con Cemento Portland blanco y carbonato de calcio malla extrafina. Acabado de lujo con bajo polvo.',
    ficha: 'Secado rápido | Lijado fácil | Espesor: 2-4mm | Rendimiento: 1.5-2.4 kg/m².',
    pdfUrl: 'assets/docs/02_MORTEROS PARA ESTUCO (GRIS Y BLANCO).pdf',
  },
},
{
  id: 8,
  name: 'El Soberano',
  category: 'Eficiencia Operativa',
  description:
    'Presentación optimizada de 12kg con la misma formulación de calidad del Supercolo. Formato más manejable para aplicaciones rápidas en acabados y reparaciones menores.',
  badge: 'Eficiencia Superior',
  image: 'products/elsoberano.png',
  details: {
    uso: 'Optimizado para aplicaciones rápidas, reparaciones y acabados menores. Formato práctico de 12kg para proyectos de menor escala.',
    garantia:
      'Respaldo Total Construcpego: Mismo estándar de calidad del Supercolo. Resistente a presión hidrostática y con polímeros avanzados.',
    ficha: 'Formato: 12kg | Resistente a presión hidrostática | Tiempo de mezcla: >45 min.',
    pdfUrl: 'assets/docs/01_MORTEROS PARA PEGO (GRIS Y BLANCO).pdf',
  },
}]);

  projects = signal([
    {
      title: 'Mural de Zapata (UCV)',
      location: 'Caracas',
      image: 'obras/Mural de Zapata.jpg',
      desc: "Aplicación de Supercolo para la preservación del icónico mosaico 'Conductores de Venezuela' en ambiente exterior.",
    },
    {
      title: 'Complejo de Piscinas Olímpicas UCV',
      location: 'Caracas',
      image: 'obras/Piscinas olimpicas.jpg',
      desc: 'Uso de Super Colo Plus para garantizar máxima adherencia e impermeabilidad en inmersión constante.',
    },
    {
      title: 'Torre Luxor',
      location: 'El Rosal, Caracas',
      image: 'obras/Torre luxor.jpg',
      desc: 'Acabados de lujo y alta ingeniería aplicados con Supercolo en fachada y áreas comunes.',
    },
    {
      title: 'C.C. Sambil Caracas',
      location: 'Chacao, Caracas',
      image: 'obras/Sambil Caracas.jpg',
      desc: 'Soluciones de alta durabilidad y resistencia para pisos y revestimientos en zonas de alto tráfico comercial.',
    },
  ]);

  constructor() {
    afterNextRender(async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      this.initAnimations(gsap, ScrollTrigger);

      // Saludo del Chatbot tras 5 segundos
      setTimeout(() => this.showChatBubble.set(true), 5000);
    });
  }

  private initAnimations(gsap: any, ScrollTrigger: any) {
    const mm = gsap.matchMedia();

    // PC: Desktop Experience
    mm.add('(min-width: 768px)', () => {
      // 1. Hero Content Scale
      gsap.to('.hero-content', {
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        scale: 0.85,
        opacity: 0,
        y: -50,
      });

      // 2. Obras: Horizontal Scroll Engine
      const container = document.querySelector('.projects-inner') as HTMLElement;
      if (container) {
        gsap.to(container, {
          x: () => -(container.scrollWidth - window.innerWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: '#proyectos',
            pin: true,
            scrub: 1,
            start: 'top top',
            end: () => '+=' + (container.scrollWidth - window.innerWidth),
            invalidateOnRefresh: true,
          },
        });
      }

      // 3. Nosotros: Parallax Frames
      gsap.to('.frame-maestro', {
        scrollTrigger: {
          trigger: '#nosotros',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        y: -60,
        ease: 'none',
      });

      gsap.to('.frame-tecnico', {
        scrollTrigger: {
          trigger: '#nosotros',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        y: 60,
        ease: 'none',
      });

      // 4. Reveal animations for "Nosotros" content
      gsap.from('.nosotros-reveal', {
        scrollTrigger: {
          trigger: '#nosotros',
          start: 'top 70%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
      });

      ScrollTrigger.refresh();
    });

    // Mobile: Simplified Experience
    mm.add('(max-width: 767px)', () => {
      gsap.from('.product-card', {
        scrollTrigger: {
          trigger: '.products-grid',
          start: 'top 85%',
        },
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
      });
    });
  }

  openProduct(product: any) {
    this.selectedProduct.set(product);
    document.body.style.overflow = 'hidden';
  }

  closeProduct() {
    this.selectedProduct.set(null);
    document.body.style.overflow = 'auto';
  }

  contactWhatsApp(msg?: string) {
    const phone = `${this.p1}${this.p2}${this.p3}`;
    const text = msg
      ? encodeURIComponent(msg)
      : encodeURIComponent('Hola, quiero recibir asesoría premium sobre Construcpego');
    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
