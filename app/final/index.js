import React from 'react';
import Route from './route';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import './index.less';

ReactDOM.render(
        <Route />,
    document.getElementById('root')
);

/*if (module.hot) {
    module.hot.accept('./Root', () => {
        const NewRoot = require('./Root').default;
        render(
            <AppContainer>
                <NewRoot />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}*/
