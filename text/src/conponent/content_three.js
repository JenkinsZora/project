import React, {Component} from 'react';
import './home_page.css';
import Title from '../conponent/title'
import Seedetails from '../norepeat/see_details'
import SalaryTwo from '../norepeat/salary_two'
import SalaryTwoTwo from '../norepeat/salary_twotwo'
import SchoolTerm from '../norepeat/school-term'
import TeacherTwo from '../norepeat/teacher_two'
import Score from './score'
import today from './img/today.png';
import teacher2 from './img/teacher_23.png';
export default class ContentThree extends Component {
    constructor(props) {
        super(props);
        this.changedel = this.changedel.bind(this);
        this.state = {
            record: {
                "data": [{
                    "id": 380,
                    "sid": 51,
                    "sname": null,
                    "time": "2017-03-23 09:44:42",
                    "year": 2017,
                    "month": 3,
                    "day": 22,
                    "week": 2,
                    "des": "学生会",
                    "operate": 300
                }, {
                    "id": 379,
                    "sid": 51,
                    "sname": null,
                    "time": "2017-03-22 09:44:40",
                    "year": 2017,
                    "month": 3,
                    "day": 22,
                    "week": 2,
                    "des": "班委",
                    "operate": 500
                }, {
                    "id": 378,
                    "sid": 51,
                    "sname": null,
                    "time": "2017-03-22 09:44:37",
                    "year": 2016,
                    "month": 2,
                    "day": 22,
                    "week": 2,
                    "des": "三好生",
                    "operate": 500
                }, {
                    "id": 377,
                    "sid": 51,
                    "sname": null,
                    "time": "2017-01-11 09:44:34",
                    "year": 2017,
                    "month": 1,
                    "day": 11,
                    "week": 2,
                    "des": "学生会",
                    "operate": 300
                }, {
                    "id": 376,
                    "sid": 51,
                    "sname": null,
                    "time": "2017-03-06 08:38:47",
                    "year": 2017,
                    "month": 3,
                    "day": 6,
                    "week": 2,
                    "des": "请假5天",
                    "operate": -100
                }, {
                    "id": 375,
                    "sid": 51,
                    "sname": null,
                    "time": "2017-03-07 08:38:44",
                    "year": 2017,
                    "month": 3,
                    "day": 7,
                    "week": 2,
                    "des": "不完成作业",
                    "operate": -120
                }, {
                    "id": 374,
                    "sid": 51,
                    "sname": null,
                    "time": "2017-03-07 08:38:40",
                    "year": 2017,
                    "month": 3,
                    "day": 7,
                    "week": 2,
                    "des": "演讲比赛",
                    "operate": 500
                }, {
                    "id": 373,
                    "sid": 51,
                    "sname": null,
                    "time": "2017-03-21 08:38:39",
                    "year": 2017,
                    "month": 3,
                    "day": 21,
                    "week": 2,
                    "des": "生活",
                    "operate": 100
                }, {
                    "id": 372,
                    "sid": 51,
                    "sname": null,
                    "time": "2017-03-21 08:38:37",
                    "year": 2017,
                    "month": 3,
                    "day": 21,
                    "week": 2,
                    "des": "三好生",
                    "operate": 500
                }, {
                    "id": 371,
                    "sid": 51,
                    "sname": null,
                    "time": "2017-03-21 08:38:35",
                    "year": 2017,
                    "month": 3,
                    "day": 21,
                    "week": 2,
                    "des": "点多",
                    "operate": 500
                }, {
                    "id": 356,
                    "sid": 51,
                    "sname": null,
                    "time": "2017-03-15 08:55:45",
                    "year": 2017,
                    "month": 3,
                    "day": 15,
                    "week": 3,
                    "des": "三好学生",
                    "operate": 5
                }]
            },
            oparateRecord: false
        }
    }

    componentWillMount() {

        // if (!this.state.oparateRecord) {
        const data = this.state.record.data;

        let todayArr = [];
        let historyObj = {};
        let order = [];

        let todayTime = new Date();
        //生成今天八位十进制字符备用
        todayTime = `${todayTime.getYear() + 1900}${(todayTime.getMonth() + 1).toString().length == 1 ? "0" + (todayTime.getMonth() + 1) : (todayTime.getMonth() + 1)}${todayTime.getDate().toString().length == 1 ? "0" + todayTime.getDate() : todayTime.getDate()}`;
        data.map((obj, index)=> {
            let token;
            token = obj.time.slice(0, 10).replace(/-/g, "");
            //向每一个对象中加入token字段
            obj.token = token;
            //向顺序数组中加入每一个token
            order.push(token);
        });

        order = [...new Set(order)];
        order = order.sort((a, b)=>b - a);
        if (order[0] == todayTime) {
            order.splice(0, 1)
        }
        order.forEach((token, index)=> {
            historyObj[token] = []
        });
        // console.log(order);
        // console.log(historyObj);
        data.forEach((obj, index)=> {
            if (obj.token == todayTime) {
                todayArr.push(obj);
            } else {
                historyObj[obj.token].push(obj)
            }
        });

        this.setState({
            oparateRecord: {
                todayArr,
                historyObj,
                order
            }
        })


    }

    render() {
        // console.log(this.props.add);
        var add=2+this.props.add*2;
        var order=[...this.state.oparateRecord.order];
        order=order.splice(0,add);
        console.log(this.state.oparateRecord);
        return (
            <div className="middle">
                <div className="middle-inner">
                    <Seedetails
                        message={this.props.student}
                    />
                    <Title name="今日奖罚记录" color="#eed63b" imga={today}/>
                    <ul className="bonus-items">
                        <p>{`${new Date().getYear() + 1900}年${(new Date().getMonth() + 1).toString().length == 1 ? "0" + (new Date().getMonth() + 1) : (new Date().getMonth() + 1)}月${new Date().getDate().toString().length == 1 ? "0" + new Date().getDate() : new Date().getDate()}日`}</p>
                        {this.state.oparateRecord.todayArr.length==0?"无记录":this.state.oparateRecord.todayArr
                                .map((obj, index)=> {
                                    return <SalaryTwo key={index}
                                                      obj={obj}
                                               changedel={this.changedel}

                                            />

                        })

                        }
                    </ul>
                    <Score score={this.props.student.score}
                           colors="#fff"
                           namea=""
                           topa="历史平均薪资"
                    />
                    <SchoolTerm/>
                    <Title name="班级教师" color="#eed63b" imga={teacher2}/>
                    <TeacherTwo/>
                    <Title name="历史奖罚记录" color="#eed63b" imga={today}/>
                    <div className="bonus-jiajian">
                        {
                           order.map((token, index)=> {
                                return <div className="bonustime" key={index}
                                >
                                    <p>{`${token.slice(0, 4)}年${token.slice(4, 6)}月${token.slice(6, 8)}日`}</p>
                                    {
                                        this.state.oparateRecord.historyObj[token].map((obj, index2)=> {
                                            return (<SalaryTwoTwo key={index2}
                                                                  obj={obj}
                                            />)
                                        })
                                    }
                                </div>


                            })
                        }
                    </div>
                </div>
            </div>
        );
    }


    changedel(obj,index) {
        console.log(index);
        this.setState({
            record:obj
        });
        this.state.oparateRecord.todayArr.splice(index,1)
    }

}
