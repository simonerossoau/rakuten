import * as React from 'react';

import { connect } from 'react-redux';

import IAppState from './IAppState';
import SectionModel, { ISectionModel } from "../models/sectionModel";

//import components
import LogoItem from './Nav/logo'
import Section from '../components/Section/Section';

import '../style/style.css';
import MenuItem from './Nav/menu';
import MainSlider from './MainSlider/MainSlider';
import Banners from './Banners/Banners';

import * as c from '../models/constants'

class App extends React.Component<{}, IAppState> {

  constructor(props) {
    super(props)

    this.state = {
      sliderData: undefined,
      bannersData: undefined,
      sectionData: c.defaultSection,
    }
  }

  UNSAFE_componentWillMount() {

    //API call for slider and banners
    fetch(c.proxyUrl + c.SliderPath)
      .then((response) => {
        return response.json();
      })
      .then((videos) => {
        let sliderData = videos.data.banner_lists[0].data.banners;
        let bannersData = videos.data.banner_lists[1].data.banners;

        return this.setState({
          sliderData: sliderData,
          bannersData: bannersData
        })

      }).catch(function (err) {
        console.error(err);
      });

    //API call for gardens
    fetch(c.proxyUrl + c.basePath + c.categories[0] + c.tailPath)
      .then((response) => {
        return response.json();
      })
      .then((videos) => {
        let dataVideos: SectionModel = SectionModel.apiToModel(videos.data)
        this.setState({ sectionData: dataVideos })
      }).catch(function (err) {
        console.error(err);
      });

  }

  render() {
    return (
      <div>
        <div className="nav">
          <div className="nav__items">
            <LogoItem />
            <MenuItem />
          </div>
        </div>
        <div className="contents">
          <MainSlider sliderData={this.state.sliderData} />
          <Banners bannersData={this.state.bannersData} />
          <Section sectionData={this.state.sectionData} />
        </div>
        <div className="footer">
          <div className="footer-info"></div>
          <div className="footer-mini"></div>
        </div>
      </div>
    );
  }
}

//Export component
export default App;