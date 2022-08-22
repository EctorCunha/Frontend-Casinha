import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Wrapper, ContainerBanner, BannerImages, Bird } from './styles';
import frame from '@/assets/images/frame.avif';
import bird from '@/assets/images/bird.gif';

export function Banner() {
  return (
    <Wrapper>
      <ContainerBanner>
        <Typography
          variant="h1"
          component={motion.h1}
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          Qual o seu <br /> próximo destino?
        </Typography>
        <motion.img
          className="frame"
          src={frame}
          alt="Imagem de mulher sentada na janela"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 4 }}
        />
      </ContainerBanner>
      <Bird>
        <img src={bird} alt="pássaro voando" />
      </Bird>
      <BannerImages>
        <img
          className="image"
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fm=avif&fit=crop&w=1024&q=50"
          alt="Raiar do sol"
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fm=avif&fit=crop&w=1024&q=50"
          alt="Paisagem de floresta com rio e montanhas"
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fm=avif&fit=crop&w=1024&q=50"
          alt="Paisagem com floresta e montanhas"
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fm=avif&fit=crop&w=1024&q=50"
          alt="Paisagem de montanhas, floresta e céu estrelado"
        />
        <img
          className="image"
          src="https://images.unsplash.com/photo-1543788303-c15e49305bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&fm=avif&fit=crop&w=1024&q=50"
          alt="Imagem do alto de cidade grande"
        />
      </BannerImages>
    </Wrapper>
  );
}
