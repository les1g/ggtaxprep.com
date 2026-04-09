import Script from "next/script";

export const metadata = {
  title: "Make A Payment | GG Tax Services",
  description: "Secure payment form for GG Tax Services invoices.",
};

export default function MakePayment() {
  return (
    <div className="relative h-[calc(100vh-4rem)] overflow-hidden bg-gray-950">
      <Script async src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />

      <iframe
        data-tally-src="https://tally.so/r/2EJP5p"
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0, border: 0 }}
        title="Make A Payment"
      />
    </div>
  );
}