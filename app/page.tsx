import { permanentRedirect } from 'next/navigation';

export default function Home() {
  permanentRedirect('/sample1');

  return (
    <div>Home</div>
  );
}
