import Image from "next/image";
import Link from "next/link";

const EnquireNow = ({ title, heroImg }) => {
  return (
    <section className="pt-20">
      <div className="wrapper">
        <div className="grid auto-cols-fr grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-0">
          <div className="relative w-full">
            <div className="relative z-0 h-full w-full overflow-hidden">
              <Image
                fill
                priority
                src={heroImg}
                alt={title}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>

          <div className="flex items-center justify-center bg-black">
            <div className="flex flex-col items-center justify-center p-12 text-center">
              <h3 className="mb-6 text-fs-sm text-white">
                Start planning your tailor-made holiday
              </h3>
              <p className="text-xs text-gray-300">
                Speak to one of our travel specialists below
              </p>
              <div className="mt-12 grid gap-4 lg:w-fit">
                <Link
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-btn is-biege"
                >
                  Call us
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-btn is-dark-ghost"
                >
                  Enquire now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquireNow;
