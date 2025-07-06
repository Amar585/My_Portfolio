import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-8 text-foreground">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Amar Gupta</h1>
          <p className="text-lg mb-4">
            Software Engineer | Secure Web Apps | Open to Opportunities
          </p>
          <p className="text-lg text-foreground/80 mb-6">
            Passionate about building secure, user-focused web applications with modern technologies.
          </p>
        </header>

        <section className="mb-12 space-y-12">
          <article className="rounded-lg border border-foreground/10 p-6 transition-colors hover:bg-foreground/[0.02]">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span role="img" aria-label="lock">🔐</span> 
              Secure File Sharing Platform
            </h2>
            <p className="mb-4 text-foreground/80">
              A robust platform for secure file sharing with end-to-end encryption and
              role-based access control.
            </p>
            <ul className="list-disc ml-6 mb-4 text-foreground/70 space-y-2">
              <li>Next.js, React, Tailwind CSS, Node.js</li>
              <li>Key Management System for encryption</li>
              <li>User authentication, upload/download, sharing</li>
            </ul>
            <a 
              href="https://github.com/Amar585/SecureFileSharingPlatform" 
              className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project <span>→</span>
            </a>
          </article>

          <article className="rounded-lg border border-foreground/10 p-6 transition-colors hover:bg-foreground/[0.02]">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span role="img" aria-label="robot">🤖</span> 
              Task Manager with AI ChatBot
            </h2>
            <p className="mb-4 text-foreground/80">
              A Django-based task manager with an AI chatbot for automated workflows.
            </p>
            <ul className="list-disc ml-6 mb-4 text-foreground/70 space-y-2">
              <li>Django, Supabase, AI chatbot integration</li>
              <li>Real-time task sync and collaboration</li>
              <li>Email-based secure login</li>
            </ul>
            <a 
              href="https://github.com/Amar585/TaskManagerChatBot" 
              className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project <span>→</span>
            </a>
          </article>
        </section>

        <footer className="mt-16 py-8 border-t border-foreground/10">
          <div className="flex flex-wrap gap-6 items-center justify-between">
            <p className="flex items-center gap-2">
              <span role="img" aria-label="pin">📌</span>
              <a 
                href="https://github.com/Amar585" 
                className="text-foreground/60 hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                More projects on GitHub
              </a>
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/amar-gupta-it/" 
                className="text-foreground/60 hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:gamar94xyz@gmail.com" 
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
