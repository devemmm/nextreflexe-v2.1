import { Box, Typography } from '@mui/material';
import AboutVisitors from './AboutVisitors';
import HeaderTitle from './HeaderTitle';

function About() {
  return (
    <Box
      sx={{
        background: '#F4F4F4',
        padding: {
          xs: '20px',
          sm: '25px',
          md: '40px',
          lg: '65px',
        },
      }}
    >
      <Box
        sx={{
          background: '#FFFFFF',
          boxShadow:
            '0px 4px 4px rgba(0, 0, 0, 0.1), 5px 20px 25px 5px rgba(0, 0, 0, 0.05), 1px 1px 30px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: ' 20px 20px 0px 0px',
          padding: {
            xs: '25px 20px',
            sm: '35px',
            md: '40px',
            lg: '65px',
          },
        }}
      >
        <HeaderTitle data="About Us" />
        <Typography
          display="block"
          sx={{
            marginX: 'auto',
            fontWeight: 300,
            textAlign: 'justify',
            fontSize: {
              xs: '14px',
              md: '16px',
            },
            maxWidth: {
              sm: '500px',
              md: '600px',
              lg: '900px',
            },
            marginY: {
              xs: '20px',
              sm: '30px',
              lg: '40px',
            },
          }}
        >
          Genuine Kunga Therapy is an alternative health company incorporated in
          Rwanda 13 years ago. The company operates 7 therapy practices across 3
          countries in Africa, namely; Rwanda (3), Zimbabwe (1) and Central
          Africa Republic (1) We have successfully treated over 11,000 patients
          over the years with varying conditions ranging from paralysis,
          disability, sports injuries, back pain, spinal cord injuries, chronic
          migraines, fatigue and insomnia.
          <br />
          <br />
          Our therapists are trained experts. They diagnose and treat a range of
          injuries, disabilities, and health conditions. Kunga therapists aim to
          improve a person’s range of movement and quality of life and prevent
          further injury or disability. Our therapists specialise in a range of
          conditions including but not limited to; disability in children and
          adults, paralysis, sports injuries, accident victims, migraines and
          insomnia.
        </Typography>

        <HeaderTitle data="specialization" />
        <Typography
          display="block"
          sx={{
            marginX: 'auto',
            fontWeight: 300,
            textAlign: 'justify',
            fontSize: {
              xs: '14px',
              md: '16px',
            },
            maxWidth: {
              sm: '500px',
              md: '600px',
              lg: '900px',
            },
            marginY: {
              xs: '20px',
              sm: '30px',
              lg: '40px',
            },
          }}
        >
          <p style={{marginBottom: 20, fontWeight: 'bold', fontSize: 20, color: "#018F55"}}>Autism whereby a child fails to speak or in other words have problem in speaking (hyperactivity)</p>
          They are some sympathetic neurons that attaches to the heart and kidney, so when they get damaged it becomes a problem the small part of the brain. Because of this this sufficient of small amount of blood supplied to the brain and because of more inflation raises it causes ischemic erosion in the temporal law. This results to the loss of concentration, the child neurons responsible to help a child to formulate a sentence don’t work and also loses what to say.
          <br />
          <br />
          Also, a child has a problem of taking the head betting it to the wall in other mostly they have chronic migraines or the head temperature is always up. As a result, to that those children likes to run most of the time because they run the dopamine level in body raises and reduces the pain of the migraine the child has been facing with. 
          <br />
          <br />
          Kunga method press the T1 to T4, this helps a child’s sympathetic neurons works well again and the blood again flows in the brain also the dopamine becomes enough in the body of the child and the child stops running. Also, the supply of blood becomes effective in the pre-frontal cortex and the ischemic erosion reduces.
        
        </Typography>


        <AboutVisitors />
      </Box>
    </Box>
  );
}

export default About;

