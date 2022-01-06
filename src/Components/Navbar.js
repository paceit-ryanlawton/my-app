import { Form } from '@progress/kendo-react-form';
import { render } from '@testing-library/react';
import React, {Component} from 'react';
import { useState } from 'react';
import Drawe from './Drawe';
import {
    AppBar,
    AppBarSection,
    AppBarSpacer,
    Avatar,
  } from "@progress/kendo-react-layout";

  const NavBar = ({contactData}) =>{

const [expanded, setExpanded] = useState(true);

const handleClick = () => {
    setExpanded((prevState) => !prevState);
  }

    return(
       <div>
        <AppBar>
        <AppBarSection>
          <button onClick={handleClick} className="k-button k-button-clear">
            <span className="k-icon k-i-menu" />
            
          </button>
        </AppBarSection>

        <AppBarSpacer
          style={{
            width: 4,
          }}
        />

        <AppBarSection>
          <h1 className="title">Mock Design</h1>
        </AppBarSection>

        <AppBarSpacer
          style={{
            width: 32,
          }}
        />

        <AppBarSection>
          <ul>
            <li>
              <span>What's New</span>
            </li>
            <li>
              <span>About</span>
            </li>
            <li>
              <span>Contacts</span>
            </li>
          </ul>
        </AppBarSection>

        <AppBarSpacer />

        <AppBarSection>
          <span className="k-appbar-separator" />
        </AppBarSection>

        <AppBarSection>
          <Avatar shape="circle" type="image">
            
          </Avatar>
        </AppBarSection>
      </AppBar>
      <Drawe expanded={expanded} handleClick={handleClick} contactData={contactData}/>
      </div>

    )
}

export default NavBar;