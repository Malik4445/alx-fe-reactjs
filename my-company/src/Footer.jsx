function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '10px', marginTop: '20px', backgroundColor: '#eee' }}>
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
