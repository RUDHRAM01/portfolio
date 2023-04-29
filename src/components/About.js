import React from 'react'
import { BiMap } from 'react-icons/bi'
import { FcReading } from 'react-icons/fc'
import meR from "../assets/meR.jpeg"
import back from "../assets/backimg.jpg"
import { CardContent, Typography , Container , Stepper ,StepContent , Grid, Box, Card, Step, StepLabel} from '@mui/material';
export default function AboutMe() {
    return (
        <>

            <div className='aboutme'>
                <div className='aboutme-head'>
                    <div className="myimgDiv">
                        <img className='myabout' src={meR} alt="Header Img" />
                    </div>
                    <h1>About Me</h1>
                </div>
                <Container maxWidth="md">
                    <Grid container spacing={2} >
                        <Grid item xs={12} sm={12}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography>
                                        3rd Year Undergraduate Student at Anand International College of Engineering in the department of Artificial Intelligence. Experienced Full Stack Developer with one and half year working on web applications using react, node, express, and MongoDB. Comprehensive understanding of JavaScript/ES6 areas. Seeking a career in software and web development in a challenging environment where I can utilize my technical skills towards the development and implementation of new ideas.
                                    </Typography>
                                    <Box style={{ marginTop: '15px' }}>
                                        <Typography>
                                            <FcReading style={{ marginRight: '6px' }} /><span>Education:</span> BTech, AI
                                        </Typography>
                                        <Typography>
                                            <BiMap style={{ marginRight: '6px' }} /><span>Location:</span> Jaipur, Rajasthan, India
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} >
                            <Card variant="outlined" style={{backgroundColor:'black' ,backgroundImage:{back}, color:'white', border:"2px solid white"}} className="cardback">
                                <CardContent>
                                    <Stepper orientation="vertical">
                                    <Step active={true}>
                                        <StepLabel></StepLabel>
                                        <StepContent>
                                            <Typography>
                                                5 Star Coder at HackerRank
                                            </Typography>
                                        </StepContent>
                                        </Step>
                                        <Step active={true}>
                                        <StepLabel></StepLabel>
                                        <StepContent>
                                            <Typography>
                                                Codegoda 2022 (08/2022 - 08/2022)
                                            </Typography>
                                        </StepContent>
                                        </Step>
                                        <Step active={true}>
                                            <StepLabel></StepLabel>
                                        <StepContent>
                                            <Typography>
                                                Flipkart Grid 4.0 (06/2022 - 07/2022)
                                            </Typography>
                                        </StepContent>
                                        </Step>
                                        <Step active={true}>
                                        <StepLabel></StepLabel>
                                        <StepContent>
                                            <Typography>
                                                Google Hash Code (02/2022 - 02/2022)
                                            </Typography>
                                        </StepContent>
                                        </Step>
                                        <Step active={true}>
                                        <StepLabel></StepLabel>
                                        <StepContent>
                                            <Typography>
                                                Crash Course on Python (11/2021 - 01/2022)
                                            </Typography>
                                        </StepContent>
                                        </Step>
                                        <Step active={true}>
                                        <StepLabel></StepLabel>
                                            <StepContent>
                                            <Typography>
                                                Google Digital Marketing Course (01/2021 - 01/2021)
                                            </Typography>
                                        </StepContent>
                                       </Step>
                                        <Step active={true}>
                                        <StepLabel></StepLabel>
                                        <StepContent>
                                            <Typography>HTML Training, IIT Bombay (01/2021 - 03/2021)
                                            </Typography>
                                        </StepContent>
                                        </Step>
                                        <Step active={true}>
                                        <StepLabel></StepLabel>
                                        <StepContent>
                                            <Typography>
                                            Crash Course on Java (11/2021 - 01/2022)
                                            </Typography>
                                        </StepContent>
                                        </Step>
                                        <Step active={true}>
                                        <StepLabel></StepLabel>
                                        <StepContent>
                                            <Typography>
                                                Microsoft AI Classroom (12/2020 - 12/2020)
                                            </Typography>
                                        </StepContent>
                                        </Step>                   
                                    </Stepper>

                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>

                <hr className="myhr1" />
            </div>
        </>
    )
}