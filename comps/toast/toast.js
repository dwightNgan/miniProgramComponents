import {changeStyle} from '../../utils/util'

module.exports={
    toast(text){
        let toast={
            text,
            style:changeStyle('',{opacity:0.8,visibility:'visible'})
        };
        this.setData({toast});
        setTimeout(()=>{
            toast.style=changeStyle(toast.style,{opacity:0,visibility:'hidden'});
            this.setData({toast})
        },2000);
    }
};