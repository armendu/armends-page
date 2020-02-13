import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react';
import Menu from '../MenuComponent/Menu';
import Main from '../MainComponent/Main';
import Footer from '../FooterComponent/Footer';

const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;

// const originalColors = ['#0099cc', '#0798ec', '#0abde3'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullpages: [
        {
          src: <Main />
        },
        {
          src: '1'
        },
        {
          src: <Footer />
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
    const { fullpages } = this.state;

    if (!fullpages.length) {
      return null;
    }

    return (
      <div className="App">
        <Menu />
        <ReactFullpage
          debug /* Debug logging */

          licenseKey={''}

          // fullpage options
          navigation
          navigationPosition={'left'}
          fitToSection={true}
          fixedElements={'#header, .footer'}
          sectionSelector={SECTION_SEL}
          onLeave={this.onLeave.bind(this)}
          sectionsColor={this.state.sectionsColor}
          
          render={comp => (
            <ReactFullpage.Wrapper>
              {fullpages.map(({ src }) => (
                <div key={src} className={SEL}>
                  <h1>{src}</h1>
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