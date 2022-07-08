import { Box } from '@mui/material';
import ImageGallery from 'react-image-gallery';
import '../../src/styles/ScrollImage.css';
import HeaderTitle from '../components/home-page/HeaderTitle';
import NavBarContainer from '../components/NavBar/NavBarContainer';
const data = {
  gallery: [
    {
      original:
        'https://media.istockphoto.com/photos/success-picture-id912928582?b=1&k=20&m=912928582&s=170667a&w=0&h=DVRQz_Dq4HLr0rJ02uvVPZr6MOK7_TtbeRkWFcKifu4=',
      thumbnail:
        'https://media.istockphoto.com/photos/success-picture-id912928582?b=1&k=20&m=912928582&s=170667a&w=0&h=DVRQz_Dq4HLr0rJ02uvVPZr6MOK7_TtbeRkWFcKifu4=',
    },
    {
      original:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_L6zqvKijy3UpsxdVdQO8ygcpUy4yzIh-hQ&usqp=CAU',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_L6zqvKijy3UpsxdVdQO8ygcpUy4yzIh-hQ&usqp=CAU',
    },
    {
      original:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbrNoJWs5MIAdjGvFTmyke82LSMT1MEezibw&usqp=CAU',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbrNoJWs5MIAdjGvFTmyke82LSMT1MEezibw&usqp=CAU',
    },
    {
      original:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL77hcfFpNY7zrePlelBEDjp2x2t4Eu9oG6g&usqp=CAU',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL77hcfFpNY7zrePlelBEDjp2x2t4Eu9oG6g&usqp=CAU',
    },
    {
      original:
        'https://media.istockphoto.com/photos/success-picture-id912928582?b=1&k=20&m=912928582&s=170667a&w=0&h=DVRQz_Dq4HLr0rJ02uvVPZr6MOK7_TtbeRkWFcKifu4=',
      thumbnail:
        'https://media.istockphoto.com/photos/success-picture-id912928582?b=1&k=20&m=912928582&s=170667a&w=0&h=DVRQz_Dq4HLr0rJ02uvVPZr6MOK7_TtbeRkWFcKifu4=',
    },
    {
      original:
        'https://res.cloudinary.com/nextreflexe/image/upload/v1656436764/page/home_bg1_enqgeq.jpg',
      thumbnail:
        'https://res.cloudinary.com/nextreflexe/image/upload/v1656436764/page/home_bg1_enqgeq.jpg',
    },
    {
      original:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbrNoJWs5MIAdjGvFTmyke82LSMT1MEezibw&usqp=CAU',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbrNoJWs5MIAdjGvFTmyke82LSMT1MEezibw&usqp=CAU',
    },
    {
      original:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL77hcfFpNY7zrePlelBEDjp2x2t4Eu9oG6g&usqp=CAU',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL77hcfFpNY7zrePlelBEDjp2x2t4Eu9oG6g&usqp=CAU',
    },
  ],
};

export default function Gallery() {
  return (
    <NavBarContainer>
      <HeaderTitle
        data="Gallery"
        sx={{
          paddingY: { xs: '20px', sm: '25px', md: '30px', lg: '35pxpx' },
        }}
        marginTop={{ xs: '30px', md: '0px' }}
      />
      <Box>
        <ImageGallery items={data.gallery} additionalClass="gallery_img" />
      </Box>
    </NavBarContainer>
  );
}
