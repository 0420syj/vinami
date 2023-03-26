import Link from "next/link";

export default function Food() {
    return (
        <>
            <h1>Food Main</h1>
            <ul>
                <li>
                    <Link href="/food/westren">Westren</Link>
                </li>
                <li>
                    <Link href="/food/japanese">Japanese</Link>
                </li>
                <li>
                    <Link href="/food/chinese">Chinese</Link>
                </li>
                <li>
                    <Link href="/food/korean">Korean</Link>
                </li>
            </ul>
        </>
    );
}
