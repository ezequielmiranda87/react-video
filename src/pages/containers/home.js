import React, {Component} from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';

class Home extends Component{
    render(){
        return(
            <div>
                <HomeLayout>
                    <Related/>
                    <Categories categories={this.props.data.categories}/>
                </HomeLayout>
            </div>
        )
    }
}

export default Home;