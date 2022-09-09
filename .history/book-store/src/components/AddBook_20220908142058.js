import { Button, Checkbox, FormControlLabel, FormLabel, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, {useState} from 'react';

const AddBook = () => {

const [inputs, setInputs] = useState({
    name: '',
    description: '',
    price: '',
    author: '',
    available: false,
    image: ''
});
 const handleChange = (e) => {
    setInputs((prevState) =>({
        ...prevState,
        [e.target.name]: e.target.value
    }))
 }
  return (
<form>
    <Box display='flex' flexDirection='column' justifyContent={'center'} maxWidth={700} alignContent={'center'} alignSelf='center' marginLeft={"auto"} marginRight='auto' marginTop={10}>
    <FormLabel>Name</FormLabel>
<TextField value={inputs.name} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='name'/>
<FormLabel>author</FormLabel>
<TextField value={inputs.author} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='author'/>
<FormLabel>Description</FormLabel>
<TextField 
value={inputs.description} 
onChange={handleChange}
margin='normal'
 fullWidth 
 variant='outlined'
  name='description'
  />
<FormLabel>Price</FormLabel>
<TextField 
value={inputs.price} 
onChange={handleChange}
type="number" 
margin='normal' fullWidth 
variant='outlined' 
name='price'
/>
<FormLabel>Image</FormLabel>
<TextField 
value={inputs.image} 
onChange={handleChange}
margin='normal' fullWidth 
variant='outlined' 
name='image'
/>
<FormControlLabel control={<Checkbox checked={inputs.available}  />} label="Available" />

<Button variant='contained' type='submit'>Add Book</Button>

</Box>

  </form>
  
  ) ;
};

export default AddBook;
