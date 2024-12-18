import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaUser, FaHistory } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { MdOutlineRateReview, MdOutlineMessage } from "react-icons/md";
import RiderInformation from './RiderInformation';
import RiderTripHistory from './RiderTripHistory';
import RiderPaymentHistory from './RiderPaymentHistory';
import RiderMessages from './RiderMessages';
import RiderChats from './RiderChats';
import RiderRatings from './RiderRatings';

export default function RiderProfileContent() {
  return (
    <div className=' w-full md:w-full md:px-12 px-2 items-center justify-center md:py-12 md:justify-center'>
        <Tabs>

            <TabList>
            <Tab><div className='flex md:flex-row md:gap-3 md:item-center justify-center'><FaUser className='text-xl'/><h2 className='md:text-lg font-lg '>User Information</h2></div></Tab>
            <Tab><div className='flex md:flex-row md:gap-3 md:item-center justify-center'><FaHistory className='text-xl'/><h2 className='md:text-lg font-lg '>Trip History</h2></div></Tab>
            <Tab><div className='flex md:flex-row md:gap-3 md:item-center justify-center'><MdOutlinePayment className='text-xl'/><h2 className='md:text-lg font-lg '>Payment History</h2></div></Tab>
            <Tab><div className='flex md:flex-row md:gap-3 md:item-center justify-center'><MdOutlineMessage className='text-xl'/><h2 className='md:text-lg font-lg '>Messages</h2></div></Tab>
            <Tab><div className='flex md:flex-row md:gap-3 md:item-center justify-center'><TiMessages className='text-xl'/><h2 className='md:text-lg font-lg '>Chats</h2></div></Tab>
            <Tab><div className='flex md:flex-row md:gap-3 md:item-center justify-center'><MdOutlineRateReview className='text-xl'/><h2 className='md:text-lg font-lg '>Ratings</h2></div></Tab>
            </TabList>

            <TabPanel>
            <RiderInformation/>
            </TabPanel>
            <TabPanel>
            <RiderTripHistory/>
            </TabPanel>
            <TabPanel>
            <RiderPaymentHistory/>
            </TabPanel>
            <TabPanel>
            <RiderMessages/>
            </TabPanel>
            <TabPanel>
            <RiderChats/>
            </TabPanel>
            <TabPanel>
            <RiderRatings/>
            </TabPanel>
            </Tabs>
    </div>
  )
}
