import React from 'react';
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';

const MainLayout = ({children}) =>
    <div className='main-layout'>
      <header>
        <h1>Level UP Voting</h1>
        <LoginButtons />
      </header>
      {children}
    </div>

export default MainLayout;
