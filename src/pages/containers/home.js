import React, {Component} from 'react';
import HomeLayout from '../components/home-layout';
import Play from '../../icons/components/Play';
import Categories from '../../categories/components/categories';

class Home extends Component{
    render(){
        return(
            <div>
                <HomeLayout>
                    <Categories categories={this.props.data.categories}/>
                </HomeLayout>
            </div>
        )
    }
}

export default Home;