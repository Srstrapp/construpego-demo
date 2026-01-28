import { Component, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // WhatsApp contact number (format: country code + number, no spaces or special chars)
  whatsappNumber = '573001234567'; // Replace with actual number
  
  products = [
    {
      name: 'Supercolo',
      subtitle: 'Cerámica',
      description: 'Mortero de cemento gris con polímeros. Instalación de cerámica y baldosas estándar.',
      highlight: 'Uso Estándar'
    },
    {
      name: 'Supercolo Pro',
      subtitle: 'Blanco',
      description: 'Cemento blanco de granulometría controlada. Recubrimientos cerámicos que requieren acabado inmaculado.',
      highlight: 'Acabado Inmaculado'
    },
    {
      name: 'Pega Bloque',
      subtitle: 'Mezcla de alto rendimiento',
      description: 'Solo requiere agua. Para la construcción con bloques de arcilla, concreto y ladrillos.',
      highlight: 'Solo requiere agua'
    },
    {
      name: 'Super Estuco',
      subtitle: 'Yeso con mármol',
      description: 'Yeso con mármol pulverizado. Paredes suaves, brillantes y sofisticadas con un toque de lujo.',
      highlight: 'Toque de lujo'
    },
    {
      name: 'Super Friso',
      subtitle: 'Cemento y sílice',
      description: 'La capa de acabado perfecta para nivelar paredes. Cemento gris y sílice de alta calidad.',
      highlight: 'Nivelación Perfecta'
    },
    {
      name: 'Super Concreto',
      subtitle: 'Ingeniería',
      description: 'Diseñado para estructuras robustas como techos, muros y pisos que exigen máxima resistencia.',
      highlight: 'Estructuras Robustas'
    },
    {
      name: 'Adhesivo Piscinas',
      subtitle: 'Alto Tráfico',
      description: 'Resistente a cambios de temperatura y humedad. Ideal para piscinas, spas y fachadas.',
      highlight: 'Resistente H2O'
    },
    {
      name: 'Pega Porcelanato',
      subtitle: 'Gran Formato',
      description: 'Adhesivo Premium de alta resistencia. Especial para mármol, granito y piezas pesadas.',
      highlight: 'Adhesivo Premium'
    }
  ];

  constructor() {
    afterNextRender(async () => {
      // Enable automatic dark mode based on system preferences
      this.initDarkMode();
      
      // Initialize GSAP animations
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      
      gsap.registerPlugin(ScrollTrigger);
      
      // Small delay to ensure DOM is fully rendered
      setTimeout(() => {
        this.initHeroAnimations(gsap);
        this.initGridAnimations(gsap, ScrollTrigger);
        this.initFloatingButtonAnimation(gsap, ScrollTrigger);
      }, 100);
    });
  }

  private initDarkMode(): void {
    // Check if user prefers dark mode
    if (typeof window !== 'undefined' && window.matchMedia) {
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      // Apply dark mode on initial load
      if (darkModeMediaQuery.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      // Listen for changes in system preference
      darkModeMediaQuery.addEventListener('change', (e) => {
        if (e.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      });
    }
  }

  private initHeroAnimations(gsap: any): void {
    const heroElements = document.querySelectorAll('.hero-reveal');
    if (heroElements.length === 0) return;
    
    // Set initial state
    gsap.set('.hero-reveal', { opacity: 1, y: 0 });
    
    // Animate from hidden state
    gsap.from('.hero-reveal', {
      duration: 1.5,
      y: 50,
      opacity: 0,
      ease: 'power3.out',
      stagger: 0.2,
      clearProps: 'all'
    });
  }

  private initGridAnimations(gsap: any, ScrollTrigger: any): void {
    const productCards = document.querySelectorAll('.product-card');
    const productsGrid = document.querySelector('.products-grid');
    
    if (productCards.length === 0 || !productsGrid) return;
    
    // Set initial state for cards (visible but slightly below)
    gsap.set('.product-card', { 
      opacity: 1, // Keep visible by default
      y: 0 
    });
    
    // Animate cards on scroll
    gsap.from('.product-card', {
      scrollTrigger: {
        trigger: '.products-grid',
        start: 'top 80%',
        toggleActions: 'play none none reverse', // Play on enter, reverse on leave back
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
      stagger: 0.1,
      ease: 'power2.out',
      clearProps: 'all' // Clear inline styles after animation
    });
  }

  private initFloatingButtonAnimation(gsap: any, ScrollTrigger: any): void {
    const floatingBtn = document.querySelector('.floating-whatsapp');
    const heroCTA = document.querySelector('.hero-cta');

    // Check if elements exist before animating
    if (!floatingBtn || !heroCTA) {
      console.warn('Floating button or hero CTA not found, skipping animation');
      return;
    }

    // Initially hide the floating button
    gsap.set(floatingBtn, { opacity: 0, scale: 0 });

    // Show floating button when hero CTA scrolls out of view
    ScrollTrigger.create({
      trigger: heroCTA,
      start: 'bottom top',
      end: 'bottom top',
      onEnter: () => {
        gsap.to(floatingBtn, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: 'back.out(1.7)'
        });
      },
      onLeaveBack: () => {
        gsap.to(floatingBtn, {
          opacity: 0,
          scale: 0,
          duration: 0.3,
          ease: 'back.in(1.7)'
        });
      }
    });
  }

  getWhatsAppLink(): string {
    return `https://wa.me/${this.whatsappNumber}?text=Hola,%20me%20interesa%20cotizar%20materiales%20de%20construcción`;
  }
}
