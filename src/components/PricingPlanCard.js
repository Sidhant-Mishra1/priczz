import React from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';

const PricingPlanCard = ({ title, price, features }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h6" component="div">
          ${price}/month
        </Typography>
        <Typography variant="body2" gutterBottom>
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </Typography>
        <Button variant="contained">Choose Plan</Button>
      </CardContent>
    </Card>
  );
};

export default PricingPlanCard;