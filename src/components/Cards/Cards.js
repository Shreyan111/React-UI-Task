import React from 'react'
import Pic8 from "../../assets/picture8.gif";
import Pic9 from "../../assets/picture9.gif";
import Pic10 from "../../assets/picture10.gif";
import Pic11 from "../../assets/picture11.gif";
import Pic12 from "../../assets/picture12.gif";
import Pic13 from "../../assets/picture13.gif";

export const Cards = () => {
    return (
        <div className='flex justify-center flex-wrap gap-20 mt-20 mb-24'>
            <div class="max-w-xs rounded-lg overflow-hidden bg-gray-100 mt-8">
                <div class="px-6 py-4">
                    <div className='flex justify-center'>
                        <img src={Pic8} alt='img' className='float-center h-40 w-40' />
                    </div>
                    <div class="font-bold text-xl mb-2 mt-4 text-center text-black">Works Everywhere!</div>
                    <p class="text-gray-700 text-base text-center font-normal">
                        Use SlayPay Visa Platinum card on all card machines, websites & ATMs.
                    </p>
                </div>
            </div>
            <div class="max-w-xs rounded-2xl overflow-hidden bg-gray-100 mt-8">
                <div class="px-6 py-4">
                    <div className='flex justify-center'>
                        <img src={Pic9} alt='img' className='float-center h-40 w-40' />
                    </div>
                    <div class="font-bold text-xl mb-2 mt-4 text-center text-black">Numberless Card.</div>
                    <p class="text-gray-700 text-base text-center font-normal">
                        No number on the card. Access card details securely inside SlayPay app.
                    </p>
                </div>
            </div>
            <div class="max-w-xs rounded-2xl overflow-hidden bg-gray-100 mt-8">
                <div class="px-6 py-4">
                    <div className='flex justify-center'>
                        <img src={Pic10} alt='img' className='float-center h-40 w-40' />
                    </div>
                    <div class="font-bold text-xl mb-2 mt-4 text-center text-black">Np Fees. Promise.</div>
                    <p class="text-gray-700 text-base text-center font-normal">
                        No annual fees, No interests, No late fees. Start slaying, without paying
                    </p>
                </div>
            </div>
            <div class="max-w-xs rounded-2xl overflow-hidden bg-gray-100 mt-8">
                <div class="px-6 py-4">
                    <div className='flex justify-center'>
                        <img src={Pic11} alt='img' className='float-center h-40 w-40' />
                    </div>
                    <div class="font-bold text-xl mb-2 mt-4 text-center text-black">Alerts & Insights</div>
                    <p class="text-gray-700 text-base text-center font-normal">
                        Get detailed insights on your spends and instant alerts with SlayPay app.
                    </p>
                </div>
            </div>
            <div class="max-w-xs rounded-2xl overflow-hidden bg-gray-100 mt-8">
                <div class="px-6 py-4">
                    <div className='flex justify-center'>
                        <img src={Pic12} alt='img' className='float-center h-40 w-40' />
                    </div>
                    <div class="font-bold text-xl mb-2 mt-4 text-center text-black">Control your spends</div>
                    <p class="text-gray-700 text-base text-center font-normal">
                        Set monthly limits on how much you want to spend to reduce over expenditure.
                    </p>
                </div>
            </div>
            <div class="max-w-xs rounded-2xl overflow-hidden bg-gray-100 mt-8">
                <div class="px-6 py-4">
                    <div className='flex justify-center'>
                        <img src={Pic13} alt='img' className='float-center h-40 w-40' />
                    </div>
                    <div class="font-bold text-xl mb-2 mt-4 text-center text-black">Get Priority Support</div>
                    <p class="text-gray-700 text-base text-center font-normal">
                        Connect with humans and not bots! Get any query resolved within 24 hours.
                    </p>
                </div>
            </div>
        </div>
    )
}
