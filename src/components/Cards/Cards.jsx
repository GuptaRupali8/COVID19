import React from 'react';

import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate }}) => {
    if(!confirmed){
        return 'Loding...';
    }
   
    return (
     <div className={styles.container}>
         <Grid container spacing={3} justify="center">
             <Grid item component={Card} xs={12} md={3} className={cx(styles.Card, styles.infected)}>
                 <CardContent>
                     <Typography color="textSecondary gutterBootom">Infected</Typography>
                      <Typography variant="5">
     <CountUp start={0}  end={confirmed.value} duration={2.5} separator="," />
                      </Typography>
                     <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of active cases of COVID-19</Typography>
              </CardContent>
             </Grid>
             <Grid item component={Card} xs={12} md={3} className={cx(styles.Card, styles.recovered)}>
                 <CardContent>
                     <Typography color="textSecondary gutterBootom">Recovered</Typography>
                      <Typography variant="5">
    <CountUp start={0}  end={recovered.value} duration={2.5} separator="," />
                      </Typography>
                     <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of recoveries from COVID-19</Typography>
              </CardContent>
             </Grid>
             <Grid item component={Card} xs={12} md={3} className={cx(styles.Card, styles.deaths)}>
                 <CardContent>
                     <Typography color="textSecondary gutterBootom">Deaths</Typography>
                      <Typography variant="5">
      <CountUp start={0}  end={deaths.value} duration={2.5} separator="," />
                      </Typography>
                     <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of deaths couses by COVID-19</Typography>
              </CardContent>
             </Grid>
         </Grid>
     </div>
        
    )
    
    
}

export default Cards;