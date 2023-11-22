import Link from "next/link";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineYoutube,
  AiOutlineMail
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer clean-z">
      <Link
        className="footer-left-side cursor-pointer clean-z"
        href="/"
      >
        <p className="flex clean-z">Luis Flores<span className="ml-2 additional-footer">| Desarrollador WEB</span></p>
      </Link>

      <div className="footer-socials">
        <a href="mailto:contacto@JulianRojas.app"><AiOutlineMail className="footer-social-item" /></a>
        <a href="hhttps://github.com/JulianARojasBernal"><AiOutlineGithub className="footer-social-item" /></a>
        <a href="https://github.com/JulianARojasBernal"><AiOutlineLinkedin className="footer-social-item" /></a>
      </div>

      <p className="footer-right-side clean-z"><span className="additional-footer"> Todos los derechos recervados |</span> © 2024</p>    </div>
  );
}
