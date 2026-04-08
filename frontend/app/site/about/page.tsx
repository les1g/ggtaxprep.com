import Image from "next/image";

export const metadata = {
  title: "About | GG Tax Services",
  description: "Learn about GG Tax Preparation Services.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-500 mb-4">
          About
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Meet the professionals behind GG Tax Services.
        </p>
      </section>

      {/* About / Team */}
      <section className="max-w-6xl mx-auto px-4 mb-10">
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="w-[200px] h-[200px] mx-auto">
              <Image
                src="/images/Progessional-image-min.png"
                alt="GG Tax Team"
                width={100}
                height={100}
                className="rounded-full object-cover w-full h-full shadow-lg border-4 border-green-500"
                priority
              />
            </div>

            <div className="md:col-span-2 space-y-4 text-gray-300 leading-relaxed">
              <p>
                Before starting my own practice, I had the opportunity to see
                the tax industry from the inside. I’ve been preparing taxes for
                2–3 years and have 5 years of experience working with the
                Arizona Department of Revenue.
              </p>

              <p>
                What I noticed is that many taxpayers don’t fully understand how
                taxes work, their obligations, or the resources available to
                them. I also realized that taxpayers are not to blame. The
                system itself can be difficult to understand and navigate.
              </p>

              <p>
                Most of us would like to believe our hard-earned money is going
                toward meaningful causes, but in reality, many people aren’t
                sure where it goes. This uncertainty often leads to frustration
                and reluctance when it comes to taxes.
              </p>

              <p>
                The conclusion I’ve come to is this: even though many Americans
                (myself included) dislike paying taxes, the burden of trying to
                avoid them is far greater than simply handling them correctly.
                Taxes support important systems like public schools,
                infrastructure, and transportation.
              </p>

              <p>
                It is my mission to help taxpayers stay in compliance without
                the frustration, while keeping services affordable. With my
                experience, I strive to guide my clients and save them money.
                Not by cutting corners, but by truly understanding each
                situation and ensuring you claim every credit and deduction you
                qualify for.
              </p>

              <p>GG Tax Services is for the people.</p>

              <p>
                I truly appreciate your trust and look forward to working with
                you!
              </p>

              <p className="text-xl italic text-green-500">
                <br />– Gisel G.
              </p>
              <p className="text-sm text-gray-400">
                <span className="text-green-400 font-semibold">Fun fact:</span>{" "}
                I’m also a software engineer and built this website myself. If
                you’re interested in learning more or working together, visit{" "}
                <a
                  href="https://www.ggstudio.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline"
                >
                  www.ggstudio.dev
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-6xl mx-auto px-4 mb-10">
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            Certifications & Credentials
          </h2>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="space-y-2 text-gray-300">
              <p>
                <span className="text-green-500 font-semibold">PTIN:</span>{" "}
                #P0*****13
              </p>
              <p>
                <span className="text-green-500 font-semibold">
                  AFSP Certified:
                </span>{" "}
                Since 2020
              </p>
            </div>

            <Image
              src="/images/image.png"
              alt="AFSP Certification Seal"
              width={180}
              height={180}
            />
          </div>
        </div>
      </section>

      {/* Business Card */}
      <section className="max-w-6xl mx-auto px-4 pb-10">
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-4">Business Card</h2>
          <p className="text-gray-300 mb-6">
            Keep our contact information handy or share it with someone who
            needs trusted tax help.
          </p>

          <a
            href="/images/business-card-ggtax.png"
            download
            className="inline-block bg-green-500 hover:bg-green-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition"
          >
            Download Business Card
          </a>
        </div>
      </section>
    </div>
  );
}
