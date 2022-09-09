import { FormLabel, TextField } from '@mui/material';
import React from 'react';

const AddBook = () => {
  return <form>
    <FormLabel>Name</FormLabel>
<TextField margin='normal' fullWidth variant='outlined' name='name'/>
<FormLabel>author</FormLabel>
<TextField margin='normal' fullWidth variant='outlined' name='author'/>
<FormLabel>Description</FormLabel>
<TextField margin='normal' fullWidth variant='outlined' name='description'/>
<FormLabel>  </FormLabel>
<TextField margin='normal' fullWidth variant='outlined' name='price'/>
  </form>;
};

export default AddBook;
