import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import BusinessIcon from '@mui/icons-material/Business';
import { Description } from '@mui/icons-material';
import { Button, Divider, Typography } from '@mui/material';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const item = [
    {
        topic: 'Business Planing',
        icon: <BusinessIcon />,
        Description: "afhgbaerhberhbwerbetwhjwethtthth",
        btnName: 'Read More'
    },
    {
        topic: 'Business Planing',
        icon: <BusinessIcon />,
        Description: "afhgbaerhberhbwerbetwhjwethtthth",
        btnName: 'Read More'
    },
    {
        topic: 'Business Planing',
        icon: <BusinessIcon />,
        Description: "afhgbaerhberhbwerbetwhjwethtthth",
        btnName: 'Read More'
    },
    {
        topic: 'Business Planing',
        icon: <BusinessIcon />,
        Description: "afhgbaerhberhbwerbetwhjwethtththerhqerh",
        btnName: 'Read More'
    },
    {
        topic: 'Business Planing',
        icon: <BusinessIcon />,
        Description: "afhgbaerhberhbwerbetwhjwethtththertheher",
        btnName: 'Read More'
    },
    {
        topic: 'Business Planing',
        icon: <BusinessIcon />,
        Description: "afhgbaerhberhbwhrhrhrhrhrhtrrrrrrr",
        btnName: 'Read More'
    },
];

export default function Service() {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: '#f6f6ee', borderRadius: 5 ,paddingTop:10}}>
            <Box sx={{ textAlign: 'center' }}>
                <Typography>Our Service</Typography>
            </Box>

            <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontSize: 40, fontWeight: 500 }}>IT Staffing Section</Typography>
            </Box>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ padding: 10 }}>

                {item.map((val, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>

                        <Box
                            sx={{
                                marginLeft: 6,
                                display: 'flex'
                            }}
                        >
                            <Box sx={{ marginRight: 2, color: 'blue' }}>
                                {React.cloneElement(val.icon, { sx: { fontSize: 40 } })}
                            </Box>

                            <Typography >{val.topic}</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', marginLeft: 12, width: '10px' }}>
                            <Box sx={{ margin: 1 }}>{val.Description}</Box>
                        </Box>


                        <Box sx={{ marginLeft: 10 }}>
                            <Button sx={{ color: 'black' }} startIcon={<ArrowRightAltIcon sx={{ backgroundColor: 'white', padding: 1, borderRadius: '50%' }} />}>{val.btnName}</Button>
                        </Box>


                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
