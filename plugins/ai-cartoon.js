(function(_0x218d4a,_0x44aa83){function _0x27687c(_0x4474c5,_0x579156){return _0x3350(_0x579156-0x174,_0x4474c5);}const _0x29adeb=_0x218d4a();while(!![]){try{const _0x253e4a=-parseInt(_0x27687c(0x1f3,0x1de))/0x1*(-parseInt(_0x27687c(0x20d,0x202))/0x2)+-parseInt(_0x27687c(0x1ec,0x1f5))/0x3*(-parseInt(_0x27687c(0x222,0x206))/0x4)+-parseInt(_0x27687c(0x228,0x210))/0x5*(parseInt(_0x27687c(0x1ee,0x1f4))/0x6)+-parseInt(_0x27687c(0x1ee,0x1e7))/0x7*(-parseInt(_0x27687c(0x1ed,0x1f0))/0x8)+-parseInt(_0x27687c(0x1d8,0x1e1))/0x9+-parseInt(_0x27687c(0x224,0x212))/0xa*(parseInt(_0x27687c(0x217,0x205))/0xb)+parseInt(_0x27687c(0x217,0x207))/0xc;if(_0x253e4a===_0x44aa83)break;else _0x29adeb['push'](_0x29adeb['shift']());}catch(_0x33d0de){_0x29adeb['push'](_0x29adeb['shift']());}}}(_0xb5b9,0x4d2dc));import _0x348fe3 from'axios';import _0x3fcc0e from'jimp';import _0x32a6ef from'form-data';import{Sticker,createSticker,StickerTypes}from'wa-sticker-formatter';async function GetBuffer(_0x43d361){return new Promise(async(_0x5a2e55,_0x9f84cc)=>{let _0x2db17a;function _0x4397c2(_0x2a608e,_0x49ad05){return _0x3350(_0x2a608e- -0x3b4,_0x49ad05);}await _0x3fcc0e[_0x4397c2(-0x314,-0x318)](_0x43d361)['then'](_0x1c2a7c=>{function _0x53e8ad(_0x3df223,_0x854def){return _0x4397c2(_0x854def-0x194,_0x3df223);}_0x1c2a7c[_0x53e8ad(-0x1a1,-0x1a6)](_0x1c2a7c[_0x53e8ad(-0x19d,-0x181)],function(_0x14864d,_0x15fe9d){_0x2db17a=_0x15fe9d;});})[_0x4397c2(-0x33f,-0x335)](_0x9f84cc);if(!Buffer[_0x4397c2(-0x32f,-0x33c)](_0x2db17a))_0x9f84cc(![]);_0x5a2e55(_0x2db17a);});}function GetType(_0x4a1373){return new Promise((_0x54bee3,_0x77686a)=>{let _0x834393,_0x5bc832;Buffer['isBuffer'](_0x4a1373)?(_0x834393=new Buffer[(_0x329197(0x3e5,0x3e1))](_0x4a1373)[_0x329197(0x3f1,0x3f8)]('base64'),_0x5bc832=0x0):_0x5bc832=0x1;function _0x329197(_0x313091,_0x4a315e){return _0x3350(_0x313091-0x35b,_0x4a315e);}_0x54bee3({'status':_0x5bc832,'result':_0x834393});});}async function Cartoon(_0x4ed1dc){return new Promise(async(_0x4fa84d,_0x5a47be)=>{let _0x129936;function _0x122f9b(_0x4a2164,_0x433a57){return _0x3350(_0x4a2164- -0x1cc,_0x433a57);}try{let _0x4c6085=await GetBuffer(_0x4ed1dc),_0x5014b9=await GetType(_0x4c6085);await _0x348fe3['request']({'url':_0x122f9b(-0x15c,-0x150),'method':_0x122f9b(-0x13d,-0x13e),'headers':{'connection':_0x122f9b(-0x164,-0x166),'accept':_0x122f9b(-0x145,-0x13b),'content-type':'application/json'},'data':JSON[_0x122f9b(-0x149,-0x15a)]({'type':0xb,'base64Image':_0x5014b9[_0x122f9b(-0x154,-0x16a)]})})[_0x122f9b(-0x158,-0x166)](async({data:_0x325be4})=>{let _0x51c5ea=_0x325be4[_0x4f647a(-0x54,-0x49)][_0x4f647a(-0x63,-0x5f)],_0x36d0f9=_0x325be4['data'][_0x4f647a(-0x69,-0x6a)];function _0x4f647a(_0x24fa58,_0x4f99da){return _0x122f9b(_0x4f99da-0xeb,_0x24fa58);}while(!![]){let _0x1fc896=await _0x348fe3['request']({'url':_0x4f647a(-0x8d,-0x78),'method':'POST','headers':{'connection':_0x4f647a(-0x6e,-0x79),'accept':_0x4f647a(-0x41,-0x5a),'content-type':_0x4f647a(-0x5e,-0x54)},'data':JSON['stringify']({'code':_0x51c5ea,'isMember':0x0,'type':_0x36d0f9})}),_0x2c69d0=_0x1fc896[_0x4f647a(-0x35,-0x49)][_0x4f647a(-0x4c,-0x49)]['status'];if(_0x2c69d0==_0x4f647a(-0x4e,-0x62)){_0x129936={'message':_0x4f647a(-0x4f,-0x62),'download':{'full':_0x1fc896[_0x4f647a(-0x45,-0x49)][_0x4f647a(-0x52,-0x49)][_0x4f647a(-0x5f,-0x5d)][0x0],'head':_0x1fc896[_0x4f647a(-0x63,-0x49)]['data'][_0x4f647a(-0x77,-0x5d)][0x1]}};break;}else{if(_0x2c69d0==_0x4f647a(-0x64,-0x75)){_0x129936={'message':'noface'};break;}}}});}catch(_0x2d56eb){_0x129936=![];}finally{_0x129936==![]&&_0x5a47be(![]),_0x4fa84d(_0x129936);}});}function _0x3350(_0x429eee,_0x5a6e68){const _0xb5b9c8=_0xb5b9();return _0x3350=function(_0x33501f,_0x593164){_0x33501f=_0x33501f-0x68;let _0x5f1035=_0xb5b9c8[_0x33501f];return _0x5f1035;},_0x3350(_0x429eee,_0x5a6e68);}function randomId(){function _0x1caad6(_0x6f11a9,_0x53e286){return _0x3350(_0x6f11a9- -0x11c,_0x53e286);}return Math[_0x1caad6(-0xae,-0xa9)](0x186a0+Math[_0x1caad6(-0x82,-0x71)]()*0xdbba0);}let handler=async(_0x5bf08c,{conn:_0x8ff165,usedPrefix:_0x4ee84e,command:_0x1869e6})=>{_0x8ff165[_0x5535cf(-0x2eb,-0x2ec)]=_0x8ff165[_0x5535cf(-0x2eb,-0x2de)]?_0x8ff165[_0x5535cf(-0x2eb,-0x2d9)]:{};if(_0x5bf08c['sender']in _0x8ff165['cartoon'])throw'Masih\x20Ada\x20Proses\x20Yang\x20Belum\x20Selesai\x20Kak,\x20Silahkan\x20Tunggu\x20Sampai\x20Selesai\x20Yah\x20>//<';let _0x18f964=_0x5bf08c[_0x5535cf(-0x2f5,-0x307)]?_0x5bf08c[_0x5535cf(-0x2f5,-0x30d)]:_0x5bf08c,_0x485d67=(_0x18f964[_0x5535cf(-0x2d8,-0x2e2)]||_0x18f964)[_0x5535cf(-0x2d9,-0x2f5)]||_0x18f964['mediaType']||'';if(!_0x485d67)throw _0x5535cf(-0x2e7,-0x2eb);if(!/image\/(jpe?g|png)/[_0x5535cf(-0x2c7,-0x2db)](_0x485d67))throw _0x5535cf(-0x2de,-0x2c3)+_0x485d67+_0x5535cf(-0x2dc,-0x2d3);else _0x8ff165[_0x5535cf(-0x2eb,-0x2d9)][_0x5bf08c['sender']]=!![];function _0x5535cf(_0x1fe077,_0x5b3377){return _0x3350(_0x1fe077- -0x364,_0x5b3377);}_0x5bf08c[_0x5535cf(-0x2e9,-0x2f4)](_0x5535cf(-0x2cf,-0x2e6));let _0x2de2b4=await _0x18f964[_0x5535cf(-0x2db,-0x2f4)]?.();try{Cartoon(_0x2de2b4)[_0x5535cf(-0x2f0,-0x2eb)](async _0x3ab9e1=>{function _0xafb302(_0x8b4bde,_0x3cd25f){return _0x5535cf(_0x3cd25f-0x3d9,_0x8b4bde);}_0x3ab9e1['message']==_0xafb302(0xe2,0xf4)?await _0x8ff165[_0xafb302(0x111,0x10e)](_0x5bf08c[_0xafb302(0xf1,0xf3)],_0x3ab9e1[_0xafb302(0x119,0xfe)]['full'],'',_0xafb302(0x10a,0x10c),_0x5bf08c):_0x5bf08c['reply'](_0xafb302(0x118,0x105));});}catch{_0x5bf08c[_0x5535cf(-0x2e9,-0x2ea)](_0x5535cf(-0x2f9,-0x2e1));}finally{_0x8ff165['cartoon'][_0x5bf08c[_0x5535cf(-0x2f3,-0x2e5)]]?delete _0x8ff165[_0x5535cf(-0x2eb,-0x2ec)][_0x5bf08c[_0x5535cf(-0x2f3,-0x2db)]]:![];}};handler[_0x296062(-0x2ed,-0x2f6)]=[_0x296062(-0x304,-0x31f)],handler['tags']=['ai'],handler[_0x296062(-0x2e6,-0x2fd)]=[_0x296062(-0x304,-0x31f)];function _0x296062(_0x5b8d80,_0x320400){return _0x3350(_0x320400- -0x391,_0x5b8d80);}handler[_0x296062(-0x32f,-0x31b)]=!![];export default handler;function _0xb5b9(){const _0x58524c=['8171364kASvjq','command','Proses\x20Kak...','toString','Sudah\x20Jadi\x20Kak\x20>//<','data','sendFile','random','help','3815sDbBrZ','test','24070dEoJHL','_originalMime','read','keep-alive','https://access1.imglarger.com/PhoAi/CheckStatus','2aIhqQH','Proses\x20gagal\x20:(','noface','2760480eUNgNj','floor','quoted','https://access1.imglarger.com/PhoAi/Upload','sender','tocartoon','870163ZVhaAT','then','catch','premium','type','result','cartoon','getBuffer','reply','8mjgYyK','Fotonya\x20Mana\x20Kak?','chat','success','2766TxcuPp','4863jzekiH','code','stringify','downloadUrls','isBuffer','Mime\x20','application/json,\x20text/plain,\x20*/*','\x20tidak\x20support','download','from','mimetype','msg','application/json','599106nasjUC','POST','Maaf\x20Kak\x20Di\x20Fotonya\x20Tidak\x20Terdeteksi\x20Wajah.','2453LKJEpS','264tDuNGZ'];_0xb5b9=function(){return _0x58524c;};return _0xb5b9();}