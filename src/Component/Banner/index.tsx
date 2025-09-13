import * as Styled from './styles';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/controller';
import 'swiper/css/scrollbar';

import { Controller, Scrollbar } from 'swiper';
import { data } from '../../api/db';

import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import { Button } from '../Button';

type productProps = {
  id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    sizes: string[];
    image: string;
    newProduct?: boolean;
}

export const Banner = () => {
  const product = data

  if(!product) return null;
  
  return (
    <Styled.Container>
      <Styled.Content>
          <Swiper 
              modules={[Controller, Scrollbar]}
              scrollbar={{ draggable: true }}
            >
              {product.map(({id, image, title, description, newProduct}: productProps) => {
                if(newProduct){
                  return (
                    <SwiperSlide key={id}>
                      <Styled.Text>
                        <Heading size="big">{title}</Heading>
                        <TextComponent>{description}</TextComponent>
                        <div><Button to={`${id}`}>Comprar</Button></div>
                      </Styled.Text>
                      <Styled.Image>
                        <img src={image} alt={title}/>
                      </Styled.Image>
                    </SwiperSlide>
                )}
                return null
              }) }
          </Swiper>
      </Styled.Content>
    </Styled.Container>
  );
};
