
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Transforma tus recomendaciones en ventas digitales con nuestro soporte 24/7, diseñado para emprendedores ocupados como tú." cta1="Digitaliza Ya" />
<How step1Title="Contáctanos hoy" step1Desc="Llama o escribe para iniciar." step2Title="Web en 24 horas" step2Desc="Creamos tu sitio de ventas rápido." step3Title="Soporte continuo" step3Desc="Asistencia 24/7 para tu tranquilidad." />
<Aboutus headline="WebGo: Digitaliza y Crece Rápido" subheadline="Transforma tus ventas con sitios web gestionados por expertos de WebGo." beneficiotitulo1="Ventas Instantáneas" beneficio1="Genera ventas online sin complicaciones." beneficiotitulo2="Gestión Sin Estrés" beneficio2="Nos encargamos del sitio web." />
<Services heading="Transforma Recomendaciones en Ventas Digitales" description="Convierta recomendaciones en ventas online, sin estrés ni tiempo perdido." services={[{"name":"Desarrollo Web Rápido","icon":"bolt","description":"Web de ventas en 24 horas."},{"name":"SEO Optimizado","icon":"search","description":"Aumenta visibilidad en motores de búsqueda."},{"name":"Gestión de Contenidos","icon":"edit","description":"Actualizaciones de contenido sin esfuerzo."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia constante para tu tranquilidad."},{"name":"Integraciones E-commerce","icon":"shopping-cart","description":"Conecta con plataformas de pago seguras."},{"name":"Análisis de Tráfico","icon":"chart-line","description":"Informes detallados sobre tus visitantes."}]} />
<BeforeAndAfter subheadline="Transformamos conceptos en realidades digitales asombrosas y efectivas." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar las ventas de mi negocio?","respuesta":"WebGo facilita la transición digital de tu negocio al ofrecerte herramientas y estrategias personalizadas para vender en línea. Con nuestra ayuda, puedes llegar a más clientes sin depender únicamente de las recomendaciones."},{"pregunta":"¿Qué beneficios ofrece WebGo para alguien que no sabe generar ventas online?","respuesta":"WebGo proporciona un enfoque simple y guiado para ayudarte a generar ventas online. Te ofrecemos un sitio web optimizado y estrategias de marketing digital que atraerán a más clientes y aumentarán tus ventas."},{"pregunta":"¿Qué hago si no tengo tiempo para gestionar un sitio web?","respuesta":"No te preocupes, WebGo se encarga de todo por ti. Nos ocupamos del diseño y la gestión de tu sitio web, para que puedas centrarte en lo que mejor haces: dirigir tu negocio."},{"pregunta":"¿Cuánto tiempo lleva ver resultados al vender online con WebGo?","respuesta":"Con WebGo, puedes empezar a ver resultados en tan solo unas semanas. Nuestro enfoque está diseñado para acelerar el proceso y ayudarte a captar clientes rápidamente."},{"pregunta":"¿Es caro digitalizar las ventas con WebGo?","respuesta":"No, WebGo ofrece soluciones asequibles para digitalizar tus ventas. Invertir en nuestros servicios es una forma efectiva de aumentar tus ingresos y crecer tu negocio."}]} />
<BookAppointment 
                      heading="Digitaliza Tu Negocio y Aumenta Tus Ventas" 
                      description="Descubre cómo WebGo puede transformar tus recomendaciones en ventas online sin que tengas que mover un dedo."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
