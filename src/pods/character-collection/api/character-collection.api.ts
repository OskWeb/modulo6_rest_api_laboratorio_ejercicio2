import { CharactersCollectionData } from './character-collection.api-model';

const baseUrl = 'http://localhost:3000/api';

export const getCharacterCollection =
  async (): Promise<CharactersCollectionData> => {
    const response = await fetch(`${baseUrl}/character`);
    if (response.ok) {
      const data = response.json();
      console.log(data);
      return await data;
    } else {
      throw Error(response.statusText);
    }
  };
