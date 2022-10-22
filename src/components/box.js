import * as React from "react"
import PropTypes from "prop-types"

import { StaticImage } from "gatsby-plugin-image"
import { FormattedMessage, Link } from "gatsby-plugin-react-intl"


import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';


const Box = ({ data }) => {

  return (
    <Card variant="none" className="box-infomaniak">
      <CardMedia
        height="200"
        alt="bg"
      >
        <StaticImage alt="yeah okay" src="../images/background.png" />
        <div className="box-infomaniak__image">{data.image}</div>
      </CardMedia>
      <CardContent className="box-infomaniak__content" style={{'padding': 40 }}>
        {data.icon}
        <h2>{data.title}</h2>
        <p>{data.content}</p>
        <Link className="pink" to="/">
          <FormattedMessage id="read_more" />
        </Link>
        <StaticImage className="box-infomaniak__arrow" alt="yeah okay" src="../images/icons/arrow.svg" />
      </CardContent>
      <CardActions />
    </Card>
  )
}

Box.propTypes = {
  data: PropTypes.object,
}


export default Box