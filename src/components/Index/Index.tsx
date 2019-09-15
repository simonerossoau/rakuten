import * as React from 'react';

import IIndexState from './IIndexState';

/**
 * components
 */
import MainSlider from '../../components/MainSlider/MainSlider';
import Banners from '../../components/Banners/Banners';
import Section from '../../components/Section/Section';

/**
 * models
 */
import SectionModel from '../../models/sectionModel';
import * as c from '../../models/constants'

export default class Index extends React.Component<{}, IIndexState> {

    constructor(props) {
        super(props)

        this.state = {
            sliderData: undefined,
            bannersData: undefined,
            sectionData: c.defaultSection,
            sectionData1: c.defaultSection,
            sectionData2: c.defaultSection
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
        /*     c.categories.forEach(element => {
        
              fetch(c.proxyUrl + c.basePath + element+ c.tailPath)
                .then((response) => {
                  return response.json();
                })
                .then((videos) => {
                  let dataVideos: SectionModel = SectionModel.apiToModel(videos.data)
                  let auxGardenList = this.state.sectionData;
                  auxGardenList.push(dataVideos);
                  this.setState({ sectionData: auxGardenList })
                }).catch(function (err) {
                  console.error(err);
                });
            }); */

        fetch(c.proxyUrl + c.basePath + "lists/" + c.categories[0] + c.tailPath)
            .then((response) => {
                return response.json();
            })
            .then((videos) => {
                let dataVideos: SectionModel = SectionModel.apiToModel(videos.data)
                this.setState({ sectionData: dataVideos })
            }).catch(function (err) {
                console.error(err);
            });

        fetch(c.proxyUrl + c.basePath + "lists/" + c.categories[1] + c.tailPath)
            .then((response) => {
                return response.json();
            })
            .then((videos) => {
                let dataVideos: SectionModel = SectionModel.apiToModel(videos.data)
                this.setState({ sectionData1: dataVideos })
            }).catch(function (err) {
                console.error(err);
            });

        fetch(c.proxyUrl + c.basePath + "lists/" + c.categories[2] + c.tailPath)
            .then((response) => {
                return response.json();
            })
            .then((videos) => {
                let dataVideos: SectionModel = SectionModel.apiToModel(videos.data)
                this.setState({ sectionData2: dataVideos })
            }).catch(function (err) {
                console.error(err);
            });

    }

    render() {
        return (
            <div className="contents">
                <MainSlider sliderData={this.state.sliderData} />
                <Banners bannersData={this.state.bannersData} />
                {/* {
            this.state.sectionData.map((item, index) => {
              <Section key={index} sectionData={item} />
            })
          } */}
                <Section sectionData={this.state.sectionData} />
                <Section sectionData={this.state.sectionData1} />
                <Section sectionData={this.state.sectionData2} />
            </div>
        )
    }
}