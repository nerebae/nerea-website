const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Nerea Valdivieso Arevalo. Built with passion and code.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
