import {changeStyle} from '../utils/util';

module.exports={
    __toggleTheAlert(obj){
        let toggleCondition=obj && !obj.type;
        let alert =this.data.alert || {};
        if(toggleCondition) Object.assign(alert,obj);

        alert.style=changeStyle(alert.style,{
            visibility:toggleCondition? 'visible':'hidden',
            opacity:toggleCondition? 1:0
        });

        alert.modal={style:''};
        alert.modal.style=changeStyle(alert.modal.style,{
            visibility:toggleCondition? 'visible':'hidden',
            opacity:toggleCondition? 0.3:0
        });
        this.setData({alert})
    },
    __cancel(){
        this.__toggleTheAlert();
        let {cancel} =this.data.alert;
        cancel && cancel();
    },
    __confirm(){
        this.__toggleTheAlert();
        let {confirm} =this.data.alert;
        confirm && confirm();
    }
};