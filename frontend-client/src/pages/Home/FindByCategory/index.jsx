import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { CardMedia, Typography, Container, CardActionArea } from '@mui/material';
import { motion } from 'framer-motion';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useInterface } from '@/hooks/useInterface';
import { CasinhaApi } from '@/services/CasinhaApi';
import { Wrapper, CategoryCard } from './styles';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function FindByCategory() {
    const [categories, setCategories] = useState([]);
    const { addGlobalLoading, removeGlobalLoading, addGlobalMessage } =
      useInterface();
    const categoriesApi = new CasinhaApi('/categories');
  
    async function fetchCategories() {
      try {
        addGlobalLoading();
        const response = await categoriesApi.getList();
        setCategories(response.data);
      } catch {
        addGlobalMessage('Erro ao buscar categorias', 'error');
      } finally {
        removeGlobalLoading();
      }
    }
  
    useEffect(() => {
      fetchCategories();
    }, []);

    return (
        <Wrapper component={motion.div} animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{duration: 1, delay: 1}}>
            <Container maxWidth="xl">
                <Typography variant="h2">Buscar por tipo de acomodação</Typography>
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 16,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 16,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 16,
                        },
                        960: {
                            slidesPerView: 4,
                            spaceBetween: 16,
                        }
                    }}
                >
                    {categories.map((category) => (
                        <SwiperSlide key={category.id}>
                            <CategoryCard>
                                <Link to={"/category/" + category.id}>
                                    <CardActionArea>
                                        <Typography variant="h3">{category.title}</Typography>
                                        <CardMedia component="img" image={category.image} alt={category.image}/>
                                    </CardActionArea>
                                </Link>
                            </CategoryCard>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </Wrapper>
    );
}
