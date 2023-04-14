import React from "react";

export default function Form() {
  return (
    <React.Fragment>
      <div className="flex">
        <div className="flex-1">
          <img
            className="h-100 w-100 object-cover"
            src="https://img.freepik.com/free-vector/flat-design-creative-dogecoin-illustration_23-2149195018.jpg?w=1380&t=st=1681456521~exp=1681457121~hmac=663691adec1c1339d8db2d91e1206e56b035c0512734fc202c9fdead6916c836"
            alt=""
          />
        </div>
        <div className="flex-1">
          <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <a
                href="https://www.switcheo.com/"
                target="_blank"
                class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                rel="noreferrer"
              >
                <img
                  class="w-8 h-8 mr-2"
                  src="https://seeklogo.com/images/S/switcheo-swth-logo-64886407B6-seeklogo.com.png"
                  alt="logo"
                />
                Switcheo
              </a>
              <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 class="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Transaction
                  </h1>
                  <form class="space-y-4 md:space-y-6" action="#">
                    <div>
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Eth Address
                      </label>
                      <input
                        type="text"
                        name="eth-address"
                        id="eth-address"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="0x71C7656EC7ab88b098defB751B7401B5f6d8976F"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Amount to send
                      </label>
                      <input
                        type="number"
                        name="amount"
                        id="amount"
                        placeholder=""
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        for="confirm-password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        OTP Authentication
                      </label>
                      <input
                        type="text"
                        name="otp"
                        id="otp"
                        placeholder="123456"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>
                    <button
                      type="submit"
                      class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}
