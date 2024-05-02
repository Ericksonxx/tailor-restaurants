import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker  } from 'react-leaflet';
import './mapObject.css';
import { Restaurant } from './page';
import { iconFull } from './reel/mapIcons';
import { iconSelected } from './reel/mapIcons';

interface ReelProps {
  restaurantList: Restaurant[];
  setRestaurantList: React.Dispatch<React.SetStateAction<Restaurant[]>>
  middleRestaurant: number;
  setMiddleRestaurant: React.Dispatch<React.SetStateAction<number>>
  selectedRestaurant: Restaurant | null;
  setSelectedRestaurant: React.Dispatch<React.SetStateAction<Restaurant | null>>
}


const MapObject = ( { restaurantList, setRestaurantList, middleRestaurant, setMiddleRestaurant, selectedRestaurant, setSelectedRestaurant }: ReelProps) => {

  function handleSelectionMap( restaurant: Restaurant) {
    setSelectedRestaurant(restaurant);
  }
  return (
    <div className='leaflet-container'>
      <MapContainer
        className='w-[96vw] h-[80vh] rounded-[20px]'
        center={[40.417218124893864, -3.7031343965574233]}
        zoom={15}
        attributionControl={false}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          minZoom={0}
          attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {restaurantList.map((restaurant) => (
          <div>
            {restaurant._id === selectedRestaurant?._id.toString() ? (
                <Marker
                  key={restaurant._id}
                  position={[restaurant.latlng.lat, restaurant.latlng.lng]}
                  icon={iconSelected}
                /> 
              ) : (
                <div onClick={() => handleSelectionMap(restaurant)}>
                                  <Marker
                key={restaurant._id}
                position={[restaurant.latlng.lat, restaurant.latlng.lng]}
                icon={iconFull}
              /> 
                </div>
              )
            }
          </div>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapObject;
