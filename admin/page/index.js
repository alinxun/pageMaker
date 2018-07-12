define([
    'Vue',
    './_forms',
    './_defaults',
    'text!./uis/ui_ad/_view',
    'text!./uis/ui_ad2/_view'

],function(
    Vue,
    _forms,
    _defaults,
    ui_ad_temp,
    ui_ad2_temp
){
    

    Vue.component('ui_ad',{
        template:ui_ad_temp,
        props:['data'],


    })
    Vue.component('ui_ad2',{
        template:ui_ad2_temp,
        props:['data']


    })
    window._app = new Vue({
        el:'#app',
        data:function(){
            return {
                select_ui:'ui_ad',
                listAddEl :'',
                view:[
                    {
                        name:'ui_ad',
                        data:{
                            a:'123'
                        }

                    },
                    {
                        name:'ui_ad2',
                        data:{
                            b:'3',
                            list:[1,2,3,4]
                        }

                    }
                ],
                current_index:1,
            }
        },
        
        computed:{
            current_form:function(){
                return this.view[this.current_index];
            } 
        },

        beforeCreate:function(){
            document.getElementById('forms').innerHTML = _forms;
        },

        methods:{
            add:function(){
                this.view.push(_defaults[this.select_ui]())
            },
            addEl:function(){
                this.current_form.data.list.push(this.listAddEl)
            }
        }

    });


})