import { Metadata } from 'next';

// Metadata for the home page
export const metadata: Metadata = {
  title: 'SW Home',
  description:
    'Home page of the website that displays SW characters and vehicles',
};

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-5xl font-bold text-center">SW Home Page</h1>

      <h3 className="text-lg text-center">
        Welcome! You can view characters and vehicles from the SW franchise on
        this website
      </h3>
    </div>
  );
}
