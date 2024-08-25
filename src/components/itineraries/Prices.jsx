import Link from "next/link";

const Prices = ({ priceDetails }) => {
  return (
    <section id="Prices" className="py-20">
      <div className="wrapper">
        <div className="mb-8 flex w-auto flex-col items-start justify-center">
          <div className="flex items-center overflow-hidden">
            <h2 className="text-fs-md">Pricing</h2>
          </div>
          {priceDetails && priceDetails.length > 0 ? (
            <p>EARLY BIRD DEAL</p>
          ) : (
            ""
          )}
        </div>

        {priceDetails && priceDetails.length > 0 ? (
          <div className="relative">
            <div>
              <div className="overflow-x-auto">
                <table className="min-w-[640px] table-auto bg-white sm:min-w-full">
                  <thead>
                    <tr className="bg-[#fcf8f7] text-left shadow-md">
                      <th className="p-4 text-paragraph font-semibold">
                        PACKAGE
                      </th>
                      <th className="p-4 text-paragraph font-semibold">
                        DOUBLE / TRIPLE SHARING
                      </th>
                      <th className="p-4 text-paragraph font-semibold">
                        SINGLE
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceDetails.map((detail, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-4 text-paragraph">{detail.package}</td>
                        <td className="p-4 text-paragraph">
                          US$ {detail.sharingPrice} /per person
                        </td>
                        <td className="p-4 text-paragraph">
                          US$ {detail.singlePrice}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 text-xs text-gray-600">
                The listed &quot;Early Bird&quot; Price will be available until
                1st June 2021. To confirm your booking a $500 USD deposit is
                required. (fully refundable until 1st October 2021)
                <br />
                <br />
                Disclaimer: Prices are subject to change based on the latest
                exchange rates and offers.
              </div>
            </div>

            <div className="absolute inset-0 left-auto right-[50%] -z-[1] -mb-20 -mt-40 w-screen bg-[#fcf8f7]"></div>
          </div>
        ) : (
          <div className="inline-block">
            <Link
              href="https://wa.me/447574836967"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn min-w-[8rem] px-6 py-4 !text-[.65rem]"
            >
              Enquire now
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Prices;
