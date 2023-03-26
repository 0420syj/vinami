import Link from "next/link";

export default function Wine() {
    return (
        <>
            <h1>Wine Main</h1>
            <ul>
                <li>
                    <Link href="/wine/white">White</Link>
                </li>
                <li>
                    <Link href="/wine/red">Red</Link>
                </li>
                <li>
                    <Link href="/wine/rose">Rose</Link>
                </li>
                <li>
                    <Link href="/wine/fortified">Fortified</Link>
                </li>
                <li>
                    <Link href="/wine/orange">Orange</Link>
                </li>
                <li>
                    <Link href="/wine/dessert">Dessert</Link>
                </li>
                <li>
                    <Link href="/wine/sparkling">Sparkling</Link>
                </li>
            </ul>
        </>
    );
}
