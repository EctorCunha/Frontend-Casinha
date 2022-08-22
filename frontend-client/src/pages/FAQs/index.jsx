import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import {
  Wrapper,
  AccordionContainer,
  AccordionItem,
  ContainerImage,
  ContainerInfo,
} from './styles';
import compass from '@/assets/images/compass.avif';
import compass01 from '@/assets/images/compass01.avif';
import { motion } from 'framer-motion';
import { Page } from '@/components/Page';

const items = [
  {
    question: 'O que é Tiny House?',
    answer:
      'Tiny house é um termo em inglês que significa “casa muito pequena/minúscula”, um novo conceito de moradia que vem se espalhando ao redor do mundo.',
  },
  {
    question: 'Preciso criar uma conta para reservar uma casinha?',
    answer:
      'Sim, ao criar uma conta em nosso site será possível reservar uma casinha, além disso verificar o histórico de todas as reservas, fazer reviews e ter uma lista de favoritos.',
  },
  {
    question: 'Como reservar uma casinha?',
    answer:
      'O primeiro passo é realizar a busca da casinha que mais atende suas necessidades, os filtros podem te ajudar na sua escolha, para finalizar a reserva será necessário fazer o login. ',
  },
];

export function FAQs() {
  return (
    <Page title="FAQs">
      <Wrapper
        component={motion.div}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.25 }}
      >
        <Container
          maxWidth="sm"
          sx={{ zIndex: '2' }}
          component={motion.div}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1, delay: 0.75 }}
        >
          <ContainerImage />
          <ContainerInfo>
            <Typography variant="h2">Perdido? FAQs</Typography>
            <AccordionContainer>
              <AccordionItem>
                {items.map((item, index) => (
                  <Accordion key={index}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className="question" variant="body1">
                        {item.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body1">{item.answer}</Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </AccordionItem>
            </AccordionContainer>
          </ContainerInfo>
        </Container>
        <img className="compass01" src={compass01} />
        <img className="compass" src={compass} />
      </Wrapper>
    </Page>
  );
}
