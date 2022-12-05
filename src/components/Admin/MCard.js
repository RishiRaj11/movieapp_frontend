import React from "react";

import { Card, Box, Typography, styled } from "@mui/material";

const StyledCard = styled(Card)`
  width: auto;
  height: auto;
  margin: 20px;
`;

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;
const SubContainer = styled(Box)``;

const MCard = ({ item }) => {
  return (
    <StyledCard>
      <Box
        textAlign="center"
        style={{ padding: "20px 10px", marginBottom: "5px" }}
      >
        <SubContainer>
          <Text style={{ fontWeight: 600, color: "#212121" }}>
            Movie Name: {item.title}
          </Text>
          <Text style={{ color: "green" }}>
            Creator Email:{item.creatorEmail ? item.creatorEmail : "Unknown"}
          </Text>
        </SubContainer>
      </Box>
    </StyledCard>
  );
};

export default MCard;
