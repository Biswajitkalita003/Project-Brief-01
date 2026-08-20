function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>Campus Connect</p>
      <p>© {currentYear} Campus Connect. All rights reserved.</p>
    </footer>
  );
}

export default Footer;