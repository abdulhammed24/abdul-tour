const Highlight = ({ highlights }) => {
  return (
    <section id="Overview" className="pt-20">
      <div className="wrapper">
        <div className="flex relative flex-col gap-6">
          <div className="flex items-center w-auto justify-start">
            <div className="flex items-center overflow-hidden">
              <h2 className="text-fs-md">Highlights</h2>
            </div>
          </div>
          <div className="w-full relative">
            <ul role="list" className="overflow-visible pl-6 space-y-2 list-disc">
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
