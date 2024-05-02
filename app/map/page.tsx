'use client'
import React, { useState } from 'react';
import Navbar from '../components/navbar/navbar';
import dynamic from 'next/dynamic';
import Reel from '../map/reel/reel';
import axios from 'axios';

const Map = dynamic(() => import('../map/mapObject'), {
  ssr: false
});

export type Restaurant = {
  address: string,
  avgRating: number,
  image: string,
  createdAt: string,
  latlng: { lat: number, lng: number },
  name: string,
  owner: string,
  reviews: number,
  updatedAt: string,
  _id: string
}

const MapContainer = () => {
  const [middleRestaurant, setMiddleRestaurant] = useState<number>(5);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [restaurantList, setRestaurantList] = useState<Restaurant[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //get restaurants
  const fetchRestaurants = async () => {
    try {
        setLoading(true);
        const response = await axios.get('https://main--stellular-fenglisu-e2b691.netlify.app/api/restaurant/list', {
            params: {
                limit: 10,
                page: page
            }
        });
        const newRestaurants: Restaurant[] = response.data.restaurantList;
        setRestaurantList((prevList) => [...prevList, ...newRestaurants]);
        setPage(page + 1);
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
  }

  return (
    <div>
      <Navbar />
      <div className='bg-[#1D1D4F] absolute top-[10vh] h-[80vh] left-[2vw] w-[96vw] rounded-[20px]'>
        <Map 
          restaurantList={restaurantList} 
          setRestaurantList={setRestaurantList} 
          setMiddleRestaurant={setMiddleRestaurant}
          middleRestaurant={middleRestaurant}
                  setSelectedRestaurant={setSelectedRestaurant}
        selectedRestaurant={selectedRestaurant}
        />
      </div>
      <Reel   
        middleRestaurant={middleRestaurant} 
        setMiddleRestaurant={setMiddleRestaurant} 
        restaurantList={restaurantList}
        setRestaurantList={setRestaurantList}
        page={page}
        setPage={setPage}
        loading={loading}
        setLoading={setLoading}
        fetchRestaurants={fetchRestaurants}
        setSelectedRestaurant={setSelectedRestaurant}
        selectedRestaurant={selectedRestaurant}
      />
    </div>
  );
};

export default MapContainer;
