import { Home } from "./pages/Home";
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { Button } from "./components/ui/button";
import { Helmet } from "react-helmet";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Muhammad Zaryab Rafique",
    "jobTitle": "Full Stack Developer & Blockchain Engineer",
    "url": "https://rust-master.github.io",
    "sameAs": [
      "https://github.com/rust-master",
      "https://www.linkedin.com/in/mzaryabrafique/"
    ],
    "knowsAbout": [
      "Web Development",
      "Blockchain Technology",
      "Smart Contracts",
      "DeFi",
      "Full Stack Development",
      "Rust Developer",
      "Web3",
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "COMSATS University Islamabad"
    },
    "workLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lahore",
        "addressRegion": "Punjab",
        "addressCountry": "Pakistan"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center space-x-2">
            <a href="https://github.com/rust-master" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/mzaryabrafique/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </a>
            <a href="muhammadzaryabrafique@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </a>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex items-center">
              <Button 
                variant="ghost" 
                className="mr-2"
                onClick={() => scrollToSection('projects')}
              >
                Projects
              </Button>
              <Button 
                variant="ghost" 
                className="mr-2"
                onClick={() => scrollToSection('about')}
              >
                About
              </Button>
              <Button 
                variant="ghost" 
                className="mr-4"
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </Button>
              <Button variant="default" size="sm">
                Download CV
              </Button>
            </div>
            <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <Dialog.Trigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
                <Dialog.Content className="fixed inset-y-0 right-0 w-[300px] bg-background border-l p-6 shadow-lg z-50 transition-transform duration-300 ease-in-out">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-end">
                      <Dialog.Close asChild>
                        <Button variant="ghost" size="icon">
                          <X className="h-5 w-5" />
                        </Button>
                      </Dialog.Close>
                    </div>
                    <nav className="flex flex-col gap-4 mt-8">
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start text-lg"
                        onClick={() => scrollToSection('projects')}
                      >
                        Projects
                      </Button>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start text-lg"
                        onClick={() => scrollToSection('about')}
                      >
                        About
                      </Button>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start text-lg"
                        onClick={() => scrollToSection('contact')}
                      >
                        Contact
                      </Button>
                    </nav>
                    <div className="mt-auto">
                      <Button variant="default" className="w-full">
                        Download CV
                      </Button>
                    </div>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </header>

      <main className="pt-14">
        <Home />
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Muhammad Zaryab Rafique
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/rust-master" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/mzaryabrafique" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
            </a>
            <a href="muhammadzaryabrafique@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;