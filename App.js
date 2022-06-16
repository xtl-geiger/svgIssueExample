/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {SvgUri, SvgXml} from "react-native-svg";

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const xmlSvg = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->
<svg
    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:ns1="http://sozi.baierouge.fr"
    xmlns:cc="http://creativecommons.org/ns#"
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
    id="svg2"
    sodipodi:docname="Leone.svg"
    viewBox="0 0 106.3 88.583"
    sodipodi:version="0.32"
    version="1.0"
    inkscape:output_extension="org.inkscape.output.svg.inkscape"
    inkscape:version="0.46"
  >
  <sodipodi:namedview
      id="base"
      bordercolor="#666666"
      inkscape:pageshadow="2"
      inkscape:window-y="28"
      pagecolor="#ffffff"
      inkscape:window-height="944"
      inkscape:zoom="2.6756605"
      inkscape:window-x="0"
      showgrid="false"
      borderopacity="1.0"
      inkscape:current-layer="layer1"
      inkscape:cx="6.1097864"
      inkscape:cy="46.47492"
      units="cm"
      inkscape:window-width="1279"
      inkscape:pageopacity="0.0"
      inkscape:document-units="px"
  />
  <g
      id="layer1"
      inkscape:label="Livello 1"
      inkscape:groupmode="layer"
    >
    <g
        id="g3156"
      >
      <path
          id="path4510"
          sodipodi:nodetypes="ccccccccccccccccccccccccccccccccccsscccsccscscscccsssccccccccscsccccccccccssccccccccccccccccc"
          style="fill-rule:evenodd;stroke:#000000;stroke-width:1.0426px;fill:#000000"
          d="m101.23 24.143l2.72-2.638 0.4-3.182-3.73-1.472-6.097-0.821 1.426-5.929-6.106-5.4314-3.793 3.2775 0.605-4.4318-3.347-1.2118-3.739 3.7644-1.443-4.1326-1.905-0.2508-2.044 0.2022-1.854 5.2058-2.945-5.21-2.309 0.4864-2.4 1.0643 1.334 7.4398-6.944-3.2986-2.121 1.5779-1.209 2.1097 6.733 7.201-9.965-3.125-1.789 1.787-0.563 2.632 9.435 4.228-10.923 1.505-0.583 2.312-0.159 1.875 11.223 0.872-11.424 3.29-0.195 3.271-4.16 5.886c-4.597 5.556-11.327 7.66-16.777 9.718-2.735 1.033-7.075 0.397-9.567 1.917-2.698 1.644-6.517 8.212-6.517 8.212l-1.5252 9.993-1.8025-0.821s-0.0873-7.219 0.8319-10.13c1.3868-4.391 7.7648-13.277 7.7648-13.277 6.973-6.462 10.629-12.639 12.618-21.765 0.749-7.05-2.437-9.196-7.488-10.54-0.865-0.23-1.109-2.737-1.109-2.737s-5.387-2.244-7.765-1.917c-1.901 0.262-5.546 3.149-5.546 3.149s3.0819 4.621 4.16 5.338c1.811 1.205 5.546 0.137 5.546 0.137l3.605-1.232c4.775 1.695 4.667 3.376 4.714 7.392-1.111 6.45-5.558 13.02-11.37 19.026 0 0-7.7062 9.901-9.4281 14.784-1.4101 3.998-2.2622 9.621-1.5252 13.688 0.7535 4.158 3.5037 8.599 6.3781 12.593l43.815 0.17 1.664-4.687-1.387-3.285h-16.084c3.135-3.868 6.142-7.257 6.517-12.456-0.537-4.853-6.537-8.808-7.071-9.514l3.189-1.848s7.073 5.204 7.781 10.89c0.408 3.279-2.345 8.391-3.575 10.049 0 0 11.505-1.767 16.315-3.555 3.312-1.23 10.26-5.749 10.26-5.749l0.694 6.16 0.179 13.932 14.022-0.137 0.937-4.194c-0.928-4.846-3.918-3.681-7.961-4.713 0-0.548 1.142-8.858 1.142-8.858l2.634-7.802 13.727 5.065-0.138 5.064c1.381 4.244 3.491 3.646 5.273 3.149 1.66-0.466 2.52-4.297 2.63-5.065 0.08-0.606-2.91-8.487-2.91-8.487l-14.145-7.939 1.729-3.172-0.719-8.93 5.067 4.421 1.841-1.72-1.817-8.424 6.69-0.808 1.021-2.344-1.777-0.456-0.783-2.615-1.113 2.075-7.68-1.914 4.89-3.626 5.773-0.728 0.53 2.701 1.513-3.031z"
      />
      <path
          id="path2384"
          sodipodi:rx="3.6439602"
          sodipodi:ry="3.6439602"
          style="fill:#ffffff"
          sodipodi:type="arc"
          d="m123.89 16.358a3.644 3.644 0 1 1 -7.28 0 3.644 3.644 0 1 1 7.28 0z"
          transform="matrix(.69231 0 0 .69231 4.4849 4.8462)"
          sodipodi:cy="16.357512"
          sodipodi:cx="120.25069"
      />
    </g
    >
  </g
  >
  <metadata
    >
    <rdf:RDF
      >
      <cc:Work
        >
        <dc:format
          >image/svg+xml</dc:format
        >
        <dc:type
            rdf:resource="http://purl.org/dc/dcmitype/StillImage"
        />
        <cc:license
            rdf:resource="http://creativecommons.org/licenses/publicdomain/"
        />
        <dc:publisher
          >
          <cc:Agent
              rdf:about="http://openclipart.org/"
            >
            <dc:title
              >Openclipart</dc:title
            >
          </cc:Agent
          >
        </dc:publisher
        >
      </cc:Work
      >
      <cc:License
          rdf:about="http://creativecommons.org/licenses/publicdomain/"
        >
        <cc:permits
            rdf:resource="http://creativecommons.org/ns#Reproduction"
        />
        <cc:permits
            rdf:resource="http://creativecommons.org/ns#Distribution"
        />
        <cc:permits
            rdf:resource="http://creativecommons.org/ns#DerivativeWorks"
        />
      </cc:License
      >
    </rdf:RDF
    >
  </metadata
  >
</svg
>`;

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <SvgXml xml={xmlSvg} width="100%" height="100%" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
