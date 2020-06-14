import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Header from '../HeaderComponent/Header';
import Main from '../MainComponent/Main';
import Projects from '../ProjectsComponent/Projects';
import Footer from '../FooterComponent/Footer';

const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;

const originalColors = ['#0099cc', '#3CF', '#3CF'];

const App = () => {
  const [sectionsColor] = useState([...originalColors]);
  const [fullpages] = useState([
    {
      component: <Main />
    },
    {
      component: <Projects />
    },
    {
      component: <Footer />
    }
  ]);

  const onLeave = (origin, destination, direction) => {
    console.log('onLeave', { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }

  return (
      <div>
        <Header />
        <ReactFullpage
          debug /* Debug logging */

          licenseKey={process.env.REACT_APP_FULLPAGE_LICENSE_KEY}

          // fullpage options
          navigation
          navigationPosition={'left'}
          fitToSection={true}
          fixedElements={'#header, .footer'}
          sectionSelector={SECTION_SEL}
          onLeave={onLeave}
          sectionsColor={sectionsColor}

          render={comp => (
            <ReactFullpage.Wrapper>
              {fullpages.map(({ component }, i) => (
                <div key={i} className={SEL}>
                  {component}
                </div>
              ))}
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
  );
}

export default App;