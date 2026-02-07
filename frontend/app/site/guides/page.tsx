"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function GuidesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const guides = [
    {
      title: "How to Organize Your Taxes",
      link: "/site/guides/organize-taxes",
      category: "Getting Started",
      description:
        "Step-by-step guide to organizing your documents and information for tax season.",
    },
    {
      title: "Maximizing Your Tax Deductions",
      link: "/site/guides/maximize-deductions",
      category: "Tax Tips",
      description:
        "Discover legitimate deductions you might be missing to lower your tax bill.",
    },
    {
      title: "Self-Employment Tax Explained",
      link: "/site/guides/self-employment",
      category: "Self-Employment",
      description:
        "Complete guide to understanding self-employment taxes and quarterly payments.",
    },
    {
      title: "Home Office Deduction Guide",
      link: "/site/guides/home-office-deduction",
      category: "Deductions",
      description:
        "Learn how to calculate and claim your home office deduction correctly.",
    },
    {
      title: "Crypto Taxes: What You Need to Know",
      link: "/site/guides/crypto-taxes",
      category: "Advanced",
      description:
        "Understanding the tax implications of buying, selling, and trading cryptocurrency.",
    },
    {
      title: "Tax Planning for Year-End",
      link: "/site/guides/year-end-tax-planning",
      category: "Planning",
      description:
        "End-of-year strategies to minimize your tax liability in the upcoming year.",
    },
  ];

  const categories = [
    "All",
    "Getting Started",
    "Tax Tips",
    "Self-Employment",
    "Deductions",
    "Advanced",
    "Planning",
  ];

  const filteredGuides =
    activeCategory === "All"
      ? guides
      : guides.filter((g) => g.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 md:px-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <Link
          href="/client/services"
          className="inline-flex items-center gap-2 mb-6 text-sm font-medium text-green-500 transition-colors hover:text-green-400"
        >
          <ArrowLeft className="h-6 w-9 bg-gray-700 py-1 rounded-full" />
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-4">
          Tax Guides
        </h1>
        <p className="text-gray-300 text-lg">
          Learn everything you need to know about taxes with our comprehensive
          guides and articles.
        </p>
      </div>

      {/* Category Filter */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                activeCategory === category
                  ? "bg-green-500 text-white"
                  : "bg-gray-800 text-gray-300 border border-gray-700 hover:border-green-400 hover:text-green-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Guides List */}
      <div className="max-w-6xl mx-auto space-y-6 mb-12">
        {filteredGuides.map((guide) => (
          <Link
            key={guide.link}
            href={guide.link}
            className="block bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20 transition-all"
          >
            <span className="text-xs font-semibold text-green-400 bg-gray-700 px-3 py-1 rounded-full mb-2 inline-block">
              {guide.category}
            </span>
            <h3 className="text-xl font-bold text-white mb-2">{guide.title}</h3>
            <p className="text-gray-300">{guide.description}</p>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Ready for Professional Help?
        </h2>
        <p className="text-gray-300 mb-6">
          Our experts can provide personalized guidance based on your specific
          situation.
        </p>
        <Link
          href="/client/scheduling"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg inline-block transition-colors"
        >
          Book Your Consultation
        </Link>
      </div>
    </div>
  );
}
