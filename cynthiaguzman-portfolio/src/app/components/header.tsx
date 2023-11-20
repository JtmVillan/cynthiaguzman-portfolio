import Link from "next/link"

export const Header = () => {
    return (
        <header className="navbar sticky py-4 px-8 top-0 z-50 bg-opacity-95 bg-secondary font-extrabold text-secondary-content">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-base-100">
                    <li><Link href="/#about">Home</Link></li>
                    <li><Link href="/#experience">Experience</Link></li>
                    <li><Link href="/#projects">Projects</Link></li>
                    <li><Link href="/#skills">Skills</Link></li>
                    <li><Link href="/#contact">Contact</Link></li>
                </ul>
                </div>
                <a href="/"className="ps-4 text-xl hover:text-accent ease-in duration-150">Cynthia Guzman</a>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="flex flex-row gap-4 px-1 ">
                <li><Link href="/#about" className="hover:text-accent ease-in duration-150">Home</Link></li>
                <li><Link href="/#experience" className="hover:text-accent ease-in duration-150">Experience</Link></li>
                <li><Link href="/#projects" className="hover:text-accent ease-in duration-150">Projects</Link></li>
                <li><Link href="/#skills" className="hover:text-accent ease-in duration-150">Skills</Link></li>
                <li><Link href="/#contact" className="hover:text-accent ease-in duration-150">Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-end md:flex">
                <a href="https://docs.google.com/document/d/e/2PACX-1vSOzNIgoAq0A4Wr7jDqGKfihnPC-2OjfqiAVJLTFxi5-HFeHwFO8NuuabNttTlv9Q/pub" className="hover:text-accent ease-in duration-150" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
            </header>
    )
}