import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './media.css'

class Media extends PureComponent{

    constructor(props){
        super(props)       
        /*
            this.handleClick = this.handleClick.bind(this) 
        */
    }

    static propTypes = {
        image: PropTypes.string,
        title: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['video', 'audio'])
    }

    handleClick = (e)=>{
        this.props.openModal(this.props);
    }

    render(){
        return(
            <div className="Media" onClick={this.handleClick} >
                <Card className="Card">
                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={this.props.image}
                    title={this.props.title}
                    width={260}
                    height={160}
                />
                <CardContent>
                    <Typography gutterBottom variant="subtitle1" component="h2">
                        {this.props.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                    {this.props.author}
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
                </CardActions>
            </Card>
          </div>
        )
    }


/*     render(){
        return(
            <div className="Media" onClick={this.handleClick}> 
                <div className="Media-cover">
                    <img className="Media-image"
                        src={this.props.image}
                        alt=""
                        width={260}
                        height={160}
                    />
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.props.author}</p>
                </div>
            </div>
        )
    } */
}

export default Media;