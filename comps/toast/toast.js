import {objToCssStr} from '../../utils/util'

module.exports={
    toast(text){
        let style=objToCssStr({opacity:0.8,});
        this.setData({
            toast:{text, style}
        });
        setTimeout(()=>{
            let {toast}=this.data;
            toast.style=objToCssStr({opacity:0});
            this.setData({toast})
        },2000)
    }
};