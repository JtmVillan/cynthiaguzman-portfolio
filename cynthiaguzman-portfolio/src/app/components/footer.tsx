export const Footer = () => {
    return (
        <footer className="footer flex flex-row justify-between py-4 px-8 bg-secondary text-secondary-content">
            <aside className="flex flex-row">
                <p> © 2023 Cynthia Guzman | Made by 
                <a href="https://jaredvillanueva.com/" className="ease-in duration-150 decoration-accent hover:text-accent" target="_blank" rel="noopener noreferrer"> Jared Villanueva</a>
                </p>
            </aside>
            <aside className="flex flex-row">
                <a href="https://www.linkedin.com/in/cynthiaguzman12?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                <svg className="h-6 w-6 hover:text-accent ease-in duration-150 " viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2"/></svg>
                </a>
            </aside>
        </footer>
    )
}