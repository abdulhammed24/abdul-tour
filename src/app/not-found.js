import Link from "next/link";

export const metadata = {
  title: "Page Not Found | Explore Abdul Tour: Buy Your Tickets Now",
  description: `The page you're looking for could not be found. Explore our Abdul Tour packages, hospitality offers, and more for an unforgettable experience in Morocco.`,
};

const Custom404 = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6 text-center">
      <h1 className="mb-4 text-4xl font-bold text-red-600">
        404 - Page Not Found
      </h1>
      <p className="mb-6 text-lg text-gray-700">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link href="/">
        <p className="text-blue-500 hover:underline">Go back to the homepage</p>
      </Link>
    </div>
  );
};

export default Custom404;
