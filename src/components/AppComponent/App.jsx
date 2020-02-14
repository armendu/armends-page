import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react';
import Header from '../HeaderComponent/Header';
import Main from '../MainComponent/Main';
import Footer from '../FooterComponent/Footer';

const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;

const originalColors = ['#0099cc', '#0099cc', '#3CF'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsColor: [...originalColors],
      fullpages: [
        {
          component: <Main />
        },
        {
          component: '1'
        },
        {
          component: <Footer />
        }
      ]
    };
  }

  onLeave(origin, destination, direction) {
    console.log('onLeave', { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }

  render() {
    const { fullpages, sectionsColor } = this.state;

    if (!fullpages.length) {
      return null;
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
          onLeave={this.onLeave.bind(this)}
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
}

export default App;