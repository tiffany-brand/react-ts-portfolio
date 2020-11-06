import React from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import headshot from '../../assets/images/tiffany-brand-sq.jpg';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: "rgb(220, 233, 240)"
        },
        img: {
            width: "100%",
            // border: "3px solid white"
        },
        paper: {
            padding: theme.spacing(1),
            color: theme.palette.text.secondary,
        },
        heading: {
            padding: theme.spacing(1),
            color: theme.palette.text.secondary,
        },
        textBlock: {
            margin: theme.spacing(1)
        }

    })
);

export default function About() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <Typography component="h2" variant="h3" className={classes.heading}>About Me</Typography>
                <hr />
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Paper className={classes.paper}>

                            <img src={headshot}
                                className={classes.img} alt="Tiffany Brand headshot" />
                        </Paper>

                    </Grid>
                    <Grid item xs={12} sm={8} >
                        <div className="textBlock">
                            <Typography variant="body1" paragraph={true} >
                                Full stack web developer with a background in educational technology management,
                                committed to
                                team collaboration and continuous learning in responsive web design. Known as a creative
                                problem solver, I am persistent in finding solutions and am seeking new challenges in
                                front
                                and back end development.
                        </Typography>
                            <Typography variant="body1" paragraph={true}>
                                In my current studies in the University of New Hampshire’s certificate program in full
                                stack
                                web development, I am continuing to build my
                                skills in HTML & CSS, JavaScript, Node.js, MySQL, MongoDB, React.js, and responsive web
                                design. I
                                thoroughly enjoy collaborating with my teams to bring our software visions to life.
                        </Typography>
                            <Typography variant="body1" paragraph={true}>
                                When I'm not coding, you'll find me hiking New Hampshire's beautiful trails, taking in
                                some
                                musical theater, or tap dancing!
                        </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container >
        </div >

    )

}
