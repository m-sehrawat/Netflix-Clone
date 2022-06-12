import React from 'react';
import { Grid, GridItem, Box, Button } from '@chakra-ui/react';

const Member = () => {
  return (
    <Grid
      h="400px"
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(3, 1fr)"
      gap={4}
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
        <span>Change email</span>
        <span>Password : ********</span>
        <span>Change Password</span>
        <span>Phone : 8900741377</span>
        <span>Change Phone Number</span>
      </GridItem>
      <GridItem colSpan={2} bg="papayawhip" />
      <GridItem colSpan={2} bg="tomato" />
    </Grid>
  );
};

export default Member;
