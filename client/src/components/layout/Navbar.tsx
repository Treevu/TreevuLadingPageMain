import { Link } from "wouter";
import { Leaf, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AboutModal } from "@/components/modals/AboutModal";
import { BlogModal } from "@/components/modals/BlogModal";
import { ContactModal } from "@/components/modals/ContactModal";
import { RegistrationModal } from "@/components/modals/RegistrationModal";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  const navLinks = [
    { name: "Soluciones", href: "#solutions" },
    { name: "Plataforma", href: "#platform" },
    { name: "Inteligencia", href: "#intelligence" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
            <Leaf className="h-5 w-5 text-primary" />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-slate-900">
            Treevü
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              onClick={() => setAboutOpen(true)}
              className="text-slate-600 hover:text-primary text-sm"
            >
              Sobre Nosotros
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => setBlogOpen(true)}
              className="text-slate-600 hover:text-primary text-sm"
            >
              Blog
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => setContactOpen(true)}
              className="text-slate-600 hover:text-primary text-sm"
            >
              Contacto
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/dashboard">
              <Button variant="ghost" className="text-slate-600 hover:text-primary hover:bg-primary/5">
                Login
              </Button>
            </Link>
            <Button 
              onClick={() => setDemoOpen(true)}
              className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
            >
              Solicitar Demo
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-slate-700" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-slate-700"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="h-px bg-slate-100 my-2" />
                <Button 
                  variant="ghost" 
                  onClick={() => { setAboutOpen(true); setIsOpen(false); }}
                  className="w-full justify-start"
                >
                  Sobre Nosotros
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={() => { setBlogOpen(true); setIsOpen(false); }}
                  className="w-full justify-start"
                >
                  Blog
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={() => { setContactOpen(true); setIsOpen(false); }}
                  className="w-full justify-start"
                >
                  Contacto
                </Button>
                <div className="h-px bg-slate-100 my-2" />
                <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full justify-start">
                    Login Corporativo
                  </Button>
                </Link>
                <Button 
                  onClick={() => { setDemoOpen(true); setIsOpen(false); }}
                  className="w-full bg-primary text-white"
                >
                  Solicitar Demo
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Modals */}
      <AboutModal open={aboutOpen} onOpenChange={setAboutOpen} />
      <BlogModal open={blogOpen} onOpenChange={setBlogOpen} />
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
      <RegistrationModal open={demoOpen} onOpenChange={setDemoOpen} />
    </nav>
  );
}
