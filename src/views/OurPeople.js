import React from "react";
import { Box } from "@mui/system";
import { useTheme } from "@emotion/react";
import NavBarContainer from "../components/NavBar/NavBarContainer";
import HeaderTitle from "../components/home-page/HeaderTitle";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const data = {
  team: [
    {
      id: 1,
      fname: "Gad",
      lname: "KIRENGA",
      avatar:
        "https://res.cloudinary.com/nextreflexe/image/upload/v1656313966/our-people/01-green_a0ktds.png",
      role: "Founder && CEO",
    },
    {
      id: 2,
      fname: "Daniel",
      lname: "NKWIYISHIMWE",
      avatar:
        "https://res.cloudinary.com/nextreflexe/image/upload/v1656313976/our-people/12_r9cyrl.png",
      role: "Chief Kunga Therapist",
    },
    {
      id: 3,
      fname: "Jannette",
      lname: "MUKAGASANA",
      avatar:
        "https://res.cloudinary.com/nextreflexe/image/upload/v1656313985/our-people/06_mmudvp.png",
      role: "Operations Manager",
    },
    {
      id: 4,
      fname: "Jesus",
      lname: "ISHIMWE",
      avatar:
        "https://res.cloudinary.com/nextreflexe/image/upload/v1656313966/our-people/03_zbtqbp.png",
      role: "Therapist",
    },
    {
      id: 5,
      fname: "Jean Claude",
      lname: "NSENGIMANA",
      avatar:
        "https://res.cloudinary.com/nextreflexe/image/upload/v1656313963/our-people/04_znafdg.png",
      role: "Therapist",
    },
    {
      id: 6,
      fname: "Jean Claude",
      lname: "NSENGIMANA",
      avatar:
        "https://res.cloudinary.com/nextreflexe/image/upload/v1656313971/our-people/05_ohpsjz.png",
      role: "Therapist",
    },
    {
      id: 7,
      fname: "Jonathan",
      lname: "NIYONZIMA",
      avatar:
        "https://res.cloudinary.com/nextreflexe/image/upload/v1656313971/our-people/07_lngmfi.png",
      role: "Therapist",
    },
    {
      id: 8,
      fname: "Rosine",
      lname: "IRADUKUNDA",
      avatar:
        "https://res.cloudinary.com/nextreflexe/image/upload/v1656313986/our-people/09_cgk6bx.png",
      role: "Therapist",
    },
    {
      id: 9,
      fname: "Jolie Betha",
      lname: "MUTONI",
      avatar:
        "https://res.cloudinary.com/nextreflexe/image/upload/v1656313977/our-people/10_oijm9w.png",
      role: "Therapist",
    },
    {
      id: 10,
      fname: "Pelagie",
      lname: "UWAMAHORO",
      avatar:
        "https://res.cloudinary.com/nextreflexe/image/upload/v1656313986/our-people/11_rwm0fq.png",
      role: "Therapist",
    },
    {
      id: 11,
      fname: "Justine",
      lname: "MUKAMUGEMA",
      avatar:
        "https://res.cloudinary.com/nextreflexe/image/upload/v1656313986/our-people/13_edysaw.png",
      role: "Therapist",
    },
    {
      id: 12,
      fname: "Justine",
      lname: "TUYIZERE",
      avatar:
        "https://res.cloudinary.com/nextreflexe/image/upload/v1656313988/our-people/14_sbi9k1.png",
      role: "Therapist",
    },
    {
      id: 13,
      fname: "Affisa",
      lname: "NIYONGIRA",
      avatar:
        "https://res.cloudinary.com/nextreflexe/image/upload/v1656313990/our-people/16_ggtnoy.png",
      role: "Therapist",
    },
    {
      id: 14,
      fname: "Marceline",
      lname: "KAZABAVAHO",
      avatar:
        "https://res.cloudinary.com/nextreflexe/image/upload/v1656313990/our-people/17_dk0ejf.png",
      role: "Therapist",
    },
    {
      id: 15,
      fname: "Serge",
      lname: "NSHIZIRUNGU",
      avatar:
        "https://res.cloudinary.com/nextreflexe/image/upload/v1656313977/our-people/18_ciayve.png",
      role: "Therapist",
    },
  ],
};

export default function OurPeople() {
  const theme = useTheme();
  return (
    <NavBarContainer>
      <HeaderTitle
        data="Our People"
        sx={{
          paddingY: { xs: "20px", sm: "25px", md: "30px", lg: "35pxpx" },
        }}
        marginTop={{ xs: "30px", md: "0px" }}
      />
      <Box
        sx={{
          background: theme.colors.white,
          display: "flex",
          padding: {
            xs: "20px",
            sm: "25px",
            md: "40px",
            lg: "65px",
          },
        }}
      >
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          {data.team.map((person) => (
            <Grid item key={person.id} md={4} lg={3} sm={6} marginBottom="50px">
              <Card
                sx={{
                  width: 280,
                  height: 380,
                  borderBottom: 0,
                  ":hover": {
                    borderBottom: "10px solid #018F55",
                  },
                }}
              >
                <CardMedia component="img" height="300" image={person.avatar} />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ fontWeight: 700 }}>
                    {person.fname} {person.lname}
                  </Typography>
                  <Typography sx={{ color: "#018F55", fontWeight: 700 }}>
                    {person.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </NavBarContainer>
  );
}
