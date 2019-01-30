import React, {Component} from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalCotainer from '../../widgets/container/modal'
import Modal from '../../widgets/components/modal'

class Home extends Component{

    state = {
        modalVisible:false,
    }

    // This handle has to be passed to media component
    handleOpenModal = (event) => {
        this.setState({
            modalVisible:true,
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
                <HomeLayout>
                    <Related/>
                    <Categories
                        handleOpenModal = {this.handleOpenModal}
                        categories={this.props.data.categories}
                        />
                    {
                        // If 
                        this.state.modalVisible &&
                        <ModalCotainer>
                            <Modal
                                handleClick= {this.handleCloseModal}
                            >
                                <h1>Esto es un Portal</h1>
                            </Modal>
                        </ModalCotainer>
                    }
                </HomeLayout>
            </div>
        )
    }
}

export default Home;