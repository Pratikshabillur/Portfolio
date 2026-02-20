const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-zinc-800/50 text-center text-zinc-500">
      <p>© {currentYear} Pratiksha Billur. Built with React, Tailwind CSS & Cup of coffee 😊☕</p>
      <p className="mt-2 text-sm">Open to opportunities • Available from mid-2026</p>
    </footer>
  );
};

export default Footer;