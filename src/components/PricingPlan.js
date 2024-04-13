import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import BlogImage from './Blog.png'; // Import the Blog.png image
import Frame from './Frame194.png';
import Frame69 from './Frame69.png';
import Footer03 from './Footer03.png';
import Partners from './Partners.png';
import HeaderImage from './Header.png'; // Import the header image
import './PricingPlan.css'

const PricingPlan = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      title: 'Startup',
      monthlyPrice: 499,
      yearlyPrice: 4999,
      features: ['Upto 5 successful R&D collaborations', '5-10% success fee', 'AI-driven milestone tracking of every project', 'Access to labs, chemicals, equipment', 'up to 10 research hiring'],
    },
    {
      title: 'Enterprise',
      monthlyPrice: 999,
      yearlyPrice: 9999,
      features: ['Upto 10 successful R&D collaborations', '1-5% success fee', 'AI-driven milestone tracking of every project', 'Access to labs, chemicals, equipment', 'up to 20 research hiring'],
    },
    {
      title: 'Corporation',
      monthlyPrice: 1999,
      yearlyPrice: 19999,
      features: ['Upto 5 successful R&D collaborations', '5-10% success fee', 'AI-driven milestone tracking of every project', 'Access to labs, chemicals, equipment', 'up to 10 research hiring'],
    },
  ];

  const handleToggle = () => {
    setIsYearly((prevValue) => !prevValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#000', // Complete dark background color
        color: '#fff', // Text color
        padding: '20px',
        textAlign: 'center', // Center align text
      }}
    >
      {/* Header Section with Image */}
      <Box
        sx={{
          width: '1440px',
          height: '97px',
          backgroundImage: `url(${HeaderImage})`, // Set the header image
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          marginBottom: '20px',
        }}
      />

      {/* Pricing Info Section */}
      <Typography variant="h4" sx={{ color: 'green', fontSize: '24px', marginBottom: '10px' }}>
        PRICING
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ fontSize: '40px', marginBottom: '10px' }}>
        Our pricing plans
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ fontSize: '16px', marginBottom: '10px' }}>
        Choose the pricing plan that best meets your needs and budget, and start accelerating your R&D today.
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ fontSize: '16px', marginBottom: '10px' }}>
        {isYearly ? 'Billed Annually (Save 20%)' : 'Billed Monthly'}
      </Typography>

      {/* Toggle Section */}
      <Button variant="contained" onClick={handleToggle} sx={{ backgroundColor: '#4CAF50', borderRadius: '15px', marginTop: '10px', width: '200px', marginLeft: 'auto', marginRight: 'auto' }}>
        {isYearly ? 'Switch to Monthly' : 'Switch to Yearly'}
      </Button>

      {/* Pricing Cards Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '20px',
          marginTop: '20px',
        }}
      >
        {pricingPlans.map((plan) => (
          <Box
            key={plan.title}
            sx={{
              textAlign: 'center',
              backgroundColor: '#555', // Darker box background color
              padding: '20px', // Increased padding for visibility
              borderRadius: '8px', // Rounded corners
              flex: '1', // Equal width for all cards
              margin: '0 10px', // Gap between cards
              transition: 'transform 0.2s, background-color 0.2s', // Transition effect for hover
              '&:hover': {
                transform: 'scale(1.05)', // Bulge effect on hover
                backgroundColor: 'green', // Green color on hover
              },
            }}
          >
            <Typography variant="h4">{plan.title}</Typography>
            <Typography variant="h5">
              ${isYearly ? plan.yearlyPrice.toFixed(2) : plan.monthlyPrice.toFixed(2)}/{isYearly ? 'year' : 'month'}
            </Typography>
            <ul style={{ listStyleType: 'none', textAlign: 'left' }}>
              {plan.features.map((feature, index) => (
                <li key={index}>&#10003; {feature}</li>
              ))}
            </ul>
            <Button variant="contained" sx={{ backgroundColor: '#4CAF50', borderRadius: '15px', color: '#fff' }}>
              Choose Plan
            </Button>
          </Box>
        ))}
      </Box>

      {/* Partners Section */}
      <Box>
        <img src={Partners} alt="Photo" style={{ width: '1131px', height: '109.94px', marginTop: '20px' }} />
      </Box>

      {/* Other Sections */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <Box>
          <img src={BlogImage} alt="Photo" style={{ width: '344px', height: '129px' }} />
        </Box>
        <Box>
          <img src={Frame} alt="Photo" style={{ width: '799px', height: '229px' }} />
        </Box>
      </Box>

      <Box>
        <img src={Frame69} alt="Photo" style={{ width: '937px', height: '189px', marginTop: '20px' }} />
      </Box>

      <Box>
        <img src={Footer03} alt="Image" style={{ width: '100%', height: '100%', objectFit: 'cover', marginTop: '20px' }} />
      </Box>
    </Box>
  );
};

export default PricingPlan;
