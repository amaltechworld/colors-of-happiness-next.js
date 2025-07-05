"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="footer bg-[#561C24] text-[#E8D8C4] p-10 lg:snap-start flex flex-col items-start md:flex-row md:justify-between md:items-start">
            {/* Left: Logo and Company Name */}
            <aside className="flex flex-col items-start mb-6 md:mb-0 pl-4">
                <Link href="#hero">
                    <Image
                        src="/footer/coh-white-logo.png"
                        alt="footer-logo of colors of happiness"
                        className="h-10 lg:h-12 hover:cursor-pointer"
                        width={96}
                        height={56}
                    />
                </Link>
                <p className="mt-4 text-left">
                    Colors Of Happiness
                    <br />
                    Powered by Robistaan TechLab Pvt Ltd
                </p>
            </aside>

            {/* Center: Social Media Links */}
            <nav className="flex flex-col items-start mb-6 md:mb-0 pl-4 md:pl-0">
                <h6 className="footer-title mb-4">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/colorsofhappiness_coh/?igsh=MXZndjc0dTg2YzUwYQ%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current text-slate-400 hover:cursor-pointer hover:text-white"
                        >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.054 2.007.24 2.463.403a4.95 4.95 0 011.693 1.093 4.95 4.95 0 011.093 1.692c.163.456.349 1.257.403 2.464.058 1.267.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.207-.24 2.008-.403 2.464a4.95 4.95 0 01-1.093 1.693 4.95 4.95 0 01-1.692 1.093c-.456.163-1.257.349-2.464.403-1.267.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.207-.054-2.008-.24-2.464-.403a4.95 4.95 0 01-1.693-1.093 4.95 4.95 0 01-1.093-1.692c-.163-.456-.349-1.257-.403-2.464C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.207.24-2.008.403-2.464A4.95 4.95 0 013.73 3.463a4.95 4.95 0 011.692-1.093c.456-.163 1.257-.349 2.464-.403 1.267-.058 1.646-.07 4.85-.07m0-2.163C8.755 0 8.345 0 7.092.07 5.848.139 4.725.342 3.825.672A6.921 6.921 0 001.3 1.815 6.921 6.921 0 00.673 3.825c-.33.9-.534 2.024-.602 3.268C0 8.345 0 8.755 0 12s0 3.655.07 4.908c.068 1.244.272 2.368.602 3.267.486 1.205 1.14 2.22 2.022 3.102a6.921 6.921 0 002.11 2.11c.9.486 2.022.79 3.268.858C8.345 24 8.755 24 12 24s3.655 0 4.908-.07c1.244-.068 2.368-.272 3.267-.602a6.921 6.921 0 002.11-2.022 6.921 6.921 0 002.022-2.11c.486-.9.79-2.022.858-3.268.07-1.253.07-1.662.07-4.908s0-3.655-.07-4.908c-.068-1.244-.272-2.368-.602-3.267a6.921 6.921 0 00-2.022-2.11 6.921 6.921 0 00-2.11-2.022c-.9-.486-2.022-.79-3.268-.858C15.655 0 15.245 0 12 0z" />
                            <path d="M12 5.838a6.162 6.162 0 000 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.998 3.998 0 110-7.996 3.998 3.998 0 010 7.996zM18.406 4.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                        </svg>
                    </a>

                    {/* YouTube */}
                    <a
                        href="https://www.youtube.com/@colorsofhappiness_coh"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current text-slate-400 hover:cursor-pointer hover:text-white"
                        >
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                        </svg>
                    </a>

                    {/* Facebook */}
                    <a
                        href="https://www.facebook.com/share/15BUBsv3BG/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current text-slate-400 hover:cursor-pointer hover:text-white"
                        >
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                    </a>
                </div>
            </nav>

            {/* Right: Contact */}
            <aside className="flex flex-col items-start md:items-end pl-4 md:pl-0">
                <div className="flex flex-col">
                    <a href="tel:+919745713419" className="block">
                        +91 9745713419
                    </a>
                    <a
                        href="mailto:Hello@colorsofhappiness.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-2"
                    >
                        Hello@colorsofhappiness.com
                    </a>
                </div>
            </aside>
        </footer>
    );
};

export default Footer;
