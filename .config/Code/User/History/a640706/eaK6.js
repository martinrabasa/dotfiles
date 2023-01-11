import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-8 text-xl text-center">
            <Link href="/">
                <a className="font-rochester text-4xl">Peel and Stick</a>
            </Link>
            <ul className="flex gap-4 text-sm">
                <li>Privacy Policy</li>
                <li>Cookies Policy</li>
                <li>Legal</li>
            </ul>
        </footer>
    );
}