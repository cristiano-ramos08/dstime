import { ReactComponent as Facebook } from 'assets/img/facebook.svg';
import { ReactComponent as Instagram } from 'assets/img/instagram.svg';
import "./styles.css";


function Footer() {
  return (
    <footer className="bg-dark mainfooter footer text-center text-white">
     
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.facebook.com/Racajovemf.s"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
            <Facebook />
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.instagram.com/racajovem.futsal/"
            role="button"
          >
            <i className="fab fa-instagram"></i>
            <Instagram />
          </a>
          <br />
        
        </section>
      </div>

      <div className="text-center p-3">
      Contato para jogos: (11)94698-6114 
      </div>
      
    </footer>
  );
}
export default Footer;
