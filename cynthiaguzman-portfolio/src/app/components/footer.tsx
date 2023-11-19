export const Footer = () => {
    return (
        <footer className="footer flex flex-row justify-between py-4 px-8 bg-neutral text-neutral-content">
            <aside className="flex flex-row">
                <p>
                © 2023 
                <a href="https://jaredvillanueva.com/" className="ease-in duration-150 decoration-secondary hover:text-secondary" target="_blank" rel="noopener noreferrer"> Jared Villanueva</a>
                </p>
            </aside>
            <aside className="flex flex-row">
                <a href="https://www.linkedin.com/in/cynthiaguzman12?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                <svg className="h-6 w-6 hover:text-secondary ease-in duration-150 " viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2"/></svg>
                </a>
                {/* <a href="https://instagram.com/doublefunsized" target="_blank" rel="noopener noreferrer">
                <svg className="h-6 w-6 hover:text-secondary ease-in duration-150" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a> */}
            </aside>
        </footer>
    )
}