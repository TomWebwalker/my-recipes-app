import Link from 'next/link';
import Image from 'next/image';

export default function MainNavigation() {
  return (
    <nav className="flex py-4">
      <Link href={'/'}><Image src="/images/logo.png" alt="Logo" height="40" width="138" priority /></Link>
      <ul className="flex flex-auto justify-center">
        <li>
          <Link
            className="rounded px-4 py-2 uppercase hover:bg-gray-800"
            href={'recipes'}>
            Recipes
          </Link>
        </li>
        <li>
          <Link
            className="rounded px-4 py-2 uppercase hover:bg-gray-800"
            href={'blog'}>
            Blog
          </Link>
        </li>
      </ul>
      <div>User</div>
      <div>Socials</div>
    </nav>
  );
}
