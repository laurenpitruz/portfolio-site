import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { makeStyles } from '@material-ui/core/styles'

export default function Home() {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <h1>Lauren Pitruzzello</h1>
      <p>Fullstack Software Engineer</p>
      <p><em>More coming soon...</em></p>
      <br />
      <h4>Let's connect</h4>
      <div className={classes.linksDiv}>
        <div className={classes.link}>
          <a href="mailto:laurenpitruz@gmail.com"><MailOutlineIcon alt='email Lauren' className={classes.icon} /></a>
        </div>
        <div className={classes.link}>
          <a href="https://www.linkedin.com/in/laurenpitruzzello"><LinkedInIcon alt='connect on LinkedIn' className={classes.icon} /></a>
        </div>
        <div className={classes.link}>
          <a href="https://www.instagram.com/laurenpitruz/"><InstagramIcon alt='connect on Instagram' className={classes.icon} /></a>
        </div>
        <div className={classes.link}>
          <a href="https://github.com/laurenpitruz"><GitHubIcon alt='connect on Github' className={classes.icon} /></a>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles({
  container: {
    padding: '6em',
    '@media (max-width: 420px)': {
      paddingTop: '4em',
      paddingLeft: '2em',
      paddingRight: '2em'
    },
    textDecoration: 'none'
  },
  linksDiv: {
    display: 'flex',
  },
  link: {
    paddingRight: '2em',
  },
  icon: {
    '&:before': {
      color: 'pink',
    },
    fontSize: '2.2em',
    '&:hover': {
      fontSize: '2.5em'
    }
  }
})
