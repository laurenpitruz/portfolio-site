import React from 'react'
import { Helmet } from "react-helmet";
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { makeStyles } from '@material-ui/core/styles'

export default function Home() {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta charSet="utf-8" />
        <meta name="description" content="Portfolio" />
        <title>Lauren Pitruzzello</title>
        <link rel="canonical" href="https://laurenpitruzzello.com/" />
      </Helmet>
      <div className={classes.bioDiv}>
        <h1>Lauren Pitruzzello</h1>
        <p>Fullstack Software Engineer</p>
        <p><em>More coming soon...</em></p>
      </div>
      <div>
        <h4>Let's connect</h4>
        <div className={classes.linksDiv}>
          <a alt="link to email Lauren" href="mailto:laurenpitruz@gmail.com" className={classes.link}><MailOutlineIcon alt='email Lauren' className={classes.icon} /></a>
          <a alt="link to Lauren LinkedIn" href="https://www.linkedin.com/in/laurenpitruzzello" className={classes.link}><LinkedInIcon alt='connect on LinkedIn' className={classes.icon} /></a>
          <a alt="link to Lauren Instagram" href="https://www.instagram.com/laurenpitruz/" className={classes.link}><InstagramIcon alt='connect on Instagram' className={classes.icon} /></a>
          <a alt="link to Lauren GitHub" href="https://github.com/laurenpitruz" className={classes.link}><GitHubIcon alt='connect on Github' className={classes.icon} /></a>
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
  bioDiv: {
    paddingBottom: '1em'
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
