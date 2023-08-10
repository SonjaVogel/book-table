
import React from 'react';
import {
    Formik,
    Form,
    Field,
    useFormikContext
    } from 'formik';
import {
    keyframes,
    Button,
    Input,
    Box,
    Select,
    SimpleGrid,
    useMediaQuery,
    InputGroup,
    InputLeftElement,
    } from '@chakra-ui/react';



export default function BookingForm() {

    return (
        <Formik
        >

                <Form>
                        <Select placeholder='Select option'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
                        <Button
                            type="submit"
                        >
                            Reserve table
                        </Button>
                </Form>
        </Formik>
    );
}