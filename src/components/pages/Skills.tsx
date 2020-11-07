import React from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import longshot from '../../assets/images/longshot-web.jpg';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: "rgb(220, 233, 240)",
            margin: theme.spacing(3),
            padding: theme.spacing(3)
        },
        img: {
            width: "100%",
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
            margin: theme.spacing(1),
            padding: theme.spacing(1)
        }

    })
);

export default function Skills() {

    const classes = useStyles();

    return (
        <section id="about" className={classes.root}>
            <Container>
                <Typography component="h2" variant="h3" className={classes.heading}>Skills</Typography>
                <hr />
                <Grid container spacing={2}>

                    <Grid item xs={12} sm={8} >
                        <div className={classes.textBlock}>
                            <Typography gutterBottom variant="h5" component="h2" color="primary">
                                Front End
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" paragraph>
                                HTML | CSS | Bootstrap | Materialize | Material UI | JavaScript | jQuery | React
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2" color="primary">
                                Back End
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" paragraph>
                                Node JS | Express JS | TypeScript | MySQL | Sequelize | Mongo DB | Mongoose | Heroku
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2" color="primary">
                                Business Skills
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" paragraph>
                                Information technology management | project management | graphic-design | budgeting | problem solving | communication | training | instructional design
                            </Typography>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Paper className={classes.paper}>

                            <img src={longshot}
                                className={classes.img} alt="Tiffany Brand" />
                        </Paper>

                    </Grid>
                </Grid>
            </Container >
        </section >

    )

}
