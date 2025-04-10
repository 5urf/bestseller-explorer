import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className='footer-content'>
        <div className='footer-logo'>
          <h3>NYT Bestsellers</h3>
        </div>

        <div className='footer-links'>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>© {currentYear} Built by 5urf.</p>
      </div>
    </footer>
  );
};

export default Footer;
