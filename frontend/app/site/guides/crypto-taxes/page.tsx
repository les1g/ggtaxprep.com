import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Crypto Taxes: What You Need to Know - GG Tax Services",
  description:
    "Understanding the tax implications of buying, selling, and trading cryptocurrency.",
};

export default function CryptoTaxes() {
  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/site/guides"
          className="inline-flex items-center gap-2 mb-6 text-sm font-medium text-green-500 transition-colors hover:text-green-400"
        >
          <ArrowLeft className="h-6 w-9 bg-gray-700 py-1 rounded-full" />
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-4">
            Crypto Taxes
          </h1>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-xs text-gray-400">10 min read</span>
            <span className="text-xs text-gray-400">February 10, 2025</span>
          </div>
        </header>

        <article className="bg-gray-800 border border-gray-700 rounded-lg p-8 mb-12 space-y-6">
          <section>
            <p className="text-gray-300 leading-relaxed">
              The IRS treats cryptocurrency as property, not currency. This
              means every transaction may trigger a taxable event. Many crypto
              investors don&apos;t realize they owe taxes until it&apos;s too
              late. Here&apos;s what you need to know.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              Taxable Events
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You owe taxes when you:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Sell crypto for fiat currency (USD, EUR, etc.)</li>
              <li>Trade one cryptocurrency for another</li>
              <li>Use crypto to purchase goods or services</li>
              <li>Receive crypto as payment for services</li>
              <li>Receive crypto as a gift (in some cases)</li>
              <li>Earn mining or staking rewards</li>
            </ul>
            <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-4 mt-4">
              <p className="text-gray-300 text-sm">
                <strong>⚠️ Important:</strong> Simply transferring crypto
                between your own wallets is NOT a taxable event.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              Types of Income
            </h2>
            <div className="space-y-4 mb-4">
              <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-4">
                <h4 className="font-semibold text-green-400 mb-2">
                  Short-Term Capital Gains
                </h4>
                <p className="text-gray-300 text-sm">
                  Crypto held less than 1 year. Taxed as ordinary income
                  (highest rate).
                </p>
              </div>
              <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-4">
                <h4 className="font-semibold text-green-400 mb-2">
                  Long-Term Capital Gains
                </h4>
                <p className="text-gray-300 text-sm">
                  Crypto held 1+ year. Taxed at lower capital gains rates (0%,
                  15%, or 20%).
                </p>
              </div>
              <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-4">
                <h4 className="font-semibold text-green-400 mb-2">
                  Mining/Staking Rewards
                </h4>
                <p className="text-gray-300 text-sm">
                  Treated as ordinary income at fair market value on receipt
                  date.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              Reporting Requirements
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Track all transactions with:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Date acquired and date sold</li>
              <li>Amount of crypto in units</li>
              <li>Cost basis (what you paid)</li>
              <li>Proceeds (what you sold for)</li>
              <li>Fair market value in USD at time of transaction</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              Report on Form 8949 (Sales of Capital Assets) and Schedule D
              (Capital Gains and Losses). The IRS uses this information to
              verify your tax return.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              Record Keeping Best Practices
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                Export transaction history from all exchanges (Coinbase, Kraken,
                etc.)
              </li>
              <li>Keep records for at least 7 years</li>
              <li>Use crypto tax software to simplify calculations</li>
              <li>Track the cost basis for each transaction</li>
              <li>
                Document which cost basis method you use (FIFO, LIFO, or
                Specific ID)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-400 mb-3">
              Common Mistakes to Avoid
            </h2>
            <div className="bg-red-900/20 border border-red-600/30 rounded-lg p-4">
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Forgetting to report trades between cryptocurrencies</li>
                <li>Not tracking the cost basis for each purchase</li>
                <li>Failing to report mining or staking income</li>
                <li>Missing the deadline for amended returns</li>
                <li>Underestimating gains due to accounting errors</li>
              </ul>
            </div>
          </section>
        </article>

        <section className="bg-gradient-to-r from-green-900/30 to-green-800/30 border border-green-400/50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need Help with Crypto Taxes?
          </h2>
          <p className="text-gray-300 mb-6">
            Our experts specialize in cryptocurrency taxation and can help
            ensure your returns are accurate and compliant.
          </p>
          <Link
            href="/client/scheduling"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block"
          >
            Schedule a Consultation
          </Link>
        </section>
      </div>
    </div>
  );
}
