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
  // Blindaje de seguridad: El número nunca se expone como un string completo en el HTML
  private p1 = '58';
  private p2 = '412';
  private p3 = '0000000'; // Reemplazar por el resto del número real

  selectedProduct = signal<any>(null);
  showChatBubble = signal(false);
  
  products = signal([
    {
      id: 1,
      name: 'Supercolo Gris',
      category: 'Pegantes de Ingeniería',
      description: 'La base fundamental de la construcción moderna. Mortero molecular gris con polímeros avanzados para una adherencia indestructible en cerámica y piedra natural.',
      badge: 'Adherencia Molecular',
      image: 'products/supercolo-gris.png',
      details: {
        uso: 'Ideal para cerámicas de formato medio en interiores y exteriores. Mezcle con agua limpia hasta obtener una pasta homogénea.',
        garantia: 'Respaldo Total Construcpego: Garantizamos adherencia molecular superior y resistencia estructural certificada. Este producto cumple con los estándares de ingeniería más exigentes de Venezuela, asegurando que su obra perdure por décadas.',
        ficha: 'Densidad: 1.6 g/cm3 | Tiempo de ajuste: 20 min | Resistencia: > 1.0 MPa.',
        pdfUrl: 'assets/docs/ficha-supercolo-gris.pdf'
      }
    },
    {
      id: 2,
      name: 'Supercolo Pro Blanco',
      category: 'Pegantes Premium',
      description: 'Pureza técnica en cada aplicación. Cemento blanco de granulometría ultra-controlada diseñado para acabados de lujo que exigen una estética impecable.',
      badge: 'Pureza Técnica',
      image: 'products/supercolo-pego blanco.png',
      details: {
        uso: 'Especial para mármol, granito y piezas blancas que requieren no mancharse.',
        garantia: 'Respaldo Total Construcpego: Garantizamos adherencia molecular superior y resistencia estructural certificada. Este producto cumple con los estándares de ingeniería más exigentes de Venezuela, asegurando que su obra perdure por décadas.',
        ficha: 'Blancura: 90% | Tiempo abierto: 30 min | Adherencia superior.',
        pdfUrl: 'assets/docs/ficha-supercolo-pro.pdf'
      }
    },
    {
      id: 3,
      name: 'Superbloq',
      category: 'Morteros de Alto Rendimiento',
      description: 'Mortero de alto rendimiento para el pegado de bloques de arcilla o concreto. ¡Tecnología de mezcla lista, solo requiere agua!',
      badge: 'Mezcla Lista',
      image: 'products/superbloq.png',
      details: {
        uso: 'Mezclar con agua hasta consistencia plástica. Aplicar en juntas de 1cm.',
        garantia: 'Respaldo Total Construcpego: Garantizamos adherencia molecular superior y resistencia estructural certificada. Este producto cumple con los estándares de ingeniería más exigentes de Venezuela, asegurando que su obra perdure por décadas.',
        ficha: 'Fraguado inicial: 4 horas | Resistencia final: 28 días.',
        pdfUrl: 'assets/docs/ficha-pega-bloque.pdf'
      }
    },
    {
      id: 4,
      name: 'Super Estuco',
      category: 'Alta Decoración',
      description: 'Acabado brillante y sofisticado para interiores de alta gama. Máxima blancura y suavidad en presentación de 10kg.',
      badge: 'Acabado Espejo',
      image: 'products/super-estuco.png',
      details: {
        uso: 'Aplicar sobre revoque o concreto para obtener una superficie lisa tipo espejo.',
        garantia: 'Respaldo Total Construcpego: Garantizamos adherencia molecular superior y resistencia estructural certificada. Este producto cumple con los estándares de ingeniería más exigentes de Venezuela, asegurando que su obra perdure por décadas.',
        ficha: 'Secado rápido | Lijado fácil | Bajo polvo.',
        pdfUrl: 'assets/docs/ficha-estuco-pro.pdf'
      }
    },
    {
      id: 5,
      name: 'Superfriso',
      category: 'Nivelación de Precisión',
      description: 'Mortero de alta ingeniería diseñado para nivelación de paredes limitadas por rectas paralelas. Acabado extra liso y fraguado controlado.',
      badge: 'Nivelación Técnica',
      image: 'products/super-friso.png',
      details: {
        uso: 'Ideal para corregir imperfecciones en muros antes de estucar.',
        garantia: 'Respaldo Total Construcpego: Garantizamos adherencia molecular superior y resistencia estructural certificada. Este producto cumple con los estándares de ingeniería más exigentes de Venezuela, asegurando que su obra perdure por décadas.',
        ficha: 'Espesor máximo: 5mm | Acabado fino.',
        pdfUrl: 'assets/docs/ficha-super-friso.pdf'
      }
    },
    {
      id: 6,
      name: 'Super Concret',
      category: 'Ingeniería Estructural',
      description: 'Mezcla técnica de Cemento Portland y Arena Sílice. Máxima resistencia estructural para vaciados de techos, muros y vigas de gran escala.',
      badge: 'Resistencia Sísmica',
      image: 'products/superconcret.png',
      details: {
        uso: 'Vaciado de estructuras de concreto reforzado.',
        garantia: 'Respaldo Total Construcpego: Garantizamos adherencia molecular superior y resistencia estructural certificada. Este producto cumple con los estándares de ingeniería más exigentes de Venezuela, asegurando que su obra perdure por décadas.',
        ficha: 'Resistencia: 3000-4000 PSI según mezcla.',
        pdfUrl: 'assets/docs/ficha-super-concreto.pdf'
      }
    },
    {
      id: 7,
      name: 'Supercolo Plus',
      category: 'Grado Inmersión',
      description: 'Adhesivo de alto desempeño para zonas de intenso tránsito, piscinas y spas. Resistente a químicos y cambios térmicos extremos.',
      badge: 'Grado Inmersión',
      image: 'products/supercolo-plus(piscina).png',
      details: {
        uso: 'Especial para inmersión constante. Aplicar en superficies limpias.',
        garantia: 'Respaldo Total Construcpego: Garantizamos adherencia molecular superior y resistencia estructural certificada. Este producto cumple con los estándares de ingeniería más exigentes de Venezuela, asegurando que su obra perdure por décadas.',
        ficha: 'Flexibilidad mejorada | Absorción nula.',
        pdfUrl: 'assets/docs/ficha-piscinas.pdf'
      }
    },
    {
      id: 8,
      name: 'Supercolo Premium',
      category: 'Formatos Gigantes',
      description: 'Adhesivo molecular para piezas de baja absorción y gran peso como Mármol, Granito y Porcelanatos de formato gigante.',
      badge: 'Adherencia Molecular',
      image: 'products/supercolo-premium.png',
      details: {
        uso: 'Doble encolado recomendado para piezas superiores a 60x60cm.',
        garantia: 'Respaldo Total Construcpego: Garantizamos adherencia molecular superior y resistencia estructural certificada. Este producto cumple con los estándares de ingeniería más exigentes de Venezuela, asegurando que su obra perdure por décadas.',
        ficha: 'Clasificación C2TE | Alta deformabilidad.',
        pdfUrl: 'assets/docs/ficha-porcelanato.pdf'
      }
    },
    {
      id: 9,
      name: 'El Soberano',
      category: 'Eficiencia Operativa',
      description: 'Presentación optimizada de 12kg de mortero gris con polímeros. La misma adherencia del Supercolo Gris en un formato más manejable y eficiente.',
      badge: 'Eficiencia Superior',
      image: 'products/elsoberano.png',
      details: {
        uso: 'Optimizado para aplicaciones rápidas en acabados y reparaciones.',
        garantia: 'Respaldo Total Construcpego: Garantizamos adherencia molecular superior y resistencia estructural certificada. Este producto cumple con los estándares de ingeniería más exigentes de Venezuela, asegurando que su obra perdure por décadas.',
        ficha: 'Resistente a presión hidrostática | Formato 12kg.',
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
            trigger: "#proyectos",
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => "+=" + (container.scrollWidth - window.innerWidth),
            invalidateOnRefresh: true // Importante para responsive
          }
        });
      }

      // 3. Nosotros: Parallax Frames
      gsap.to(".frame-maestro", {
        scrollTrigger: {
          trigger: "#nosotros",
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        },
        y: -60,
        ease: "none"
      });

      gsap.to(".frame-tecnico", {
        scrollTrigger: {
          trigger: "#nosotros",
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        },
        y: 60,
        ease: "none"
      });

      // 4. Reveal animations for "Nosotros" content
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

      // Forzar el recálculo de GSAP
      ScrollTrigger.refresh();
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

  contactWhatsApp(msg?: string) {
    const phone = `${this.p1}${this.p2}${this.p3}`;
    const text = msg ? encodeURIComponent(msg) : encodeURIComponent('Hola, quiero recibir asesoría premium sobre Construcpego');
    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
