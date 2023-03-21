import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

const Cards = () => {
  return (
    <>
      <div className="cards py-10">
        <div className="container mx-auto px-4">
          <div className="cards-box grid justify-items-center grid-cols-1 md:grid-cols-2 lg-grid-cols-3 gap-x-4 gap-y-8">
            {/*  */}
            <div className="box">
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                  <img class="rounded-t-lg" src="./vector/pictTip1.png" alt="" />
                </div>
                <div class="p-5">
                  <div>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Teknik Informatika Pemrograman</h5>
                  </div>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Penerapan Prinsip Dasar Pemrograman dalam Pengembangan Aplikasi</p>
                  <Link
                    to="/informatika"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="box">
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                  <img class="rounded-t-lg" src="./vector/pictMeka1.png" alt="" />
                </div>
                <div class="p-5">
                  <div>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Teknik Mekatronika</h5>
                  </div>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Penerapan Prinsip Mekatronika dalam Desain Sistem Otomasi</p>
                  <Link
                    to="/mekatronika"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="box">
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                  <img class="rounded-t-lg" src="./vector/pictMesin1.png" alt="" />
                </div>
                <div class="p-5">
                  <div>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Teknik Pemesinan</h5>
                  </div>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <Link
                    to="/pemesinan"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="box">
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                  <img class="rounded-t-lg" src="./vector/pictTbsm1.png" alt="" />
                </div>
                <div class="p-5">
                  <div>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Teknik Sepeda Motor</h5>
                  </div>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <Link
                    to="/sepedamotor"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
