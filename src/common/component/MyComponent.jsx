import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography, Button } from '@mui/material';

import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import { ForkLeft, Image } from '@mui/icons-material';

import sliderIMG1 from '../../assets/sliderIMG1.jpg'
import sliderIMG2 from '../../assets/sliderIMG2.jpg'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export default function RowAndColumnSpacing() {
    return (
        <Box sx={{ width: 'auto', margin: 5, marginTop: 20, padding: 15 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>


                <Grid size={6}>

                    <Box sx={{ display: 'flex', position: 'absolute' }}>


                        <Box sx={{ width: '200px', backgroundColor: 'blue', height: '300px', borderRadius: 5 ,marginLeft:20}}>

                            <Typography sx={{ marginLeft: 3, color: 'white', fontSize: 50 }}>
                                85 %
                            </Typography>

                            <Typography sx={{ marginLeft: 3, color: 'white' }}>
                                Successfull ratio
                            </Typography>

                        </Box>

                        <Box sx={{ position: 'relative'}}>

                            <Box sx={{ position: 'absolute', zIndex: 1,top:'10%',left:'50%'}}>
                                <img
                                    src={sliderIMG1}
                                    alt="Slider 1"
                                    style={{
                                        width: 200,
                                        height: 300,
                                        borderRadius: 10,
                                        border: 5,
                                        borderColor: 'white',
                                        zIndex: 1,
                                        
                                    }}
                                />
                            </Box>

                            <Box sx={{ position: 'absolute', top: '10%', left: '40%', transform: 'translate(-50%, -50%)' }}>
                                <img
                                    src={sliderIMG2}
                                    alt="Slider 2"
                                    style={{
                                        width: 100,
                                        height: 100,
                                        margin: 5,
                                        zIndex:1.1
                                    }}
                                />
                            </Box>
                        </Box>



                    </Box>


                </Grid>



                <Grid size={6}>
                    <Box sx={{ margin: 3 }}>
                        <Typography>
                            Why Choos Us
                        </Typography>

                        <Typography sx={{ fontWeight: 500, fontSize: 40 }}>
                            We Focus to get Excelent Performence
                        </Typography>

                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum qui laborum fugit, consequuntur dicta aliquid, reiciendis dolorum
                        </Typography>

                        <Box sx={{ margin: 2 }}>

                            <Button startIcon={<SettingsIcon />} sx={{ marginRight: 2, fontWeight: 500, boxShadow: 1 }}>
                                Commited Teems
                            </Button>

                            <Button startIcon={<LanguageIcon />} sx={{ fontWeight: 500, boxShadow: 1 }}>
                                20/7 Qulity Service
                            </Button>
                        </Box>


                    </Box>
                </Grid>


            </Grid>
        </Box>
    );
}
