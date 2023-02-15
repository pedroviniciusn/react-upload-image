import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [imageURL, setImageURL] = useState('');

  const handleViewImage = (url: string) => {
    onOpen();
    setImageURL(url);
  };

  return (
    <>
      <SimpleGrid columns={3} spacing="40px">
        {cards.map(card => (
          <Card
            data={card}
            viewImage={() => handleViewImage(card.url)}
            key={card.id}
          />
        ))}

        <ModalViewImage
          isOpen={isOpen}
          onClose={() => onClose()}
          imgUrl={imageURL}
        />
      </SimpleGrid>
    </>
  );
}
