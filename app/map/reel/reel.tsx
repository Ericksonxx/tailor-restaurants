'use client'
import { useEffect, useState, useRef } from "react"
import ReelCard from "./reelCard"
import './reel.css'
import { Restaurant } from "../page"

interface ReelProps {
    middleRestaurant: number;
    setMiddleRestaurant: React.Dispatch<React.SetStateAction<number>>;
    restaurantList: Restaurant[];
    setRestaurantList: React.Dispatch<React.SetStateAction<Restaurant[]>>;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    selectedRestaurant: Restaurant | null;
    setSelectedRestaurant: React.Dispatch<React.SetStateAction<Restaurant | null>>
    fetchRestaurants: () => void;
  }

export default function Reel( { middleRestaurant, setMiddleRestaurant, restaurantList, setSelectedRestaurant, selectedRestaurant, setRestaurantList, page, setPage, loading, setLoading, fetchRestaurants }: ReelProps) {

    const reelRef = useRef<HTMLDivElement | null>(null);
    const cardRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        fetchRestaurants();
    }, []);

    const handleScroll = () => {
        if (!reelRef.current || !cardRef.current) return;
  
        const container = reelRef.current;
        const containerWidth = container.clientWidth;
        const scrollLeft = container.scrollLeft;
        const midpoint = scrollLeft + containerWidth / 2;

        const elements = Array.from(
          cardRef.current.children
        ) as HTMLElement[];
  
        const newIndex = elements.findIndex((element) => {
          const { left, width } = element.getBoundingClientRect();
          const elementMidpoint = left + 350 + width / 2;
          return elementMidpoint >= midpoint;
        });
  
        if (newIndex !== -1) {
          setMiddleRestaurant(newIndex);
        }
      };

      if(reelRef.current?.scroll) {
        reelRef.current.addEventListener('scroll', handleScroll);
      }

      function handleSelection(restaurant: Restaurant, index: number) {
        setSelectedRestaurant(restaurant);
        setMiddleRestaurant(index);
      }


    return (
        <div className="w-screen absolute bottom-0 left-0 h-[60vh]">
        <div
        id='circle'
            ref={reelRef}
            className="inline-flex flex-nowrap items-end justify-center h-full w-screen overflow-x-auto scrollbar-x-hide"
        >
            <div ref={cardRef} className="flex items-center justify-center space-x-12">
                {restaurantList &&restaurantList.map((restaurant: Restaurant, index) => (

                <div
                    key={index}
                    className={`${index === middleRestaurant ? "active" : "notActive"} ${getCardScale(index, middleRestaurant)}`}
                    onClick={() => handleSelection(restaurant, index)}
                    id="card-container"
                >
                            <ReelCard key={index} restaurant={restaurant}/>
                        </div>
                ))}
                {loading && <p>Loading...</p>}
            </div>
        </div>
    </div>
    );
}

const getCardScale = (index: number, middleRestaurant: number): string | undefined => {
    const distance = Math.abs(index - middleRestaurant);
    if (distance === 1) {
        if(index - middleRestaurant === 1) {
            return "second right";
        } else {
            return "second left";
        }
    } else if (distance === 2) {
        if(index - middleRestaurant === 2) {
            return "third right";
        } else {
            return "third left";
        }
    } else if(distance > 2) {
      return "hidden";
    }
  };