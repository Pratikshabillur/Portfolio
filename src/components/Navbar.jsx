import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[var(--bg-primary)]/90 backdrop-blur-lg z-50 border-b border-zinc-800/50 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[var(--accent)] to-purple-500 bg-clip-text text-transparent">
          Pratiksha.
        </h1>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={600}
              className="hover:text-[var(--accent)] transition-colors cursor-pointer font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
          <ThemeToggle />
          <a
            href="mailto:pratikshabillur@gmail.com"
            className="px-6 py-2.5 bg-[var(--accent)] hover:bg-indigo-500 text-white rounded-full font-medium transition transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[var(--bg-primary)] border-b border-zinc-800/50">
          <div className="px-6 py-5 flex flex-col gap-5">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={600}
                className="hover:text-[var(--accent)] transition-colors cursor-pointer font-medium py-1"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <a
              href="mailto:pratikshabillur@gmail.com"
              className="px-6 py-3 bg-[var(--accent)] text-white rounded-full font-medium text-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;