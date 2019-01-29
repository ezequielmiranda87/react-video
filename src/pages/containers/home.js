import React, {Component} from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalCotainer from '../../widgets/container/modal'


class Home extends Component{
    render(){
        return(
            <div>
                <HomeLayout>
                    <Related/>
                    <Categories categories={this.props.data.categories}/>
                    <ModalCotainer>
                        <h1>Esto es un modal</h1>
                    </ModalCotainer>
                </HomeLayout>
            </div>
        )
    }
}

export default Home;