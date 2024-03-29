import {getRandomArrayElement, getRandomInteger, makeIdGenerator} from '../utils/common';

const types = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
const offerTitles = ['Fish in the Ocean', 'Sea Water', 'Coral Reef', 'Swift Shark', 'Colorful Fish', 'Dolphins Jumping', 'Moving Jellyfish', 'Crabs Hiding', 'Sea Horse', 'Sea Breeze', 'Turtles Moving', 'Sea Sand', 'Crabs Grabbing', 'Mollusks Creating', 'Fisherman Fishing', 'Sea Star'];

const generateOffersArray = () => {
  const generateOfferId = makeIdGenerator();

  return Array.from({length: getRandomInteger(3, 6)}, () => ({
    id: generateOfferId(),
    title: getRandomArrayElement(offerTitles),
    price: getRandomInteger(10, 120)
  }));
};


const generateOffers = types.map((type) => ({
  type,
  offers: generateOffersArray()
}));

export {generateOffers};
