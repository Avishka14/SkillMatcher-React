import React from "react";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$0",
      period: "per month",
      features: ["1 User", "5 Projects", "Basic Support"],
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      features: ["5 Users", "50 Projects", "Priority Support", "Analytics"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      features: ["Unlimited Users", "Unlimited Projects", "Dedicated Support", "Custom Features"],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Pricing Plans</h1>
        <p className="text-gray-500">
          Choose the plan that fits your business needs. No hidden fees.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`border rounded-3xl p-8 flex flex-col justify-between shadow hover:shadow-lg transition ${
              plan.popular ? "border-indigo-500 bg-indigo-50" : "bg-white"
            }`}
          >
            {plan.popular && (
              <div className="text-indigo-600 font-semibold mb-4 text-sm uppercase">
                Most Popular
              </div>
            )}

            <h2 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h2>
            <p className="text-gray-600 mb-4">
              <span className="text-4xl font-extrabold">{plan.price}</span>{" "}
              <span className="text-gray-500">{plan.period}</span>
            </p>

            <ul className="mb-6 space-y-2 text-gray-600">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✓</span> {feature}
                </li>
              ))}
            </ul>

            <button
              className={`mt-auto py-2 px-4 rounded-xl font-semibold transition ${
                plan.popular
                  ? "bg-indigo-500 text-white hover:bg-indigo-600"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
