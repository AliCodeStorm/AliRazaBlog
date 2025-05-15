'use client';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faCircleInfo, faCalendarDays, faLock } from '@fortawesome/free-solid-svg-icons';

const PaymentForm = () => {
    return (
        <section className="bg-white py-12 dark:bg-gray-900 md:py-20 antialiased">
            <div className="mx-auto max-w-screen-xl px-4">
                <div className="mx-auto max-w-5xl">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Payment</h2>

                    <div className="lg:flex lg:items-start lg:gap-12">
                        {/* Payment Form */}
                        <form
                            className="w-full bg-white dark:bg-gray-800 p-6 lg:p-8 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm relative overflow-hidden max-w-xl"
                            noValidate
                        >
                            <div className="absolute inset-0 rounded-lg border-[2px] border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-shimmer z-0" />

                            <div className="relative z-10 grid grid-cols-2 gap-4 mb-6">
                                {/* Full Name */}
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="full_name" className="block text-sm font-medium text-gray-900 dark:text-white mb-1">
                                        Full name (as on card)*
                                    </label>
                                    <input
                                        suppressHydrationWarning
                                        type="text"
                                        id="full_name"
                                        name="full_name"
                                        placeholder="Bonnie Green"
                                        autoComplete="off"
                                        required
                                        aria-required="true"
                                        className="w-full p-2.5 rounded-md text-sm bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                {/* Card Number */}
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="card-number" className="block text-sm font-medium text-gray-900 dark:text-white mb-1">
                                        Card number*
                                    </label>
                                    <div className="relative">
                                        <FontAwesomeIcon icon={faCreditCard} className="absolute left-3 top-3.5 text-gray-400" />
                                        <input
                                            suppressHydrationWarning
                                            type="text"
                                            id="card-number"
                                            name="card_number"
                                            placeholder="xxxx-xxxx-xxxx-xxxx"
                                            autoComplete="off"
                                            required
                                            aria-required="true"
                                            className="w-full p-2.5 pl-10 rounded-md text-sm bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                </div>

                                {/* Expiry */}
                                <div>
                                    <label htmlFor="expiry" className="block text-sm font-medium text-gray-900 dark:text-white mb-1">
                                        Card expiration*
                                    </label>
                                    <div className="relative">
                                        <FontAwesomeIcon icon={faCalendarDays} className="absolute left-3 top-3.5 text-gray-400" />
                                        <input
                                            suppressHydrationWarning
                                            type="text"
                                            id="expiry"
                                            name="expiry"
                                            placeholder="MM/YY"
                                            autoComplete="off"
                                            required
                                            aria-required="true"
                                            className="w-full p-2.5 pl-10 rounded-md text-sm bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                </div>

                                {/* CVV */}
                                <div>
                                    <div className='flex flex-row gap-1'>

                                        <label htmlFor="cvv" className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white mb-1">
                                            CVV*
                                        </label>
                                        <FontAwesomeIcon suppressHydrationWarning icon={faCircleInfo} className="text-gray-400" />
                                    </div>
                                    <input
                                        suppressHydrationWarning
                                        type="text"
                                        id="cvv"
                                        name="cvv"
                                        placeholder="•••"
                                        autoComplete="off"
                                        required
                                        aria-required="true"
                                        className="w-full p-2.5 rounded-md text-sm bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>

                            <button
                                suppressHydrationWarning
                                type="submit"
                                className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-md flex items-center justify-center gap-2 transition duration-150"
                            >
                                <FontAwesomeIcon icon={faLock} />
                                Pay Now
                            </button>
                        </form>

                        {/* Summary */}
                        <div className="mt-10 lg:mt-0 grow">
                            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg p-6 space-y-4">
                                {[
                                    { label: 'Original price', value: '$6,592.00' },
                                    { label: 'Savings', value: '-$299.00', isSaving: true },
                                    { label: 'Store Pickup', value: '$99' },
                                    { label: 'Tax', value: '$799' },
                                ].map((item, idx) => (
                                    <div className="flex justify-between text-sm" key={idx}>
                                        <span className="text-gray-500 dark:text-gray-400">{item.label}</span>
                                        <span className={`font-medium ${item.isSaving ? 'text-green-500' : 'text-gray-900 dark:text-white'}`}>
                                            {item.value}
                                        </span>
                                    </div>
                                ))}

                                <div className="border-t border-gray-200 dark:border-gray-700 pt-3 flex justify-between font-bold text-base text-gray-900 dark:text-white">
                                    <span>Total</span>
                                    <span>$7,191.00</span>
                                </div>
                            </div>

                            {/* Logos */}
                            <div className="mt-6 flex items-center justify-center gap-6">
                                <Image src="/paypal.svg" alt="PayPal" width={24} height={24} className="dark:hidden" />
                                <Image src="/paypal-dark.svg" alt="PayPal Dark" width={24} height={24} className="hidden dark:block" />
                                <Image src="/visa.svg" alt="Visa" width={24} height={24} className="dark:hidden" />
                                <Image src="/visa-dark.svg" alt="Visa Dark" width={24} height={24} className="hidden dark:block" />
                                <Image src="/mastercard.svg" alt="MasterCard" width={24} height={24} className="dark:hidden" />
                                <Image src="/mastercard-dark.svg" alt="MasterCard Dark" width={24} height={24} className="hidden dark:block" />
                            </div>
                        </div>
                    </div>

                    <p className="mt-8 text-sm text-center lg:text-left text-gray-500 dark:text-gray-400">
                        Payment processed by{' '}
                        <a href="#" className="text-blue-600 dark:text-blue-400 underline hover:no-underline">Paddle</a> for{' '}
                        <a href="#" className="text-blue-600 dark:text-blue-400 underline hover:no-underline">Flowbite LLC</a> – United States of America
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PaymentForm;
