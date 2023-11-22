import Meta from "@/app/utils/Meta";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import Modal from "@/app/components/Modal";
import { SiJavascript, SiTypescript, SiHtml5, SiCss3, SiReact, SiNextdotjs, SiSass, SiGit } from "react-icons/si";
import { Link } from "react-scroll";
import emailjs from "@emailjs/browser";
import { useState, useRef, useEffect } from "react";
import { service, template_id, public_key } from ".././config";

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const form = useRef<HTMLInputElement>();

  const submitEmail = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const currentForm = (form.current as any) || null;

    try {
      setLoading(true);
      setError("");
      await emailjs.sendForm(
        service,
        template_id,
        form.current as any,
        public_key
      );
      setIsSubmitted(true);
      setLoading(false);

      currentForm.reset();
    } catch (err: any) {
      setLoading(false);
      setError(err.text);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isSubmitted]);

  return (
    <>
      <Meta title="portafolio Personal" />
      <div className="flex flex-col items-center justify-center w-[100%]">
        <div className="container nav">
          <Navbar />
        </div>

        <div className="container">
          <div className="first-section">
          <div className="first-section-adaptive">
              
            </div>

            <div className="first-section-left">
              <div className="first-left-top self-start flex">
                <h1 className="h1-title">
                  Hola Soy Luis Flores.
                </h1>
              </div>
              <div className="first-left-mid">
                <p className="sub-title clean-z">
                Desarrollador web con mas de 6 años en la industria, el sector en el cual me desarrollo mas en en la creacion de paginas web para medicos privados.
                </p>
              </div>
              <div className="first-left-bottom clean-z">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={800}
                >
                  <button className="action-btn clean-z">Contactame</button>
                </Link>
              </div>
            </div>

            <div className="first-section-mid">
              <h2 className="h2-title">
                Mis habilidades<br />
                Tegnológicas
              </h2>
              <div className="first-mid-techs">
                <div className="icon-wrapper"><SiJavascript className="icon" /></div>
                <div className="icon-wrapper"><SiTypescript className="icon" /></div>
                <div className="icon-wrapper"><SiHtml5 className="icon" /></div>
                <div className="icon-wrapper"><SiCss3 className="icon" /></div>
                <div className="icon-wrapper"><SiReact className="icon" /></div>
                <div className="icon-wrapper"><SiNextdotjs className="icon" /></div>
                <div className="icon-wrapper"><SiSass className="icon" /></div>
                <div className="icon-wrapper"><SiGit className="icon" /></div>
              </div>
            </div>

            <div className="first-section-right">
              <Image
                className="first-image"
                src={"/dev.jpg"}
                alt="photo"
                width={266}
                height={266}
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="techs-adaptive">
            <h2 className="h2-title">
              Mis Habilidades y
              Tecnológias
            </h2>
            <div className="first-mid-techs">
              <SiJavascript className="icon" />
              <SiTypescript className="icon" />
              <SiHtml5 className="icon" />
              <SiCss3 className="icon" />
              <SiReact className="icon" />
              <SiNextdotjs className="icon" />
              <SiSass className="icon" />
              <SiGit className="icon" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="second-section">
            <div className="second-section-top">
              <h2 className="h2-second-title">Mi Proceso para Proyectos</h2>
              <div className="line" />
              <p className="sub-title-second">
                Cuentame un poco de
                <br />
                Tu Proyecto...
              </p>
            </div>

            <div className="progress-content">
              <div className="second-section-item">
                <div className="progress-item">01</div>
                <p className="stage-title">Alanizar</p>
                <p className="stage-descr">
                 En esta etapa entenderé tus necesidades y discutiremos todos los detalles de tu proyecto
                </p>
              </div>

              <div className="second-section-item ml-[60px]">
                <div className="progress-item">02</div>
                <p className="stage-title">UI/UX</p>
                <p className="stage-descr">
                Lo que los usuarios ven sobre todo es el producto visual. En esta etapa, crearemos un diseño y una interfaz fáciles de usar.
                </p>
              </div>

              <div className="second-section-item ml-[60px]">
                <div className="progress-item">03</div>
                <p className="stage-title">Desarrollo</p>
                <p className="stage-descr">
                En esta etapa, vamos a terminar lo que comenzamos y convertir su imaginación en realidad.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="contact">
            <div className="contact-form">
              <h2 className="contact-title">Enviame un correo</h2>
              <form className="form" onSubmit={submitEmail} ref={form as any}>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Tu Nombre"
                  className="form-input"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="ejemplo@ejemplo.com"
                  className="form-input"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Tu Mensaje..."
                  className="form-textarea"
                  required
                />
                <button className="form-btn">
                  {loading ? "Loading..." : "SEND"}
                </button>
              </form>
            </div>

            <div className="contact-right">
              <Image
                className="contact-img"
                src="/AvatarSimple.png"
                alt="memoji"
                width={240}
                height={240}
              />
              <p className="contact-descr">
              DESPUÉS DE VER SU MENSAJE, ME LLAMARÉ CON USTED LO ANTES POSIBLE PARA HABLAR DE NUESTRA ASOCIACIÓN FUTURA. HARÉ MI MEJOR PARA PROPORCIONARLE EL MEJOR SERVICIO
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <Footer />
        </div>
      </div>
      {isSubmitted && <Modal error={false} onClose={setIsSubmitted} />}
      {error && <Modal errorMessage={error} error={true} onClose={setError} />}
    </>
  );
}
