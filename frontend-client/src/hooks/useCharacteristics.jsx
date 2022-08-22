import {
  AcUnit as AirConditioningIcon,
  Fullscreen as AreaIcon,
  Kitchen as KitchenIcon,
  Shower as NumberOfBathroomsIcon,
  Bed as NumberOfBedroomsIcon,
  Hotel as NumberOfBedsIcon,
  People as NumberOfGuestsIcon,
  LocalParking as ParkingIcon,
  Pets as PetsAllowedIcon,
  SmokingRooms as SmokingAllowedIcon,
  NetworkWifi as WifiIcon,
} from '@mui/icons-material';

export function useCharacteristics() {
  return {
    airConditioning: { title: 'Ar Condicionado', icon: <AirConditioningIcon /> },
    area: { title: 'Área', icon: <AreaIcon /> },
    kitchen: { title: 'Cozinha', icon: <KitchenIcon /> },
    numberOfBathrooms: { title: 'Número de Banheiros', icon: <NumberOfBathroomsIcon /> },
    numberOfBedrooms: { title: 'Número de Quartos', icon: <NumberOfBedroomsIcon /> },
    numberOfBeds: { title: 'Número de Camas', icon: <NumberOfBedsIcon /> },
    numberOfGuests: { title: 'Número de Convidados', icon: <NumberOfGuestsIcon /> },
    parking: { title: 'Estacionamento', icon: <ParkingIcon /> },
    petsAllowed: { title: 'Permitido Animais', icon: <PetsAllowedIcon /> },
    SmokingAllowedIcon: { title: 'Permitido Fumar', icon: <SmokingAllowedIcon /> },
    wifi: { title: 'Wifi', icon: <WifiIcon /> },
  };
}
