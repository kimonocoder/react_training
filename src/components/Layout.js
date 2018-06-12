import React from 'react';
import Aux from './../hoc/Aux';
import BurgerBuilder from './../containers/BurgerBuilder';

const layout = (props) => (
        <Aux>
            <p>The default static layout</p>
            <main>
                <BurgerBuilder></BurgerBuilder>
            </main>
        </Aux>
    );

export default layout;