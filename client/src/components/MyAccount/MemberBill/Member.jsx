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
        display="grid"
        p={5}
        gridTemplateColumns="auto auto"
      >
        <span>sayakmohanta1998@gmail.com</span>
        <span className="r">Change email</span>
        <span>Password : ********</span>
        <span className="r">Change Password</span>
        <span>Phone : 8900741377</span>
        <span className="r">Change Phone Number</span>
      </GridItem>

      <GridItem
        colSpan={2}
        display="grid"
        gridTemplateColumns="auto auto"
        p={5}
        borderTop="1px solid gray"
      >
        <span className="card"> Dummy Card Number 9389</span>
        <span className="r">Manage Payment Info</span>
        <span></span>
        <span className="r">Billing Details</span>
      </GridItem>

      <GridItem
        colSpan={2}
        display="flex"
        flexDirection="column"
        textAlign="right"
        p={5}
        borderTop="1px solid gray"
      >
        <span className="r">Redeem gift card or promo code</span>
        <span className="r">Where to buy gift cards</span>
      </GridItem>
    </Grid>
  );
};

export default Member;
