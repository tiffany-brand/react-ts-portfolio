import React from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { projects } from '../../assets/projects';
import IProject from '../../interfaces/IProject';
import ProjectCard from '../ProjectCard';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: "rgb(220, 233, 240)",
            margin: theme.spacing(3),
            padding: theme.spacing(3)
        },
        heading: {
            padding: theme.spacing(1),
            color: theme.palette.text.secondary,
        }
    })
);

export default function Portfolio() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <Typography component="h2" variant="h3" className={classes.heading}>Portfolio</Typography>
                <hr />
                {projects.map((proj: IProject) => {
                    return <ProjectCard key={proj.id} proj={proj} />
                })}


            </Container>
        </div>
    )
}