import { Component, afterNextRender, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  whatsappNumber = '573001234567'; // Reemplazar con real
  
  selectedProduct = signal<any>(null);
  showChatBubble = signal(false);
  
  products = signal([
    {
      id: 1,
      name: 'Supercolo Gris',
      category: 'Pegantes',
      description: 'Mortero de cemento gris con polímeros de alta adherencia para cerámica y piedra natural.',
      badge: 'Bestseller',
      image: 'products/supercolo-gris.png',
      details: {
        uso: 'Ideal para cerámicas de formato medio en interiores y exteriores. Mezcle con agua limpia hasta obtener una pasta homogénea.',
        garantia: '10 años de estabilidad estructural bajo condiciones normales de uso.',
        ficha: 'Densidad: 1.6 g/cm3 | Tiempo de ajuste: 20 min | Resistencia: > 1.0 MPa.',
        pdfUrl: 'assets/docs/ficha-supercolo-gris.pdf'
      }
    },
    {
      id: 2,
      name: 'Supercolo Pro Blanco',
      category: 'Pegantes Premium',
      description: 'Cemento blanco de granulometría controlada para acabados inmaculados.',
      badge: 'Acabado de Lujo',
      image: 'products/supercolo-pego blanco.png',
      details: {
        uso: 'Especial para mármol, granito y piezas blancas que requieren no mancharse.',
        garantia: 'Garantía extendida de 12 años.',
        ficha: 'Blancura: 90% | Tiempo abierto: 30 min | Adherencia superior.',
        pdfUrl: 'assets/docs/ficha-supercolo-pro.pdf'
      }
    },
    {
      id: 3,
      name: 'Pega Bloque',
      category: 'Mezcla de alto rendimiento',
      description: 'Solo requiere agua. Para la construcción con bloques de arcilla, concreto y ladrillos.',
      badge: 'Solo requiere agua',
      image: 'products/superbloq.png',
      details: {
        uso: 'Mezclar con agua hasta consistencia plástica. Aplicar en juntas de 1cm.',
        garantia: 'Alta resistencia al corte y compresión.',
        ficha: 'Fraguado inicial: 4 horas | Resistencia final: 28 días.',
        pdfUrl: 'assets/docs/ficha-pega-bloque.pdf'
      }
    },
    {
      id: 4,
      name: 'Super Estuco Pro',
      category: 'Acabados',
      description: 'Acabado extra blanco y liso para interiores de alta gama.',
      badge: 'Nuevo',
      image: 'products/super-estuco.png',
      details: {
        uso: 'Aplicar sobre revoque o concreto para obtener una superficie lisa tipo espejo.',
        garantia: 'Protección contra micro-fisuras por 5 años.',
        ficha: 'Secado rápido | Lijado fácil | Bajo polvo.',
        pdfUrl: 'assets/docs/ficha-estuco-pro.pdf'
      }
    },
    {
      id: 5,
      name: 'Super Friso',
      category: 'Nivelación',
      description: 'La capa de acabado perfecta para nivelar paredes. Cemento gris y sílice de alta calidad.',
      badge: 'Nivelación Perfecta',
      image: 'products/super-friso.png',
      details: {
        uso: 'Ideal para corregir imperfecciones en muros antes de estucar.',
        garantia: 'Excelente adherencia al soporte.',
        ficha: 'Espesor máximo: 5mm | Acabado fino.',
        pdfUrl: 'assets/docs/ficha-super-friso.pdf'
      }
    },
    {
      id: 6,
      name: 'Super Concreto',
      category: 'Ingeniería',
      description: 'Diseñado para estructuras robustas como techos, muros y pisos que exigen máxima resistencia.',
      badge: 'Estructuras Robustas',
      image: 'products/superconcret.png',
      details: {
        uso: 'Vaciado de estructuras de concreto reforzado.',
        garantia: 'Cumple normas sismoresistentes.',
        ficha: 'Resistencia: 3000-4000 PSI según mezcla.',
        pdfUrl: 'assets/docs/ficha-super-concreto.pdf'
      }
    },
    {
      id: 7,
      name: 'Adhesivo Piscinas',
      category: 'Alto Tráfico',
      description: 'Resistente a cambios de temperatura y humedad. Ideal para piscinas, spas y fachadas.',
      badge: 'Resistente H2O',
      image: 'products/supercolo-plus(piscina).png',
      details: {
        uso: 'Especial para inmersión constante. Aplicar en superficies limpias.',
        garantia: 'Resistencia a químicos de piscina.',
        ficha: 'Flexibilidad mejorada | Absorción nula.',
        pdfUrl: 'assets/docs/ficha-piscinas.pdf'
      }
    },
    {
      id: 8,
      name: 'Pega Porcelanato',
      category: 'Alto Desempeño',
      description: 'Adhesivo especializado para piezas de baja absorción y gran formato.',
      badge: 'Gran Formato',
      image: 'products/supercolo-premium.png',
      details: {
        uso: 'Doble encolado recomendado para piezas superiores a 60x60cm.',
        garantia: 'Máxima flexibilidad garantizada.',
        ficha: 'Clasificación C2TE | Alta deformabilidad.',
        pdfUrl: 'assets/docs/ficha-porcelanato.pdf'
      }
    },
    {
      id: 9,
      name: 'Mortero Impermeable',
      category: 'Protección',
      description: 'Barrera definitiva contra la humedad en cimentaciones y tanques.',
      badge: 'Zero Humedad',
      image: 'products/elsoberano.png',
      details: {
        uso: 'Recubrimiento de tanques de agua potable y muros de contención.',
        garantia: '15 años de impermeabilidad.',
        ficha: 'Resistente a presión hidrostática positiva y negativa.',
        pdfUrl: 'assets/docs/ficha-impermeable.pdf'
      }
    }
  ]);


  projects = signal([
    { 
      title: 'Torre Empresarial Sigma', 
      location: 'Bogotá D.C.', 
      image: 'assets/projects/placeholder.jpg', 
      desc: 'Implementación masiva de Super Concreto y Supercolo Pro para fachada ventilada.' 
    },
    { 
      title: 'Residencial Horizonte', 
      location: 'Medellín', 
      image: 'assets/projects/placeholder.jpg', 
      desc: 'Acabados interiores con Super Estuco de lujo en más de 200 apartamentos.' 
    },
    { 
      title: 'Centro Logístico Nacional', 
      location: 'Cali', 
      image: 'assets/projects/placeholder.jpg', 
      desc: 'Pisos industriales de alta resistencia con tecnología de Construpego.' 
    },
    { 
      title: 'Hotel Vista Mar', 
      location: 'Cartagena', 
      image: 'assets/projects/placeholder.jpg', 
      desc: 'Adhesivos especiales para ambientes salinos y piscinas de borde infinito.' 
    }
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
    mm.add("(min-width: 768px)", () => {
      // 1. Hero Content Scale
      gsap.to(".hero-content", {
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        scale: 0.85,
        opacity: 0,
        y: -50
      });

      // 2. Obras: Horizontal Scroll Engine
      const container = document.querySelector('.projects-inner') as HTMLElement;
      if (container) {
        gsap.to(container, {
          x: () => -(container.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: ".projects-container",
            pin: true,
            scrub: 1,
            start: "top top",
            // El scroll dura lo que mida el contenido extra
            end: () => "+=" + (container.scrollWidth - window.innerWidth)
          }
        });
      }

      // 3. Reveal animations for "Nosotros"
      gsap.from(".nosotros-reveal", {
        scrollTrigger: {
          trigger: "#nosotros",
          start: "top 70%"
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out"
      });
    });

    // Mobile: Simplified Experience
    mm.add("(max-width: 767px)", () => {
      gsap.from(".product-card", {
        scrollTrigger: {
          trigger: ".products-grid",
          start: "top 85%"
        },
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6
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

  getWhatsAppLink(msg?: string): string {
    const text = msg ? encodeURIComponent(msg) : 'Hola, quiero recibir asesoría premium sobre Construpego';
    return `https://wa.me/${this.whatsappNumber}?text=${text}`;
  }
}
