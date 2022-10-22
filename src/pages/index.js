import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useIntl } from "gatsby-plugin-react-intl"

import Layout from "../components/layout"
import Box from "../components/box"
import Seo from "../components/seo"

import { Grid } from "@mui/material"
import { AnimationOnScroll } from 'react-animation-on-scroll';

import "animate.css/animate.min.css";

const IndexPage = ({ serverData }) => {

  const intl = useIntl()

  const cards = [
    {
      title: intl.formatMessage({ id: "card.user.title" }),
      content: intl.formatMessage({ id: "card.user.content" }),
      icon: <StaticImage alt="user" src="../images/icons/user.svg"/>,
      image: <StaticImage alt="calendar" src="../images/users.svg"/>
    },
    {
      title: intl.formatMessage({ id: "card.team.title" }),
      content: intl.formatMessage({ id: "card.team.content" }),
      icon: <StaticImage alt="team" src="../images/icons/manage.svg"/>,
      image: <StaticImage alt="calendar" src="../images/team.svg"/>
    },
    {
      title: intl.formatMessage({ id: "card.calendar.title" }),
      content: intl.formatMessage({ id: "card.calendar.content" }),
      icon: <StaticImage alt="calendar" src="../images/icons/calendar.svg"/>,
      image: <StaticImage alt="calendar" src="../images/calendar.svg"/>
    },    
  ]

  return (
    <Layout>
      <Seo title="Home" />
      <div>
        <h1 dangerouslySetInnerHTML={{__html: intl.formatMessage({ id: "title" }) }} />
        <Grid container>
        {cards.map((card, index) => (
          <Grid key={index} item={true} md={4} xs={12} p={2}>
            <AnimationOnScroll animateIn="animate__bounceIn">
              <Box data={card} />
            </AnimationOnScroll>
          </Grid>
        ))}
        </Grid>
      </div>
    </Layout>
  )
}


export const Head = () => <Seo title="Home" />

export default IndexPage

// For the SSR but totally useless in this case
export async function getServerData() {
  return {
    headers: {},
    props: {},
  }
}

