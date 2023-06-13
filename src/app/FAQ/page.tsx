/* eslint-disable @next/next/no-img-element */
"use client";

import { Box, Accordion, AccordionSummary, AccordionDetails, Typography, Container, styled } from '@mui/material';
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqData = [
  {
    question: 'Why Shoester?',
    answer: 'Never regret a shoe purchase again. With Shoester, you can have access to an extensive collection of shoes without the commitment of buying.',
  },
  {
    question: 'How does it work?',
    answer: 'Browse, rent, and enjoy fashionable shoes delivered to your doorstep, and return them hassle-free after 7 days for a seamless and sustainable footwear experience with Shoester.',
  },
  {
    question: 'What\'s the catch?',
    answer: 'No catch! Shoester provides a convenient and flexible shoe rental service without any hidden fees or commitments.',
  },
];

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
  marginBottom: theme.spacing(2),

  '&:before': {
    display: 'none',
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: '#E7E5D8',
  color: 'black',
  borderBottom: `1px solid ${theme.palette.divider}`,
  marginBottom: -1,

  '& .MuiAccordionSummary-expandIcon': {
    color: theme.palette.primary.contrastText,
  },

  '& .MuiAccordionSummary-content': {
    alignItems: 'center',
    margin: theme.spacing(1, 0),
  },
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(2),
}));

export default function Faq() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Frequently Asked Questions
        </Typography>
        {faqData.map((faq, index) => (
          <StyledAccordion
            key={index}
            expanded={expanded === `panel${index + 1}`}
            onChange={handleChange(`panel${index + 1}`)}
          >
            <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{faq.question}</Typography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <Typography>{faq.answer}</Typography>
            </StyledAccordionDetails>
          </StyledAccordion>
        ))}
      </Box>
    </Container>
  );
}
