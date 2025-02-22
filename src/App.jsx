import * as React from 'react';
import { useState } from 'react';
import ProductCard from './components/ProductCard';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Modal from '@mui/material/Modal';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Container } from '@mui/material';

const products = [
  {
    productName: 'T-shirt',
    description: 'This t-shirt is made of 100% cotton and is very comfortable to wear.',
    img: { URL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYNBIpD7RSd0bae4WO9P7kgzAddIZENBrE4Q&s' },
    price: 500,
    type: 'men',
    id: 1,
  },
  {
    productName: 'Jeans',
    description: 'This jeans is made of denim and is very comfortable to wear.',
    img: { URL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzr-e_qU98Aa52xxZo6EOD0wO5EFS65LC_Ew&s' },
    price: 1500,
    type: 'men',
    id: 2,
  },
  {
    productName: 'hoodie',
    description: 'This hoodie is made of 100% cotton and is very comfortable to wear.',
    img: { URL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa3eQPmZYftxUKU3GQ6I-n3vhOaOmYXpx5Jg&s' },
    price: 1000,
    type: 'women',
    id: 3,
  },
  {
    productName: 'Rolex Watch',
    description: 'This watch is made of stainless steel and is very comfortable to wear.',
    img: { URL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH7AhKbRrlS9yy7IqK7ObyoyzL67urxL5KAw&s' },
    price: 5000,
    type: 'men',
    id: 4,
  },
  {
    productName: 'Nike Shoes',
    description: 'These shoes are made of leather and are very comfortable to wear.',
    img: { URL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeujdmvvxG4nk7aRhEadJ1M2ly52Uf-ljE2Q&s' },
    price: 2000,
    type: 'women',
    id: 5,
  },
  {
    productName: 'Sunglasses',
    description: 'These sunglasses are made of plastic and are very comfortable to wear.',
    img: { URL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiWPZASc3Ie_KdJvBZ8Byi1qDZiOwbmOpLYQ&s' },
    price: 500,
    type: 'women',
    id: 6,
  },
  {
    productName: 'Purse',
    description: 'This purse is made of leather and is very comfortable to wear.',
    img: { URL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNgfq6bBM3DYnEOv3a9qno2n3NNtSxhmQmIg&s' },
    price: 1000,
    type: 'women',
    id: 7,
  },
  {
    productName: 'Baby rompers',
    description: 'These rompers are made of cotton and are very comfortable to wear.',
    img: { URL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt3cJalxl4hOhUovefs-GrA7BW5sw5pjc--w&s' },
    price: 800,
    type: 'kids',
    id: 8,
  },
  {
    productName: 'Baby shoes',
    description: 'These shoes are made of leather and are very comfortable to wear.',
    img: { URL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3nczyKJHKFr-6kPVBGb_0gSTxSWyy5LAjA&s' },
    price: 500,
    type: 'kids',
    id: 9,
  },
  {
    productName: 'Baby socks',
    description: 'These socks are made of cotton and are very comfortable to wear.',
    img: { URL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShgI0hLLycDjsuztB04YQV6eU0oWOl-2Km8w&s' },
    price: 200,
    type: 'kids',
    id: 10,
  },
  {
    productName: 'Baby hat',
    description: 'This hat is made of cotton and is very comfortable to wear.',
    img: { URL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ_dLRpKKtgha_rn_B9qoPHeEe96uG5P9t8Q&s' },
    price: 300,
    type: 'kids',
    id: 11,
  },
];


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const clothingTypes = ['men', 'women', 'kids']; // Example clothing types

function App() {
  const [open, setOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    handleClose();
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const matchesType = selectedType === 'all' || product.type === selectedType;
    const matchesSearch = product.productName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });


  return (
    <>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <FilterAltIcon onClick={handleOpen} />
            </IconButton>
            <Search sx={{ width: '100%' }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={searchQuery}
                onChange={handleSearchChange}
                sx={{ width: '100%' }} // Ensure full width for the input field
              />
            </Search>

          </Toolbar>
        </AppBar>
      </Box>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={{ padding: 2, background: 'white', maxWidth: 400, margin: 'auto', borderRadius: 2 }}>
            <h2 id='modal-modal-title'>Filter by Type</h2>
            <ul id='modal-modal-description' style={{ listStyleType: 'none', padding: 0 }}>
              <Button
                fullWidth
                onClick={() => handleTypeSelect('all')}
                aria-label="Filter by All"
                sx={{ marginBottom: 1 }}
              >
                All
              </Button>
              {clothingTypes.map((type, index) => (
                <Button
                  key={index}
                  onClick={() => handleTypeSelect(type)}
                  aria-label={`Filter by ${type.charAt(0).toUpperCase() + type.slice(1)}`}
                  fullWidth
                  sx={{ marginBottom: 1 }}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </Button>
              ))}
            </ul>
            <CardActions>
              <Button onClick={handleClose}>Close</Button>
            </CardActions>
          </Box>
        </Modal>

      </div>

      <Container>
        <Grid container justifyContent="center">
          {filteredProducts.map((product) => (
            <Grid item xs={15} sm={15} md={15} lg={8} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>


    </>
  );
}

export default App;
