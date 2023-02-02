import './App.css'
import { useState, useEffect } from 'react'

import myData from './static/out.json'
import moment from 'moment'

import { Tooltip } from 'react-tooltip'
import { Stepper } from './components/stepper/stepper'
import { DropdownMenu } from './components/dropdown/dropdown'
import 'react-tooltip/dist/react-tooltip.css'

import star from './assets/star.svg'
import hand from './assets/icons/hand.svg'
import yellow from './assets/icons/yellow.svg'
import yellowstar from './assets/icons/yellowstar.svg'
import stop from './assets/icons/stop.svg'
import megaphone from './assets/icons/megaphone.svg'

function App() {

  let hundredData = myData?.result?.slice(0, 80)
  let date

  const sortAlphabeticaly = () => {
    hundredData.sort((a, b) => (a.company.name > b.company.name) ? 1 : ((b.company.name > a.company.name) ? -1 : 0))
  }

  return (
    <div className="App">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg max-h-screen">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 px-3">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
            <tr>
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label for="checkbox-all-search" class="sr-only">checkbox</label>
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                <div class="flex items-center">
                  Date
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                Company
                {/* <button onClick={sortAlphabeticaly}><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></button> */}
              </th>
              <th scope="col" class="px-6 py-3">
                Sector
              </th>
              <th scope="col" class="px-6 py-3">
                City
              </th>
              <th scope="col" class="px-6 py-3">
                Pages
              </th>
              <th scope="col" class="px-6 py-3">
                Duration(Video)
              </th>
              <th scope="col" class="px-6 py-3">
                Source
              </th>
              <th scope="col" class="px-6 py-3">
                Interest
              </th>
              <th scope="col" class="px-6 py-3">
                More
              </th>
            </tr>
          </thead>
          <tbody>
            {
              hundredData?.map((item, i) => {
                return (
                  <>
                    <div>
                      {(() => {
                        if (moment(item?.startedAt).format('DD/MM/YYYY') !== date) {
                          date = moment(item?.startedAt).format('DD/MM/YYYY')
                          return <div class="py-4">{date}</div>
                        }
                      })()}
                    </div>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td class="w-4 p-4">
                        <div class="flex items-center">
                          <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                        </div>
                      </td>
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div class="flex justify-between">
                          <img src={star} class="px-3" id={item?.company?.category?.id} />
                          <Tooltip anchorId={item?.company?.category?.id} place='top'>
                            <div className='flex justify-evenly w-32'>
                              <img src={hand} />
                              <img src={yellow} />
                              <img src={yellowstar} />
                              <img src={stop} />
                            </div>
                          </Tooltip>
                          <p>{moment(item.lastActivityAt).format('hh:mm')}</p>
                        </div>
                      </th>
                      <td class="flex items-center px-6 py-4 space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                        <div class="font-medium">{item?.company?.name}</div>
                      </td>
                      <td class="px-6 py-4">
                        {item?.company?.sector?.name_en}
                      </td>
                      <td class="px-6 py-4">
                        {item?.company?.city}
                      </td>
                      <td class="px-6 py-4">
                        <a id={item?.guid}>{item?.visits?.length}</a>
                        <Tooltip anchorId={item?.guid} place="left" >
                          <div>
                            <div className='flex justify-between w-96'>
                              <h1 className='text-xl py-3'>Visited Pages</h1>
                              <div className='flex '>
                                <input checked type="checkbox" class="checked:bg-blue-500" />
                                <p className='py-4 px-3'>Show events</p>
                              </div>
                            </div>
                            <hr className='py-3' />
                            <Stepper className='py-3' data={item?.visits} />
                          </div>
                        </Tooltip>
                      </td>
                      <td class="px-6 py-4">
                        01:23
                      </td>
                      <td class="px-6 py-4">
                        <span id={item.company.name}>{item?.referer?.referer_medium?.charAt(0)?.toUpperCase() + item?.referer?.referer_medium?.slice(1)}</span>
                        <Tooltip anchorId={item.company.name} place="left">
                          <div className='flex justify-start w-96'>
                            <img src={megaphone} />
                            <h1 className='text-xl py-3 px-3'>UTM Campaign</h1>
                          </div>
                          <hr className='py-3' />
                          <div>
                            <div className='flex justify-between py-3 px-3'>
                              <p>Source:</p>
                              <p>{item.referer.referer_medium}</p>
                            </div>
                            <div className='flex justify-between py-3 px-3'>
                              <p>Medium:</p>
                              <p>domain-redirect</p>
                            </div>
                            <div className='flex justify-between py-3 px-3'>
                              <p>Campaign:</p>
                              <p>{item.referer.referer_url}</p>
                            </div>
                          </div>
                        </Tooltip>
                        <div>{item?.referer?.referer_url}</div>
                      </td>
                      <td class="flex items-center px-6 py-4 space-x-3">
                        <div>{item?.mainInterest}</div>
                        <div>
                          {
                            (item?.interests.length - 1) <= 0 ? null :
                              `+${item?.interests.length - 1}`
                          }
                        </div>
                      </td>
                      <td class="px-6 py-4">
                        <DropdownMenu />
                      </td>
                    </tr>
                  </>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
