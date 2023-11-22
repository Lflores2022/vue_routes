import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import Meta from "@/app/utils/Meta";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineYoutube,
} from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";

import Link from "next/link";

interface Props {}

function Socials(props: Props) {
  const {} = props;

  return (
    <>
      <div className="container">
        <Navbar />
        <Meta title="Socials" />
      </div>

      <div className="container">
        <div className="socials-head">
          <p className="socials-title">Puedes encontrarme en:</p>
        </div>
      </div>

      <div className="container">
        <div className="socials-wrapper">
          <div className="socials-body">
            <div className="socials-media">
              <div className="social-media-item">
                <p className="socials-media-title">GitHub</p>
                <Link
                  className="social-media-contact-item"
                  href=""
                >
                  <AiOutlineGithub className="social-media-icon" />
                  <p className="social-media-contact-title">Luis Flores</p>
                </Link>
              </div>

              <div className="social-media-item">
                <p className="socials-media-title">LinkedIn</p>
                <Link
                  className="social-media-contact-item"
                  href=""
                >
                  <AiOutlineLinkedin className="social-media-icon" />
                  <p className="social-media-contact-title">Luis Flores</p>
                </Link>
              </div>

              <div className="social-media-item">
                <p className="socials-media-title">YouTube</p>
                <Link
                  className="social-media-contact-item"
                  href=""
                >
                  <AiOutlineYoutube className="social-media-icon" />
                  <p className="social-media-contact-title">Luis Flores</p>
                </Link>
              </div>

              <div className="social-media-item">
                <p className="socials-media-title">Instagram</p>
                <Link
                  className="social-media-contact-item"
                  href=""
                >
                  <AiOutlineInstagram className="social-media-icon" />
                  <p className="social-media-contact-title">lflores</p>
                </Link>
              </div>

              <div className="social-media-item">
                <p className="socials-media-title">Telegram</p>
                <Link
                  className="social-media-contact-item"
                  href=""
                >
                  <RiTelegramLine className="social-media-icon" />
                  <p className="social-media-contact-title">Lflores</p>
                </Link>
              </div>
            </div>

            <p className="socials-title">Tambien me puedes contáctar via Correo</p>

            <div className="socials-email">
              <p className="socials-subtitle">Correo</p>
              <a href=""><p className="socials-email-title">correo@correo.es</p></a>
              <p className="socials-descr mt-2 text-left">
                Luis Flores
                <br />
                Desarrollador Front-End
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <Footer />
      </div>
    </>
  );
}

export default Socials;
