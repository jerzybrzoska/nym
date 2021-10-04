import React from 'react';
import { Typography } from '@mui/material';
import { UniversalDataGrid } from 'src/components/Universal-DataGrid';

export const PageGateways: React.FC = () => {
    return (
        <>
            <Typography sx={{ marginBottom: 1 }} variant="h5">
                Gateways
            </Typography>
            {/* <UniversalDataGrid loading={false} columns /> */}
        </>
    );
};
