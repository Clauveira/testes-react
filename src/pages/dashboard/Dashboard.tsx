import React, {useEffect} from 'react';
import { Paper, Typography, Box } from '@material-ui/core';

import { useTitle } from '../../shared/hooks';

export const Dashboard = () => {
    const { setTitle } = useTitle();
  /** 
    useEffect(() => {
      setTitle('Avaliações');
    }, [setTitle]);
  */
    return (
      <Paper
        variant="outlined"
        style={{ width: '100%' }}
      >
        <Box padding={2}>
          <Typography variant="h5">Saudações, mundo.</Typography>
          <Typography variant="subtitle1">
            Aqui será meu campo de treinamento para a batalha.
          </Typography>
        </Box>
      </Paper>
    );
  };