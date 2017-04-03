import React, {Component} from 'react';
import '../conponent/home_page.css';

export default class TankuangTwo extends Component {
    constructor(props) {
        super(props);
        this.pushMask=this.pushMask.bind(this);
    }

    render() {
        return (
            <div className="zhezhao"  style={{display:this.props.flag==false?"none":"block"}}>
                <div className="zhezhaobg">
                    <div className="nonedivss">
                        <div className="tankuangss">
                            <h2>班级基本信息</h2>
                        </div>
                        <div className="juzhongss">
                            <div className="juleftss">
                                <div className="juneiss">姓名</div>
                                <div className="juneiss">班级</div>
                                <div className="juneiss">学号</div>
                                <div className="juneiss">性别</div>
                                <div className="juneiss">身份证号</div>
                                <input type="button" className="zuobtnss" defaultValue="取消"onClick={this.props.cancelMask}/>
                            </div>
                            <form action="" className="tanputss">
                                <input type="text" defaultValue={this.props.students.sname} ref="names"/>
                                <input type="text" defaultValue={this.props.students.sno}/>
                                <input type="text" defaultValue="15000339"/>
                                <input type="text" defaultValue={this.props.students.sex==1?"女":"男"}/>
                                <input type="text" defaultValue="410928199706230000"/>
                                <input type="button" className="youbtnss" defaultValue="确定" onClick={this.pushMask}/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    pushMask(){
        let obj={
            "id": 1,
            "pid": 1,
            "sname": "张壮壮",
            "sex": "1",
            "identity": "123",
            "sno": "160201",
            "init": 100000,
            "score": 10425,
            "status": "1",
            "createTime": null,
            "updateTime": "2017-03-05 17:36:33",
            "market": "鲁东市场部",
            "pic": null,
            "beginsDate": null,
            "term": "一年",
            "birthday": "123"
        };
        obj.sname=this.refs.names.value;
        this.props.students.push(obj);
        // console.log(this.props.students);
        this.props.cancelMask(false);
    }

}
