import React, {Component} from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalCotainer from '../../widgets/container/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';

class Home extends Component{

    state = {
        modalVisible:false,
    }

    // This handle has to be passed to media component
    handleOpenModal = (media) => {
        this.setState({
            modalVisible:true,
            media,
        })
    }

    // This handle has to be passed to Modal component
    handleCloseModal = (event) =>{
        this.setState({
            modalVisible: false,
        })
    }

    render(){
        return(
            <div>
                <HandleError>
                    <HomeLayout>
                        <Related/>
                        <Categories
                            categories={this.props.data.categories}
                            handleOpenModal = {this.handleOpenModal}
                            />
                        {
                            // If 
                            this.state.modalVisible &&
                            <ModalCotainer>
                                <Modal
                                    handleClick= {this.handleCloseModal}
                                >
                                    <VideoPlayer 
                                        autoplay  = {false} // Si pasamos solo autoplay, pasa por defecto true
                                        src = {this.state.media.src}
                                        title = {this.state.media.title}
                                    />
                                </Modal>
                            </ModalCotainer>
                        }
                    </HomeLayout>
                </HandleError>
            </div>
        )
    }
}

export default Home;