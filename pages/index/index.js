//index.js
import {__toggleTheAlert, __cancel, __confirm} from  '../../comps/alert';
import {toast} from  '../../comps/toast';
let app = getApp();
let pageObj = {
    onLoad () {
    },
    showTheAlert(){
        this.__toggleTheAlert({
            title: '标题',
            content: 'lalalala',
            cancel(){
                // console.log('cancel')
            },
            confirm(){
                // console.log('confirm')
            }
        });
    },
    test(){
        this.toast('i am a toast')
    },
    __toggleTheAlert,
    __cancel,
    __confirm,
    toast
};

Page(pageObj);
