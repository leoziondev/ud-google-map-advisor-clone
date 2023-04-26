import { Autocomplete } from "@react-google-maps/api";

import { Flex, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { BiChevronDown, BiHotel, BiMapAlt, BiRestaurant, BiSearch, BiStar } from "react-icons/bi"
import { Rating } from "@material-ui/lab";

export default function Header({ setType, setRatings, setCoordinates }) {
  return (
    <Flex
      position={'absolute'}
      top={0}
      left={0}
      width={'full'}
      px={4}
      py={2}
      zIndex={101}
    >
      <Flex>
        {/* <Autocomplete> */}
          <InputGroup
            width={'35vw'}
            shadow={'lg'}
          >
            <InputRightElement
              pointerEvents={'none'}
              children={<BiSearch color="gray" fontSize={20} />}
            />
            <Input
              type={'text'}
              placeholder="Buscar endereço..."
              variant={'filled'}
              fontSize={18}
              bg={'white'}
              color={'gray.700'}
              _hover={{ bg: 'whiteAlpha.800' }}
              _focus={{ bg: 'whiteAlpha.800' }}
              _placeholder={{ color: 'gray.700' }}
            />
          </InputGroup>
        {/* </Autocomplete> */}

        <Flex
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            px={4}
            py={2}
            bg={'white'}
            rounded={'full'}
            ml={4}
            shadow="lg"
            cursor={'pointer'}
            _hover={{ bg: 'gray.100' }}
            transition={'ease-in-out'}
            transitionDuration={'0.3s'}
          >
            <Menu>
              <BiStar fontSize={25} />
              <MenuButton
                mx={2}
                transition="all .2s"
                borderRadius={'md'}
              >
                Filtrar por avaliação
              </MenuButton>
              <MenuList>
                <MenuItem
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  onClick={() => setRatings("")}
                >
                  <Text fontSize={16} fontWeight={500} color={'gray.700'}>Ver todas</Text>
                </MenuItem>
                <MenuItem
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'space-around'}
                  onClick={() => setRatings(2)}
                >
                  <Text fontSize={16} fontWeight={500} color={'orange.500'}>2.0</Text>
                  <Rating
                    size="small"
                    value={2}
                    readOnly  
                  />
                </MenuItem>
                <MenuItem
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'space-around'}
                  onClick={() => setRatings(3)}
                >
                  <Text fontSize={16} fontWeight={500} color={'orange.500'}>3.0</Text>
                  <Rating
                    size="small"
                    value={3}
                    readOnly  
                  />
                </MenuItem>
                <MenuItem
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'space-around'}
                  onClick={() => setRatings(4)}
                >
                  <Text fontSize={16} fontWeight={500} color={'orange.500'}>4.0</Text>
                  <Rating
                    size="small"
                    value={4}
                    readOnly  
                  />
                </MenuItem>
                <MenuItem
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'space-around'}
                  onClick={() => setRatings(5)}
                >
                  <Text fontSize={16} fontWeight={500} color={'orange.500'}>5.0</Text>
                  <Rating
                    size="small"
                    value={5}
                    readOnly  
                  />
                </MenuItem>
              </MenuList>
            </Menu>
            <BiChevronDown fontSize={25} />
          </Flex>

          {/* Restaurants */}
          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            px={4}
            py={2}
            bg={'white'}
            rounded={'full'}
            ml={4}
            shadow="lg"
            cursor={'pointer'}
            _hover={{ bg: 'gray.100' }}
            transition={'ease-in-out'}
            transitionDuration={'0.3s'}
            onClick={() => setType('restaurants')}
          >
            <BiRestaurant fontSize={25} />
            <Text ml={3} fontSize={16} fontWeight={500}>
              Restaurantes
            </Text>
          </Flex>

          {/* Hotels */}
          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            px={4}
            py={2}
            bg={'white'}
            rounded={'full'}
            ml={4}
            shadow="lg"
            cursor={'pointer'}
            _hover={{ bg: 'gray.100' }}
            transition={'ease-in-out'}
            transitionDuration={'0.3s'}
            onClick={() => setType('hotels')}
          >
            <BiHotel fontSize={25} />
            <Text ml={3} fontSize={16} fontWeight={500}>
              Hoteis
            </Text>
          </Flex>

          {/* Restaurants */}
          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            px={4}
            py={2}
            bg={'white'}
            rounded={'full'}
            ml={4}
            shadow="lg"
            cursor={'pointer'}
            _hover={{ bg: 'gray.100' }}
            transition={'ease-in-out'}
            transitionDuration={'0.3s'}
            onClick={() => setType('attractions')}
          >
            <BiMapAlt fontSize={25} />
            <Text ml={3} fontSize={16} fontWeight={500}>
              Atrações
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}