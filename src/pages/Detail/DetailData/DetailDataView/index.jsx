import React, {Component} from 'react';
import DetailHeader from '../../../../components/common/SimpleHeader';
import Swiper from '../../../../components/common/Swiper';
import Tabs from '../../../../components/common/Tabs';
import CommentView from '../CommentView';
import StoreBuy from '../StoreBuy';
import './style.less';

class DetailDataView extends Component{
    render(){
        let house = this.props.houseData;
        return(
            <div className="detail-info">
              <DetailHeader title="详情页" history={this.props.history}/>
              <Swiper banners={house.imgs}/>
              <Tabs>
                  <tab tabname="房屋信息">
                      <h3>{house.title}</h3>
                      <div className="box">
                          <ul>
                              <li>
                                  <span>{house.price}/月</span>
                                  <p>租金</p>
                              </li>
                              <li>
                                  <span>{house.info.type}/月</span>
                                  <p>房型</p>
                              </li>
                              <li>
                                 <span>{house.houseType}</span>
                                  <p>面积</p>
                              </li>
                          </ul>
                      </div>
                      <div className="info">
                            <div className="info-list">
                                <p>楼层：{house.info.level}</p>
                                <p>装修：{house.info.style}</p>
                            </div>
                            <div className="info-list">
                                <p>类型：{house.info.type}</p>
                                <p>朝向：{house.info.orientation}</p>
                            </div>
                            <div className="info-list">
                                <p>年代：{house.info.years}</p>
                            </div>
                        </div>
                        <StoreBuy houseid={this.props.houseid}/>
                  </tab>
                  <tab tabname="房屋评价">
                    <CommentView comments={this.props.comments}/>
                  </tab>
              </Tabs>
            </div>
        )
    }
}

export default DetailDataView;