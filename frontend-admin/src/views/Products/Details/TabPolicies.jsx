import { AddBox, Delete, PlusOne, RemoveCircle } from '@mui/icons-material';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  TextField,
} from '@mui/material';
import { Formik } from 'formik';
import { useEffect } from 'react';
import { useState } from 'react';

export function TabPolicies({ formikProps }) {
  const { values, setValues } = formikProps;
  const [items, setItems] = useState({});

  useEffect(() => {
    const houseRules = values.houseRules
    // removido JSON.parse porque não estava funcionando como esperado devido ao houseRules ainda ser string.
    // provavelmente depois que se tornar JSON, deverá ser transformado para objeto de novo.
      ? values.houseRules
      : {
          houseRules: [],
          healthAndSecurity: [],
          cancelationPolicy: [],
        };
    setItems(houseRules);
  }, []);

  useEffect(() => {
    const updatedValues = {...values};
    updatedValues.houseRules = JSON.stringify(items);
    setValues(updatedValues);
  }, [items]);

  function handleAddItem(type) {
    const updatedItems = { ...items };
    updatedItems[type].push('');
    setItems(updatedItems);
  }

  const initialValues = {
    houseRules: [],
    healthAndSecurity: [],
    cancelationPolicy: [],
  };
  


  return (
    <Formik initialValues={initialValues}>
      {formikProps => {
        const { values: formValues, handleChange } = formikProps;

        return (
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardHeader
                  title="Regras da Casa"
                  titleTypographyProps={{ fontSize: 16, fontWeight: 500 }}
                  action={
                    <IconButton 
                    color="secondary" 
                    onClick={() => handleAddItem('houseRules')}>
                      <AddBox
                        sx={{ fontSize: '32px' }}
                      />
                    </IconButton>
                  }
                />
                <Divider />
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    {/* {items.houseRules?.map((_, index) => {
                      return (
                        <> */}
                          <Grid item xs={10}>
                            <TextField
                              // name={`houseRules[${index}]`}
                              // label={`Item ${index + 1}`}
                              // value={formValues.houseRules[index]}
                              onChange={handleChange}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={2}>
                            <IconButton>
                              <RemoveCircle />
                            </IconButton>
                          </Grid>
                        {/* </>
                       );
                    })}  */}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card>
                <CardHeader
                  title="Saúde e Segurança"
                  titleTypographyProps={{ fontSize: 16, fontWeight: 500 }}
                  action={
                    <IconButton
                      color="secondary"
                      onClick={() => handleAddItem('healthAndSecurity')}
                    >
                      <AddBox sx={{ fontSize: '32px' }} />
                    </IconButton>
                  }
                />
                <Divider />
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    {/* {items.healthAndSecurity?.map((_, index) => {
                      return (
                        <> */}
                          <Grid item xs={10}>
                            <TextField
                              // name={`healthAndSecurity[${index}]`}
                              // label={`Item ${index + 1}`}
                              // value={formValues.healthAndSecurity[index]}
                              onChange={handleChange}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={2}>
                            <IconButton>
                              <RemoveCircle />
                            </IconButton>
                          </Grid>
                        {/* </>
                      );
                    })} */}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card>
                <CardHeader
                  title="Política de Cancelamento"
                  titleTypographyProps={{ fontSize: 16, fontWeight: 500 }}
                  action={
                    <IconButton
                      color="secondary"
                      onClick={() => handleAddItem('cancelationPolicy')}
                    >
                      <AddBox sx={{ fontSize: '32px' }} />
                    </IconButton>
                  }
                />
                <Divider />
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    {/* {items.cancelationPolicy?.map((_, index) => {
                      return (
                        <> */}
                          <Grid item xs={10}>
                            <TextField
                              // name={`cancelationPolicy[${index}]`}
                              // label={`Item ${index + 1}`}
                              // value={formValues.cancelationPolicy[index]}
                              onChange={handleChange}
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={2}>
                            <IconButton>
                              <RemoveCircle />
                            </IconButton>
                          </Grid>
                        {/* </>
                      );
                    })} */}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        );
      }}
    </Formik>
  );
}
