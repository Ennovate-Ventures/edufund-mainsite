import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { alerter } from "@/app/utils";
function DonationForm() {
  return (
    <>
      <ScrollArea className="h-[36rem] w-full rounded-md border">
        <div className="bg-gray-100 dark:bg-gray-900 h-[30%]">
          <div className="w-full max-w-3xl mx-auto p-4 md:p-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Donor's form
              </h1>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
                  Contact Information
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block text-gray-700 dark:text-white mb-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block text-gray-700 dark:text-white mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 dark:text-white mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="address"
                    className="block text-gray-700 dark:text-white mb-1"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="city"
                    className="block text-gray-700 dark:text-white mb-1"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>

                {/* <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <label
                      htmlFor="state"
                      className="block text-gray-700 dark:text-white mb-1"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="zip"
                      className="block text-gray-700 dark:text-white mb-1"
                    >
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      id="zip"
                      className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    />
                  </div>
                </div> */}
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
                  Payment Information
                </h2>
                <div className="mt-4">
                  <label
                    htmlFor="card_number"
                    className="block text-gray-700 dark:text-white mb-1"
                  >
                    Amount (in GBP)
                  </label>
                  <input
                    type="number"
                    id="amount"
                    min={0}
                    step={1}
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="card_number"
                    className="block text-gray-700 dark:text-white mb-1"
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="card_number"
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <label
                      htmlFor="exp_date"
                      className="block text-gray-700 dark:text-white mb-1"
                    >
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      id="exp_date"
                      className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cvv"
                      className="block text-gray-700 dark:text-white mb-1"
                    >
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-row items-center justify-evenly">
                <button
                  className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transform transition-transform hover:scale-105 hover:bg-teal-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900 flex items-center"
                  onClick={()=>alerter('Thank you for your pledge. You can redeem your pledge through this payment link')}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 12H4"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4l8 8-8 8"
                    ></path>
                  </svg>
                  Pledge
                </button>
                <button className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transform transition-transform hover:scale-105 hover:bg-teal-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8c-1.657 0-3 1.343-3 3v4H9a1 1 0 000 2h6a1 1 0 100-2h-1v-4a3 3 0 00-3-3z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8V6m0 2a3 3 0 003 3v4a3 3 0 01-3 3H9a3 3 0 01-3-3V11a3 3 0 013-3z"
                    ></path>
                  </svg>
                  Donate now
                </button>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </>
  );
}
export default DonationForm;