const Highlight = ({ highlights }) => {
  return (
    <section id="Overview" className="pt-20">
      <div className="wrapper">
        <div className="relative flex flex-col gap-6">
          <div className="flex w-auto items-center justify-start">
            <div className="flex items-center overflow-hidden">
              <h2 className="text-fs-md">What&apos;s Included</h2>
            </div>
          </div>
          <div className="relative w-full">
            <ul
              role="list"
              className="list-disc space-y-2 overflow-visible pl-6"
            >
              {highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
