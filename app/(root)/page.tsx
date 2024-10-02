import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div>
      <UserButton/>
      <h1 className='head-text'>Home</h1>
    </div>
  );
}
