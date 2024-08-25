import Link from "next/link";

const BreadCrumbs = ({title}) => {
  return (
    <section className="overflow-hidden">
      <div className="wrapper">
        <div className="flex justify-start items-center py-6">
          <div className="grid grid-flow-col gap-2">
            <Link href="/" className="text-xs uppercase font-light">
             Home
            </Link>
            <div className="text-xs uppercase font-light opacity-50 ">&gt;</div>
            <Link href="" className="text-xs uppercase font-light ">
             {title}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbs;
