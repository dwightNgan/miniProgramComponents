//index.js
//获取应用实例
import {toast} from  '../../comps/toast/toast'
let app = getApp();
let pageObj={
    data: {
    },
    onLoad () {
    },
    toast,
    showToast(){
        this.toast('lalalala')

    }
};

Page(pageObj);
