import React from 'react';
import { Grid, GridItem, Box, Button } from '@chakra-ui/react';
import './member.scss';

const Member = () => {
  return (
    <Grid
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(3, 1fr)"
      gap={1}
      mt={5}
    >
      <GridItem rowSpan={3} colSpan={1}>
        <Box fontSize="xl" color="gray">
          MEMBERSIP & BILLING
        </Box>
        <Button colorScheme="gray" mt={5} fontWeight={400}>
          Cancel Membership
        </Button>
      </GridItem>
      <GridItem
        colSpan={2}
        bg="papayawhip"
        display="grid"
        p={5}
        gridTemplateColumns="auto auto"
      >
        <span>sayakmohanta1998@gmail.com</span>
        <span className="right">Change email</span>
        <span>Password : ********</span>
        <span className="right">Change Password</span>
        <span>Phone : 8900741377</span>
        <span className="right">Change Phone Number</span>
      </GridItem>
      <GridItem
        colSpan={2}
        bg="papayawhip"
        display="grid"
        gridTemplateColumns="auto auto"
        p={5}
      >
        <span className="card"> .... .... .... 9389</span>
        <span className="right">Manage Payment Info</span>
        <span className="right">Billing Details</span>
      </GridItem>
      <GridItem
        colSpan={2}
        bg="tomato"
        display="flex"
        flexDirection="column"
        textAlign="right"
        p={5}
      >
        <span>Redeem gift card or promo code</span>
        <span>Where to buy gift cards</span>
      </GridItem>
    </Grid>
  );
};

export default Member;
