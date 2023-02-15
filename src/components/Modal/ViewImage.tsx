import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  if (isOpen) {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW='900px' w='unset'>
          <ModalBody d='flex' alignItems='center' justifyContent='center' >
            <Image src={imgUrl} maxW='900px' maxH='600px' />
          </ModalBody>
          <ModalFooter justifyContent='flex-start' backgroundColor='pGray.800'>
            <Link href={imgUrl} isExternal>
              Abrir original
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
  } else {
    return (
      null
    )
  }
}
