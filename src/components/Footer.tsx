import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Shield className="w-4 h-4 text-primary" />
            </div>
            <span className="font-serif text-lg font-semibold">PivaciCAT</span>
          </a>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#serveis" className="hover:text-foreground transition-colors">
              Serveis
            </a>
            <a href="#valors" className="hover:text-foreground transition-colors">
              Valors
            </a>
            <a href="#dispositius" className="hover:text-foreground transition-colors">
              Dispositius
            </a>
            <a href="#contacte" className="hover:text-foreground transition-colors">
              Contacte
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PivaciCAT
          </p>
        </div>

        {/* Tagline */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          Privacitat · Seguretat · Drets Digitals · Països Catalans
        </p>
      </div>
    </footer>
  );
};

export default Footer;
