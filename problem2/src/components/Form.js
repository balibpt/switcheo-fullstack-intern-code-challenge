import React, { useState, useEffect } from "react";
import { Transition } from "@tailwindui/react";
import axios from "axios";

export default function Form() {
  const [ethAdd, setEthAdd] = useState("");
  const [amt, setAmt] = useState("");
  const [otp, setOtp] = useState("");

  const [ethAddError, setEthAddError] = useState("");
  const [ethInputChanged, setEthInputChanged] = useState(false);

  const [amtError, setAmtError] = useState("");
  const [amtInputChanged, setAmtInputChanged] = useState(false);

  const [otpError, setOtpError] = useState("");
  const [otpInputChanged, setOtpInputChanged] = useState(false);

  const [confirmValid, setConfirmValid] = useState(false);
  const [confirmButtonClicked, setConfirmButtonClicked] = useState(false);

  const [sendValid, setSendValid] = useState(false);
  const [sendButtonClicked, setSendButtonClicked] = useState(false);

  const [ethSent, setEthSent] = useState(false);

  const [amtType, setAmtType] = useState("SGD");

  const [ethValue, setEthValue] = useState("");

  const [amtInEth, setAmtInEth] = useState("");
  const [amtInSgd, setAmtInSgd] = useState("");

  const handleEthAddChange = (e) => {
    setEthAdd(e.target.value);
    setEthInputChanged(true);
  };

  const handleAmtChange = (e) => {
    setAmt(e.target.value);
    setAmtInputChanged(true);
    if (amtType === "SGD") {
      setAmtInEth((e.target.value / ethValue).toFixed(5));
    } else {
      setAmtInSgd((e.target.value * ethValue).toFixed(2));
    }
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
    setOtpInputChanged(true);
  };

  const handleSendChange = (e) => {
    setConfirmButtonClicked(false);
    setSendButtonClicked(true);
    setTimeout(() => {
      setSendButtonClicked(false);
      setEthSent(true);
    }, 3000);
  };

  const handleToggleButton = (e) => {
    setAmt("");
    if (e.target.checked) {
      setAmtType("ETH");
    } else {
      setAmtType("SGD");
    }
  };

  useEffect(() => {
    const ethAddressRegex = /^0x[a-fA-F0-9]{40}$/;
    if (ethInputChanged && !ethAddressRegex.test(ethAdd)) {
      setEthAddError("Please input a valid Eth Address");
    } else {
      setEthAddError("");
    }
  }, [ethAdd, ethInputChanged]);

  useEffect(() => {
    if (amtInputChanged && !amt) {
      setAmtError("Please input an amount you want to transfer ");
    } else {
      setAmtError("");
    }
  }, [amt, amtInputChanged]);

  useEffect(() => {
    if (otpInputChanged && otp.length !== 6) {
      setOtpError("Enter a valid OTP");
    } else {
      setOtpError("");
    }
  }, [otpInputChanged, otp]);

  useEffect(() => {
    if (ethAddError || amtError || ethAdd === "" || amt === "") {
      setConfirmValid(false);
    } else {
      setConfirmValid(true);
    }
  }, [ethAddError, amtError, ethAdd, amt]);

  useEffect(() => {
    if (
      ethAddError ||
      amtError ||
      otpError ||
      ethAdd === "" ||
      amt === "" ||
      otp === ""
    ) {
      setSendValid(false);
    } else {
      setSendValid(true);
    }
  }, [ethAddError, amtError, otpError, ethAdd, amt, otp]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=sgd"
        );
        setEthValue(response.data.ethereum.sgd);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="order-last sm:order-first">
          <img
            className="h-full w-full object-fill"
            src="https://img.freepik.com/free-vector/flat-design-creative-dogecoin-illustration_23-2149195018.jpg?w=1380&t=st=1681456521~exp=1681457121~hmac=663691adec1c1339d8db2d91e1206e56b035c0512734fc202c9fdead6916c836"
            alt=""
          />
        </div>
        <div className="order-first sm:order-last">
          <section className="bg-switcheo">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <a
                href="https://www.switcheo.com/"
                target="_blank"
                className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                rel="noreferrer"
              >
                <img
                  className="w-8 h-8 mr-2"
                  src="https://seeklogo.com/images/S/switcheo-swth-logo-64886407B6-seeklogo.com.png"
                  alt="logo"
                />
                Switcheo
              </a>
              <div className="w-full bg-white border border-solid border-gray-400 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Transaction
                  </h1>
                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <label
                        for="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Eth Address
                      </label>
                      <input
                        type="text"
                        name="eth-address"
                        id="eth-address"
                        value={ethAdd}
                        className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                          ethAddError
                            ? "border-red-600 focus:ring-red-600 focus:border-red-600"
                            : ""
                        }`}
                        placeholder="0x71C7656EC7ab88b098defB751B7401B5f6d8976F"
                        required=""
                        onChange={handleEthAddChange}
                      />
                      {ethAddError ? (
                        <p className="text-red-600">{ethAddError}</p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div>
                      <div className="flex justify-between items-center">
                        <label
                          for="password"
                          className="inline-flex mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Amount to send
                        </label>
                        <label class="relative inline-flex items-center mb-2 cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            class="sr-only peer"
                            onClick={handleToggleButton}
                          />
                          <div class="w-9 h-5 bg-gray-900 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                          <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                            {amtType}
                          </span>
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="number"
                          name="amount"
                          id="amount"
                          value={amt}
                          className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                            amtError
                              ? "border-red-600 focus:ring-red-600 focus:border-red-600"
                              : ""
                          }`}
                          required=""
                          onChange={handleAmtChange}
                        />
                        <div className="absolute right-2 top-2">
                          {amtType === "SGD" ? (
                            <p className="text-gray-500 text-lg">SGD</p>
                          ) : (
                            <p className="text-gray-500 text-lg">ETH</p>
                          )}
                        </div>
                      </div>
                      {amtError ? (
                        <p className="text-red-600">{amtError}</p>
                      ) : (
                        ""
                      )}
                      {amtInputChanged && amt ? (
                        amtType === "SGD" ? (
                          <p className="text-gray-500 text-sm">
                            {amtInEth} ETH
                          </p>
                        ) : (
                          <p className="text-gray-500 text-sm">
                            {amtInSgd} SGD
                          </p>
                        )
                      ) : (
                        ""
                      )}
                    </div>
                    <Transition
                      show={confirmButtonClicked}
                      enter="transition ease-in-out duration-500 transform"
                      enterFrom="-translate-y-full"
                      enterTo="translate-y-0"
                      leave="transition ease-in-out duration-300 transform"
                      leaveFrom="translate-y-0"
                      leaveTo="translate-y-[-20px]"
                    >
                      <div>
                        <label
                          for="confirm-password"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          OTP Authentication
                        </label>
                        <input
                          type="text"
                          name="otp"
                          id="otp"
                          placeholder="123456"
                          className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                            otpError
                              ? "border-red-600 focus:ring-red-600 focus:border-red-600"
                              : ""
                          }`}
                          required=""
                          onChange={handleOtpChange}
                        />
                        {otpError ? (
                          <p className="text-red-600">{otpError}</p>
                        ) : (
                          ""
                        )}
                      </div>
                    </Transition>
                    {confirmButtonClicked ? (
                      <button
                        className={`w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${
                          sendValid ? "" : "opacity-50"
                        }`}
                        disabled={!sendValid}
                        onClick={handleSendChange}
                      >
                        Send
                      </button>
                    ) : sendButtonClicked ? (
                      <button
                        disabled
                        type="button"
                        class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center justify-center"
                      >
                        <svg
                          aria-hidden="true"
                          role="status"
                          class="inline w-4 h-4 mr-3 text-white animate-spin"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="#E5E7EB"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentColor"
                          />
                        </svg>
                        Sending...
                      </button>
                    ) : ethSent ? (
                      <button
                        disabled
                        type="button"
                        class="text-white w-full bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 inline-flex items-center justify-center"
                      >
                        Sent!
                      </button>
                    ) : (
                      <button
                        className={`w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${
                          confirmValid ? "" : "opacity-50"
                        }`}
                        disabled={!confirmValid}
                        onClick={() => {
                          setConfirmButtonClicked(true);
                        }}
                      >
                        Confirm
                      </button>
                    )}
                    {ethSent ? (
                      <button
                        className="mx-auto underline flex justify-center"
                        onClick={() => window.location.reload(false)}
                      >
                        Make another transaction
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}
